#!/usr/bin/env node

/**
 * Markdown Content Extraction Script
 *
 * Processes markdown files in /src/content/ and extracts:
 * 1. [SUMMARY] or [INTRODUCTION] text → frontmatter `intro`
 * 2. [SLUG] Heading patterns → frontmatter `tableOfContents`
 * 3. Links under [SLUG] References or Online references → frontmatter `references`
 * 4. Links under [SLUG] Further Reading → frontmatter `sources`
 *
 * Also cleans up markdown body by removing:
 * - [PHOTO CAPTION], [TITLE], [SUMMARY], [BODY TEXT], [SLUG], [PHOTO], [INTRODUCTION], [RIGHT SIDEBAR]
 * - Converting [SLUG] Heading to ## Heading with slugified IDs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper: Slugify text (lowercase, hyphens, no special chars)
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_]+/g, '-')  // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Helper: Extract link from markdown patterns
// Patterns: "Title <url>", "Title. <url>", "*Title.* Description <url>"
function extractLink(line) {
  // Match: Text <url>
  const match = line.match(/(.*?)\s*<(https?:\/\/[^>]+)>/);
  if (!match) return null;

  let title = match[1].trim();
  const url = match[2].trim();

  // Remove leading bullets and asterisks
  title = title.replace(/^[-*]\s*/, '');

  // Remove italic markers (*text*)
  title = title.replace(/^\*(.+?)\*/, '$1');

  // Remove trailing period if present
  title = title.replace(/\.$/, '');

  // If there's description text after the title, extract just the title
  // Look for patterns like "Title. Description text"
  const titleMatch = title.match(/^([^.]+)/);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  return { title, url };
}

// Helper: Parse markdown file and extract structured data
function parseMarkdownFile(filePath) {
  console.log(`\n📄 Processing: ${path.relative(process.cwd(), filePath)}`);

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(fileContent);

  let content = parsed.content;
  const updates = {
    intro: null,
    tableOfContents: [],
    references: [],
    sources: []
  };

  // Extract [SUMMARY] or [INTRODUCTION] for intro
  // Matches: **\[SUMMARY\]** or **[SUMMARY]** with text until double newline or next bracketed tag
  const summaryMatch = content.match(/\*\*\\?\[SUMMARY\\?\]\*\*\s+(.+?)(?=\n\n|\*\*\\?\[|$)/s);
  const introMatch = content.match(/\*?\\?\[?INTRODUCTION\\?\]?\*?\s+(.+?)(?=\n\n|\*\*\\?\[|$)/s);

  if (summaryMatch) {
    updates.intro = summaryMatch[1].trim();
    console.log('  ✓ Extracted intro from [SUMMARY]');
  } else if (introMatch) {
    updates.intro = introMatch[1].trim();
    console.log('  ✓ Extracted intro from [INTRODUCTION]');
  }

  // Extract [SLUG] Heading patterns for table of contents
  // Matches: **\[SLUG\] Heading** or **[SLUG] Heading**
  const headingMatches = content.matchAll(/\*\*\\?\[SLUG\\?\]\s+(.+?)\*\*/g);
  for (const match of headingMatches) {
    const heading = match[1].trim();
    // Skip references and further reading headings
    if (!heading.toLowerCase().includes('reference') && !heading.toLowerCase().includes('further reading')) {
      const id = slugify(heading);
      updates.tableOfContents.push({ id, title: heading });
    }
  }
  if (updates.tableOfContents.length > 0) {
    console.log(`  ✓ Extracted ${updates.tableOfContents.length} table of contents items`);
  }

  // Extract References section
  // Matches: **\[SLUG\] References** or **\[SLUG\] Online references**
  const referencesMatch = content.match(/\*\*\\?\[SLUG\\?\]\s+(?:Online\s+)?[Rr]eferences[^*]*?\*\*\s*\n((?:\s*[-*].*\n?)+)/);
  if (referencesMatch) {
    const lines = referencesMatch[1].split('\n').filter(line => line.trim());
    for (const line of lines) {
      const link = extractLink(line);
      if (link) {
        updates.references.push(link);
      }
    }
    if (updates.references.length > 0) {
      console.log(`  ✓ Extracted ${updates.references.length} references`);
    }
  }

  // Extract Further Reading section (if separate from references)
  const furtherReadingMatch = content.match(/\*\*\\?\[SLUG\\?\]\s+(?:References\s+for\s+)?[Ff]urther\s+[Rr]eading[^*]*?\*\*\s*\n((?:\s*[-*].*\n?)+)/);
  if (furtherReadingMatch) {
    const lines = furtherReadingMatch[1].split('\n').filter(line => line.trim());
    for (const line of lines) {
      const link = extractLink(line);
      if (link) {
        updates.sources.push(link);
      }
    }
    if (updates.sources.length > 0) {
      console.log(`  ✓ Extracted ${updates.sources.length} further reading sources`);
    }
  }

  // Clean markdown body
  // 1. Remove bracketed annotations (handles escaped and unescaped brackets)
  content = content.replace(/\*\*\\?\[PHOTO CAPTION\\?\]\*\*\s*\*?.*?\*?/g, '');
  content = content.replace(/\*\*\\?\[TITLE\\?\]\*\*\s+.*?\n/g, '');
  content = content.replace(/\*\*\\?\[SUMMARY\\?\]\*\*\s+.*?(?=\n\n)/gs, '');
  content = content.replace(/\*\*\\?\[BODY TEXT\\?\]\*\*\s*/g, '');
  content = content.replace(/\*?\\?\[?INTRODUCTION\\?\]?\*?\s+.*?(?=\n\n)/gs, '');
  content = content.replace(/\\?\[RIGHT SIDEBAR\\?\]\s+.*?(?=\n\n)/gs, '');
  content = content.replace(/\*\\?\[PHOTO\\?\]\*/g, '');

  // 2. Convert [SLUG] Heading to ## Heading {#slug-id}
  content = content.replace(/\*\*\\?\[SLUG\\?\]\s+(.+?)\*\*/g, (match, heading) => {
    const id = slugify(heading.trim());
    return `## ${heading.trim()} {#${id}}`;
  });

  // 3. Remove References sections that are now in frontmatter
  content = content.replace(/\*\*\\?\[SLUG\\?\]\s+(?:Online\s+)?[Rr]eferences[^*]*?\*\*\s*\n(?:\s*[-*].*\n?)+/g, '');
  content = content.replace(/\*\*\\?\[SLUG\\?\]\s+(?:References\s+for\s+)?[Ff]urther\s+[Rr]eading[^*]*?\*\*\s*\n(?:\s*[-*].*\n?)+/g, '');

  // 4. Clean up excessive blank lines
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.trim();

  console.log('  ✓ Cleaned markdown body');

  return {
    frontmatter: parsed.data,
    updates,
    cleanedContent: content
  };
}

// Helper: Write updated markdown file
function writeMarkdownFile(filePath, frontmatter, content) {
  // Merge frontmatter
  const updatedFrontmatter = { ...frontmatter };

  // Build the frontmatter string manually for better control
  let frontmatterLines = ['---'];

  // Add existing fields
  for (const [key, value] of Object.entries(updatedFrontmatter)) {
    if (typeof value === 'string') {
      // Check if value contains special characters or newlines
      if (value.includes('\n') || value.includes(':') || value.includes('#')) {
        frontmatterLines.push(`${key}: |`);
        frontmatterLines.push(`  ${value.replace(/\n/g, '\n  ')}`);
      } else {
        frontmatterLines.push(`${key}: "${value}"`);
      }
    } else if (Array.isArray(value)) {
      if (value.length === 0) continue; // Skip empty arrays

      // Check if it's an array of objects
      if (typeof value[0] === 'object') {
        frontmatterLines.push(`${key}:`);
        for (const item of value) {
          frontmatterLines.push(`  - title: "${item.title}"`);
          if (item.url) frontmatterLines.push(`    url: "${item.url}"`);
          if (item.id) frontmatterLines.push(`    id: "${item.id}"`);
        }
      } else {
        // Simple array
        frontmatterLines.push(`${key}:`);
        for (const item of value) {
          frontmatterLines.push(`  - "${item}"`);
        }
      }
    } else {
      frontmatterLines.push(`${key}: ${value}`);
    }
  }

  frontmatterLines.push('---');

  const output = frontmatterLines.join('\n') + '\n\n' + content;
  fs.writeFileSync(filePath, output, 'utf8');
}

// Main: Process all markdown files
function processAllMarkdownFiles(contentDir) {
  console.log('🚀 Starting markdown extraction pipeline...\n');
  console.log(`📁 Content directory: ${contentDir}\n`);

  let processed = 0;
  let skipped = 0;
  let errors = 0;

  function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
        try {
          const result = parseMarkdownFile(fullPath);

          // Check if there's anything to update
          const hasUpdates =
            result.updates.intro ||
            result.updates.tableOfContents.length > 0 ||
            result.updates.references.length > 0 ||
            result.updates.sources.length > 0;

          if (!hasUpdates) {
            console.log('  ⏭️  No extractions needed, skipping');
            skipped++;
            continue;
          }

          // Merge updates into frontmatter
          const updatedFrontmatter = { ...result.frontmatter };
          if (result.updates.intro) updatedFrontmatter.intro = result.updates.intro;
          if (result.updates.tableOfContents.length > 0) {
            updatedFrontmatter.tableOfContents = result.updates.tableOfContents;
          }
          if (result.updates.references.length > 0) {
            updatedFrontmatter.references = result.updates.references;
          }
          if (result.updates.sources.length > 0) {
            updatedFrontmatter.sources = result.updates.sources;
          }

          // Write updated file
          writeMarkdownFile(fullPath, updatedFrontmatter, result.cleanedContent);
          console.log('  ✅ File updated successfully');
          processed++;

        } catch (error) {
          console.error(`  ❌ Error processing file: ${error.message}`);
          errors++;
        }
      }
    }
  }

  processDirectory(contentDir);

  console.log('\n' + '='.repeat(60));
  console.log('📊 Migration Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Processed: ${processed} files`);
  console.log(`⏭️  Skipped: ${skipped} files`);
  console.log(`❌ Errors: ${errors} files`);
  console.log('='.repeat(60));

  if (errors > 0) {
    console.log('\n⚠️  Some files had errors. Please review the logs above.');
    process.exit(1);
  } else {
    console.log('\n🎉 Migration completed successfully!');
  }
}

// Run the script
const contentDir = path.join(process.cwd(), 'src', 'content');

if (!fs.existsSync(contentDir)) {
  console.error(`❌ Content directory not found: ${contentDir}`);
  process.exit(1);
}

processAllMarkdownFiles(contentDir);
