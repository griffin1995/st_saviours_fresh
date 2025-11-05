#!/usr/bin/env node

/**
 * Migrate Markdown Files to Standard Frontmatter
 *
 * Converts bracketed format ([photo], [intro], [title], etc.)
 * to industry-standard YAML frontmatter.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '..', 'blog');

/**
 * Parse bracketed format and extract metadata
 */
function parseBracketedFormat(content) {
  const lines = content.split('\n');
  const metadata = {
    title: '',
    description: '',
    imageCaption: '',
    author: '',
    publishedDate: ''
  };

  let contentLines = [];
  let inMainContent = false;
  let skipNextEmptyLine = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for bracketed tags
    if (trimmed.match(/^\[([^\]]+)\]/)) {
      const tagMatch = trimmed.match(/^\[([^\]]+)\]/);
      const tag = tagMatch[1].toLowerCase();
      const restOfLine = trimmed.substring(tagMatch[0].length).trim();

      if (tag === 'title') {
        // Remove markdown bold syntax
        metadata.title = restOfLine.replace(/\*\*/g, '').replace(/\*/g, '');
      } else if (tag === 'intro' || tag === 'summary') {
        metadata.description = restOfLine;
      } else if (tag === 'photo caption') {
        metadata.imageCaption = restOfLine.replace(/\*/g, '');
      } else if (tag === 'main text' || tag === 'body text') {
        inMainContent = true;
        skipNextEmptyLine = true;
        if (restOfLine) {
          contentLines.push(restOfLine);
        }
      } else if (tag === 'slug') {
        // Convert slug to h2 heading
        inMainContent = true;
        const heading = restOfLine.replace(/\*\*/g, '').replace(/\*/g, '');
        contentLines.push('');
        contentLines.push(`## ${heading}`);
        contentLines.push('');
      } else if (tag === 'body' || tag === 'content') {
        inMainContent = true;
        if (restOfLine) {
          contentLines.push(restOfLine);
        }
      }
      // Skip [photo], [photo caption], etc.
      continue;
    }

    // Add content lines after we've started main content
    if (inMainContent) {
      if (skipNextEmptyLine && trimmed === '') {
        skipNextEmptyLine = false;
        continue;
      }
      contentLines.push(line);
    }
  }

  return {
    metadata,
    content: contentLines.join('\n').trim()
  };
}

/**
 * Generate frontmatter YAML
 */
function generateFrontmatter(metadata) {
  const frontmatter = ['---'];

  if (metadata.title) {
    // Escape quotes in title
    const escapedTitle = metadata.title.replace(/"/g, '\\"');
    frontmatter.push(`title: "${escapedTitle}"`);
  }

  if (metadata.description) {
    // Escape quotes and handle multiline
    const escapedDesc = metadata.description.replace(/"/g, '\\"');
    frontmatter.push(`description: "${escapedDesc}"`);
  }

  if (metadata.imageCaption) {
    const escapedCaption = metadata.imageCaption.replace(/"/g, '\\"');
    frontmatter.push(`imageCaption: "${escapedCaption}"`);
  }

  // Add date if we can infer it from path
  if (metadata.publishedDate) {
    frontmatter.push(`publishedDate: "${metadata.publishedDate}"`);
  }

  frontmatter.push('---');

  return frontmatter.join('\n');
}

/**
 * Convert a single markdown file
 */
function convertMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has frontmatter
    if (content.trim().startsWith('---')) {
      console.log(`⏭️  Skipping (already has frontmatter): ${filePath}`);
      return false;
    }

    // Parse bracketed format
    const { metadata, content: mainContent } = parseBracketedFormat(content);

    // Infer publish date from path if in spiritual-reflections
    if (filePath.includes('spiritual-reflections')) {
      const yearMatch = filePath.match(/\/(\d{4})\//);
      const monthMatch = filePath.match(/\/(january|february|march|april|may|june|july|august|september|october|november|december)\//i);

      if (yearMatch && monthMatch) {
        const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const monthNum = monthNames.indexOf(monthMatch[1].toLowerCase()) + 1;
        metadata.publishedDate = `${yearMatch[1]}-${String(monthNum).padStart(2, '0')}-01`;
      }
    }

    // Generate new content with frontmatter
    const frontmatter = generateFrontmatter(metadata);
    const newContent = `${frontmatter}\n\n${mainContent}`;

    // Write back to file
    fs.writeFileSync(filePath, newContent, 'utf8');

    console.log(`✅ Converted: ${path.relative(BLOG_DIR, filePath)}`);
    console.log(`   Title: ${metadata.title || 'N/A'}`);

    return true;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir) {
  let results = [];

  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return results;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * Main migration function
 */
function main() {
  console.log('🔄 Starting markdown frontmatter migration...\n');
  console.log(`📁 Blog directory: ${BLOG_DIR}\n`);

  // Find all markdown files
  const markdownFiles = findMarkdownFiles(BLOG_DIR);

  console.log(`📝 Found ${markdownFiles.length} markdown files\n`);
  console.log('─'.repeat(60));
  console.log('');

  // Convert each file
  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of markdownFiles) {
    const result = convertMarkdownFile(file);
    if (result === true) {
      converted++;
    } else if (result === false) {
      skipped++;
    } else {
      failed++;
    }
  }

  console.log('');
  console.log('─'.repeat(60));
  console.log('\n📊 Migration Summary:');
  console.log(`   ✅ Converted: ${converted}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📝 Total: ${markdownFiles.length}`);
  console.log('\n✨ Migration complete!\n');
}

// Run migration
main();
