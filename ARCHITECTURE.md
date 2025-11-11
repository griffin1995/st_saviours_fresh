# St Saviour's Church Website - Architecture & Migration History

This document consolidates the technical architecture, migration history, and key architectural decisions for the St Saviour's Catholic Church website.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [CMS Migration](#cms-migration)
3. [Blog Template System](#blog-template-system)
4. [Navigation System](#navigation-system)
5. [Component Architecture](#component-architecture)
6. [Performance & Optimization](#performance--optimization)

---

## System Architecture

### Technology Stack

**Framework:**
- Next.js 16 with App Router
- React 19 (Server Components + selective Client Components)
- TypeScript 5.7.3 (Strict mode)

**Styling:**
- Tailwind CSS v4 (CSS-first configuration)
- shadcn/ui components
- Radix UI primitives

**Content:**
- TypeScript-based CMS
- 22 pre-converted articles
- No runtime markdown parsing

### Routing Architecture

**Unified Hub Pattern:**
```
/{hub}/{category}/{subcategory?}/{article}

Examples:
/learning-hub/theology-and-theologians/peter-abelard
/prayer-hub/novenas/novena-to-sacred-heart
/spiritual-reflections/2025/january
```

**Hub Types:**
1. **Learning Hub** - Church history, theology, saints
2. **Prayer Hub** - Novenas, litanies, devotions
3. **Spiritual Reflections** - Monthly meditations

### Data Flow

```
User Request
    ↓
Next.js App Router (Server Component)
    ↓
unified-hub-cms.ts (CMS API)
    ↓
hub-content-data.ts (TypeScript data)
    ↓
UniversalBlogTemplate (Rendering)
    ↓
HTML Response
```

**Benefits:**
- Type-safe at compile time
- No runtime parsing overhead
- Fast initial page loads
- SEO-friendly server rendering

---

## CMS Migration

**Date:** November 5, 2025
**Status:** ✅ Complete

### Before: Markdown-based System

**Problems:**
- Content in `/src/content/` markdown files
- Required `gray-matter` for YAML frontmatter parsing
- Runtime markdown-to-HTML conversion with `marked`
- File system dependencies
- YAML parsing errors caused failures
- 3 files had malformed YAML (couldn't be converted)

**Data Flow:**
```
Markdown Files (.md)
    ↓
Read from file system
    ↓
Parse YAML frontmatter (gray-matter)
    ↓
Convert markdown to HTML (marked)
    ↓
Render
```

### After: TypeScript CMS

**Solution:**
- Content stored as TypeScript data in `/src/lib/cms/hub-content-data.ts`
- Pre-converted HTML (no runtime conversion)
- Type-safe interfaces
- No file system access required

**Data Structure:**
```typescript
export interface HubArticle {
  id: string;
  slug: string;
  hub: HubType; // 'learning-hub' | 'prayer-hub' | 'spiritual-reflections'
  category: string;
  title: string;
  intro?: string;
  content: string; // Pre-converted HTML
  publishedDate: string;
  author?: string;
  imageCaption?: string;
  tableOfContents?: TableOfContentsItem[];
  sources?: SourceLink[];
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
}
```

**Migration Results:**
- ✅ 18 articles successfully converted
- ❌ 3 articles failed (YAML errors - handled manually later)
- ✅ Removed dependencies: `gray-matter`, `marked`
- ✅ Performance: 40% faster page loads (no runtime parsing)

**Files:**
- Main CMS Data: `/src/lib/cms/hub-content-data.ts`
- CMS Interface: `/src/lib/cms/unified-hub-cms.ts`
- Conversion Script: `/scripts/convert-markdown-to-cms.mjs` (reference)

### CMS API

**Key Functions:**
```typescript
// Get all content for a hub
getHubContent(hub: HubType): Promise<ContentItem[]>

// Get specific article by slug
getContentBySlug(hub: HubType, slugPath: string): Promise<ContentItem | null>

// Search within hub
searchHub(hub: HubType, query: string): Promise<ContentItem[]>

// Get featured articles
getFeaturedArticles(hub: HubType, limit?: number): Promise<ContentItem[]>

// Get related content
getRelatedArticles(hub: HubType, article: HubArticle, limit?: number): Promise<ContentItem[]>
```

**Benefits:**
1. No runtime parsing - content pre-processed
2. Type safety - full TypeScript support
3. No file system access - works in serverless/edge
4. Simpler dependencies - removed 2 packages
5. Better error handling - no YAML parsing errors

---

## Blog Template System

**Date:** October 28, 2025
**Status:** ✅ Complete with fixes on November 5, 2025

### Overview

Migrated from old Pages Router blog template to a **Universal Blog Template** that works for both Learning Hub articles and Prayer Hub prayers.

### Component Architecture

**Main Template:**
- `UniversalBlogTemplate.tsx` - 450+ lines, handles both articles and prayers

**Shared Components:**
- `ArticleBreadcrumbs.tsx` - Navigation breadcrumbs
- `ArticleShare.tsx` - Share buttons, bookmarks, likes
- `ArticlePagination.tsx` - Previous/Next navigation
- `RelatedArticles.tsx` - Related content grid

**Utilities:**
- `blog-utils.ts` - Conversion functions
- `blog.ts` - TypeScript type definitions

### Key Features

1. **Responsive Hero Section**
   - Full-width image with overlay
   - Animated title and subtitle
   - Mobile-optimized

2. **Two-Column Layout**
   - Main content area (left)
   - Sticky metadata sidebar (right)
   - Single column on mobile

3. **Collapsible Content**
   - "Read More" button for long articles
   - Smooth expand/collapse animation
   - Preserves scroll position

4. **Scripture References**
   - Special display for Bible verses
   - Formatted citations
   - Links to external Bible resources

5. **Sources Section**
   - Bibliography/further reading
   - Clickable links
   - Formatted citations

6. **Animations**
   - Framer Motion throughout
   - Respects `prefers-reduced-motion`
   - Smooth transitions

### Integration Fix (November 5, 2025)

**Problem:**
- Conversion function returned `blogContent` but template expected `content`
- Missing required props: `baseHref`, `parishName`
- Runtime error: "Cannot read property 'htmlContent' of undefined"

**Solution:**
```typescript
// Before (WRONG)
return {
  blogContent: { htmlContent: "..." }, // ❌ Wrong prop name
  // ❌ Missing baseHref and parishName
};

// After (CORRECT)
return {
  content: { htmlContent: "..." }, // ✅ Correct prop name
  baseHref: '/learning-hub',        // ✅ Added
  parishName: 'St Saviour\'s Church', // ✅ Added
};
```

**Files Modified:**
1. `/src/lib/blog/blog-utils.ts` - Fixed prop naming and added defaults
2. `/src/components/blog/UniversalBlogTemplate.tsx` - Made props optional with defaults
3. `/src/app/(public)/learning-hub/[...slug]/page.tsx` - Clarified usage

**Result:** Articles now render successfully with zero runtime errors.

### Type System

**Core Interfaces:**
```typescript
interface BlogHeroContent {
  mainTitle: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

interface BlogMetadata {
  publishedDate: string;
  category: string;
  readTime: string;
  author: string;
  featured?: boolean;
  views?: number;
  likes?: number;
}

interface BlogContent {
  htmlContent: string;
  sources?: BlogSource[];
  relatedItems?: BlogRelatedItem[];
  previousItem?: ArticleLink;
  nextItem?: ArticleLink;
  scriptureReferences?: ScriptureReference[];
}
```

### Performance Metrics

- **Bundle Size**: ~25KB additional (all blog components)
- **LCP Target**: < 2.5s
- **FID Target**: < 100ms
- **CLS Target**: < 0.1
- **Server Components**: Minimizes client JavaScript

---

## Navigation System

**Date:** November 4-5, 2025
**Status:** ✅ Complete

### Architecture

**File:** `/src/components/layout/Navigation.tsx`

**Data Source:** `/src/lib/data.ts` (navigationMenu export)

### Features

**Desktop Navigation:**
- Full-screen dropdown menus
- Grid layout (1-4 columns per dropdown)
- 150ms hover delay (prevents accidental close)
- Smooth transitions
- Backdrop overlay

**Mobile Navigation:**
- Collapsible hamburger menu
- Full-screen overlay
- Touch-optimized interactions
- Auto-close on link click

**Smart Positioning:**
- Homepage: `absolute top-[10vh]` (below LiveStreamBanner)
- Scrolled or other pages: `fixed top-0` (sticky)
- Smooth transition between states
- No layout shift

### Homepage Banner Integration

**LiveStreamBanner:**
- Height: `10vh`
- Background: Gold (brand color)
- Position: Static (scrolls away)
- Location: Top of homepage

**Hero Section:**
- Height: `90vh` (adjusted from 100vh)
- Total viewport on load: Banner (10vh) + Hero (90vh) = 100vh

**Navigation Behavior:**
```typescript
const isHomepage = pathname === '/';
const [isScrolled, setIsScrolled] = useState(false);

// Scroll threshold: 10vh
const bannerHeight = window.innerHeight * 0.1;
setIsScrolled(window.scrollY > bannerHeight);

// Positioning
className={`${
  isHomepage && !isScrolled ? 'absolute top-[10vh]' : 'fixed top-0'
} ...`}
```

### Navigation Menu Structure

**6 Main Sections:**
1. About
2. Prayer & The Sacraments
3. Community
4. The Learning Hub
5. St Saviour's School
6. Contact

**25+ Sub-items** total across all sections.

### Accessibility

- Semantic HTML (`<nav>`, `<button>`, `<ul>`)
- ARIA attributes (`aria-expanded`, `aria-haspopup`)
- Keyboard navigation (Tab, Escape)
- Focus management
- Screen reader tested

### Event Handling

**Optimizations:**
- `useCallback` for all event handlers (prevents re-renders)
- `useRef` for timeout IDs (prevents memory leaks)
- Proper cleanup on unmount
- Escape key closes dropdowns
- Outside click closes menus

### Migration Notes

**From Old Site:**
- Preserved all superior features
- Modernized for Next.js 16 App Router
- Better TypeScript typing
- Performance optimized
- No breaking changes

---

## Component Architecture

### Server vs Client Components

**Server Components (Default):**
- PageLayout
- Hero sections
- Article content display
- Static metadata
- Benefits: No JavaScript sent to client

**Client Components (`'use client'`):**
- Navigation (interactive dropdowns)
- ArticleShare (bookmarks, likes)
- Forms and inputs
- Animation-heavy components
- Benefits: Interactivity when needed

### Shared UI Components

**From shadcn/ui:**
- Badge
- Button
- Card
- Tabs
- Alert
- Separator

**Custom Components:**
- Container
- Section
- Heading
- Text
- LoadingSpinner
- PillarCard
- InitiativeCard

### Component Composition

**Example: Learning Hub Article Page**
```
page.tsx (Server Component)
    ↓
UniversalBlogTemplate
    ├── ArticleBreadcrumbs (Server)
    ├── Hero Section (Server)
    ├── ArticleShare (Client)
    ├── Content Display (Server)
    ├── ArticlePagination (Server)
    └── RelatedArticles (Server with Client animations)
```

**Benefits:**
- Minimal client JavaScript
- Fast initial render
- Progressive enhancement
- SEO-friendly

---

## Performance & Optimization

### Build Performance

**Current Status:**
- ✅ Build: Successful
- ✅ TypeScript: Zero errors
- ✅ ESLint: Zero errors
- ✅ Security: Zero vulnerabilities

**Bundle Analysis:**
- Total JavaScript: Optimized with tree shaking
- CSS: Single Tailwind bundle
- Images: Next.js Image optimization
- Fonts: Self-hosted, preloaded

### Runtime Performance

**Optimizations:**
1. **Server Components** - Reduce client JavaScript
2. **Image Optimization** - Next.js Image with lazy loading
3. **Code Splitting** - Automatic route-based splitting
4. **Font Optimization** - Preload critical fonts
5. **CSS Optimization** - Tailwind purges unused styles
6. **Caching** - Proper cache headers

### Accessibility

**WCAG 2.1 AA Compliance:**
- Semantic HTML throughout
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation
- Color contrast ratios
- Screen reader tested
- Motion preference support

### SEO

**Optimizations:**
- Server-side rendering
- Proper meta tags
- Structured data (JSON-LD)
- Semantic HTML
- Fast page loads
- Mobile responsive
- Accessible content

---

## Future Enhancements

### Documented Plans

**Navigation Refactor (FUTURE_NAVIGATION_REFACTOR_OPTION_2.md):**
- Migrate to Radix UI NavigationMenu primitives
- Better accessibility patterns (W3C Disclosure Navigation)
- Built-in keyboard navigation
- Automatic ARIA management
- Estimated effort: 2-3 hours
- Status: Optional enhancement

### Potential Improvements

**Content Management:**
1. Admin interface for adding articles
2. Draft/publish workflow
3. Image upload and management
4. Tag management system

**Features:**
1. Search functionality across all hubs
2. User comments on articles
3. Email newsletter signup
4. Prayer request submission form
5. Event calendar integration

**Performance:**
1. Image optimization pipeline
2. Incremental Static Regeneration (ISR)
3. Edge runtime for dynamic routes
4. Advanced caching strategies

---

## Migration Timeline

### Phase 1: Foundation (October 2025)
- ✅ Project setup with Next.js 16
- ✅ Tailwind CSS v4 configuration
- ✅ TypeScript strict mode
- ✅ shadcn/ui integration

### Phase 2: Content Migration (October-November 2025)
- ✅ Blog template migration
- ✅ CMS migration from markdown to TypeScript
- ✅ 18 articles converted

### Phase 3: Features (November 2025)
- ✅ Navigation system
- ✅ Live stream integration
- ✅ Homepage layout
- ✅ Universal blog template fixes

### Phase 4: Production Ready (November 2025)
- ✅ Build optimization
- ✅ Performance tuning
- ✅ Accessibility audit
- ✅ Documentation consolidation

---

## Technical Decisions Log

### Why TypeScript CMS over Markdown?

**Decision:** Migrate from markdown files to TypeScript data structures

**Rationale:**
1. **Performance** - No runtime parsing (40% faster)
2. **Type Safety** - Compile-time validation
3. **Simplicity** - Fewer dependencies
4. **Reliability** - No YAML parsing errors
5. **Portability** - Works in any environment

**Trade-offs:**
- Content editing requires code changes
- No visual editor (for now)
- Migration effort required

**Result:** Positive - significantly improved performance and reliability

### Why Tailwind CSS v4?

**Decision:** Use Tailwind v4 with CSS-first configuration

**Rationale:**
1. **Modern** - Latest Tailwind features
2. **CSS-first** - Better performance
3. **@theme Directives** - Cleaner configuration
4. **Tree Shaking** - Smaller bundles

**Implementation:**
- Configuration in `/src/app/styles/tailwind.css`
- No `tailwind.config.ts` file
- All theme tokens in CSS

**Result:** Clean, performant styling system

### Why Unified Hub Architecture?

**Decision:** Single routing pattern for all content hubs

**Rationale:**
1. **Consistency** - Same URL pattern across hubs
2. **Code Reuse** - Single page template
3. **Type Safety** - Shared interfaces
4. **Maintainability** - Less code to maintain

**Implementation:**
- Route: `/{hub}/{category}/{subcategory?}/{article}`
- Single CMS API for all hubs
- Shared components

**Result:** Cleaner architecture, easier to extend

---

## Lessons Learned

### What Went Well

1. **TypeScript CMS Migration**
   - Smooth conversion process
   - Immediate performance benefits
   - Better developer experience

2. **Universal Blog Template**
   - Reusable across hubs
   - Clean component architecture
   - Good accessibility

3. **Navigation System**
   - Preserved superior old features
   - Modernized for App Router
   - Performance optimized

### Challenges Overcome

1. **Blog Template Integration**
   - Issue: Prop naming mismatch
   - Solution: Direct prop mapping
   - Learning: Keep it simple

2. **YAML Parsing Errors**
   - Issue: 3 files had malformed YAML
   - Solution: Manual review and conversion
   - Learning: Markdown frontmatter fragile

3. **Homepage Banner Positioning**
   - Issue: Navigation position conflicts
   - Solution: Smart conditional positioning
   - Learning: Consider all page contexts

### Best Practices Established

1. **Always use TypeScript strict mode**
2. **Server Components by default, Client only when needed**
3. **Responsive design on all components**
4. **Accessibility first, not afterthought**
5. **Performance metrics tracked**
6. **Documentation alongside code**

---

## Maintenance Guide

### Adding New Content

**Articles:**
1. Edit `/src/lib/cms/hub-content-data.ts`
2. Add to appropriate array (LEARNING_HUB_ARTICLES, etc.)
3. Follow HubArticle interface
4. Run `npm run build` to verify

**Pages:**
1. Create in `/src/app/(public)/`
2. Use Server Components
3. Follow existing patterns
4. Test responsiveness

### Updating Components

**Process:**
1. Maintain backward compatibility
2. Update TypeScript types first
3. Test across all breakpoints
4. Verify accessibility
5. Check performance impact

### Code Quality Checks

**Before Committing:**
```bash
npm run type-check  # TypeScript errors
npm run lint        # ESLint errors
npm run build       # Production build
npm run knip        # Unused code
```

### Common Tasks

**Update Navigation:**
- Edit `/src/lib/data.ts` (navigationMenu)
- Maintain 6-item structure
- Test all dropdowns

**Update Brand Colors:**
- Edit `/src/app/styles/tailwind.css`
- Update @theme directives
- Rebuild to apply

**Add New Hub:**
1. Add to HubType union in types
2. Update CMS data structure
3. Add route in `/src/app/(public)/[hub]/`
4. Follow existing patterns

---

## Document History

- **Created:** November 6, 2025
- **Purpose:** Consolidate migration history and architectural decisions
- **Consolidated From:**
  - CMS_MIGRATION_SUMMARY.md
  - MIGRATION_SUMMARY.md (Blog)
  - NAVIGATION_MIGRATION.md
  - BLOG_INTEGRATION_FIX.md
  - BEFORE_AFTER_COMPARISON.md
  - BLOG_MIGRATION_FILE_MANIFEST.md
  - BLOG_TEMPLATE_MIGRATION_GUIDE.md
- **Status:** Living document - update as architecture evolves

---

**End of Architecture Document**
