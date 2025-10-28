# Blog Utilities - Learning Hub Integration

## Overview

This module provides conversion utilities to transform Learning Hub article data into the format expected by `UniversalBlogTemplate`.

## Core Function: `convertLearningHubArticleToBlog`

### Purpose
Converts Learning Hub `ContentItem` and `ArticleContent` into props that can be directly spread onto `UniversalBlogTemplate`.

### Usage

```typescript
import { convertLearningHubArticleToBlog } from '@/lib/blog/blog-utils';
import UniversalBlogTemplate from '@/components/blog/UniversalBlogTemplate';

// In your page component
const templateProps = convertLearningHubArticleToBlog(
  article,          // ContentItem with article metadata
  articleContent,   // ArticleContent with HTML and sources
  breadcrumbs,      // Navigation breadcrumbs
  relatedArticles   // Optional related content
);

return <UniversalBlogTemplate {...templateProps} />;
```

### Input Types

```typescript
// From Learning Hub CMS
ContentItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
  isArticle?: boolean;
  articleContent?: ArticleContent;
}

ArticleContent {
  content: string;              // HTML content
  author?: string;
  readingTime?: number;
  sources?: Array<{
    title: string;
    url: string;
  }>;
  previousArticle?: { slug, title };
  nextArticle?: { slug, title };
}
```

### Output Structure

Returns object matching `UniversalBlogTemplateProps`:

```typescript
{
  // Hero Section
  hero: {
    mainTitle: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
  },

  // Metadata Sidebar
  metadata: {
    publishedDate: string;      // Formatted date
    category: string;           // From breadcrumbs
    readTime: string;          // "X min read"
    author: string;
  },

  // Main Content
  content: {
    htmlContent: string;        // Article HTML
    author?: string;
    readingTime?: number;
    sources?: BlogSource[];     // Bibliography
    scriptureReferences?: [];   // For theological articles
    relatedItems?: BlogRelatedItem[];
    previousItem?: { slug, title, type };
    nextItem?: { slug, title, type };
  },

  // Navigation
  breadcrumbs: Breadcrumb[];
  contentType: 'article',
  baseHref: '/learning-hub',
  parishName: 'St Saviour\'s Church',
  backLabel: 'Back to Learning Hub',
}
```

## Helper Functions

### `formatReadingTime(minutes: number): string`

Converts reading time in minutes to human-readable format.

```typescript
formatReadingTime(1);   // "1 min read"
formatReadingTime(5);   // "5 min read"
formatReadingTime(0);   // "Quick read"
```

### `analyzeContentReadingTime(htmlContent: string): number`

Calculates estimated reading time from HTML content.

```typescript
const html = "<p>Long article content...</p>";
const minutes = analyzeContentReadingTime(html); // e.g., 8
```

**Algorithm:**
- Strips HTML tags
- Counts words
- Assumes 200 words per minute
- Rounds up to nearest minute

## Data Transformation Examples

### Example 1: Basic Article

**Input:**
```typescript
const article = {
  id: 'st-john',
  slug: 'saint-john',
  title: 'St John',
  description: 'The Beloved Disciple',
  imageUrl: '/images/st-john.jpg',
  isArticle: true,
  articleContent: {
    content: '<h2>Life of St. John</h2><p>Content...</p>',
    author: 'Fr Krisz Katona',
    readingTime: 12,
    sources: [{
      title: 'Catholic Encyclopedia',
      url: 'https://example.com'
    }]
  }
};

const breadcrumbs = [
  { title: 'Saints', slug: 'saints' },
  { title: 'New Testament Saints', slug: 'new-testament-saints' }
];
```

**Output:**
```typescript
{
  hero: {
    mainTitle: 'St John',
    subtitle: 'The Beloved Disciple',
    imageSrc: '/images/st-john.jpg',
    imageAlt: 'St John'
  },
  metadata: {
    publishedDate: 'January 15, 2025',  // Current date
    category: 'Saints',                  // From breadcrumbs[-2]
    readTime: '12 min read',
    author: 'Fr Krisz Katona'
  },
  content: {
    htmlContent: '<h2>Life of St. John</h2><p>Content...</p>',
    author: 'Fr Krisz Katona',
    readingTime: 12,
    sources: [{ title: 'Catholic Encyclopedia', url: '...' }],
    scriptureReferences: [],
    relatedItems: undefined,
    previousItem: undefined,
    nextItem: undefined
  },
  breadcrumbs: [
    { title: 'Saints', slug: 'saints', type: 'category' },
    { title: 'New Testament Saints', slug: 'new-testament-saints', type: 'category' }
  ],
  contentType: 'article',
  baseHref: '/learning-hub',
  parishName: 'St Saviour\'s Church',
  backLabel: 'Back to Learning Hub'
}
```

### Example 2: Article with Navigation

**Input includes:**
```typescript
articleContent: {
  // ... other fields
  previousArticle: {
    slug: 'saint-peter',
    title: 'St Peter'
  },
  nextArticle: {
    slug: 'saint-paul',
    title: 'St Paul'
  }
}
```

**Output includes:**
```typescript
content: {
  // ... other fields
  previousItem: {
    slug: 'saint-peter',
    title: 'St Peter',
    type: 'article'
  },
  nextItem: {
    slug: 'saint-paul',
    title: 'St Paul',
    type: 'article'
  }
}
```

### Example 3: With Related Articles

**Input:**
```typescript
const relatedArticles = [
  {
    id: 'st-peter',
    slug: 'saint-peter',
    title: 'St Peter',
    description: 'The First Pope',
    imageUrl: '/images/st-peter.jpg'
  }
];

convertLearningHubArticleToBlog(article, content, breadcrumbs, relatedArticles);
```

**Output includes:**
```typescript
content: {
  // ... other fields
  relatedItems: [
    {
      id: 'st-peter',
      slug: 'saint-peter',
      title: 'St Peter',
      subtitle: 'The First Pope',
      imageSrc: '/images/st-peter.jpg',
      imageAlt: 'St Peter',
      type: 'article',
      category: 'Learning Hub'
    }
  ]
}
```

## Design Decisions

### Why Direct Prop Mapping?

**Alternative Considered:** Complex intermediary types and transformations

**Chosen Approach:** Direct mapping to template props

**Rationale:**
1. **Simplicity** - Less code, fewer bugs
2. **Type Safety** - Direct match with interface
3. **Maintainability** - Easy to understand and modify
4. **Performance** - No unnecessary transformations

### Why Default Values in Conversion?

**Alternative:** Make caller provide all values

**Chosen Approach:** Provide sensible defaults in conversion

**Rationale:**
1. Most Learning Hub articles share common values
2. Reduces boilerplate in page components
3. Template still has defaults as fallback
4. Easy to override if needed

### Category Extraction Logic

```typescript
category: breadcrumbs && breadcrumbs.length >= 2
  ? breadcrumbs[breadcrumbs.length - 2]?.title
  : 'Learning Hub'
```

**Logic:**
- Uses second-to-last breadcrumb as category
- Fallback to "Learning Hub" if insufficient breadcrumbs
- Provides meaningful context without deep nesting

**Example Breadcrumbs:**
```
['Theology', 'Mysticism', 'Medieval Period']
                 ↑ Used as category
```

## Integration Checklist

When using this utility in a new page:

- [ ] Import `convertLearningHubArticleToBlog`
- [ ] Import `UniversalBlogTemplate`
- [ ] Fetch article data (`ContentItem` with `articleContent`)
- [ ] Get breadcrumbs (using `getBreadcrumbs()`)
- [ ] (Optional) Get related articles
- [ ] Call conversion function with all data
- [ ] Spread result onto template: `<UniversalBlogTemplate {...props} />`

## Troubleshooting

### Error: "Cannot read property 'htmlContent' of undefined"

**Cause:** `content` prop is undefined or incorrectly named

**Solution:** Ensure conversion function returns `content` not `blogContent`

### Error: "baseHref is not defined"

**Cause:** Missing required prop

**Solution:** Conversion function now provides this by default (v2+)

### Warning: Category shows as "Learning Hub" instead of actual category

**Cause:** Insufficient breadcrumbs or wrong structure

**Solution:** Ensure `breadcrumbs` array has at least 2 items with `title` field

### Reading time shows as "10 min read" for all articles

**Cause:** ArticleContent doesn't include `readingTime`

**Solution:** Either:
1. Add `readingTime` to ArticleContent, or
2. Use `analyzeContentReadingTime(content.content)` to calculate

## Future Enhancements

### Planned Features

1. **Auto-extract Table of Contents**
   ```typescript
   content: {
     tableOfContents: extractTOC(articleContent.content)
   }
   ```

2. **Scripture Reference Parsing**
   ```typescript
   scriptureReferences: parseScriptureRefs(articleContent.content)
   ```

3. **Dynamic Related Articles**
   ```typescript
   relatedItems: findRelatedByTags(article.tags)
   ```

4. **SEO Metadata**
   ```typescript
   seo: {
     keywords: extractKeywords(articleContent.content),
     canonicalUrl: buildCanonicalUrl(article.slug)
   }
   ```

## Version History

### v2.0 (Current) - Simplified Integration
- Changed `blogContent` → `content` for direct prop matching
- Added `baseHref`, `parishName`, `backLabel` defaults
- Improved documentation
- Simplified return type

### v1.0 - Initial Release
- Basic conversion functionality
- Manual prop mapping required
