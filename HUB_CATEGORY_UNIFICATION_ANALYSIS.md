# Hub Category Unification Analysis

**Technical Documentation for Unified Hub Design Architecture**

St Saviour's Catholic Church - Next.js 16 App Router Implementation

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Architecture Analysis](#current-architecture-analysis)
3. [Visual Design Comparison](#visual-design-comparison)
4. [Data Flow Analysis](#data-flow-analysis)
5. [Component Architecture](#component-architecture)
6. [Unified Design Proposal](#unified-design-proposal)
7. [Implementation Specifications](#implementation-specifications)
8. [Migration Strategy](#migration-strategy)
9. [Technical Specifications](#technical-specifications)
10. [Testing & Validation](#testing--validation)

---

## Executive Summary

### Problem Statement

The St Saviour's hub system currently has inconsistent visual design across category hierarchy levels:

- **Level 0** (`/learning-hub`) - Main hub landing page with modern, polished design
- **Level 1** (`/learning-hub/church-history`) - Top-level category page with basic PageHero/PageLayout
- **Level 2+** (`/learning-hub/church-history/medieval-period`) - Sub-category pages with same basic design

**Issue:** Category pages (Level 1+) lack the visual polish, structured sections, and engaging layout of the main hub landing page.

### Solution Overview

Create a unified hub design system that maintains visual consistency across all category hierarchy levels while allowing dynamic content customization per level. This involves:

1. **Shared Layout Component** - Reusable `UnifiedHubLayout` component
2. **Dynamic Content Injection** - Props-based introduction sections, CTAs, and category displays
3. **Preserved Navigation** - Breadcrumb system maintained across all levels
4. **Data Structure Extension** - Enhanced CMS to support per-category intro content

### Key Benefits

- **Consistent User Experience** - Same visual language across all hub pages
- **Improved Engagement** - Rich introductions and CTAs at every level
- **Maintainability** - Single source of truth for hub layout
- **Scalability** - Easy to add new hubs or categories without redesign

---

## Current Architecture Analysis

### Level 0: Main Hub Landing Page

**File:** `/src/app/(public)/[hub]/page.tsx`

**Route Examples:**
- `/learning-hub`
- `/prayer-hub`
- `/spiritual-reflections`

**Component Structure:**

```tsx
<main>
  {/* 1. HERO SECTION */}
  <Hero
    backgroundImage={config.heroImage}
    title={config.title}
    description={config.description}
    primaryButton={{ text: 'Explore Topics', href: '#topics' }}
    secondaryButton={hubContent.secondaryButton}
  />

  {/* 2. INTRODUCTION SECTION */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Label + Title */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-2 h-2 bg-gold-500" />
          <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
            {hubContent.introduction.label}
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
          <span className="block">{hubContent.introduction.title}</span>
          <span className="block text-3xl lg:text-4xl font-medium">
            {hubContent.introduction.subtitle}
          </span>
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          {hubContent.introduction.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p.text }} />
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* 3. CATEGORIES/TOPICS SECTION */}
  <section id="topics" className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-2 h-2 bg-gold-500" />
          <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
            Explore Topics
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
          <span className="block">{hubContent.categoriesTitle}</span>
          <span className="block text-3xl lg:text-4xl font-medium">Categories</span>
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl">
          {hubContent.categoriesDescription}
        </p>
      </div>

      {/* Categories Grid */}
      <ThreePillarCards cards={categories} className="bg-transparent" />
    </div>
  </section>

  {/* 4. CALL TO ACTION SECTION */}
  <section className="py-16 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
        {hubContent.ctaTitle}
      </h2>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
        {hubContent.ctaDescription}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="#topics">Explore Topics</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </div>
  </section>
</main>
```

**Key Features:**
- ✅ Full-screen Hero component with overlay effects
- ✅ Rich introduction section with label, title, subtitle, paragraphs
- ✅ Structured categories section with gold accent markers
- ✅ ThreePillarCards component for visual category display
- ✅ Call-to-action section with dual buttons
- ✅ Hub-specific content via `getHubSpecificContent()` function

### Level 1+: Category Pages

**File:** `/src/app/(public)/[hub]/[...slug]/page.tsx`

**Route Examples:**
- `/learning-hub/church-history`
- `/learning-hub/church-history/12th-century`
- `/prayer-hub/novenas`

**Component Structure:**

```tsx
<PageLayout
  title={`${category.title} - ${config.title} - ${parishName}`}
  description={category.description || config.description}
  background="slate"
>
  {/* 1. Hero Section */}
  <PageHero
    title={category.title}
    subtitle={category.description || ''}
    backgroundImage={category.imageUrl || config.heroImage}
    overlay="dark"
  />

  {/* 2. Breadcrumb Navigation */}
  <Section background="slate" className="py-6 border-b border-slate-700">
    <Container>
      <nav className="flex items-center gap-2 text-sm text-gray-300">
        <Link href={config.baseRoute}>{config.title}</Link>
        {breadcrumbs.slice(1).map((crumb, index) => (
          <span key={crumb.slug}>
            <span>/</span>
            <Link href={`${config.baseRoute}/${crumb.slug}`}>
              {crumb.title}
            </Link>
          </span>
        ))}
      </nav>
    </Container>
  </Section>

  {/* 3. Sub-categories/Children */}
  <Section background="slate" className="py-16">
    <Container>
      <ThreePillarCards
        cards={category.children.map(child => ({
          title: child.metadata?.title || child.title,
          description: child.metadata?.description || child.description || '',
          imageUrl: child.metadata?.imageUrl || child.imageUrl || config.heroImage,
          url: `${config.baseRoute}/${child.fullSlug}`
        }))}
        className="bg-transparent"
      />
    </Container>
  </Section>

  {/* 4. Back Navigation */}
  <Section background="slate" className="py-12 border-t border-slate-700">
    <Container>
      <div className="text-center">
        <Link href={breadcrumbs.length > 2 ? parentUrl : config.baseRoute}>
          <Button>Back to {parentTitle}</Button>
        </Link>
      </div>
    </Container>
  </Section>
</PageLayout>
```

**Key Features:**
- ⚠️ Basic PageHero (smaller, less detailed than Hero)
- ❌ No introduction section
- ⚠️ Breadcrumb navigation (good, but positioned differently)
- ✅ ThreePillarCards for children (same as Level 0)
- ❌ No call-to-action section
- ⚠️ Simple back button (not as engaging as Level 0 CTA)

### Key Differences Summary

| Feature | Level 0 (Main Hub) | Level 1+ (Categories) |
|---------|-------------------|----------------------|
| **Hero Component** | `<Hero>` - Full viewport, rich overlays | `<PageHero>` - Smaller, simpler |
| **Introduction Section** | ✅ Rich multi-paragraph intro | ❌ None |
| **Section Headers** | ✅ Gold markers + dual-level titles | ❌ None |
| **Categories Display** | ✅ ThreePillarCards with context | ✅ ThreePillarCards only |
| **Call-to-Action** | ✅ Dark section with dual CTAs | ❌ Simple back button |
| **Layout Wrapper** | `<main>` with sections | `<PageLayout>` + `<Section>` |
| **Background Colors** | White → Slate-50 → Slate-900 | All Slate-900 |
| **Visual Hierarchy** | High - multiple distinct sections | Low - minimal differentiation |

---

## Visual Design Comparison

### Main Hub Landing Page (Level 0) Design Elements

**Visual Flow:**

```
┌─────────────────────────────────────────────┐
│  HERO SECTION                               │
│  - Full viewport height (100vh)            │
│  - Multi-layer overlays                    │
│  - Large title (text-6xl → text-8xl)       │
│  - Primary + Secondary buttons             │
│  - Scroll indicator                        │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  INTRODUCTION SECTION                       │
│  Background: White (bg-white)               │
│  - Gold dot marker + uppercase label       │
│  - Two-tier heading (light → medium)       │
│  - Multiple paragraphs (emphasized option) │
│  - Max-width content (4xl)                 │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  CATEGORIES SECTION                         │
│  Background: Light gray (bg-slate-50)       │
│  - Gold dot marker + "Explore Topics"      │
│  - Two-tier heading                        │
│  - Description paragraph                   │
│  - ThreePillarCards grid (3 columns)       │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  CALL-TO-ACTION SECTION                     │
│  Background: Dark navy (bg-slate-900)       │
│  - Large heading (text-4xl → text-5xl)     │
│  - Description paragraph                   │
│  - Primary + Secondary link buttons        │
└─────────────────────────────────────────────┘
```

**Color Palette:**
- Hero: Multi-layer (black/90 → slate-900/90 → gold-600/70)
- Introduction: `bg-white` with `text-slate-900`
- Categories: `bg-slate-50` with `text-primary-900`
- CTA: `bg-slate-900` with `text-white`

**Typography Scale:**
- Hero Title: `text-6xl sm:text-8xl`
- Section Headings: `text-4xl lg:text-5xl` (main), `text-3xl lg:text-4xl` (sub)
- Body Text: `text-lg` with `leading-relaxed`
- Labels: `text-sm uppercase tracking-wider`

### Category Page (Level 1+) Design Elements

**Visual Flow:**

```
┌─────────────────────────────────────────────┐
│  PAGEHERO SECTION                           │
│  - Medium height (h-80 lg:h-96)            │
│  - Simple overlay                          │
│  - Title + subtitle only                   │
│  - No buttons                              │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  BREADCRUMB NAVIGATION                      │
│  Background: Dark (bg-slate-900)            │
│  - Small text (text-sm)                    │
│  - Border bottom separator                 │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  SUB-CATEGORIES SECTION                     │
│  Background: Dark (bg-slate-900)            │
│  - No section header                       │
│  - ThreePillarCards grid only              │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  BACK NAVIGATION                            │
│  Background: Dark (bg-slate-900)            │
│  - Single centered button                  │
│  - Border top separator                    │
└─────────────────────────────────────────────┘
```

**Color Palette:**
- All sections: `bg-slate-900` with `text-white` or `text-gray-300`

**Typography Scale:**
- PageHero Title: `text-4xl lg:text-6xl`
- No section headings
- Body Text: Minimal

---

## Data Flow Analysis

### Current Data Structure

**Hub Configuration (Static):**

```typescript
// src/lib/cms/unified-hub-cms.ts
export interface HubConfig {
  slug: HubSlug;
  title: string;
  description: string;
  heroImage: string;
  baseRoute: string;
}

export const HUB_CONFIGS: Record<HubSlug, HubConfig> = {
  'learning-hub': {
    slug: 'learning-hub',
    title: 'Learning Hub',
    description: 'Explore the rich history and theology of the Catholic Church',
    heroImage: '/images/inside-church-3-glass-windows.jpg',
    baseRoute: '/learning-hub'
  },
  // ... other hubs
};
```

**Hub-Specific Content (Function-based):**

```typescript
// src/app/(public)/[hub]/page.tsx
function getHubSpecificContent(hub: HubSlug) {
  switch (hub) {
    case 'learning-hub':
      return {
        introduction: {
          label: 'About the Hub',
          title: 'Your Journey of',
          subtitle: 'Faith & Knowledge',
          paragraphs: [
            { text: '...', emphasized: false },
            { text: '...', emphasized: true }
          ]
        },
        categoriesTitle: 'Learning',
        categoriesDescription: 'Dive deep into...',
        ctaTitle: 'Start Your Learning Journey',
        ctaDescription: 'We are committed to...',
        secondaryButton: { text: 'Our Resources', href: '#resources' }
      };
    // ... other hubs
  }
}
```

**Category Data (CMS-driven):**

```typescript
// src/lib/cms/unified-hub-cms.ts
export interface HubCategory {
  slug: string;
  fullSlug: string;
  hub: HubSlug;
  title: string;
  description?: string;  // Currently minimal
  imageUrl?: string;
  children: (HubCategory | HubArticleWithMetadata)[];
  breadcrumbs: Breadcrumb[];
}

// Generated from articles by category grouping
export function getHubContent(hub: HubSlug): (HubCategory | HubArticleWithMetadata)[] {
  const articles = getArticlesByHub(hub);
  const categoriesMap = new Map<string, HubArticle[]>();

  for (const article of articles) {
    const category = article.category || 'Uncategorized';
    if (!categoriesMap.has(category)) {
      categoriesMap.set(category, []);
    }
    categoriesMap.get(category)!.push(article);
  }

  // Creates HubCategory objects with children
  // ...
}
```

**Article Data (CMS-driven):**

```typescript
// src/lib/cms/hub-content-data.ts
export interface HubArticle {
  id: string;
  slug: string;              // 'church-history/12th-century-timeline'
  hub: HubType;              // 'learning-hub'
  category: string;          // 'Church History'
  title: string;
  intro?: string;
  description?: string;
  content: string;           // HTML content
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
```

### Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│  USER REQUEST                                           │
│  GET /learning-hub/church-history                       │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  NEXT.JS APP ROUTER                                     │
│  /app/(public)/[hub]/[...slug]/page.tsx                 │
│  - Extracts params: { hub: 'learning-hub',             │
│                       slug: ['church-history'] }        │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  VALIDATION & CONFIG LOOKUP                             │
│  - isValidHub('learning-hub') → true                   │
│  - HUB_CONFIGS['learning-hub'] → { title, image, ... } │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  CONTENT RETRIEVAL                                      │
│  getContentBySlug('learning-hub', ['church-history'])  │
│  ├─ 1. Check for article match                        │
│  │    getArticleBySlugFromData(hub, 'church-history') │
│  │    → null (not an article)                         │
│  └─ 2. Check for category match                       │
│       getHubContent(hub)                               │
│       → Find category with slug 'church-history'       │
│       → Return HubCategory object with children        │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  CATEGORY DATA STRUCTURE                                │
│  {                                                      │
│    slug: 'church-history',                             │
│    fullSlug: 'church-history',                         │
│    hub: 'learning-hub',                                │
│    title: 'Church History',                            │
│    description: undefined,  ← MISSING RICH CONTENT     │
│    imageUrl: undefined,                                │
│    children: [                                         │
│      { metadata: { title: '12th Century...', ... } }, │
│      { metadata: { title: '13th Century...', ... } }  │
│    ],                                                  │
│    breadcrumbs: []                                     │
│  }                                                     │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  BREADCRUMB GENERATION                                  │
│  getBreadcrumbs('learning-hub', ['church-history'])    │
│  → [                                                    │
│      { title: 'Learning Hub', slug: '' },              │
│      { title: 'Church History', slug: 'church-history' }│
│    ]                                                    │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  RENDER CATEGORY PAGE                                   │
│  <PageLayout>                                           │
│    <PageHero title="Church History" ... />             │
│    <Section> Breadcrumbs </Section>                     │
│    <Section>                                            │
│      <ThreePillarCards cards={children} />              │
│    </Section>                                           │
│    <Section> Back Button </Section>                     │
│  </PageLayout>                                          │
└─────────────────────────────────────────────────────────┘
```

### Missing Data for Unified Design

To support the unified design, **category objects need additional fields**:

```typescript
export interface HubCategoryEnhanced extends HubCategory {
  // NEW FIELDS NEEDED:
  introduction?: {
    label: string;           // e.g., "About Church History"
    title: string;           // e.g., "Exploring the"
    subtitle: string;        // e.g., "Catholic Church Through Time"
    paragraphs: Array<{
      text: string;
      emphasized?: boolean;
    }>;
  };

  categoriesConfig?: {
    sectionTitle: string;    // e.g., "Church History"
    sectionLabel: string;    // e.g., "Browse Topics"
    description: string;     // e.g., "Explore key periods..."
  };

  ctaConfig?: {
    title: string;           // e.g., "Discover Church History"
    description: string;     // e.g., "From the early Church to modern times..."
    primaryButton?: {
      text: string;
      href: string;
    };
    secondaryButton?: {
      text: string;
      href: string;
    };
  };
}
```

---

## Component Architecture

### Current Components Used

**1. Hero Component** (`src/components/Hero.tsx`)

```typescript
interface HeroProps {
  title?: React.ReactNode;
  description?: string;
  backgroundImage: string;
  badge?: HeroBadge;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  children?: React.ReactNode;
}

// Features:
// - Full viewport (100vh)
// - Multi-layer overlays (navy + gold + dot pattern)
// - Large typography with text shadows
// - Scroll indicator
// - Dual CTA buttons
```

**2. PageHero Component** (`src/components/layout/PageHero.tsx`)

```typescript
interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  pageName?: string;
  height?: 'small' | 'medium' | 'large' | 'full';
  overlay?: 'light' | 'medium' | 'dark';
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  actions?: React.ReactNode;
  insideLazyMotion?: boolean;
}

// Features:
// - Configurable height (default: medium = h-80 lg:h-96)
// - Simple overlay
// - CMS image integration
// - Optional subtitle with gold accents
// - Optional action buttons
```

**3. ThreePillarCards Component** (`src/components/ThreePillarCards.tsx`)

```typescript
interface PillarCard {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
}

interface ThreePillarCardsProps {
  cards: PillarCard[];
  className?: string;
}

// Features:
// - 3-column responsive grid (1 col mobile → 3 cols desktop)
// - 2:3 aspect ratio cards
// - Hover effects (scale + transition)
// - Background image overlays
// - Fixed-height title and description areas
```

**4. Section Component** (`src/components/ui/Container.tsx`)

```typescript
interface SectionProps {
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'navy' | 'navy-light' | 'slate' | 'slate-800' | 'gray-950' | 'transparent';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

// Features:
// - Automatic container wrapping
// - Consistent spacing variants
// - Background color variants
// - Responsive padding
```

**5. PageLayout Component** (`src/components/layout/PageLayout.tsx`)

```typescript
interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'slate';
  includeNavigation?: boolean;
  includeFooter?: boolean;
  // Legacy metadata props (unused in App Router)
  title?: string;
  description?: string;
  keywords?: string;
}

// Features:
// - Site-wide navigation and footer
// - Min-height screen
// - Background color variants
// - Flex layout (header → main → footer)
```

### Component Usage Comparison

| Component | Level 0 (Main Hub) | Level 1+ (Categories) |
|-----------|-------------------|----------------------|
| **Hero** | ✅ Full-screen with all features | ❌ Not used |
| **PageHero** | ❌ Not used | ✅ Medium height, basic |
| **ThreePillarCards** | ✅ With rich context | ✅ Minimal context |
| **Section** | ❌ Replaced by `<section>` tags | ✅ Used for all sections |
| **Container** | ❌ Inline max-width divs | ✅ Used within Section |
| **PageLayout** | ❌ Bare `<main>` wrapper | ✅ Full page wrapper |

---

## Unified Design Proposal

### Design Philosophy

**Principle:** Every category page should feel as polished and engaging as the main hub landing page, with contextual content that guides users deeper into the topic hierarchy.

**Key Changes:**

1. **Unified Hero** - Use full `<Hero>` component at all levels
2. **Introduction Sections** - Add rich intro content for every category
3. **Structured Sections** - Consistent section headers with gold markers
4. **Enhanced CTAs** - Action-oriented bottom sections instead of simple back buttons
5. **Preserved Navigation** - Maintain breadcrumbs but integrate them better visually

### Visual Design Specification

**Unified Category Page Structure:**

```
┌─────────────────────────────────────────────┐
│  HERO SECTION                               │
│  Component: <Hero>                          │
│  - Category-specific background image      │
│  - Category title                          │
│  - Category description                    │
│  - "Explore {Category}" button             │
│  - "Back to {Parent}" button               │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  BREADCRUMB BAR (Optional)                  │
│  - Slim, semi-transparent overlay          │
│  - Position: Below hero, sticky option     │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  INTRODUCTION SECTION                       │
│  Background: White (bg-white)               │
│  Component: Shared layout                  │
│  - Gold dot marker + label                 │
│  - Two-tier heading                        │
│  - Category-specific paragraphs            │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  SUB-CATEGORIES SECTION                     │
│  Background: Light gray (bg-slate-50)       │
│  - Gold dot marker + "Browse {Category}"   │
│  - Two-tier heading                        │
│  - Description                             │
│  - ThreePillarCards grid                   │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  CALL-TO-ACTION SECTION                     │
│  Background: Dark navy (bg-slate-900)       │
│  - Category-specific CTA title             │
│  - Description                             │
│  - "Browse All {Category}" button          │
│  - "Back to {Parent/Hub}" button           │
└─────────────────────────────────────────────┘
```

### Component Reusability Strategy

**Option A: Extract Shared Layout Component**

Create a new `UnifiedHubLayout` component that encapsulates the visual structure:

```typescript
// src/components/hub/UnifiedHubLayout.tsx

interface UnifiedHubLayoutProps {
  // Hero section
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };

  // Optional breadcrumb data
  breadcrumbs?: Array<{
    title: string;
    href: string;
  }>;

  // Introduction section
  introduction?: {
    label: string;
    title: string;
    subtitle: string;
    paragraphs: Array<{
      text: string;
      emphasized?: boolean;
    }>;
  };

  // Categories/Topics section
  categories: {
    sectionLabel: string;      // "Explore Topics" / "Browse Church History"
    sectionTitle: string;      // "Learning" / "Church History"
    description: string;
    cards: Array<{
      title: string;
      description: string;
      imageUrl: string;
      url: string;
    }>;
  };

  // Call-to-action section
  cta: {
    title: string;
    description: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

export function UnifiedHubLayout({
  hero,
  breadcrumbs,
  introduction,
  categories,
  cta
}: UnifiedHubLayoutProps) {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title={hero.title}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        primaryButton={hero.primaryButton}
        secondaryButton={hero.secondaryButton}
      />

      {/* Breadcrumbs (if provided) */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <section className="bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-600">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && <span>/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-slate-900 font-medium">
                      {crumb.title}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-gold-600 transition-colors"
                    >
                      {crumb.title}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </section>
      )}

      {/* Introduction Section */}
      {introduction && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-gold-500" />
                  <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                    {introduction.label}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                  <span className="block">{introduction.title}</span>
                  <span className="block text-3xl lg:text-4xl font-medium">
                    {introduction.subtitle}
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                {introduction.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={paragraph.emphasized ? 'text-slate-900 font-semibold' : ''}
                    dangerouslySetInnerHTML={{ __html: paragraph.text }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section id="topics" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                {categories.sectionLabel}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
              <span className="block">{categories.sectionTitle}</span>
              <span className="block text-3xl lg:text-4xl font-medium">
                {breadcrumbs ? 'Topics' : 'Categories'}
              </span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              {categories.description}
            </p>
          </div>

          <ThreePillarCards
            cards={categories.cards}
            className="bg-transparent"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            {cta.title}
          </h2>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.primaryButton && (
              <Link
                href={cta.primaryButton.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 hover:bg-gray-100 font-semibold transition-colors duration-300"
              >
                {cta.primaryButton.text}
              </Link>
            )}

            {cta.secondaryButton && (
              <Link
                href={cta.secondaryButton.href}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold transition-colors duration-300"
              >
                {cta.secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
```

**Option B: Extend Existing Pattern with Conditional Rendering**

Keep pages separate but use shared helper functions and content formatters:

```typescript
// src/lib/cms/hub-layout-helpers.ts

export function getCategoryLayoutContent(
  hub: HubSlug,
  category: HubCategory,
  config: HubConfig
) {
  // Generate category-specific content based on category metadata
  return {
    hero: {
      title: category.title,
      description: category.description || config.description,
      backgroundImage: category.imageUrl || config.heroImage,
      primaryButton: {
        text: `Explore ${category.title}`,
        href: '#topics'
      },
      secondaryButton: {
        text: `Back to ${config.title}`,
        href: config.baseRoute
      }
    },
    introduction: category.introduction || generateDefaultIntroduction(category),
    categories: {
      sectionLabel: `Browse ${category.title}`,
      sectionTitle: category.title,
      description: category.categoriesConfig?.description ||
                   `Explore our collection of ${category.title.toLowerCase()} resources.`,
      cards: category.children.map(child => ({
        title: isHubArticle(child) ? child.metadata.title : child.title,
        description: isHubArticle(child)
          ? child.metadata.description || ''
          : child.description || '',
        imageUrl: isHubArticle(child)
          ? child.metadata.imageUrl || config.heroImage
          : child.imageUrl || config.heroImage,
        url: `${config.baseRoute}/${child.fullSlug}`
      }))
    },
    cta: category.ctaConfig || generateDefaultCTA(category, config)
  };
}

function generateDefaultIntroduction(category: HubCategory) {
  return {
    label: `About ${category.title}`,
    title: 'Exploring',
    subtitle: category.title,
    paragraphs: [
      {
        text: category.description ||
              `Welcome to the ${category.title} section. Explore our curated collection of resources.`,
        emphasized: false
      }
    ]
  };
}

function generateDefaultCTA(category: HubCategory, config: HubConfig) {
  return {
    title: `Discover ${category.title}`,
    description: `Dive deeper into ${category.title.toLowerCase()} and expand your understanding.`,
    primaryButton: {
      text: 'Browse All Topics',
      href: '#topics'
    },
    secondaryButton: {
      text: `Back to ${config.title}`,
      href: config.baseRoute
    }
  };
}
```

---

## Implementation Specifications

### Recommended Approach: Option A (Shared Component)

**Rationale:**
- ✅ Single source of truth for layout structure
- ✅ Consistent visual design guaranteed
- ✅ Easier to maintain and update styling
- ✅ Reduced code duplication
- ✅ Type-safe props interface

### Step-by-Step Implementation Plan

#### Phase 1: Create UnifiedHubLayout Component

**File:** `/src/components/hub/UnifiedHubLayout.tsx`

**Tasks:**
1. Create component file with TypeScript interfaces
2. Extract section layout logic from `/src/app/(public)/[hub]/page.tsx`
3. Add prop validation and default values
4. Implement conditional rendering for optional sections
5. Add responsive breakpoints and accessibility attributes
6. Test with existing hub landing page data

**Acceptance Criteria:**
- Component renders correctly with all sections
- Optional sections (breadcrumbs, introduction) conditionally display
- Responsive design works across all breakpoints
- TypeScript compilation successful with zero errors
- No visual regressions when replacing current hub page implementation

#### Phase 2: Extend CMS Data Structure

**File:** `/src/lib/cms/unified-hub-cms.ts`

**Tasks:**
1. Add new interface `HubCategoryLayoutContent`
2. Create helper function `getCategoryLayoutContent()`
3. Implement default content generators
4. Add category-specific content to category metadata (optional initial values)
5. Update `getContentBySlug()` to return enhanced category objects

**New Interfaces:**

```typescript
export interface CategoryIntroduction {
  label: string;
  title: string;
  subtitle: string;
  paragraphs: Array<{
    text: string;
    emphasized?: boolean;
  }>;
}

export interface CategoryCTAConfig {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface HubCategoryEnhanced extends HubCategory {
  introduction?: CategoryIntroduction;
  categoriesConfig?: {
    sectionLabel: string;
    sectionTitle: string;
    description: string;
  };
  ctaConfig?: CategoryCTAConfig;
}
```

**Helper Function:**

```typescript
export function getCategoryLayoutContent(
  hub: HubSlug,
  category: HubCategory | HubCategoryEnhanced,
  config: HubConfig,
  breadcrumbs: Breadcrumb[]
): UnifiedHubLayoutProps {
  const enhanced = category as HubCategoryEnhanced;

  return {
    hero: {
      title: category.title,
      description: category.description || config.description,
      backgroundImage: category.imageUrl || config.heroImage,
      primaryButton: {
        text: `Explore ${category.title}`,
        href: '#topics'
      },
      secondaryButton: breadcrumbs.length > 1 ? {
        text: `Back to ${breadcrumbs[breadcrumbs.length - 2].title}`,
        href: breadcrumbs.length > 2
          ? `${config.baseRoute}/${breadcrumbs[breadcrumbs.length - 2].slug}`
          : config.baseRoute
      } : {
        text: `Back to ${config.title}`,
        href: config.baseRoute
      }
    },

    breadcrumbs: breadcrumbs.map(crumb => ({
      title: crumb.title,
      href: crumb.slug ? `${config.baseRoute}/${crumb.slug}` : config.baseRoute
    })),

    introduction: enhanced.introduction || {
      label: `About ${category.title}`,
      title: 'Exploring',
      subtitle: category.title,
      paragraphs: category.description ? [
        { text: category.description, emphasized: false }
      ] : [
        {
          text: `Welcome to the ${category.title} section. Browse our collection of resources and deepen your understanding.`,
          emphasized: false
        }
      ]
    },

    categories: {
      sectionLabel: enhanced.categoriesConfig?.sectionLabel ||
                    `Browse ${category.title}`,
      sectionTitle: enhanced.categoriesConfig?.sectionTitle ||
                    category.title,
      description: enhanced.categoriesConfig?.description ||
                   `Explore our curated collection of ${category.title.toLowerCase()} resources.`,
      cards: category.children.map(child => {
        if (isHubArticle(child)) {
          return {
            title: child.metadata.title,
            description: child.metadata.description || '',
            imageUrl: child.metadata.imageUrl || config.heroImage,
            url: `${config.baseRoute}/${child.fullSlug}`
          };
        } else {
          return {
            title: child.title,
            description: child.description || '',
            imageUrl: child.imageUrl || config.heroImage,
            url: `${config.baseRoute}/${child.fullSlug}`
          };
        }
      })
    },

    cta: enhanced.ctaConfig || {
      title: `Discover ${category.title}`,
      description: `Dive deeper into ${category.title.toLowerCase()} and expand your understanding of Catholic faith and tradition.`,
      primaryButton: {
        text: 'Browse All Topics',
        href: '#topics'
      },
      secondaryButton: {
        text: `Back to ${config.title}`,
        href: config.baseRoute
      }
    }
  };
}
```

**Acceptance Criteria:**
- All category pages have default content that looks polished
- Helper function generates valid layout props
- TypeScript types prevent invalid data
- Breadcrumbs correctly generate href links
- Default content is contextually appropriate

#### Phase 3: Update Hub Landing Page

**File:** `/src/app/(public)/[hub]/page.tsx`

**Tasks:**
1. Import `UnifiedHubLayout` component
2. Transform `getHubSpecificContent()` output to match `UnifiedHubLayoutProps`
3. Replace existing JSX with `<UnifiedHubLayout>` component
4. Pass hub-specific content as props
5. Test all three hubs (learning-hub, prayer-hub, spiritual-reflections)

**Before:**

```tsx
export default async function HubLandingPage({ params }: HubPageProps) {
  const { hub } = await params;
  if (!isValidHub(hub)) notFound();

  const config = HUB_CONFIGS[hub];
  const categories = getTopLevelCategories(hub);
  const hubContent = getHubSpecificContent(hub);

  return (
    <main>
      <Hero {...} />
      <section className="py-16 bg-white">...</section>
      <section id="topics" className="py-16 bg-slate-50">...</section>
      <section className="py-16 bg-slate-900">...</section>
    </main>
  );
}
```

**After:**

```tsx
import UnifiedHubLayout from '@/components/hub/UnifiedHubLayout';

export default async function HubLandingPage({ params }: HubPageProps) {
  const { hub } = await params;
  if (!isValidHub(hub)) notFound();

  const config = HUB_CONFIGS[hub];
  const categories = getTopLevelCategories(hub);
  const hubContent = getHubSpecificContent(hub);

  const layoutProps: UnifiedHubLayoutProps = {
    hero: {
      title: config.title,
      description: config.description,
      backgroundImage: config.heroImage,
      primaryButton: { text: 'Explore Topics', href: '#topics' },
      secondaryButton: hubContent.secondaryButton
    },
    breadcrumbs: undefined, // Hub landing has no breadcrumbs
    introduction: hubContent.introduction,
    categories: {
      sectionLabel: 'Explore Topics',
      sectionTitle: hubContent.categoriesTitle,
      description: hubContent.categoriesDescription,
      cards: categories.map(category => ({
        title: category.title,
        description: category.description || '',
        imageUrl: category.imageUrl || config.heroImage,
        url: `${config.baseRoute}/${category.fullSlug}`
      }))
    },
    cta: {
      title: hubContent.ctaTitle,
      description: hubContent.ctaDescription,
      primaryButton: { text: 'Explore Topics', href: '#topics' },
      secondaryButton: { text: 'Contact Us', href: '/contact-us' }
    }
  };

  return <UnifiedHubLayout {...layoutProps} />;
}
```

**Acceptance Criteria:**
- All hub landing pages render identically to before
- No visual regressions
- Build succeeds with zero TypeScript errors
- Links and navigation work correctly

#### Phase 4: Update Category Pages

**File:** `/src/app/(public)/[hub]/[...slug]/page.tsx`

**Tasks:**
1. Import `UnifiedHubLayout` and `getCategoryLayoutContent`
2. Replace category page rendering logic
3. Use helper function to generate layout props
4. Remove old `PageLayout`, `PageHero`, `Section` usage
5. Test multi-level navigation (Level 1, Level 2, Level 3 categories)

**Before:**

```tsx
export default async function HubContentPage({ params }: HubContentPageProps) {
  const { hub, slug } = await params;
  if (!isValidHub(hub)) notFound();

  const config = HUB_CONFIGS[hub];
  const content = getContentBySlug(hub, slug);
  if (!content) return <NotFoundUI />;

  const breadcrumbs = getBreadcrumbs(hub, slug);

  // Article rendering...
  if (isHubArticle(content)) {
    return <UniversalBlogTemplate {...} />;
  }

  // Category rendering
  const category = content as HubCategory;
  return (
    <PageLayout background="slate">
      <PageHero {...} />
      <Section>Breadcrumbs</Section>
      <Section><ThreePillarCards /></Section>
      <Section>Back Button</Section>
    </PageLayout>
  );
}
```

**After:**

```tsx
import UnifiedHubLayout from '@/components/hub/UnifiedHubLayout';
import { getCategoryLayoutContent } from '@/lib/cms/unified-hub-cms';

export default async function HubContentPage({ params }: HubContentPageProps) {
  const { hub, slug } = await params;
  if (!isValidHub(hub)) notFound();

  const config = HUB_CONFIGS[hub];
  const content = getContentBySlug(hub, slug);
  if (!content) return <NotFoundUI />;

  const breadcrumbs = getBreadcrumbs(hub, slug);

  // Article rendering (unchanged)
  if (isHubArticle(content)) {
    return <UniversalBlogTemplate {...} />;
  }

  // Category rendering with unified layout
  const category = content as HubCategory;
  const layoutProps = getCategoryLayoutContent(hub, category, config, breadcrumbs);

  return <UnifiedHubLayout {...layoutProps} />;
}
```

**Acceptance Criteria:**
- All category pages use unified design
- Visual consistency with hub landing pages
- Breadcrumbs display correctly
- Navigation works at all hierarchy levels
- Default content looks polished
- Build succeeds with zero errors

#### Phase 5: Add Custom Category Content (Optional Enhancement)

**File:** `/src/lib/cms/unified-hub-cms.ts` or new file `/src/lib/cms/category-content.ts`

**Tasks:**
1. Create category-specific content definitions
2. Map category slugs to custom introduction/CTA content
3. Update `getCategoryLayoutContent()` to check for custom content
4. Add custom content for key categories (e.g., Church History, Novenas)

**Example:**

```typescript
// src/lib/cms/category-content.ts

export const CATEGORY_CUSTOM_CONTENT: Record<string, {
  introduction?: CategoryIntroduction;
  categoriesConfig?: {
    sectionLabel: string;
    sectionTitle: string;
    description: string;
  };
  ctaConfig?: CategoryCTAConfig;
}> = {
  'learning-hub/church-history': {
    introduction: {
      label: 'About Church History',
      title: 'Journey Through',
      subtitle: 'Catholic Church History',
      paragraphs: [
        {
          text: 'The history of the Catholic Church spans two millennia, from the time of Christ to the present day. This rich tapestry includes periods of growth and challenge, saints and scholars, councils and reforms.',
          emphasized: false
        },
        {
          text: 'Explore the key events, figures, and movements that have shaped our faith community and continue to inspire us today.',
          emphasized: true
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Browse Historical Periods',
      sectionTitle: 'Church History',
      description: 'From the early Church to modern times, explore the major periods and events that have defined Catholic history.'
    },
    ctaConfig: {
      title: 'Deepen Your Historical Understanding',
      description: 'Understanding our history helps us appreciate the living tradition we inherit and carry forward.',
      primaryButton: {
        text: 'Explore Historical Periods',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Back to Learning Hub',
        href: '/learning-hub'
      }
    }
  },

  'prayer-hub/novenas': {
    introduction: {
      label: 'About Novenas',
      title: 'Nine Days of',
      subtitle: 'Devoted Prayer',
      paragraphs: [
        {
          text: 'A novena is a traditional Catholic devotion consisting of nine days of prayer, often seeking special graces or intercession from God, Mary, or the saints.',
          emphasized: false
        },
        {
          text: 'The practice has roots in the nine days the Apostles spent in prayer between the Ascension and Pentecost, waiting for the Holy Spirit.',
          emphasized: false
        },
        {
          text: 'Discover novenas for various occasions and intentions, and deepen your spiritual life through this time-honored practice.',
          emphasized: true
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Browse Novenas',
      sectionTitle: 'Prayer Novenas',
      description: 'Find novenas for different seasons, saints, and intentions to guide your nine-day prayer journey.'
    },
    ctaConfig: {
      title: 'Begin Your Novena',
      description: 'Choose a novena and commit to nine days of focused prayer and spiritual growth.',
      primaryButton: {
        text: 'View All Novenas',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Submit Prayer Request',
        href: '/prayer-hub/request'
      }
    }
  }

  // Add more custom content as needed
};

// Update getCategoryLayoutContent to check for custom content
export function getCategoryLayoutContent(
  hub: HubSlug,
  category: HubCategory | HubCategoryEnhanced,
  config: HubConfig,
  breadcrumbs: Breadcrumb[]
): UnifiedHubLayoutProps {
  const categoryPath = `${hub}/${category.fullSlug}`;
  const customContent = CATEGORY_CUSTOM_CONTENT[categoryPath];
  const enhanced = category as HubCategoryEnhanced;

  return {
    // ... (rest of implementation)
    introduction: customContent?.introduction ||
                  enhanced.introduction ||
                  generateDefaultIntroduction(category),
    // ...
  };
}
```

**Acceptance Criteria:**
- Custom content displays for specified categories
- Fallback to default content works correctly
- Content is contextually appropriate and well-written
- Easy to add new custom content without code changes

---

## Migration Strategy

### Migration Phases

**Phase 0: Preparation** (1-2 hours)
- ✅ Review current architecture
- ✅ Document existing behavior
- ✅ Create this technical specification document
- ✅ Get stakeholder approval

**Phase 1: Component Development** (2-3 hours)
- Create `UnifiedHubLayout` component
- Test with mock data
- Ensure responsive design works
- Validate accessibility

**Phase 2: CMS Extension** (2-3 hours)
- Add new TypeScript interfaces
- Implement `getCategoryLayoutContent()` helper
- Create default content generators
- Test data flow with existing categories

**Phase 3: Hub Landing Migration** (1-2 hours)
- Update `/src/app/(public)/[hub]/page.tsx`
- Test all three hubs
- Verify no visual regressions
- Fix any layout issues

**Phase 4: Category Page Migration** (2-3 hours)
- Update `/src/app/(public)/[hub]/[...slug]/page.tsx`
- Test multiple category levels
- Verify breadcrumb navigation
- Test card links and routing

**Phase 5: Content Enhancement** (Optional, 3-5 hours)
- Write custom content for key categories
- Add category-specific imagery
- Enhance descriptions and CTAs
- Gather feedback and iterate

**Total Estimated Time:** 8-18 hours (depending on custom content scope)

### Rollback Strategy

If issues arise during migration:

1. **Git-based Rollback:**
   ```bash
   # Create feature branch for migration
   git checkout -b feature/unified-hub-design

   # If issues occur, revert to main
   git checkout main
   ```

2. **Component-level Fallback:**
   - Keep old page components as `.backup` files
   - Use feature flags to toggle between old/new layouts

3. **Progressive Migration:**
   - Migrate one hub at a time (start with learning-hub)
   - Monitor analytics and user feedback
   - Proceed to other hubs only after validation

### Testing Checklist

**Visual Regression Testing:**
- [ ] Hub landing pages match original design
- [ ] Category Level 1 pages have unified design
- [ ] Category Level 2+ pages have unified design
- [ ] Responsive breakpoints work (mobile, tablet, desktop)
- [ ] Dark mode compatibility (if applicable)

**Functional Testing:**
- [ ] All navigation links work correctly
- [ ] Breadcrumbs show correct hierarchy
- [ ] ThreePillarCards navigate to correct URLs
- [ ] CTA buttons link to correct destinations
- [ ] Back buttons return to correct parent pages

**Data Integrity Testing:**
- [ ] All categories display correct content
- [ ] All articles display in UniversalBlogTemplate
- [ ] Related articles show correctly
- [ ] Metadata generates correctly for SEO

**Performance Testing:**
- [ ] Page load times remain acceptable (<3s)
- [ ] Images load efficiently (Next.js Image optimization)
- [ ] No console errors or warnings
- [ ] Lighthouse scores remain above 90

**TypeScript Validation:**
- [ ] Zero TypeScript compilation errors
- [ ] All interfaces correctly typed
- [ ] No `any` types used
- [ ] Props validation prevents invalid data

**Build Testing:**
- [ ] `npm run build` succeeds
- [ ] `npm run type-check` passes
- [ ] Static params generate correctly
- [ ] All routes build successfully

---

## Technical Specifications

### TypeScript Interfaces

**Complete Interface Definitions:**

```typescript
// src/components/hub/UnifiedHubLayout.tsx

export interface HeroConfig {
  title: string;
  description: string;
  backgroundImage: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface IntroductionConfig {
  label: string;
  title: string;
  subtitle: string;
  paragraphs: Array<{
    text: string;         // Can contain HTML
    emphasized?: boolean; // Applies font-semibold
  }>;
}

export interface PillarCard {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface CategoriesConfig {
  sectionLabel: string;   // "Explore Topics" | "Browse Church History"
  sectionTitle: string;   // "Learning" | "Church History"
  description: string;    // Section description paragraph
  cards: PillarCard[];
}

export interface CTAConfig {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface UnifiedHubLayoutProps {
  hero: HeroConfig;
  breadcrumbs?: BreadcrumbItem[];
  introduction?: IntroductionConfig;
  categories: CategoriesConfig;
  cta: CTAConfig;
}
```

**CMS Interface Extensions:**

```typescript
// src/lib/cms/unified-hub-cms.ts

export interface CategoryIntroduction {
  label: string;
  title: string;
  subtitle: string;
  paragraphs: Array<{
    text: string;
    emphasized?: boolean;
  }>;
}

export interface CategoryCategoriesConfig {
  sectionLabel: string;
  sectionTitle: string;
  description: string;
}

export interface CategoryCTAConfig {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface HubCategoryEnhanced extends HubCategory {
  introduction?: CategoryIntroduction;
  categoriesConfig?: CategoryCategoriesConfig;
  ctaConfig?: CategoryCTAConfig;
}
```

### File Structure

```
/home/jack/Documents/st_saviours_fresh/
├── src/
│   ├── app/
│   │   └── (public)/
│   │       ├── [hub]/
│   │       │   ├── page.tsx                    # Hub landing (uses UnifiedHubLayout)
│   │       │   └── [...slug]/
│   │       │       └── page.tsx                # Category/Article pages (uses UnifiedHubLayout)
│   │       └── layout.tsx
│   ├── components/
│   │   ├── hub/
│   │   │   └── UnifiedHubLayout.tsx            # NEW: Shared hub/category layout
│   │   ├── Hero.tsx                            # Existing full-screen hero
│   │   ├── ThreePillarCards.tsx                # Existing card grid component
│   │   └── layout/
│   │       ├── PageHero.tsx                    # Keep for non-hub pages
│   │       └── PageLayout.tsx                  # Keep for non-hub pages
│   └── lib/
│       └── cms/
│           ├── unified-hub-cms.ts              # UPDATED: Add getCategoryLayoutContent()
│           ├── category-content.ts             # NEW: Custom category content
│           └── hub-content-data.ts             # Existing article data
└── HUB_CATEGORY_UNIFICATION_ANALYSIS.md        # This document
```

### Responsive Design Breakpoints

**Tailwind CSS v4 Breakpoints:**

```css
/* Mobile First */
Base:       0px     - 639px   (no prefix)
sm:         640px   - 767px   (sm:)
md:         768px   - 1023px  (md:)
lg:         1024px  - 1279px  (lg:)
xl:         1280px  - 1535px  (xl:)
2xl:        1536px+           (2xl:)
```

**Typography Scaling:**

| Element | Mobile (Base) | Tablet (md:) | Desktop (lg:) | Large (xl:) |
|---------|---------------|--------------|---------------|-------------|
| Hero Title | `text-6xl` (3.75rem) | - | `text-8xl` (6rem) | - |
| Section Heading Main | `text-4xl` (2.25rem) | - | `text-5xl` (3rem) | - |
| Section Heading Sub | `text-3xl` (1.875rem) | - | `text-4xl` (2.25rem) | - |
| Section Label | `text-sm` (0.875rem) | - | - | - |
| Body Text | `text-lg` (1.125rem) | - | - | - |
| Breadcrumbs | `text-sm` (0.875rem) | - | - | - |

**Spacing Scale:**

| Section | Padding Y |
|---------|-----------|
| Introduction | `py-16` (4rem) |
| Categories | `py-16` (4rem) |
| CTA | `py-16` (4rem) |
| Breadcrumbs | `py-6` (1.5rem) |
| Back Navigation | `py-12` (3rem) |

**Container Widths:**

| Container | Max Width | Padding X |
|-----------|-----------|-----------|
| Main Container | `max-w-7xl` (80rem) | `px-4 sm:px-6 lg:px-8` |
| Introduction Content | `max-w-4xl` (56rem) | - |
| CTA Content | `max-w-3xl` (48rem) | - |

### Color Palette

**Primary Colors:**

```css
/* Brand Colors (from tailwind.css @theme) */
--color-primary-900: #0f172a   /* Navy (dark) */
--color-primary-700: #1e293b   /* Navy (medium) */
--color-primary-50:  #f8fafc   /* Navy (light) */

--color-gold-600:    #ca9e5b   /* Gold (primary) */
--color-gold-500:    #d4a762   /* Gold (light) */
--color-gold-400:    #e8c292   /* Gold (lighter) */

--color-slate-900:   #0f172a   /* Dark background */
--color-slate-800:   #1e293b   /* Medium background */
--color-slate-50:    #f8fafc   /* Light background */
--color-slate-700:   #334155   /* Borders/dividers */
```

**Section Background Mapping:**

| Section | Background Class | Color Value |
|---------|------------------|-------------|
| Hero | Multi-layer overlay | `slate-900/90` + `gold-600/70` |
| Introduction | `bg-white` | `#ffffff` |
| Categories | `bg-slate-50` | `#f8fafc` |
| CTA | `bg-slate-900` | `#0f172a` |
| Breadcrumbs | `bg-white/95` | `rgba(255,255,255,0.95)` |

**Text Color Mapping:**

| Context | Text Class | Color Value |
|---------|------------|-------------|
| Hero text | `text-white` | `#ffffff` |
| Introduction heading | `text-slate-900` | `#0f172a` |
| Introduction body | `text-slate-700` | `#334155` |
| Categories heading | `text-primary-900` | `#0f172a` |
| CTA heading | `text-white` | `#ffffff` |
| CTA body | `text-gray-200` | `#e5e7eb` |
| Gold accent | `text-gold-500` | `#d4a762` |
| Breadcrumb link | `text-slate-600` | `#475569` |
| Breadcrumb active | `text-slate-900` | `#0f172a` |

---

## Testing & Validation

### Manual Testing Scenarios

**Scenario 1: Hub Landing Page Navigation**

1. Navigate to `/learning-hub`
2. Verify hero displays with correct title and description
3. Verify introduction section shows hub-specific content
4. Click "Explore Topics" button → scrolls to categories section
5. Verify categories display as ThreePillarCards
6. Click a category card → navigates to category page
7. Verify CTA section displays at bottom
8. Click "Contact Us" → navigates to contact page

**Expected Results:**
- All sections render correctly
- Smooth scroll behavior works
- Navigation links function properly
- Visual design matches specification

**Scenario 2: Category Page Navigation (Level 1)**

1. Navigate to `/learning-hub/church-history`
2. Verify hero displays with category title
3. Verify breadcrumbs show: "Learning Hub / Church History"
4. Verify introduction section displays (default or custom)
5. Verify sub-categories display as ThreePillarCards
6. Click a sub-category card → navigates to article or Level 2 category
7. Verify CTA section with appropriate buttons
8. Click "Back to Learning Hub" → returns to hub landing

**Expected Results:**
- Category page uses unified design
- Breadcrumbs are accurate and clickable
- Default content looks polished
- Navigation works correctly

**Scenario 3: Multi-Level Category Navigation (Level 2+)**

1. Navigate to `/learning-hub/church-history/medieval-period` (if exists)
2. Verify hero displays with sub-category title
3. Verify breadcrumbs show full path
4. Verify all sections render correctly
5. Click breadcrumb links → navigates to correct parent pages
6. Click "Back to Church History" → returns to Level 1 category

**Expected Results:**
- Deep category navigation works
- Breadcrumbs show complete hierarchy
- Back button navigates to correct parent
- No broken links or 404 errors

**Scenario 4: Article Page Rendering**

1. Navigate to `/learning-hub/church-history/12th-century-timeline`
2. Verify article renders in `UniversalBlogTemplate`
3. Verify breadcrumbs show: "Learning Hub / Church History / [Article Title]"
4. Verify article content displays correctly
5. Verify related articles section shows category siblings

**Expected Results:**
- Article pages unchanged (still use UniversalBlogTemplate)
- Breadcrumbs remain functional
- Related articles display correctly

**Scenario 5: Custom Content Display**

1. Navigate to category with custom content (e.g., `/learning-hub/church-history`)
2. Verify custom introduction displays instead of default
3. Verify custom CTA content displays
4. Navigate to category without custom content
5. Verify default content generates appropriately

**Expected Results:**
- Custom content takes precedence
- Default content is contextually appropriate
- No missing content sections

### Automated Testing

**TypeScript Compilation:**

```bash
npm run type-check
# Expected: No errors
```

**Build Test:**

```bash
npm run build
# Expected: Successful build, all routes compile
```

**Lint Test:**

```bash
npm run lint
# Expected: No errors or warnings
```

### Accessibility Validation

**ARIA Attributes:**

```tsx
// Ensure sections have proper ARIA labels
<section
  id="topics"
  aria-labelledby="topics-heading"
  aria-describedby="topics-description"
>
  <h2 id="topics-heading">{categories.sectionTitle}</h2>
  <p id="topics-description">{categories.description}</p>
  {/* ... */}
</section>
```

**Keyboard Navigation:**
- [ ] All interactive elements focusable via Tab
- [ ] Focus indicators visible
- [ ] Skip-to-content link available
- [ ] No keyboard traps

**Screen Reader Testing:**
- [ ] Headings form logical hierarchy (h1 → h2 → h3)
- [ ] Links have descriptive text
- [ ] Images have alt text
- [ ] Landmarks properly labeled (nav, main, section)

### Performance Benchmarks

**Target Metrics:**

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| First Contentful Paint | < 1.5s | TBD | - |
| Largest Contentful Paint | < 2.5s | TBD | - |
| Time to Interactive | < 3.0s | TBD | - |
| Cumulative Layout Shift | < 0.1 | TBD | - |
| Lighthouse Performance | > 90 | TBD | - |
| Lighthouse Accessibility | > 95 | TBD | - |
| Lighthouse SEO | > 95 | TBD | - |

**Optimization Strategies:**

1. **Image Optimization:**
   - Use Next.js `<Image>` component
   - Set appropriate `sizes` attribute
   - Use `priority` for hero images
   - Lazy load below-fold images

2. **Code Splitting:**
   - Dynamic imports for heavy components
   - Lazy load ThreePillarCards images
   - Defer non-critical CSS

3. **Caching:**
   - Static generation via `generateStaticParams()`
   - Revalidate on content changes
   - CDN caching for images

---

## Conclusion

This comprehensive analysis provides a complete roadmap for unifying the hub design across all category hierarchy levels. The proposed solution maintains visual consistency, improves user engagement, and establishes a maintainable architecture for future growth.

**Key Takeaways:**

1. **Unified Component** - `UnifiedHubLayout` provides single source of truth
2. **Enhanced Data** - CMS extensions support rich per-category content
3. **Default Content** - Intelligent generators ensure polished appearance everywhere
4. **Progressive Enhancement** - Custom content can be added incrementally
5. **Maintainable** - Type-safe interfaces prevent errors and guide developers

**Next Steps:**

1. Review and approve this specification
2. Begin Phase 1: Create `UnifiedHubLayout` component
3. Test with mock data to validate design
4. Proceed through migration phases systematically
5. Gather user feedback and iterate

**Success Metrics:**

- ✅ Zero visual regressions on hub landing pages
- ✅ Consistent design across all category levels
- ✅ Zero TypeScript compilation errors
- ✅ Successful build with all routes
- ✅ Improved user engagement metrics (time on page, click-through rate)
- ✅ Positive stakeholder feedback

---

**Document Version:** 1.0
**Last Updated:** 2025-11-05
**Author:** Claude Code (Technical Documentation Architect)
**Project:** St Saviour's Catholic Church Website
**Technology Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4
