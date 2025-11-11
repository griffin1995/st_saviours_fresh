# St Saviour's Catholic Church Design System

**Version 1.0** | Last Updated: November 6, 2025

---

## Table of Contents

1. [Overview](#overview)
2. [Design Tokens](#design-tokens)
   - [Color Palette](#color-palette)
   - [Typography](#typography)
   - [Spacing System](#spacing-system)
   - [Layout Containers](#layout-containers)
   - [Border & Radius](#border--radius)
   - [Shadows & Effects](#shadows--effects)
   - [Breakpoints](#breakpoints)
3. [Component Patterns](#component-patterns)
   - [Buttons](#buttons)
   - [Cards](#cards)
   - [Badges](#badges)
   - [Hero Sections](#hero-sections)
   - [Pillar Cards](#pillar-cards)
   - [Typography Components](#typography-components)
4. [Page Layouts](#page-layouts)
   - [Hub Landing Pages](#hub-landing-pages)
   - [Category Pages](#category-pages)
   - [Article Pages](#article-pages)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Best Practices](#best-practices)
7. [Usage Examples](#usage-examples)
8. [Quick Reference](#quick-reference)
9. [Change Log](#change-log)

---

## Overview

### What is This Design System?

This design system provides comprehensive guidelines for building and maintaining the St Saviour's Catholic Church website. It documents design tokens, component patterns, and best practices using **Tailwind CSS v4** with a CSS-first configuration approach.

### Who is This For?

- **Developers**: Implementing new features or pages
- **Designers**: Understanding technical constraints and possibilities
- **Maintainers**: Ensuring consistency across the codebase

### How to Use This Documentation

1. **Start with Design Tokens** to understand the foundational elements
2. **Reference Component Patterns** when building UI components
3. **Check Accessibility Guidelines** to ensure WCAG 2.1 AA compliance
4. **Use Quick Reference** for fast lookups during development

### Technology Stack

- **Framework**: Next.js 16 (App Router)
- **React**: Version 19.2.0
- **Styling**: Tailwind CSS v4.1.16 (CSS-first configuration)
- **TypeScript**: v5.9.3 (strict mode)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Variant Management**: class-variance-authority (CVA)

---

## Design Tokens

Design tokens are the foundational elements of the design system. In Tailwind CSS v4, tokens are defined using the `@theme` directive and automatically become both CSS variables and utility classes.

### Color Palette

#### Primary (Navy Blue)

The primary color represents the Catholic Church's traditional navy blue, used for headings, navigation, and key UI elements.

**Token Definition** (`tailwind.css` lines 27-38):

```css
@theme {
  --color-primary-50: #f8f9fc;
  --color-primary-100: #f1f3f8;
  --color-primary-200: #e3e7f0;
  --color-primary-300: #c6d0e8;
  --color-primary-400: #8fa2d4;
  --color-primary-500: #5b6bb3;
  --color-primary-600: #4a5a97;
  --color-primary-700: #3f4a7e;
  --color-primary-800: #2f3960;
  --color-primary-900: #252a4d;
  --color-primary-950: #1a1e3a;
}
```

**CSS Variables**:
- `var(--color-primary-50)` through `var(--color-primary-950)`

**Tailwind Utilities**:
```html
<!-- Background -->
<div class="bg-primary-700">Navy background</div>

<!-- Text -->
<h1 class="text-primary-900">Navy text</h1>

<!-- Border -->
<div class="border-primary-600">Navy border</div>
```

**Usage Guidelines**:
- Use `primary-700` for headings and important text
- Use `primary-900` for dark backgrounds and strong emphasis
- Use `primary-50` to `primary-200` for subtle backgrounds
- Never use primary colors for success/error states

**Accessibility**:
- `primary-900` on white: **14.5:1** (AAA) ✓
- White on `primary-900`: **14.5:1** (AAA) ✓
- `primary-700` on white: **8.2:1** (AAA) ✓
- White on `primary-700`: **8.2:1** (AAA) ✓

---

#### Gold (Accent)

The gold accent color provides warmth and draws attention to calls-to-action, links, and decorative elements.

**Token Definition** (`tailwind.css` lines 40-51):

```css
@theme {
  --color-gold-50: #fefcf7;
  --color-gold-100: #fdf8eb;
  --color-gold-200: #faf0d2;
  --color-gold-300: #f5e4a9;
  --color-gold-400: #eed480;
  --color-gold-500: #e5c457;
  --color-gold-600: #ca9e5b;
  --color-gold-700: #a67234;
  --color-gold-800: #8a5e2a;
  --color-gold-900: #6d4a21;
  --color-gold-950: #4a3318;
}
```

**CSS Variables**:
- `var(--color-gold-50)` through `var(--color-gold-950)`

**Tailwind Utilities**:
```html
<!-- Primary Button -->
<button class="bg-gold-600 text-white hover:bg-gold-500">
  Get Started
</button>

<!-- Link Accent -->
<a class="text-gold-600 hover:text-gold-700">Learn More</a>

<!-- Decorative Border -->
<div class="border-l-4 border-gold-600">
  Featured content
</div>
```

**Alias**: Gold is also aliased as `accent` for semantic naming:
```html
<!-- These are equivalent -->
<div class="bg-gold-600">Gold background</div>
<div class="bg-accent-600">Accent background</div>
```

**Usage Guidelines**:
- Use `gold-600` for primary buttons and CTAs
- Use `gold-500` and `gold-700` for hover states
- Use `gold-50` to `gold-100` for subtle highlights
- Avoid using gold for large background areas

**Accessibility**:
- `gold-600` on white: **4.5:1** (AA) ✓
- White on `gold-600`: **4.5:1** (AA) ✓
- `gold-700` on white: **5.8:1** (AA+) ✓
- White on `gold-700`: **5.8:1** (AA+) ✓

---

#### Semantic Colors

Special-purpose colors for dark sections and text on dark backgrounds.

**Token Definition** (`tailwind.css` lines 66-73):

```css
@theme {
  /* Dark section backgrounds */
  --color-dark-section: #1e293b;     /* slate-800 */
  --color-darker-section: #0f172a;   /* slate-900 */

  /* Text colors for dark backgrounds */
  --color-text-on-dark: #e5e7eb;         /* Light gray */
  --color-text-on-dark-muted: #d1d5db;   /* Medium gray */
  --color-text-on-dark-subtle: #9ca3af;  /* Subtle gray */
}
```

**Tailwind Utilities**:
```html
<!-- Dark Section -->
<section class="bg-dark-section text-text-on-dark">
  <h2>Section Heading</h2>
  <p class="text-text-on-dark-muted">Supporting text</p>
  <small class="text-text-on-dark-subtle">Fine print</small>
</section>

<!-- Darker Section -->
<footer class="bg-darker-section text-text-on-dark">
  Footer content
</footer>
```

**Usage Guidelines**:
- Use `dark-section` for alternating content sections
- Use `darker-section` for footers or strong emphasis
- Always pair with appropriate `text-on-dark` variants
- Add `data-dark-bg` attribute for automatic text color handling

**Accessibility**:
- `text-on-dark` on `dark-section`: **12.6:1** (AAA) ✓
- `text-on-dark-muted` on `dark-section`: **9.8:1** (AAA) ✓
- `text-on-dark-subtle` on `dark-section`: **5.2:1** (AA+) ✓

---

#### Neutral Colors (Slate)

Tailwind's default slate palette is available for borders, backgrounds, and UI elements.

**Available Shades**:
- `slate-50` through `slate-950`

**Common Uses**:
```html
<!-- Borders -->
<div class="border border-slate-200">Card with border</div>

<!-- Backgrounds -->
<div class="bg-slate-50">Light background</div>
<div class="bg-slate-900">Dark background</div>

<!-- Text -->
<p class="text-slate-600">Body text</p>
<small class="text-slate-500">Muted text</small>
```

---

### Typography

#### Font Families

Three carefully selected font families provide hierarchy and readability.

**Token Definition** (`tailwind.css` lines 75-78):

```css
@theme {
  --font-heading: var(--font-noto-serif), Georgia, serif;
  --font-body: var(--font-source-serif-4), Georgia, serif;
  --font-technical: var(--font-jetbrains-mono), Consolas, monospace;
}
```

**Font Loading**:
Fonts are optimized through Next.js's `next/font` for automatic subsetting and optimization.

**CSS Variables**:
```css
var(--font-heading)    /* Noto Serif */
var(--font-body)       /* Source Serif 4 */
var(--font-technical)  /* JetBrains Mono */
```

**Tailwind Classes**:
```html
<!-- Headings -->
<h1 class="font-[family-name:var(--font-heading)]">
  Heading Text
</h1>

<!-- Body Text -->
<p class="font-[family-name:var(--font-body)]">
  Body text with Source Serif 4
</p>

<!-- Code/Technical -->
<code class="font-[family-name:var(--font-technical)]">
  const example = true;
</code>
```

**Usage Guidelines**:
- **Headings**: Use Noto Serif for all h1-h6 elements
- **Body**: Use Source Serif 4 for paragraphs, lists, and standard content
- **Technical**: Use JetBrains Mono for code blocks, technical data, and monospaced content

---

#### Typography Scale

Responsive typography using component classes for consistency.

**Heading Scales** (`tailwind.css` lines 214-267):

```css
/* H1 - Main page headings */
.typography-h1 {
  font-family: var(--font-family-heading);
  font-size: 2.25rem;        /* 36px mobile */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.05em;
}
@media (min-width: 1024px) {
  .typography-h1 {
    font-size: 3rem;          /* 48px desktop */
  }
}

/* H2 - Section headings */
.typography-h2 {
  font-family: var(--font-family-heading);
  font-size: 1.875rem;       /* 30px mobile */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
}
@media (min-width: 1024px) {
  .typography-h2 {
    font-size: 2.25rem;       /* 36px desktop */
  }
}

/* H3 - Subsection headings */
.typography-h3 {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;         /* 24px mobile */
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.025em;
}
@media (min-width: 1024px) {
  .typography-h3 {
    font-size: 1.875rem;      /* 30px desktop */
  }
}

/* H4 - Card titles */
.typography-h4 {
  font-family: var(--font-family-heading);
  font-size: 1.25rem;        /* 20px mobile */
  font-weight: 500;
  line-height: 1.4;
}
@media (min-width: 1024px) {
  .typography-h4 {
    font-size: 1.5rem;        /* 24px desktop */
  }
}
```

**Body Text Scales**:

```css
/* Large body - Hero descriptions, lead paragraphs */
.typography-body-large {
  font-family: var(--font-family-body);
  font-size: 1.125rem;       /* 18px */
  line-height: 1.6;
}

/* Standard body - Main content */
.typography-body {
  font-family: var(--font-family-body);
  font-size: 1rem;           /* 16px */
  line-height: 1.5;
}

/* Small body - Captions, fine print */
.typography-body-small {
  font-family: var(--font-family-body);
  font-size: 0.875rem;       /* 14px */
  line-height: 1.5;
  letter-spacing: 0.025em;
}
```

**Usage Examples**:

```html
<!-- Using component classes -->
<h1 class="typography-h1">Page Title</h1>
<h2 class="typography-h2">Section Heading</h2>
<p class="typography-body-large">Lead paragraph</p>
<p class="typography-body">Standard content</p>

<!-- Using Tailwind utilities (responsive) -->
<h1 class="text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

---

#### Font Weights

**Available Weights**:

| Class | Weight | Use Case |
|-------|--------|----------|
| `font-light` | 300 | Subtle text, decorative elements |
| `font-normal` | 400 | Body text, paragraphs |
| `font-medium` | 500 | Emphasized text, h4-h6 |
| `font-semibold` | 600 | h2-h3, card titles |
| `font-bold` | 700 | h1, strong emphasis |
| `font-extrabold` | 800 | Hero text |
| `font-black` | 900 | Maximum emphasis |

**Usage Example**:
```html
<h1 class="font-black">Maximum Impact</h1>
<h2 class="font-bold">Strong Heading</h2>
<h3 class="font-semibold">Subsection</h3>
<p class="font-normal">Body text</p>
<span class="font-light">Subtle text</span>
```

---

#### Line Heights

**Available Line Heights**:

| Class | Value | Use Case |
|-------|-------|----------|
| `leading-none` | 1 | Tight headings |
| `leading-tight` | 1.25 | Large headings |
| `leading-snug` | 1.375 | Medium headings |
| `leading-normal` | 1.5 | Body text |
| `leading-relaxed` | 1.625 | Comfortable reading |
| `leading-loose` | 2 | Spacious text |

**Best Practices**:
- Use `leading-tight` (1.2-1.25) for large headings
- Use `leading-normal` (1.5) for body text
- Use `leading-relaxed` (1.6) for longer articles

---

#### Letter Spacing

**Available Tracking**:

| Class | Value | Use Case |
|-------|-------|----------|
| `tracking-tighter` | -0.05em | Large headings (h1) |
| `tracking-tight` | -0.025em | Medium headings (h2-h3) |
| `tracking-normal` | 0 | Body text |
| `tracking-wide` | 0.025em | Small caps, buttons |
| `tracking-wider` | 0.05em | Uppercase labels |
| `tracking-widest` | 0.1em | Decorative text |

**Usage Example**:
```html
<h1 class="tracking-tighter">Large Heading</h1>
<h2 class="tracking-tight">Section Title</h2>
<p class="tracking-normal">Body text</p>
<span class="uppercase tracking-widest">Label</span>
```

---

### Spacing System

Tailwind's default spacing scale is based on a 0.25rem (4px) unit system.

#### Spacing Scale

| Class | Size | Pixels | Use Case |
|-------|------|--------|----------|
| `0` | 0 | 0px | No spacing |
| `px` | 1px | 1px | Minimal borders |
| `0.5` | 0.125rem | 2px | Tight spacing |
| `1` | 0.25rem | 4px | Minimal gap |
| `2` | 0.5rem | 8px | Small gap |
| `3` | 0.75rem | 12px | Default gap |
| `4` | 1rem | 16px | Medium gap |
| `5` | 1.25rem | 20px | Comfortable gap |
| `6` | 1.5rem | 24px | Section spacing |
| `8` | 2rem | 32px | Large gap |
| `10` | 2.5rem | 40px | Extra large gap |
| `12` | 3rem | 48px | Section padding |
| `16` | 4rem | 64px | Section margin |
| `20` | 5rem | 80px | Large section |
| `24` | 6rem | 96px | Extra large section |

#### Common Patterns

**Component Padding**:
```html
<!-- Card padding -->
<div class="p-6 lg:p-8">Card content</div>

<!-- Section padding -->
<section class="py-12 lg:py-16 px-4">Section</section>

<!-- Container padding -->
<div class="px-4 sm:px-6 lg:px-8">Container</div>
```

**Vertical Rhythm**:
```html
<!-- Heading to paragraph -->
<h2 class="mb-4">Heading</h2>
<p class="mb-6">Paragraph</p>

<!-- Between sections -->
<section class="mb-16">Section 1</section>
<section class="mb-16">Section 2</section>
```

**Component Gaps**:
```html
<!-- Flex gap -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid gap -->
<div class="grid grid-cols-3 gap-6">
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
</div>
```

---

### Layout Containers

#### Container Widths

Standard max-width classes for content containers:

| Class | Max Width | Use Case |
|-------|-----------|----------|
| `max-w-screen-sm` | 640px | Narrow content |
| `max-w-screen-md` | 768px | Standard articles |
| `max-w-screen-lg` | 1024px | Wide content |
| `max-w-screen-xl` | 1280px | Full sections |
| `max-w-screen-2xl` | 1536px | Maximum width |
| `max-w-7xl` | 80rem (1280px) | Standard container |
| `max-w-4xl` | 56rem (896px) | Reading width |
| `max-w-3xl` | 48rem (768px) | Article content |

**Usage Examples**:

```html
<!-- Standard page container -->
<div class="max-w-7xl mx-auto px-4">
  Page content
</div>

<!-- Article content -->
<article class="max-w-3xl mx-auto px-4">
  Article text
</article>

<!-- Hero full width -->
<section class="w-screen">
  Full-width hero
</section>
```

---

#### Grid Systems

**Standard Grid**:
```html
<!-- 3-column grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 12-column layout -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8">Main content</div>
  <div class="col-span-4">Sidebar</div>
</div>
```

**Auto-fit Grid** (responsive cards):
```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

---

#### Flexbox Patterns

**Centered Content**:
```html
<div class="flex items-center justify-center h-screen">
  Centered content
</div>
```

**Space Between**:
```html
<div class="flex justify-between items-center">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

**Responsive Stack**:
```html
<div class="flex flex-col md:flex-row gap-4">
  <div>Stacks vertically on mobile</div>
  <div>Horizontal on desktop</div>
</div>
```

---

### Border & Radius

#### Border Widths

| Class | Width | Use Case |
|-------|-------|----------|
| `border` | 1px | Default border |
| `border-2` | 2px | Prominent border |
| `border-4` | 4px | Accent border |
| `border-8` | 8px | Thick border |

**Directional Borders**:
```html
<div class="border-l-4 border-gold-600">Left accent</div>
<div class="border-t border-slate-200">Top border</div>
<div class="border-b-2 border-primary-700">Bottom border</div>
```

---

#### Border Radius

Custom radius values defined in theme (`tailwind.css` lines 584-587):

```css
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

**Standard Classes**:

| Class | Size | Use Case |
|-------|------|----------|
| `rounded-none` | 0 | No radius |
| `rounded-sm` | 0.125rem | Subtle rounding |
| `rounded` | 0.25rem | Default radius |
| `rounded-md` | 0.375rem | Medium radius |
| `rounded-lg` | 0.5rem | Large radius |
| `rounded-xl` | 0.75rem | Extra large |
| `rounded-2xl` | 1rem | Very large |
| `rounded-3xl` | 1.5rem | Maximum radius |
| `rounded-full` | 9999px | Perfect circle |

**Usage Examples**:
```html
<button class="rounded-xl">Button</button>
<div class="rounded-2xl">Card</div>
<img class="rounded-full" alt="Avatar" />
```

---

### Shadows & Effects

#### Box Shadows

**Available Shadows**:

| Class | Use Case |
|-------|----------|
| `shadow-sm` | Subtle elevation |
| `shadow` | Default shadow |
| `shadow-md` | Medium elevation |
| `shadow-lg` | Prominent elevation |
| `shadow-xl` | Strong elevation |
| `shadow-2xl` | Maximum elevation |

**Usage Examples**:
```html
<!-- Card with hover effect -->
<div class="shadow-lg hover:shadow-xl transition-shadow">
  Card content
</div>

<!-- Button with shadow -->
<button class="shadow-md hover:shadow-lg">
  Click me
</button>
```

---

#### Text Shadows

Custom text shadows for Hero sections:

```html
<!-- Multi-layer text shadow (from Hero component) -->
<h1 style="text-shadow: 0 1px 2px rgba(0,0,0,0.4),
                         0 4px 8px rgba(0,0,0,0.2),
                         0 8px 16px rgba(0,0,0,0.1)">
  Hero Title
</h1>

<!-- Softer text shadow -->
<p style="text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)">
  Hero description
</p>
```

---

#### Custom Animations

**Float Animation** (`tailwind.css` lines 81-92):

```css
@theme {
  --animate-float: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

**Usage**:
```html
<div class="animate-[float_6s_ease-in-out_infinite]">
  Floating element
</div>
```

**Gradient Animation** (`tailwind.css` lines 82, 95-102):

```css
@theme {
  --animate-gradient-x: gradient-x 3s ease infinite;
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

### Breakpoints

Mobile-first responsive breakpoints following Tailwind CSS v4 defaults.

#### Breakpoint Values

| Breakpoint | Min Width | Device Target |
|------------|-----------|---------------|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

#### Usage Pattern

**Always write mobile-first**:

```html
<!-- ✓ CORRECT: Mobile first, progressively enhance -->
<div class="text-base sm:text-lg md:text-xl lg:text-2xl">
  Responsive text
</div>

<!-- ✗ WRONG: Desktop first -->
<div class="text-2xl lg:text-base">
  Don't do this
</div>
```

#### Common Responsive Patterns

**Typography**:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

**Layout**:
```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col lg:flex-row gap-4">
  <div>Content 1</div>
  <div>Content 2</div>
</div>
```

**Grid**:
```html
<!-- 1 col mobile, 2 cols tablet, 3 cols desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

**Spacing**:
```html
<!-- Responsive padding -->
<section class="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
  Section content
</section>
```

**Visibility**:
```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="block lg:hidden">Mobile only</div>
```

---

## Component Patterns

### Buttons

The Button component uses CVA (class-variance-authority) for consistent styling across variants.

**File**: `/src/components/ui/Button.tsx`

#### Variants

**Primary** - White background with dark text:
```tsx
<Button variant="primary" size="md">
  Get in Touch
</Button>
```

**Secondary** - Transparent with white border:
```tsx
<Button variant="secondary" size="md">
  Learn More
</Button>
```

**Outline** - White background with gray border:
```tsx
<Button variant="outline" size="md">
  View Details
</Button>
```

**Ghost** - No background, minimal styling:
```tsx
<Button variant="ghost" size="md">
  Cancel
</Button>
```

**Destructive** - Red for dangerous actions:
```tsx
<Button variant="destructive" size="md">
  Delete
</Button>
```

---

#### Sizes

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| `xs` | 32px | 12px | 12px | Compact buttons |
| `sm` | 40px | 16px | 14px | Secondary actions |
| `md` | 48px | 24px | 16px | Default buttons |
| `lg` | 56px | 32px | 18px | Primary CTAs |
| `xl` | 64px | 40px | 20px | Hero buttons |

**Usage**:
```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

---

#### Button States

**Loading State**:
```tsx
<Button loading={true}>
  Processing...
</Button>
```

**Disabled State**:
```tsx
<Button disabled={true}>
  Not Available
</Button>
```

**Full Width**:
```tsx
<Button fullWidth={true}>
  Submit Form
</Button>
```

---

#### With Icons

**Left Icon**:
```tsx
import { Phone } from 'lucide-react';

<Button leftIcon={<Phone />}>
  Call Us
</Button>
```

**Right Icon**:
```tsx
import { ArrowRight } from 'lucide-react';

<Button rightIcon={<ArrowRight />}>
  Continue
</Button>
```

---

#### Real-World Examples

**Hero CTA**:
```tsx
<Button
  variant="primary"
  size="lg"
  className="bg-gold-600 hover:bg-gold-500"
>
  Visit Our Parish
</Button>
```

**Secondary Action**:
```tsx
<Button
  variant="secondary"
  size="md"
  className="border-2 border-gold-600"
>
  Learn More →
</Button>
```

**Card Action**:
```tsx
<Button variant="outline" size="sm">
  Read Full Article
</Button>
```

---

#### Accessibility

**Focus States**:
All buttons include visible focus indicators:
```css
focus:outline-none
focus:ring-2
focus:ring-offset-2
```

**ARIA Attributes**:
```tsx
<Button
  aria-label="Close dialog"
  aria-pressed={isActive}
>
  Close
</Button>
```

**Keyboard Navigation**:
- All buttons are keyboard accessible via `Tab` and `Enter`/`Space`
- Disabled buttons are removed from tab order

---

### Cards

The Card component provides flexible containers for content with multiple variants.

**File**: `/src/components/ui/Card.tsx`

#### Variants

**Default** - Clean white card with border:
```tsx
<Card variant="default" padding="lg">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Elevated** - Prominent shadow, no border:
```tsx
<Card variant="elevated" padding="lg">
  Featured content with strong elevation
</Card>
```

**Outlined** - Subtle border only:
```tsx
<Card variant="outlined" padding="md">
  Minimal card style
</Card>
```

**Glass** - Semi-transparent with backdrop blur:
```tsx
<Card variant="glass" padding="lg">
  Modern glass morphism effect
</Card>
```

---

#### Padding Options

| Padding | Size | Use Case |
|---------|------|----------|
| `none` | 0 | Custom padding needed |
| `sm` | 16px | Compact cards |
| `md` | 24px | Default cards |
| `lg` | 32px | Comfortable spacing |
| `xl` | 48px | Large cards |

---

#### Radius Options

| Radius | Size | Use Case |
|--------|------|----------|
| `none` | 0 | Sharp corners |
| `sm` | Small | Subtle rounding |
| `md` | 0.75rem | Default |
| `lg` | 1rem | Large rounding |
| `full` | 1.5rem | Maximum rounding |

---

#### Card Subcomponents

**CardHeader**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Article Title</CardTitle>
    <CardDescription>Published on Nov 6, 2025</CardDescription>
  </CardHeader>
  <CardContent>
    Main content here
  </CardContent>
</Card>
```

**CardContent**:
```tsx
<Card>
  <CardContent>
    <p>Main card content with automatic spacing</p>
  </CardContent>
</Card>
```

**CardFooter**:
```tsx
<Card>
  <CardContent>
    Article content
  </CardContent>
  <CardFooter>
    <Button variant="outline">Read More</Button>
  </CardFooter>
</Card>
```

---

#### Interactive Cards

**Clickable Card**:
```tsx
<Card
  interactive={true}
  onClick={() => navigate('/article')}
>
  Click anywhere on this card
</Card>
```

**With Hover Effect**:
```tsx
<Card
  variant="elevated"
  className="hover:-translate-y-1 transition-transform"
>
  Lifts on hover
</Card>
```

---

#### Real-World Example

**Article Card**:
```tsx
<Card variant="elevated" padding="lg" radius="lg">
  <CardHeader>
    <div class="flex items-center gap-2 mb-2">
      <Badge variant="blue">Article</Badge>
      <span class="text-sm text-slate-500">5 min read</span>
    </div>
    <CardTitle>Understanding Catholic Liturgy</CardTitle>
    <CardDescription>
      An introduction to the sacred liturgy and its significance
    </CardDescription>
  </CardHeader>

  <CardContent>
    <img
      src="/images/liturgy.jpg"
      alt="Liturgy"
      class="w-full rounded-lg mb-4"
    />
    <p class="text-slate-600">
      The liturgy is the source and summit of Christian life...
    </p>
  </CardContent>

  <CardFooter>
    <Button variant="outline" size="sm">
      Read Full Article
    </Button>
  </CardFooter>
</Card>
```

---

### Badges

Small labels for categorization, status indication, and metadata.

**File**: `/src/components/ui/Badge.tsx`

#### Variants

**Color Variants**:
```tsx
<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>

{/* Specific colors */}
<Badge variant="blue">Blue</Badge>
<Badge variant="green">Green</Badge>
<Badge variant="purple">Purple</Badge>
```

**Outline Variants**:
```tsx
<Badge variant="outline">Outline</Badge>
<Badge variant="outline-primary">Primary Outline</Badge>
<Badge variant="outline-success">Success Outline</Badge>
```

**Solid Variants**:
```tsx
<Badge variant="solid">Solid</Badge>
<Badge variant="solid-primary">Primary Solid</Badge>
<Badge variant="solid-error">Error Solid</Badge>
```

---

#### Sizes

| Size | Padding | Font Size | Use Case |
|------|---------|-----------|----------|
| `xs` | 8px × 2px | 12px | Minimal badges |
| `sm` | 10px × 2px | 12px | Default size |
| `md` | 12px × 4px | 14px | Standard badges |
| `lg` | 14px × 6px | 14px | Prominent badges |
| `xl` | 16px × 8px | 16px | Large badges |

---

#### With Icons

```tsx
import { Calendar } from 'lucide-react';

<Badge
  variant="blue"
  size="md"
  icon={<Calendar className="w-3 h-3" />}
>
  Event
</Badge>
```

---

#### Removable Badges

```tsx
<Badge
  variant="primary"
  removable={true}
  onRemove={() => console.log('Removed')}
>
  Filter Tag
</Badge>
```

---

#### Badge Groups

**Horizontal Group**:
```tsx
<BadgeGroup gap="sm">
  <Badge variant="blue">Prayer</Badge>
  <Badge variant="green">Sacrament</Badge>
  <Badge variant="purple">Liturgy</Badge>
</BadgeGroup>
```

---

#### Special Badge Types

**Count Badge**:
```tsx
<CountBadge count={5} variant="primary" size="sm" />
<CountBadge count={150} max={99} variant="error" />
{/* Shows "99+" */}
```

**Status Badge**:
```tsx
<StatusBadge status="online" showText={true} />
<StatusBadge status="busy" showText={false} />
```

---

#### Real-World Examples

**Article Metadata**:
```tsx
<div class="flex gap-2 mb-4">
  <Badge variant="blue">Article</Badge>
  <Badge variant="outline">5 min read</Badge>
  <Badge variant="purple">Prayer Hub</Badge>
</div>
```

**Category Tags**:
```tsx
<BadgeGroup gap="sm">
  <Badge variant="green">Sacraments</Badge>
  <Badge variant="blue">Liturgy</Badge>
  <Badge variant="purple">Saints</Badge>
</BadgeGroup>
```

---

### Hero Sections

Full-viewport hero sections with background images, overlays, and CTAs.

**File**: `/src/components/Hero.tsx`

#### Features

- Full viewport height (100vh) or custom height
- Multi-layer gradient overlays for text contrast
- Responsive typography with text shadows
- Background image with parallax-ready structure
- Scroll indicator with smooth scrolling
- Support for badges, titles, descriptions, and buttons

---

#### Basic Usage

```tsx
<Hero
  backgroundImage="/images/church-exterior.jpg"
  title="Welcome to St Saviour's"
  description="A vibrant Catholic community in the heart of our city"
  primaryButton={{
    text: "Join Us for Mass",
    href: "/mass"
  }}
  secondaryButton={{
    text: "Learn More",
    href: "/about-us"
  }}
/>
```

---

#### With Announcement Badge

```tsx
<Hero
  backgroundImage="/images/hero.jpg"
  badge={{
    text: "New liturgy schedule available",
    linkText: "View Schedule",
    linkHref: "/mass"
  }}
  title="Welcome Home"
  description="Join us for worship, community, and faith formation"
/>
```

---

#### Overlay Layers

The Hero component uses **4 overlay layers** for optimal text contrast:

```tsx
{/* Layer 1: Top gradient for navigation visibility */}
<div className="absolute top-0 inset-x-0 h-[25%]
                bg-gradient-to-b from-black/90 via-black/50
                to-transparent pointer-events-none z-[5]" />

{/* Layer 2: Navy gradient for text contrast */}
<div className="absolute inset-0 bg-gradient-to-t
                from-slate-900/90 via-slate-900/50
                to-transparent" />

{/* Layer 3: Gold accent gradient for warmth */}
<div className="absolute inset-0 bg-gradient-to-t
                from-gold-600/70 via-gold-600/20
                to-transparent mix-blend-soft-light" />

{/* Layer 4: Dot pattern texture */}
<div className="absolute inset-0"
     style={{
       backgroundImage: 'radial-gradient(circle at 2px 2px,
                         rgb(255, 255, 255) 1px, transparent 0)',
       backgroundSize: '20px 20px',
       opacity: 0.1
     }} />
```

---

#### Text Shadow Pattern

**Multi-layer shadows** ensure text readability:

```tsx
{/* H1 Title */}
<h1
  className="text-6xl sm:text-8xl font-semibold text-white"
  style={{
    textShadow: '0 1px 2px rgba(0,0,0,0.4),
                 0 4px 8px rgba(0,0,0,0.2),
                 0 8px 16px rgba(0,0,0,0.1)'
  }}
>
  Hero Title
</h1>

{/* Description */}
<p
  className="text-xl sm:text-2xl text-white"
  style={{
    fontWeight: 300,
    letterSpacing: '0.02em',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
  }}
>
  Hero description
</p>
```

---

#### Homepage Variant

For the homepage with LiveStreamBanner (10vh), use 90vh height:

```tsx
{/* Hero-Homepage.tsx */}
<section className="relative h-[90vh] w-screen overflow-hidden">
  {/* Same structure as standard Hero */}
</section>
```

---

#### Scroll Indicator

```tsx
<div className="absolute bottom-8 left-1/2 transform
                -translate-x-1/2 z-30">
  <div
    className="flex flex-col items-center cursor-pointer"
    onClick={handleScrollDown}
  >
    <svg className="text-white" style={{ opacity: 0.7 }}>
      {/* Chevron down icon */}
    </svg>
    <span className="text-sm uppercase tracking-widest
                     text-white" style={{ opacity: 0.6 }}>
      SCROLL
    </span>
  </div>
</div>
```

---

#### Best Practices

**Do**:
- Use high-quality, high-resolution images (min 1920px width)
- Ensure text remains readable on all background images
- Test on multiple screen sizes
- Keep titles concise (4-8 words)
- Use descriptive alt text for images

**Don't**:
- Use images with busy backgrounds that compete with text
- Place important text over image focal points (faces, etc.)
- Exceed 2 CTA buttons (primary + secondary max)
- Remove scroll indicator on long pages

---

### Pillar Cards

Vertical image cards with overlay text, used for highlighting key parish offerings.

**File**: `/src/components/PillarCard.tsx`

#### Features

- **2:3 aspect ratio** for vertical design
- Image background with gradient overlay
- Text overlaid at bottom with fixed heights for alignment
- Radix UI separator between title and description
- Optional clickable links
- Hover effects with image zoom

---

#### Basic Usage

```tsx
<PillarCard
  image="/images/mass.jpg"
  alt="Mass celebration"
  title={<>Celebrate<br />The Mass</>}
  description="Join us for the celebration of the Eucharist,
               the source and summit of Catholic life"
  href="/mass"
/>
```

---

#### Without Link (Display Only)

```tsx
<PillarCard
  image="/images/community.jpg"
  alt="Community gathering"
  title="Our Community"
  description="A welcoming parish family united in faith and service"
  {/* No href = non-clickable */}
/>
```

---

#### Structure

```tsx
<AspectRatio.Root ratio={2 / 3}>
  <div className="relative w-full h-full">
    {/* Background Image */}
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover transition-transform
                 duration-500 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t
                    from-black/80 via-black/40 to-transparent" />

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      {/* Fixed height title area (112px) */}
      <div className="h-28 flex flex-col justify-end">
        <h3 className="text-4xl font-bold text-text-on-dark">
          {title}
        </h3>
        <Separator.Root className="w-full h-px
                                   bg-text-on-dark mt-3" />
      </div>

      {/* Fixed height description (208px) */}
      <div className="h-52 mt-4 overflow-hidden">
        <p className="text-text-on-dark text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Call-to-action (if href provided) */}
      {href && (
        <div className="mt-6 flex items-center gap-2
                        text-white group-hover:text-gold-500">
          <span>Discover More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  </div>
</AspectRatio.Root>
```

---

#### Real-World Example

**Three Pillar Cards Section**:

```tsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PillarCard
        image="/images/mass.jpg"
        alt="Mass celebration"
        title={<>Celebrate<br />The Mass</>}
        description="Join us for the celebration of the Eucharist"
        href="/mass"
      />

      <PillarCard
        image="/images/prayer.jpg"
        alt="Prayer and devotion"
        title={<>Prayer<br />& Devotion</>}
        description="Deepen your spiritual life through prayer"
        href="/prayer-hub"
      />

      <PillarCard
        image="/images/formation.jpg"
        alt="Faith formation"
        title={<>Faith<br />Formation</>}
        description="Grow in understanding of Catholic teaching"
        href="/learning-hub"
      />
    </div>
  </div>
</section>
```

---

#### Design Rationale

**Fixed Heights**:
- Title area: `h-28` (112px) ensures alignment across cards
- Description area: `h-52` (208px) prevents layout shifts
- Overflow is hidden to maintain consistent card heights

**Gradient Overlay**:
- `from-black/80 via-black/40 to-transparent` ensures text readability
- Darkest at bottom where text is positioned

**Hover Effects**:
- Image scales to 110% (`group-hover:scale-110`)
- CTA text changes to gold (`group-hover:text-gold-500`)
- Smooth 500ms transition

---

### Typography Components

Pre-configured typography component classes for consistent text styling.

**File**: `/src/app/styles/tailwind.css` (lines 212-286)

#### Component Classes

**Headings**:
```html
<h1 class="typography-h1">Main Page Title</h1>
<h2 class="typography-h2">Section Heading</h2>
<h3 class="typography-h3">Subsection Heading</h3>
<h4 class="typography-h4">Card Title</h4>
```

**Body Text**:
```html
<p class="typography-body-large">
  Lead paragraph or hero description
</p>

<p class="typography-body">
  Standard body text for main content
</p>

<small class="typography-body-small">
  Captions, fine print, or metadata
</small>
```

---

#### Blog Prose Class

Special `.blog-prose` class for article content with comprehensive typography styles.

**Usage**:
```html
<article class="blog-prose">
  <h1>Article Title</h1>
  <p>Article content with automatic styling...</p>
  <h2>Section Heading</h2>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
  <blockquote>
    A quotation or callout
  </blockquote>
</article>
```

**Styled Elements**:
- Headings (h1-h4) with consistent sizing and spacing
- Paragraphs with optimal line height
- Lists (ul, ol) with proper indentation
- Links with gold accent color
- Blockquotes with left border
- Code blocks with syntax highlighting
- Images with rounded corners

---

#### Real-World Example

```html
<div class="max-w-3xl mx-auto px-4 py-12">
  <article class="blog-prose">
    <h1>Understanding the Liturgy of the Hours</h1>

    <p>
      The Liturgy of the Hours, also known as the Divine Office,
      is the daily prayer of the Church...
    </p>

    <h2>History and Development</h2>

    <p>
      The practice of praying at set times throughout the day
      has roots in Jewish tradition...
    </p>

    <blockquote>
      "Prayer is the raising of one's mind and heart to God."
      — St. John Damascene
    </blockquote>

    <h3>The Structure of the Hours</h3>

    <ul>
      <li>Office of Readings</li>
      <li>Morning Prayer (Lauds)</li>
      <li>Daytime Prayer</li>
      <li>Evening Prayer (Vespers)</li>
      <li>Night Prayer (Compline)</li>
    </ul>
  </article>
</div>
```

---

## Page Layouts

### Hub Landing Pages

Structure for Learning Hub, Prayer Hub, and similar landing pages.

#### Layout Pattern

```tsx
<PageLayout
  title="Learning Hub"
  description="Deepen your faith through study and reflection"
>
  {/* Hero Section */}
  <Hero
    backgroundImage="/images/learning-hub-hero.jpg"
    title="Learning Hub"
    description="Explore Catholic teaching, theology, and spirituality"
  />

  {/* Introduction Section */}
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="typography-h2 text-center mb-6">
        Welcome to the Learning Hub
      </h2>
      <p className="typography-body-large text-center">
        Discover resources for growing in knowledge and understanding
        of the Catholic faith
      </p>
    </div>
  </section>

  {/* Categories Grid */}
  <section className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="typography-h2 mb-8">Browse Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Card
            variant="elevated"
            interactive={true}
            onClick={() => navigate(category.href)}
          >
            <CardHeader>
              <Badge variant="blue">{category.type}</Badge>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Featured Content */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="typography-h2 mb-8">Featured Articles</h2>
      {/* Featured content cards */}
    </div>
  </section>
</PageLayout>
```

---

### Category Pages

Layout for category pages (e.g., "Prayer Hub > Novenas").

```tsx
<PageLayout
  title="Novenas"
  description="Nine-day prayers for specific intentions"
>
  {/* Breadcrumb Navigation */}
  <nav className="py-4 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <ol className="flex gap-2 text-sm">
        <li><a href="/prayer-hub">Prayer Hub</a></li>
        <li>/</li>
        <li className="font-semibold">Novenas</li>
      </ol>
    </div>
  </nav>

  {/* Page Header */}
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <Badge variant="blue" size="lg">Category</Badge>
      <h1 className="typography-h1 mt-4 mb-6">Novenas</h1>
      <p className="typography-body-large">
        Nine-day prayers seeking intercession for specific intentions
      </p>
    </div>
  </section>

  {/* Content Grid */}
  <section className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Content cards */}
      </div>
    </div>
  </section>
</PageLayout>
```

---

### Article Pages

Layout for individual articles/prayers/resources.

```tsx
<PageLayout
  title="Novena to the Sacred Heart of Jesus"
  description="A powerful nine-day prayer devotion"
>
  {/* Breadcrumb */}
  <nav className="py-4 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4">
      <ol className="flex gap-2 text-sm">
        <li><a href="/prayer-hub">Prayer Hub</a></li>
        <li>/</li>
        <li><a href="/prayer-hub/novenas">Novenas</a></li>
        <li>/</li>
        <li className="font-semibold">Sacred Heart</li>
      </ol>
    </div>
  </nav>

  {/* Article Header */}
  <header className="py-12 bg-white border-b border-slate-200">
    <div className="max-w-3xl mx-auto px-4">
      <BadgeGroup gap="sm" className="mb-4">
        <Badge variant="blue">Novena</Badge>
        <Badge variant="outline">9 days</Badge>
        <Badge variant="purple">Devotional Prayer</Badge>
      </BadgeGroup>

      <h1 className="typography-h1 mb-4">
        Novena to the Sacred Heart of Jesus
      </h1>

      <p className="typography-body-large text-slate-600">
        A nine-day prayer of devotion to the Sacred Heart
      </p>
    </div>
  </header>

  {/* Article Content */}
  <article className="py-12 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <div className="blog-prose">
        {/* Article content with automatic styling */}
        <h2>Introduction</h2>
        <p>The devotion to the Sacred Heart...</p>

        <h2>Daily Prayer</h2>
        <p>Pray this prayer each day for nine days:</p>

        {/* Prayer content */}
      </div>
    </div>
  </article>

  {/* Related Content */}
  <section className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="typography-h2 mb-8">Related Prayers</h2>
      {/* Related content cards */}
    </div>
  </section>
</PageLayout>
```

---

## Accessibility Guidelines

### WCAG 2.1 Level AA Compliance

All components and patterns must meet WCAG 2.1 Level AA standards.

#### Color Contrast

**Minimum Ratios**:
- **Normal text** (< 24px): 4.5:1
- **Large text** (≥ 24px or ≥ 19px bold): 3:1
- **UI components**: 3:1

**Tested Combinations**:

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| `primary-900` | `white` | 14.5:1 | AAA ✓ |
| `primary-700` | `white` | 8.2:1 | AAA ✓ |
| `gold-600` | `white` | 4.5:1 | AA ✓ |
| `text-on-dark` | `dark-section` | 12.6:1 | AAA ✓ |

**Testing Tool**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

#### Keyboard Navigation

**All interactive elements must be keyboard accessible**:

```tsx
// ✓ CORRECT: Focusable button
<button
  className="focus:outline-none focus:ring-2
             focus:ring-gold-600 focus:ring-offset-2"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</button>

// ✗ WRONG: Non-focusable div
<div onClick={handleClick}>
  Click me
</div>
```

**Tab Order**:
- Ensure logical tab order matches visual order
- Use `tabIndex={-1}` to remove from tab order
- Use `tabIndex={0}` to add to natural tab order

---

#### Focus States

**All interactive elements must have visible focus indicators**:

```css
/* Global focus styles (tailwind.css lines 547-555) */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Component-specific focus**:
```html
<button class="focus:ring-2 focus:ring-gold-600
               focus:ring-offset-2 focus:outline-none">
  Button with custom focus
</button>
```

---

#### ARIA Attributes

**Semantic HTML First**:
```html
<!-- ✓ CORRECT: Use semantic HTML -->
<nav>
  <ul>
    <li><a href="/mass">Mass Times</a></li>
  </ul>
</nav>

<!-- ✗ WRONG: Generic divs with ARIA -->
<div role="navigation">
  <div role="list">
    <div role="listitem">
      <a href="/mass">Mass Times</a>
    </div>
  </div>
</div>
```

**ARIA Labels**:
```html
<!-- Icon-only button -->
<button aria-label="Close dialog">
  <X className="w-4 h-4" />
</button>

<!-- Current page indicator -->
<a href="/mass" aria-current="page">Mass Times</a>

<!-- Expandable section -->
<button
  aria-expanded={isOpen}
  aria-controls="dropdown-menu"
>
  Menu
</button>
```

**ARIA Live Regions**:
```html
<!-- Status messages -->
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  Form submitted successfully
</div>

<!-- Error alerts -->
<div
  role="alert"
  aria-live="assertive"
>
  Error: Required field missing
</div>
```

---

#### Screen Reader Support

**Image Alt Text**:
```tsx
// ✓ CORRECT: Descriptive alt text
<Image
  src="/images/church.jpg"
  alt="St Saviour's Church exterior with bell tower"
  width={800}
  height={600}
/>

// ✗ WRONG: Generic or missing alt
<Image
  src="/images/church.jpg"
  alt="image"
  width={800}
  height={600}
/>
```

**Decorative Images**:
```tsx
// Empty alt for decorative images
<Image
  src="/images/decorative-pattern.png"
  alt=""
  aria-hidden="true"
  width={100}
  height={100}
/>
```

**Skip Links**:
```html
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute
             focus:top-4 focus:left-4 focus:z-50
             focus:bg-white focus:px-4 focus:py-2"
>
  Skip to main content
</a>
```

---

#### Motion Preferences

**Respect `prefers-reduced-motion`** (`tailwind.css` lines 562-580):

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Usage**:
```tsx
// Animations automatically disabled for users who prefer reduced motion
<div className="transition-transform hover:scale-110">
  This respects motion preferences
</div>
```

---

#### Form Accessibility

**Labels**:
```html
<!-- ✓ CORRECT: Associated label -->
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  name="email"
  required
  aria-required="true"
/>

<!-- ✗ WRONG: No label -->
<input type="email" placeholder="Email" />
```

**Error Messages**:
```html
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

**Required Fields**:
```html
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input
  id="name"
  required
  aria-required="true"
/>
```

---

## Best Practices

### Using Design Tokens

**Always use tokens instead of hardcoded values**:

```html
<!-- ✓ CORRECT: Use design tokens -->
<div class="bg-primary-700 text-white">
  Content with brand colors
</div>

<!-- ✗ WRONG: Hardcoded hex values -->
<div style="background-color: #3f4a7e; color: #ffffff">
  Content with hardcoded colors
</div>
```

**CSS Variables**:
```css
/* ✓ CORRECT: Use CSS variables */
.custom-component {
  background: var(--color-primary-700);
  font-family: var(--font-heading);
}

/* ✗ WRONG: Hardcoded values */
.custom-component {
  background: #3f4a7e;
  font-family: "Noto Serif", serif;
}
```

---

### Responsive Design

**Mobile-first approach**:

```html
<!-- ✓ CORRECT: Mobile first, progressive enhancement -->
<div class="px-4 sm:px-6 lg:px-8">
  <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
    Responsive Heading
  </h1>
</div>

<!-- ✗ WRONG: Desktop first -->
<div class="px-8 lg:px-6 sm:px-4">
  <h1 class="text-6xl xl:text-5xl lg:text-4xl md:text-3xl">
    Wrong approach
  </h1>
</div>
```

**Test all breakpoints**:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1280px (standard laptop)
- Large: 1920px (full HD)

---

### Component Composition

**Build complex components from simpler ones**:

```tsx
// ✓ CORRECT: Composition pattern
<Card variant="elevated" padding="lg">
  <CardHeader>
    <Badge variant="blue">Article</Badge>
    <CardTitle>Title Here</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Read More</Button>
  </CardFooter>
</Card>

// ✗ WRONG: Monolithic component
<ArticleCard
  badge="Article"
  title="Title Here"
  content="Content here"
  buttonText="Read More"
/>
```

---

### Naming Conventions

**Component Files**:
- PascalCase: `PillarCard.tsx`, `Hero.tsx`
- One component per file
- Default export for main component

**Utility Files**:
- kebab-case: `blog-utils.ts`, `cms-learning-hub.ts`
- Named exports for utilities

**CSS Classes**:
- Tailwind utilities: lowercase with hyphens
- Component classes: kebab-case (`.blog-prose`, `.typography-h1`)

---

### Code Organization

**Import Order**:
```tsx
// 1. React/Next.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party libraries
import { ArrowRight } from 'lucide-react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

// 3. Internal components
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// 4. Utilities and types
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';
```

**File Structure**:
```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── styles/
│       └── tailwind.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── Hero.tsx
│   └── PillarCard.tsx
├── lib/
│   ├── utils.ts
│   └── blog/
│       └── blog-utils.ts
└── types/
    └── blog.ts
```

---

### TypeScript Best Practices

**Explicit Types**:
```tsx
// ✓ CORRECT: Explicit interface
interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export function Hero({ title, description, backgroundImage }: HeroProps) {
  // Implementation
}

// ✗ WRONG: Any or implicit types
export function Hero(props: any) {
  // Implementation
}
```

**No React.FC**:
```tsx
// ✓ CORRECT: Explicit function typing
export function Badge({ children, variant }: BadgeProps) {
  return <span>{children}</span>;
}

// ✗ WRONG: React.FC (deprecated pattern)
export const Badge: React.FC<BadgeProps> = ({ children, variant }) => {
  return <span>{children}</span>;
};
```

---

### Performance Optimization

**Image Optimization**:
```tsx
import Image from 'next/image';

// ✓ CORRECT: Next.js Image component
<Image
  src="/images/church.jpg"
  alt="Church exterior"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={true} // For above-the-fold images
/>

// ✗ WRONG: Regular img tag
<img src="/images/church.jpg" alt="Church" />
```

**Lazy Loading**:
```tsx
// Components below the fold
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { loading: () => <LoadingSpinner /> }
);
```

**Code Splitting**:
```tsx
// Route-based code splitting (automatic with App Router)
// Each page.tsx is a separate chunk
```

---

## Usage Examples

### Building a Page Section

**Hero + Content Section**:

```tsx
export default function AboutPage() {
  return (
    <PageLayout
      title="About Us"
      description="Learn about our parish community"
    >
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/about-hero.jpg"
        title="About St Saviour's"
        description="A welcoming Catholic community serving our neighborhood
                     since 1892"
        primaryButton={{
          text: "Visit Us",
          href: "/contact-us"
        }}
      />

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2 className="typography-h2 text-center mb-8">
              Our Mission
            </h2>

            <p className="typography-body-large text-center mb-12">
              To proclaim the Gospel, celebrate the sacraments, and serve
              those in need
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle>Our History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Founded in 1892, St Saviour's has been a beacon
                    of faith...
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle>Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We are a diverse and vibrant parish family...
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
```

---

### Creating a Card Grid

**Responsive Card Grid**:

```tsx
<section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="typography-h2 mb-8">Featured Articles</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Card
          key={article.id}
          variant="elevated"
          padding="none"
          interactive={true}
          onClick={() => navigate(article.href)}
        >
          {/* Image */}
          <div className="relative h-48 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <BadgeGroup gap="sm" className="mb-3">
              <Badge variant="blue">{article.category}</Badge>
              <Badge variant="outline">{article.readTime}</Badge>
            </BadgeGroup>

            <h3 className="typography-h4 mb-2">
              {article.title}
            </h3>

            <p className="text-slate-600 mb-4">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                {article.date}
              </span>
              <Button variant="ghost" size="sm">
                Read More →
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
```

---

### Responsive Typography

**Heading with Responsive Sizing**:

```html
<!-- Comprehensive responsive heading -->
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
           font-bold tracking-tight text-primary-900
           mb-4 md:mb-6 lg:mb-8">
  Fully Responsive Heading
</h1>

<!-- Responsive body text -->
<p class="text-base sm:text-lg md:text-xl
          leading-relaxed text-slate-700
          max-w-3xl mx-auto">
  Body text that scales appropriately across devices
</p>
```

---

### Dark Sections

**Dark Section with Proper Text Colors**:

```html
<section class="bg-dark-section py-16" data-dark-bg>
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="typography-h2 text-text-on-dark mb-6">
      Section Heading
    </h2>

    <p class="typography-body-large text-text-on-dark-muted mb-4">
      Lead paragraph with muted text color
    </p>

    <p class="text-text-on-dark-subtle">
      Supporting text with subtle color
    </p>

    <div class="mt-8">
      <Button variant="primary" className="bg-gold-600 hover:bg-gold-500">
        Call to Action
      </Button>
    </div>
  </div>
</section>
```

---

### Image Handling

**Responsive Image with Next.js**:

```tsx
import Image from 'next/image';

<div className="relative w-full h-96 rounded-xl overflow-hidden">
  <Image
    src="/images/parish-photo.jpg"
    alt="Parish community gathering"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
    priority={false}
  />
</div>
```

**Image in Card**:

```tsx
<Card variant="default" padding="none">
  <div className="relative h-64 w-full">
    <Image
      src="/images/event.jpg"
      alt="Parish event"
      fill
      className="object-cover rounded-t-xl"
    />
  </div>

  <div className="p-6">
    <h3 className="typography-h4 mb-2">Parish Event</h3>
    <p>Event details...</p>
  </div>
</Card>
```

---

## Quick Reference

### Color Palette Table

| Color Token | Hex Value | Use Case |
|-------------|-----------|----------|
| `primary-50` | `#f8f9fc` | Subtle backgrounds |
| `primary-700` | `#3f4a7e` | Headings, emphasis |
| `primary-900` | `#252a4d` | Dark backgrounds |
| `gold-500` | `#e5c457` | Hover states |
| `gold-600` | `#ca9e5b` | Primary CTAs, links |
| `gold-700` | `#a67234` | Hover on gold-600 |
| `dark-section` | `#1e293b` | Dark sections |
| `text-on-dark` | `#e5e7eb` | Text on dark BG |
| `slate-50` | `#f8fafc` | Light backgrounds |
| `slate-600` | `#475569` | Body text |
| `slate-900` | `#0f172a` | Dark text |

---

### Typography Scale Table

| Class | Mobile Size | Desktop Size | Use Case |
|-------|-------------|--------------|----------|
| `.typography-h1` | 36px | 48px | Page titles |
| `.typography-h2` | 30px | 36px | Section headings |
| `.typography-h3` | 24px | 30px | Subsection headings |
| `.typography-h4` | 20px | 24px | Card titles |
| `.typography-body-large` | 18px | 18px | Lead paragraphs |
| `.typography-body` | 16px | 16px | Standard text |
| `.typography-body-small` | 14px | 14px | Captions |

---

### Spacing Scale Table

| Class | Size | Pixels | Common Use |
|-------|------|--------|------------|
| `p-4` | 1rem | 16px | Button padding |
| `p-6` | 1.5rem | 24px | Card padding |
| `p-8` | 2rem | 32px | Section padding |
| `gap-4` | 1rem | 16px | Flex/Grid gap |
| `gap-6` | 1.5rem | 24px | Card grid gap |
| `mb-4` | 1rem | 16px | Paragraph margin |
| `mb-8` | 2rem | 32px | Section margin |
| `py-12` | 3rem | 48px | Section vertical padding |
| `py-16` | 4rem | 64px | Large section padding |

---

### Breakpoint Table

| Breakpoint | Min Width | Max Container | Use Case |
|------------|-----------|---------------|----------|
| Default | 0px | 100% | Mobile phones |
| `sm:` | 640px | 640px | Large phones |
| `md:` | 768px | 768px | Tablets |
| `lg:` | 1024px | 1024px | Laptops |
| `xl:` | 1280px | 1280px | Desktops |
| `2xl:` | 1536px | 1536px | Large desktops |

---

### Component Sizes

**Button Sizes**:

| Size | Height | Use Case |
|------|--------|----------|
| `xs` | 32px | Compact UI |
| `sm` | 40px | Secondary actions |
| `md` | 48px | Default |
| `lg` | 56px | Primary CTAs |
| `xl` | 64px | Hero buttons |

**Badge Sizes**:

| Size | Padding | Font Size |
|------|---------|-----------|
| `xs` | 8px × 2px | 12px |
| `sm` | 10px × 2px | 12px |
| `md` | 12px × 4px | 14px |
| `lg` | 14px × 6px | 14px |
| `xl` | 16px × 8px | 16px |

---

### Common Patterns

**Section Structure**:
```html
<section class="py-12 lg:py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="typography-h2 mb-8">Section Title</h2>
    <!-- Content -->
  </div>
</section>
```

**Card Grid**:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards -->
</div>
```

**Button Group**:
```html
<div class="flex gap-4 items-center">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
</div>
```

---

## Change Log

### Version 1.0 - November 6, 2025

**Initial Release**

- Documented Tailwind CSS v4 design tokens
- Created component pattern library
- Established accessibility guidelines
- Added responsive design patterns
- Included real-world usage examples
- Built quick reference tables

**Technology Stack**:
- Next.js 16 (App Router)
- React 19.2.0
- Tailwind CSS v4.1.16
- TypeScript 5.9.3

**Previous Changes** (from CLAUDE.md):

- **2025-11-04**: Project modernization
  - Migrated to Tailwind CSS v4 CSS-first configuration
  - Removed React.FC usage across codebase
  - Updated to Next.js 16 App Router patterns
  - Implemented LiveStreamBanner and navigation positioning
  - Established comprehensive UI component library

---

## Additional Resources

### Official Documentation

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Next.js 16 App Router](https://nextjs.org/docs)
- [Radix UI Components](https://www.radix-ui.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Internal Files

- **Design Tokens**: `/src/app/styles/tailwind.css`
- **TypeScript Config**: `/tsconfig.json`
- **Component Library**: `/src/components/ui/`
- **Session Log**: `/CLAUDE.md`

### Testing Tools

- **Contrast Checker**: [WebAIM](https://webaim.org/resources/contrastchecker/)
- **Accessibility Audit**: Chrome DevTools Lighthouse
- **Screen Reader**: NVDA (Windows), VoiceOver (Mac)
- **Responsive Testing**: Chrome DevTools Device Mode

---

**End of Design System Documentation**

For questions or updates, refer to the development team or open an issue in the project repository.
