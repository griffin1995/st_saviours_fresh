/**
 * Script to convert markdown files to CMS data structure
 * Run with: node scripts/convert-markdown-to-cms.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content');

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Track conversions
const converted = {
  'learning-hub': [],
  'prayer-hub': [],
  'spiritual-reflections': []
};

/**
 * Generate a unique ID from the file path
 */
function generateId(filePath, hubSlug) {
  const relativePath = path.relative(path.join(contentDir, hubSlug), filePath);
  return relativePath.replace(/\.md$/, '').replace(/\\/g, '/').replace(/\//g, '-');
}

/**
 * Extract slug from file path (category/filename format)
 */
function extractSlug(filePath, hubSlug) {
  const relativePath = path.relative(path.join(contentDir, hubSlug), filePath);
  return relativePath.replace(/\.md$/, '').replace(/\\/g, '/');
}

/**
 * Process a markdown file and convert to CMS structure
 */
function processMarkdownFile(filePath, hubSlug) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(fileContent);

    // Convert markdown to HTML
    const htmlContent = marked(parsed.content);

    // Extract metadata
    const id = generateId(filePath, hubSlug);
    const slug = extractSlug(filePath, hubSlug);

    const article = {
      id,
      slug,
      hub: hubSlug,
      category: parsed.data.category || 'Uncategorized',
      title: parsed.data.title || 'Untitled',
      content: htmlContent,
      publishedDate: parsed.data.publishedDate || new Date().toISOString().split('T')[0],
    };

    // Add optional fields if they exist
    if (parsed.data.intro) article.intro = parsed.data.intro;
    if (parsed.data.description) article.description = parsed.data.description;
    if (parsed.data.author) article.author = parsed.data.author;
    if (parsed.data.imageCaption) article.imageCaption = parsed.data.imageCaption;
    if (parsed.data.tableOfContents) article.tableOfContents = parsed.data.tableOfContents;
    if (parsed.data.sources) article.sources = parsed.data.sources;
    if (parsed.data.references) article.references = parsed.data.references;
    if (parsed.data.tags) article.tags = parsed.data.tags;
    if (parsed.data.featured !== undefined) article.featured = parsed.data.featured;
    if (parsed.data.readingTime) article.readingTime = parsed.data.readingTime;

    return article;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Process all markdown files for a hub
 */
function processHub(hubSlug) {
  const hubDir = path.join(contentDir, hubSlug);

  if (!fs.existsSync(hubDir)) {
    console.log(`Hub directory not found: ${hubDir}`);
    return [];
  }

  const markdownFiles = findMarkdownFiles(hubDir);
  console.log(`Found ${markdownFiles.length} markdown files in ${hubSlug}`);

  const articles = [];

  for (const filePath of markdownFiles) {
    const article = processMarkdownFile(filePath, hubSlug);
    if (article) {
      articles.push(article);
      console.log(`  ✓ Converted: ${path.basename(filePath)}`);
    }
  }

  return articles;
}

/**
 * Generate TypeScript code for articles
 */
function generateTypeScriptCode(articles, hubName) {
  if (articles.length === 0) {
    return `export const ${hubName.toUpperCase().replace(/-/g, '_')}_ARTICLES: HubArticle[] = [\n  // No articles yet\n];`;
  }

  const articlesCode = articles.map(article => {
    const lines = ['  {'];

    // Required fields
    lines.push(`    id: '${article.id}',`);
    lines.push(`    slug: '${article.slug}',`);
    lines.push(`    hub: '${article.hub}',`);
    lines.push(`    category: '${article.category}',`);
    lines.push(`    title: ${JSON.stringify(article.title)},`);

    // Optional fields
    if (article.intro) lines.push(`    intro: ${JSON.stringify(article.intro)},`);
    if (article.description) lines.push(`    description: ${JSON.stringify(article.description)},`);

    // Content (with proper escaping)
    const escapedContent = article.content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${');
    lines.push(`    content: \`${escapedContent}\`,`);

    lines.push(`    publishedDate: '${article.publishedDate}',`);

    if (article.author) lines.push(`    author: '${article.author}',`);
    if (article.imageCaption) lines.push(`    imageCaption: ${JSON.stringify(article.imageCaption)},`);

    if (article.tableOfContents) {
      lines.push(`    tableOfContents: ${JSON.stringify(article.tableOfContents, null, 2).replace(/\n/g, '\n    ')},`);
    }

    if (article.sources) {
      lines.push(`    sources: ${JSON.stringify(article.sources, null, 2).replace(/\n/g, '\n    ')},`);
    }

    if (article.references) {
      lines.push(`    references: ${JSON.stringify(article.references, null, 2).replace(/\n/g, '\n    ')},`);
    }

    if (article.tags) {
      lines.push(`    tags: ${JSON.stringify(article.tags)},`);
    }

    if (article.featured !== undefined) {
      lines.push(`    featured: ${article.featured},`);
    }

    if (article.readingTime) {
      lines.push(`    readingTime: ${article.readingTime},`);
    }

    lines.push('  }');
    return lines.join('\n');
  }).join(',\n');

  return `export const ${hubName.toUpperCase().replace(/-/g, '_')}_ARTICLES: HubArticle[] = [\n${articlesCode}\n];`;
}

// Main execution
console.log('Converting markdown files to CMS data...\n');

// Process each hub
const hubs = ['learning-hub', 'prayer-hub', 'spiritual-reflections'];

for (const hub of hubs) {
  console.log(`\nProcessing ${hub}...`);
  converted[hub] = processHub(hub);
}

// Generate summary
console.log('\n' + '='.repeat(60));
console.log('CONVERSION SUMMARY');
console.log('='.repeat(60));
console.log(`Learning Hub: ${converted['learning-hub'].length} articles`);
console.log(`Prayer Hub: ${converted['prayer-hub'].length} articles`);
console.log(`Spiritual Reflections: ${converted['spiritual-reflections'].length} articles`);
console.log(`Total: ${Object.values(converted).reduce((sum, arr) => sum + arr.length, 0)} articles`);
console.log('='.repeat(60));

// Output TypeScript code to a temporary file for review
const outputPath = path.join(__dirname, '../hub-content-converted.ts');
const typeDefinitions = `/**
 * Hub Content Data - Converted from Markdown
 * Generated by convert-markdown-to-cms.mjs
 */

export type HubType = 'learning-hub' | 'prayer-hub' | 'spiritual-reflections';

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface SourceLink {
  title: string;
  url: string;
}

export interface HubArticle {
  id: string;
  slug: string;
  hub: HubType;
  category: string;
  title: string;
  intro?: string;
  description?: string;
  content: string;
  publishedDate: string;
  author?: string;
  imageCaption?: string;
  tableOfContents?: TableOfContentsItem[];
  sources?: SourceLink[];
  references?: SourceLink[];
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
}

`;

const outputCode = [
  typeDefinitions,
  '// LEARNING HUB ARTICLES',
  generateTypeScriptCode(converted['learning-hub'], 'learning-hub'),
  '',
  '// PRAYER HUB ARTICLES',
  generateTypeScriptCode(converted['prayer-hub'], 'prayer-hub'),
  '',
  '// SPIRITUAL REFLECTIONS ARTICLES',
  generateTypeScriptCode(converted['spiritual-reflections'], 'spiritual-reflections'),
  '',
  '// Helper functions',
  `export function getAllHubArticles(): HubArticle[] {
  return [
    ...LEARNING_HUB_ARTICLES,
    ...PRAYER_HUB_ARTICLES,
    ...SPIRITUAL_REFLECTIONS_ARTICLES
  ];
}

export function getArticlesByHub(hub: HubType): HubArticle[] {
  switch (hub) {
    case 'learning-hub':
      return LEARNING_HUB_ARTICLES;
    case 'prayer-hub':
      return PRAYER_HUB_ARTICLES;
    case 'spiritual-reflections':
      return SPIRITUAL_REFLECTIONS_ARTICLES;
    default:
      return [];
  }
}

export function getArticleBySlug(hub: HubType, slug: string): HubArticle | null {
  const articles = getArticlesByHub(hub);
  return articles.find(article => article.slug === slug) || null;
}

export function getArticlesByCategory(hub: HubType, category: string): HubArticle[] {
  const articles = getArticlesByHub(hub);
  return articles.filter(article => article.category === category);
}
`
].join('\n');

fs.writeFileSync(outputPath, outputCode, 'utf8');
console.log(`\nConverted data written to: ${outputPath}`);
console.log('Review the output and then copy it to src/lib/cms/hub-content-data.ts');
