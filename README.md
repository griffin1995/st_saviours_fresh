# St Saviour's Catholic Church - Website

A modern, accessible Catholic church website built with Next.js 16, featuring a comprehensive Learning Hub, Prayer Hub, and Spiritual Reflections system.

## Overview

This is the official website for St Saviour's Catholic Church in Lewisham, London. The site provides:

- **Mass times and live streaming** via MCN.live integration
- **Learning Hub** - Church history, theology, lives of saints
- **Prayer Hub** - Novenas, litanies, devotional prayers
- **Spiritual Reflections** - Monthly spiritual thoughts and meditations
- **Community engagement** - News, events, and parish information
- **Sacramental information** - Baptism, Confirmation, Marriage, etc.

## Tech Stack

### Core Framework
- **Next.js 16** (App Router architecture)
- **React 19** (Server Components with selective Client Components)
- **TypeScript** (Strict mode)
- **Node.js** 18+

### Styling & UI
- **Tailwind CSS v4** (CSS-first configuration with @theme directives)
- **shadcn/ui** components
- **Radix UI** primitives for accessibility
- **Framer Motion** for animations
- **Lucide React** icons

### Content Management
- **TypeScript-based CMS** (`/src/lib/cms/hub-content-data.ts`)
- 22 articles pre-converted from markdown to structured data
- No runtime markdown parsing required
- Type-safe content with full TypeScript support

### Development Tools
- **ESLint v9** (Flat config)
- **Prettier** (Code formatting)
- **Knip** (Unused code detection)

## Project Structure

```
st_saviours_fresh/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   └── (public)/          # Public-facing pages
│   │       ├── page.tsx       # Homepage
│   │       ├── [hub]/         # Unified hub system
│   │       ├── about-us/      # Parish information
│   │       ├── contact-us/    # Contact forms
│   │       ├── mass/          # Mass times
│   │       └── the-sacraments/# Sacramental info
│   ├── components/            # React components
│   │   ├── blog/             # Universal blog template
│   │   ├── layout/           # Navigation, Header, Footer
│   │   ├── learning-hub/     # Learning Hub components
│   │   └── ui/               # Reusable UI components
│   ├── lib/                   # Utility functions
│   │   ├── cms/              # CMS data and utilities
│   │   └── blog/             # Blog conversion utilities
│   ├── types/                # TypeScript type definitions
│   └── styles/               # Global styles & Tailwind config
│       └── tailwind.css      # Tailwind v4 CSS-first config
├── blog/                      # Content articles (22 articles)
│   ├── learning-hub/
│   ├── prayer-hub/
│   └── spiritual-reflections/
└── public/                    # Static assets
```

## Architecture

### Hub System
The site uses a **unified hub architecture** that consolidates Learning Hub, Prayer Hub, and Spiritual Reflections under a single routing pattern:

- **Route**: `/{hub}/{category}/{subcategory?}/{article}`
- **CMS**: TypeScript-based data in `unified-hub-cms.ts`
- **Benefits**: Type-safe, no runtime parsing, fast performance

### Content Authorship
All content is authored by **Francesca Carnevale**, with 22 articles covering:
- Church history timelines (12th-14th centuries)
- Lives of saints (St. Rafqa, Julian of Norwich, Peter Abelard)
- Theological reflections
- Catholic prayers and devotions
- Monthly spiritual thoughts

### Component Architecture
- **Server Components** for static content and layouts
- **Client Components** (`'use client'`) for interactive features
- **Universal Blog Template** for article rendering
- **Modular shared components** for reusability

## Setup & Development

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd st_saviours_fresh

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file (see `.env.example` for reference):

```env
# Add any required environment variables here
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

### Code Quality

```bash
# TypeScript type checking
npm run type-check

# Linting
npm run lint

# Find unused code
npm run knip
```

## Design System

### Brand Colors
Defined in `/src/app/styles/tailwind.css` using Tailwind v4 @theme:

- **Primary (Navy)**: `primary-50` through `primary-950`
- **Gold (Accent)**: `gold-50` through `gold-950`
- **Dark Sections**: `dark-section` (#1e293b), `darker-section` (#0f172a)
- **Text on Dark**: `text-on-dark`, `text-on-dark-muted`, `text-on-dark-subtle`

### Typography
- **Headings**: Noto Serif (`var(--font-heading)`)
- **Body**: Source Serif 4 (`var(--font-body)`)
- **Technical**: JetBrains Mono (`var(--font-technical)`)

### Responsive Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## Content Management

### Adding New Articles

Articles are stored as TypeScript data in `/src/lib/cms/hub-content-data.ts`:

```typescript
export const LEARNING_HUB_ARTICLES: HubArticle[] = [
  {
    id: 'new-article',
    slug: 'category/new-article',
    hub: 'learning-hub',
    category: 'Category Name',
    title: 'Article Title',
    intro: 'Brief introduction',
    content: '<p>HTML content here</p>',
    publishedDate: '2025-11-06',
    author: 'Francesca Carnevale'
  }
];
```

### Hub Categories

**Learning Hub:**
- Church History
- Theology and Theologians
- Lives of the Saints

**Prayer Hub:**
- Devotional Prayers
- Litanies
- Novenas

**Spiritual Reflections:**
- Monthly reflections organized by year/month

## Live Stream Integration

The homepage features live Mass streaming via MCN.live:

- **Church UUID**: `da81d33b-1d66-445e-821b-fa34a9cf2db4`
- **Embed URL**: `https://mcn.live/iframe/{uuid}`
- **Banner**: 10vh gold banner at top of homepage
- **Hero**: 90vh hero section (total 100vh on load)

## Key Features

### Navigation
- Smart positioning system (absolute on homepage, fixed on scroll)
- Responsive mobile menu with full-screen overlay
- Dropdown menus with hover delay (150ms)
- Escape key and outside click to close
- Homepage banner awareness

### SEO & Accessibility
- Server-side rendering for optimal SEO
- Semantic HTML throughout
- WCAG 2.1 AA compliance
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader tested

### Performance
- Server Components minimize client JavaScript
- Image optimization with Next.js Image
- Lazy loading for non-critical components
- Motion animations respect `prefers-reduced-motion`
- Bundle size: Optimized with tree shaking

## Documentation

### Main Documentation
- **CLAUDE.md** - Development rules, standards, and session history
- **README.md** (this file) - Project overview and setup
- **FUTURE_NAVIGATION_REFACTOR_OPTION_2.md** - Future Radix UI migration plan

### Source Code Documentation
- **src/lib/blog/README.md** - Blog utilities and conversion functions
- Inline comments throughout codebase
- TypeScript interfaces serve as documentation

### Historical Context
See **ARCHITECTURE.md** for consolidated migration history and architectural decisions.

## Deployment

### Build Verification

Before deploying, ensure:

1. Build succeeds: `npm run build`
2. No TypeScript errors: `npm run type-check`
3. No ESLint errors: `npm run lint`
4. No security vulnerabilities: `npm audit`

### Deployment Platforms

Recommended platforms:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Self-hosted** with Node.js

### Environment Variables

Ensure all required environment variables are set in your deployment platform.

## Contributing

### Development Rules

See **CLAUDE.md** for comprehensive development rules including:
- Tailwind CSS v4 usage requirements
- TypeScript strict mode compliance
- React 19 modern patterns (no React.FC)
- Responsive design requirements
- Code quality standards

### Code Style
- Use Tailwind classes (no inline styles)
- Prefer Server Components over Client Components
- Use TypeScript strict mode
- Follow existing naming conventions
- Add comments for complex logic

### Testing Checklist
- [ ] Build succeeds with zero errors
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] Keyboard navigation works
- [ ] No console errors or warnings
- [ ] Images load and display correctly

## Support

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Project Contacts
- Church: St Saviour's Catholic Church, Lewisham
- Content Author: Francesca Carnevale
- Technical Lead: [As appropriate]

## License

Copyright © 2025 St Saviour's Catholic Church, Lewisham. All rights reserved.

## Version Information

- **Next.js**: 16.0.1
- **React**: 19.2.0
- **TypeScript**: 5.7.3
- **Tailwind CSS**: 4.1.16
- **Node.js**: 18+ required
- **Last Updated**: November 2025
