# Blog Template Migration Guide
## From Old Pages Router to Next.js 15 App Router

### Overview

This guide explains how to use the new **Universal Blog Template** system that works seamlessly for both **Learning Hub articles** and **Prayer Hub prayers** on the St. Saviour's Church website.

The migration brings the old blog template from the Pages Router (`/home/jack/Documents/st_saviours_lewisham/src/pages/blog-template.tsx`) into the modern Next.js 15 App Router architecture with a fully responsive, accessible, and modular design.

---

## Key Features

- **Universal Template**: Single template works for articles and prayers
- **Modern Architecture**: Server Components with selective Client Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG 2.1 AA compliant
- **Motion & Animation**: Smooth transitions using Framer Motion
- **SEO Optimized**: Proper meta tags and structured data
- **Modular Components**: Reusable, composable building blocks

---

## File Structure

```
src/
├── types/
│   └── blog.ts                          # Shared type definitions
├── lib/
│   └── blog/
│       └── blog-utils.ts                # Utility functions for conversions
├── components/
│   └── blog/
│       ├── UniversalBlogTemplate.tsx    # Main template component
│       └── shared/
│           ├── ArticleBreadcrumbs.tsx   # Breadcrumb navigation
│           ├── ArticleShare.tsx         # Share & engagement features
│           ├── ArticlePagination.tsx    # Previous/Next navigation
│           └── RelatedArticles.tsx      # Related content display
└── app/
    └── (public)/
        ├── learning-hub/[...slug]/
        │   └── page.tsx                 # Uses UniversalBlogTemplate
        └── prayer-hub/[category]/[slug]/
            └── PrayerPageClient.tsx     # Can integrate UniversalBlogTemplate
```

---

## Type Definitions

### BlogHeroContent
Hero section configuration with title, subtitle, image, and alt text.

```typescript
interface BlogHeroContent {
  mainTitle: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}
```

### BlogMetadata
Article metadata for display in sidebar.

```typescript
interface BlogMetadata {
  publishedDate: string;      // e.g., "January 15, 2025"
  category: string;           // e.g., "Theology and Theologians"
  readTime: string;           // e.g., "25 min read"
  author: string;             // e.g., "Parish Team"
  featured?: boolean;
  views?: number;
  likes?: number;
}
```

### BlogContent
Main article/prayer content structure.

```typescript
interface BlogContent {
  htmlContent: string;        // Main article body (HTML)
  author?: string;
  readingTime?: number;       // In minutes
  sources?: BlogSource[];      // Further reading/sources
  tableOfContents?: BlogTableOfContentsItem[];
  relatedItems?: BlogRelatedItem[];
  previousItem?: ArticleLink;
  nextItem?: ArticleLink;
  scriptureReferences?: ScriptureReference[];
}
```

---

## Integration Guide

### For Learning Hub Articles

The Learning Hub already uses `ArticlePage.tsx` component. To upgrade to the universal template:

#### Current Setup
```typescript
// src/components/learning-hub/ArticlePage.tsx
export default function ArticlePage({
  content,
  breadcrumbs,
  parishName,
  heroImage,
}: ArticlePageProps)
```

#### Migration Steps

1. **Use the conversion utility** in your data fetching:

```typescript
import { convertLearningHubArticleToBlog } from '@/lib/blog/blog-utils';
import UniversalBlogTemplate from '@/components/blog/UniversalBlogTemplate';

// In your page component or data fetch
const article = getContentBySlug('peter-abelard');
const converted = convertLearningHubArticleToBlog(
  article,
  article.articleContent,
  breadcrumbs,
  relatedArticles
);

return (
  <UniversalBlogTemplate
    hero={converted.hero}
    metadata={converted.metadata}
    content={converted.blogContent}
    breadcrumbs={converted.breadcrumbs}
    contentType={converted.contentType}
    baseHref="/learning-hub"
    parishName={parishName}
    backLabel="Back to Learning Hub"
  />
);
```

2. **Update ArticlePage.tsx** to use the new template:

```typescript
import { convertLearningHubArticleToBlog } from '@/lib/blog/blog-utils';
import UniversalBlogTemplate from '@/components/blog/UniversalBlogTemplate';

export default function ArticlePage({
  content,
  breadcrumbs,
  parishName,
  heroImage,
}: ArticlePageProps) {
  const article = content.articleContent!;
  const converted = convertLearningHubArticleToBlog(
    content,
    article,
    breadcrumbs
  );

  return (
    <UniversalBlogTemplate
      hero={converted.hero}
      metadata={converted.metadata}
      content={converted.blogContent}
      breadcrumbs={converted.breadcrumbs}
      contentType={converted.contentType}
      baseHref="/learning-hub"
      parishName={parishName}
    />
  );
}
```

### For Prayer Hub Prayers

Prayer Hub can optionally use the universal template for a consistent experience:

```typescript
// In prayer-hub/[category]/[slug]/PrayerPageClient.tsx
import UniversalBlogTemplate from '@/components/blog/UniversalBlogTemplate';

export default function PrayerPageClient({
  prayer,
  category,
  relatedPrayers,
  parishName,
}: PrayerPageClientProps) {
  // Option 1: Use existing PrayerPageClient (current)
  // Option 2: Use UniversalBlogTemplate for unified experience
  
  const converted = convertPrayerToBlog(
    prayer,
    category,
    breadcrumbs,
    relatedPrayers
  );

  return (
    <UniversalBlogTemplate
      hero={converted.hero}
      metadata={converted.metadata}
      content={converted.blogContent}
      breadcrumbs={converted.breadcrumbs}
      contentType={converted.contentType}
      baseHref="/prayer-hub"
      parishName={parishName}
    />
  );
}
```

---

## Component Reference

### UniversalBlogTemplate

Main template component that handles all visual layout.

**Props:**
- `hero: BlogHeroContent` - Hero section configuration
- `metadata: BlogMetadata` - Article metadata
- `content: BlogContent` - Main content
- `breadcrumbs: Breadcrumb[]` - Navigation breadcrumbs
- `contentType: ContentType` - 'article' | 'prayer'
- `baseHref: string` - Base URL for navigation (/learning-hub or /prayer-hub)
- `parishName: string` - Church name for title
- `backLabel?: string` - Custom back button label

**Features:**
- Responsive layout with collapsible content on mobile
- Animated hero section with text overlays
- Sticky sidebar for metadata and sharing
- Read More button with smooth expansion
- Gradient fade effects

### ArticleBreadcrumbs

Breadcrumb navigation component.

**Props:**
- `breadcrumbs: Breadcrumb[]` - Array of breadcrumb items
- `baseHref: string` - Base URL for navigation
- `className?: string` - Additional CSS classes

### ArticleShare

Share buttons and engagement metrics.

**Props:**
- `title: string` - Article title for sharing
- `likes?: number` - Like count
- `views?: number` - View count
- `featured?: boolean` - Featured badge
- `className?: string` - Additional CSS classes

**Features:**
- Bookmark functionality (local state)
- Share button (native share or clipboard fallback)
- Print button
- Like/view counters
- Featured badge

### ArticlePagination

Previous/Next article navigation.

**Props:**
- `previousItem?: ArticleLink` - Previous article
- `nextItem?: ArticleLink` - Next article
- `basePath?: string` - Base URL for navigation
- `className?: string` - Additional CSS classes

### RelatedArticles

Grid of related articles/prayers.

**Props:**
- `items: BlogRelatedItem[]` - Related items
- `title?: string` - Section title (default: "Related Articles")
- `basePath?: string` - Base URL for navigation
- `className?: string` - Additional CSS classes
- `maxItems?: number` - Maximum items to display (default: 3)

**Features:**
- Responsive grid (1-3 columns)
- Animated card reveals
- Like/view counters
- Hover effects

---

## Styling System

### Color Palette

```typescript
const COLORS = {
  background: '#FFFCF0',      // Cream background
  text: '#141414',            // Dark text
  textBlack: '#000000',       // Pure black
  textWhite: '#FFFFFF',       // White
  buttonBg: '#0F172A',        // Dark blue buttons
  border: '#262626',          // Dark borders
  tocBg: '#0F172A',           // TOC background
  buttonText: '#E4E4E7',      // Light button text
};
```

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Typography Scales

```typescript
fontSize: 'clamp(48px, 6.67vw, 128px)'   // Responsive heading
fontSize: 'clamp(32px, 3.33vw, 64px)'    // Responsive subheading
fontSize: 'clamp(20px, 8.44vw, 162px)'   // Responsive padding
```

---

## Migration Checklist

- [ ] Review old blog template design (`/home/jack/Documents/st_saviours_lewisham/src/pages/blog-template.tsx`)
- [ ] Create content mapping from old format to new types
- [ ] Update Learning Hub ArticlePage to use UniversalBlogTemplate
- [ ] Test with existing articles (Peter Abelard, St. John, etc.)
- [ ] Verify responsive layout on mobile/tablet/desktop
- [ ] Test accessibility with screen readers
- [ ] Update navigation links across the site
- [ ] Create/optimize hero images for all articles
- [ ] Add reading time calculations
- [ ] Configure related articles for each piece
- [ ] Test breadcrumb navigation
- [ ] Verify SEO meta tags
- [ ] Performance testing
- [ ] Cross-browser testing

---

## Best Practices

### Content Structure

1. **Use semantic HTML** in article content
2. **Include proper headings** (h2, h3) for TOC generation
3. **Link related articles** using slug references
4. **Optimize images** (WebP, responsive sizes)
5. **Include scripture references** when applicable
6. **Provide author attribution** and publication dates

### SEO Optimization

1. **Meta descriptions**: Keep under 160 characters
2. **Keywords**: Include in title and first paragraph
3. **Internal links**: Link to related Learning Hub content
4. **Structured data**: Consider JSON-LD for articles
5. **Open Graph tags**: For social sharing

### Accessibility

1. **Alt text**: All images must have descriptive alt text
2. **Color contrast**: Maintain WCAG AA standards
3. **Keyboard navigation**: All interactive elements keyboard accessible
4. **ARIA labels**: Use for complex components
5. **Semantic HTML**: Proper heading hierarchy

### Performance

1. **Image optimization**: Use Next.js Image component
2. **Code splitting**: Lazy load related components
3. **Caching**: Set appropriate cache headers
4. **Bundle size**: Monitor component sizes
5. **Core Web Vitals**: LCP, FID, CLS targets

---

## Testing Guide

### Manual Testing

```bash
# Start development server
npm run dev

# Test Learning Hub articles
navigate to /learning-hub/peter-abelard

# Test Prayer Hub prayers
navigate to /prayer-hub/daily-prayers/our-father

# Test responsive layout
Use browser DevTools device emulation
```

### Automated Testing

```typescript
// Example test for breadcrumbs
import { render, screen } from '@testing-library/react';
import ArticleBreadcrumbs from '@/components/blog/shared/ArticleBreadcrumbs';

test('renders breadcrumb navigation', () => {
  const breadcrumbs = [
    { title: 'Theology', slug: 'theology', type: 'category' as const },
    { title: 'Peter Abelard', slug: 'peter-abelard', type: 'article' as const },
  ];
  
  render(
    <ArticleBreadcrumbs
      breadcrumbs={breadcrumbs}
      baseHref="/learning-hub"
    />
  );
  
  expect(screen.getByText('Theology')).toBeInTheDocument();
  expect(screen.getByText('Peter Abelard')).toBeInTheDocument();
});
```

---

## Troubleshooting

### Issue: Images not loading
- Check image paths in content data
- Verify images exist in public directory
- Check Image component src prop format

### Issue: Breadcrumbs not rendering
- Ensure breadcrumbs array is properly formatted
- Check baseHref prop is correct
- Verify slug values match URLs

### Issue: Share button not working
- Check browser support for Web Share API
- Verify clipboard permissions in browser
- Test on HTTPS (required for Web Share API)

### Issue: Layout shifts on mobile
- Check for overflow issues in prose styles
- Verify padding/margin values
- Test with actual device or DevTools mobile emulation

---

## Performance Metrics

Target metrics for blog pages:

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTL (Time to Interactive) | < 3.5s |

---

## Future Enhancements

- [ ] Table of contents with scroll spy
- [ ] Comments/discussion section
- [ ] Reading progress indicator
- [ ] Social sharing counters
- [ ] Email newsletter signup
- [ ] Related content recommendations
- [ ] Dark/light mode toggle
- [ ] Multiple language support
- [ ] PDF export functionality
- [ ] Citation/reference formatting

---

## Support

For questions or issues with the blog template migration:

1. Review this guide and type definitions
2. Check example implementations in Learning Hub
3. Review component source code comments
4. Check Tailwind CSS documentation
5. Test in isolated components first

---

## Version History

- **v1.0** (2025-01-15) - Initial release
  - Universal blog template for Learning Hub and Prayer Hub
  - Modular component architecture
  - Responsive mobile-first design
  - Full accessibility support
  - Animation and motion preferences

