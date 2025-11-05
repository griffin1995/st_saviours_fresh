# Claude Code Session Log

---

## 🚨 CRITICAL DEVELOPMENT RULES - READ FIRST

These rules MUST be followed in ALL future development sessions. They are based on the current codebase configuration and technology stack.

### A. Styling & Design System Rules

**Rule:** Must use Tailwind CSS v4 with CSS-first configuration
**Source:** `/home/jack/Documents/st_saviours_fresh/src/app/styles/tailwind.css` (v4.1.16 in package.json)
**Applies To:** All styling implementations
**Example:** Use `@theme` directives in CSS, NOT tailwind.config.ts/js files

**Rule:** Must include responsive breakpoints for ALL styling changes
**Source:** Tailwind CSS v4 standard breakpoints defined in styles
**Applies To:** Every component and layout implementation
**Example:** `className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"`

**Rule:** Must use official brand colors from @theme configuration
**Source:** `/home/jack/Documents/st_saviours_fresh/src/app/styles/tailwind.css` lines 27-65
**Applies To:** All color usage in components
**Example:** Use `gold-500`, `gold-600`, `primary-700`, `slate-900` - NO arbitrary values like `#ca9e5b`

**Rule:** Must use CSS variables and design tokens
**Source:** CSS custom properties defined in tailwind.css
**Applies To:** Theme-dependent values
**Example:** `var(--color-gold-500)` instead of hardcoded hex values

**Rule:** No inline styles unless absolutely necessary
**Source:** Project conventions and modern React patterns
**Applies To:** All component implementations
**Example:** Use Tailwind classes or CSS modules, avoid `style={{ color: 'red' }}`

### B. Framework & Library Rules

**Rule:** Must use Next.js 16 App Router patterns
**Source:** `package.json` - "next": "^16.0.1"
**Applies To:** All routing, layouts, and page components
**Example:** Use `app/` directory, not `pages/`. Use metadata exports, not Head components

**Rule:** Must use React 19 with modern patterns (NO React.FC)
**Source:** `package.json` - "react": "^19.2.0", existing codebase patterns
**Applies To:** All React components
**Example:** `export function Badge({ ... }: BadgeProps)` NOT `const Badge: React.FC<BadgeProps>`

**Rule:** Must maintain TypeScript strict mode with zero errors
**Source:** `/home/jack/Documents/st_saviours_fresh/tsconfig.json` lines 16-35
**Applies To:** All TypeScript code
**Example:** Explicit types, no `any`, handle all null checks

**Rule:** Must use shadcn/ui components where applicable
**Source:** `components.json` and existing UI components
**Applies To:** UI component implementations
**Example:** Use existing Badge, Button, Card components before creating new ones

**Rule:** Must follow Radix UI accessibility patterns
**Source:** `@radix-ui/*` dependencies in package.json
**Applies To:** Interactive components
**Example:** Use Radix primitives for dropdowns, dialogs, accordions

### C. Documentation Rules

**Rule:** NO markdown files (.md) creation without explicit user permission
**Source:** User directive to prevent automatic documentation generation
**Applies To:** ALL tools, skills, agents, and plugins
**Example:** NEVER create README.md, MIGRATION.md, etc. unless user explicitly requests

**Rule:** NO documentation generation by skills/agents/plugins unless requested
**Source:** User directive for clean codebase
**Applies To:** All automated tools and workflows
**Example:** Skills must not create documentation files automatically

**Rule:** Exceptions must be explicitly granted by user
**Source:** User control over file creation
**Applies To:** Any documentation file creation
**Example:** User must say "create a README" or "document this" explicitly

### D. Code Quality Rules

**Rule:** Must maintain zero TypeScript errors before considering task complete
**Source:** `tsconfig.json` strict configuration
**Applies To:** All code changes
**Example:** Run `npm run type-check` and ensure it passes

**Rule:** Must pass build before marking any task as complete
**Source:** Production readiness requirements
**Applies To:** All feature implementations
**Example:** `npm run build` must succeed with no errors

**Rule:** Must use modern ES6+ patterns
**Source:** Target ES2022 in tsconfig.json
**Applies To:** All JavaScript/TypeScript code
**Example:** Use async/await, destructuring, optional chaining, nullish coalescing

**Rule:** Must follow existing code conventions in the codebase
**Source:** Established patterns in existing components
**Applies To:** New code additions
**Example:** Match import order, naming conventions, file structure

**Rule:** Never run `npm run dev` or `npm run build` commands without explicit user permission
**Source:** User directive for maintaining control over build execution
**Applies To:** All tasks and sessions
**Process:** After completing any task, ask user to manually run build/dev commands and provide logs/confirmation
**Rationale:** User maintains control over when builds are executed and can verify results directly
**Example:** "Task complete. Please run `npm run build` and confirm it succeeds with zero errors."

---

## 📚 Quick Reference

### Key Configuration Files
- **Tailwind CSS v4:** `/home/jack/Documents/st_saviours_fresh/src/app/styles/tailwind.css`
- **TypeScript:** `/home/jack/Documents/st_saviours_fresh/tsconfig.json`
- **shadcn/ui:** `/home/jack/Documents/st_saviours_fresh/components.json`
- **Package versions:** `/home/jack/Documents/st_saviours_fresh/package.json`

### Version Check Commands
```bash
# Check all dependency versions
npm list --depth=0

# Check specific versions
npm list next react tailwindcss typescript
```

### Common Breakpoints (Tailwind CSS v4)
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Brand Colors (from @theme)
- **Primary (Navy):** primary-50 through primary-950
- **Gold (Accent):** gold-50 through gold-950
- **Dark Sections:** `dark-section` (#1e293b), `darker-section` (#0f172a)
- **Text on Dark:** `text-on-dark`, `text-on-dark-muted`, `text-on-dark-subtle`

### Font Families (CSS Variables)
- **Headings:** `var(--font-heading)` - Noto Serif
- **Body:** `var(--font-body)` - Source Serif 4
- **Technical:** `var(--font-technical)` - JetBrains Mono

---

## Session: 2025-11-04 - Project Modernization & Live Stream Implementation

### Phase 1: Critical Fixes & Modernization

**TypeScript & Build Fixes:**
- Fixed unused imports in `gallery6-homepage.tsx` (ArrowUpRight, heading, demoUrl parameters)
- Verified ESLint v9 flat config compatibility
- Migrated PageLayout.tsx from deprecated `next/head` to App Router metadata API
- Removed React.FC usage in favor of explicit function typing (Badge.tsx, ThreePillarCards.tsx)

**Dependency Management:**
- Installed Prettier as dev dependency
- Updated packages: @tailwindcss/postcss (4.1.16), tailwindcss (4.1.16), eslint (9.39.1), knip (5.67.1), lucide-react (0.552.0), @types/node (22.19.0)
- Removed unused @tailwindcss/typography
- Cleaned 11 backup files (.bak, .backup)

**Tailwind v4 Configuration:**
- Removed legacy tailwind.config.ts (v3-style)
- Using CSS-first configuration (@import "tailwindcss", @theme directives)
- Updated components.json to remove obsolete config reference

**Results:**
- Build: ✅ Successful
- TypeScript: ✅ Zero errors
- Security: ✅ Zero vulnerabilities

### Phase 2: Live Stream & Landing Page Updates

**MCN.live Stream Integration:**
- Discovered correct embed format: `https://mcn.live/iframe/{church-uuid}`
- Used St Saviour's UUID: `da81d33b-1d66-445e-821b-fa34a9cf2db4`
- Removed full-page embed, now shows clean video player only
- Aspect ratio: 68% (matching St. John's Kilkenny implementation)

**Coming Up Section:**
- Reduced from 6 cards (2 rows) to 3 cards (1 row)
- Kept: Ash Wednesday Mass, Confirmation Preparation, Parish Quiz Night
- Removed: Stations of the Cross, Lenten Soup Supper, placeholder card

**Live Stream Section Positioning:**
- Moved from bottom of page to directly after Three Pillar Cards section
- Added separators for visual consistency
- Removed duplicate section

### Phase 3: LiveStreamBanner & Navigation Positioning

**LiveStreamBanner Implementation:**
- Created as homepage-only component (not site-wide)
- Height: 10vh
- Background: Gold (brand color)
- Position: Static (scrolls away naturally)
- Location: Very top of homepage, above Hero

**Hero Section Adjustment:**
- Changed from 100vh to 90vh height
- Total viewport on load: Banner (10vh) + Hero (90vh) = 100vh

**Navigation Smart Positioning:**
- Detects homepage using `usePathname()` hook
- **Homepage (not scrolled):** `absolute top-[10vh]` - sits below banner, scrolls with page
- **Homepage (scrolled past 10vh):** `fixed top-0` - sticks to viewport top
- **Other pages:** `fixed top-0` - normal sticky behavior
- Scroll threshold: Calculated as 10vh (`window.innerHeight * 0.1`)
- Background change activates only after scrolling past banner
- No transition animations (instant snap for natural feel)

**Dropdown & Backdrop Positioning:**
- Conditional positioning based on homepage/scroll state
- Homepage (not scrolled): `absolute` with offset calculations
- Scrolled or other pages: `fixed` with standard offsets

### Files Modified

**Core Components:**
- `src/components/layout/Navigation.tsx` - Smart positioning logic
- `src/components/Hero.tsx` - Height adjustment (90vh)
- `src/components/layout/PageLayout.tsx` - Removed next/head
- `src/components/ui/Badge.tsx` - Removed React.FC
- `src/components/ThreePillarCards.tsx` - Removed React.FC

**Pages:**
- `src/app/(public)/page.tsx` - LiveStreamBanner integration, Coming Up section update
- `src/app/(public)/layout.tsx` - Removed site-wide LiveStreamBanner

**Configuration:**
- Removed `tailwind.config.ts` (legacy)
- Updated `components.json`
- Created `.env.example`
- Updated `.gitignore` (added docs-temp/)

### Technical Highlights

**Navigation Positioning Logic:**
```tsx
className={`${
  isHomepage && !isScrolled ? 'absolute top-[10vh]' : 'fixed top-0'
} ...`}
```

**Scroll Threshold Calculation:**
```tsx
const bannerHeight = window.innerHeight * 0.1; // 10vh
setIsScrolled(window.scrollY > bannerHeight);
```

**MCN.live Embed:**
```tsx
<iframe
  src="https://mcn.live/iframe/da81d33b-1d66-445e-821b-fa34a9cf2db4"
  allowFullScreen
  frameBorder="0"
  scrolling="no"
  style={{ paddingBottom: '68%' }}
/>
```

### Project State

- **Status:** Production-ready
- **Build:** Passing (all routes compiled successfully)
- **Type Safety:** Full TypeScript coverage, zero errors
- **Dependencies:** Up-to-date, no vulnerabilities
- **Code Quality:** Modern React patterns, no React.FC usage
- **Performance:** Optimized with proper lazy loading and responsive design

### Next Steps (Optional)

1. Configure Prettier formatting rules
2. Set up pre-commit hooks with Husky
3. Add metadata exports to remaining page.tsx files for SEO
4. Implement environment variables from .env.example
5. Contact MCN.live for alternative embed methods if needed
