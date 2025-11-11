# Claude Code Session Log

---

## 📚 Documentation Index

This project maintains a **minimal, essential** set of documentation for efficient development.

### Core Documentation

- **CLAUDE.md** (this file) - Development rules, standards, quick reference, and session history
- **README.md** - Project overview, setup instructions, tech stack, and deployment guide
- **DESIGN_SYSTEM.md** - Complete design system documentation (Tailwind v4, tokens, components)
- **ARCHITECTURE.md** - Technical architecture, migration history, and architectural decisions
- **FUTURE_NAVIGATION_REFACTOR_OPTION_2.md** - Optional future Radix UI migration plan

### Source Code Documentation

- **src/lib/blog/README.md** - Blog utilities and conversion functions documentation
- Inline code comments throughout the codebase
- TypeScript interfaces serve as self-documentation

### Content Files (DO NOT MODIFY)

- **blog/** directory - 22 CMS content articles (Learning Hub, Prayer Hub, Spiritual Reflections)
- **temp-francesca-content/** - Backup content from original submissions

### Quick Navigation

- [Critical Development Rules](#critical-development-rules---read-first)
- [Quick Reference](#quick-reference)
- [Session History](#session-2025-11-04---project-modernization--live-stream-implementation)
- [Project Overview](./README.md)
- [Design System](./DESIGN_SYSTEM.md)
- [Architecture & Migrations](./ARCHITECTURE.md)
- [Future Enhancements](./FUTURE_NAVIGATION_REFACTOR_OPTION_2.md)

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

**Rule:** Must use Next.js 15+ App Router patterns
**Source:** `package.json` - "next": "^15.5.6"
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

---

## Session: 2025-11-11 - Payload CMS 3.0 Integration for Newsletter Management

### Phase 1: Initial Setup & Dependency Resolution

**Objective:** Integrate Payload CMS 3.0 for newsletter subscription management with offline SQLite database.

**Requirements Gathered:**
- Newsletter management system with subscription tracking
- Offline development with SQLite (no MongoDB)
- Admin panel at `/admin` route
- Newsletter page link in navigation (page to be created later)
- Resend email service integration (API key pending)

**Architecture Research:**
- Payload CMS 3.0 requires React 19.x and Next.js 15.3+
- SQLite adapter available via `@payloadcms/db-sqlite`
- Hybrid CMS approach: Keep existing TypeScript CMS (22 articles), add Payload for newsletter
- Ethereal email testing available for offline development

### Dependency Configuration Challenges

**Initial Attempt:**
- Downgraded Next.js 16.0.1 → 15.2.3
- Downgraded React 19.2.0 → 18.3.1
- Goal: Payload CMS compatibility based on initial research

**Build Errors Encountered:**
1. `--turbopack` flag error: Next.js 15.2.3 doesn't support flag for production builds
2. React peer dependency conflict: `@payloadcms/richtext-lexical@3.63.0` requires React 19.x

**Root Cause Analysis:**
- Payload CMS 3.63.0 explicitly requires React 19.0+
- Multiple Payload packages incompatible with React 18
- Next.js 15.2.3 lacks Turbopack production build support (added in 15.3+)
- Initial downgrade strategy was incorrect

**Final Solution - Version Locking Strategy:**

| Package | Initial | Attempted | Final (Locked) |
|---------|---------|-----------|----------------|
| Next.js | 16.0.1 | 15.2.3 ❌ | **15.3.3** ✅ |
| React | 19.2.0 | 18.3.1 ❌ | **19.1.0** ✅ |
| React-DOM | 19.2.0 | 18.3.1 ❌ | **19.1.0** ✅ |
| Payload | - | ^3.63.0 ❌ | **3.63.0** ✅ (exact) |

**Critical Discovery - Version Alignment Required:**
- Payload 3.63.0 tested with Next.js 15.3.x and React 19.1.0 (per official payload-3.0-demo)
- Using exact versions (`3.63.0` not `^3.63.0`) prevents future breaking changes
- Next.js 15.3.3 provides stable Turbopack support and Payload compatibility
- React 19.1.0 is the tested version for Payload CMS 3.x integration

**Build Script Fix:**
- Changed: `"build": "next build --turbopack"` → `"build": "next build"`
- Kept: `"dev": "next dev --turbopack"` (Turbopack supported for dev)

### Payload CMS Installation

**Dependencies Installed (Exact Versions):**
```json
"payload": "3.63.0",
"@payloadcms/db-sqlite": "3.63.0",
"@payloadcms/richtext-lexical": "3.63.0",
"@payloadcms/next": "3.63.0",
"@payloadcms/ui": "3.63.0",
"graphql": "^16.8.1",
"sharp": "^0.33.5"
```

**Configuration Files Created:**

1. **`src/payload.config.ts`** - Main Payload configuration
   - SQLite adapter: `file:./payload.db`
   - Admin route: `/admin`
   - Server URL: `http://localhost:3000`
   - TypeScript output: `src/lib/payload/types.ts`
   - Newsletter collection imported

2. **`src/collections/Newsletters.ts`** - Newsletter subscriber schema
   - Fields: email, firstName, lastName, status, interests, timestamps, IP/UA
   - Access controls: Public read/create, admin update/delete
   - Status options: active, unsubscribed, bounced
   - Interest categories: mass, events, learning, prayer

3. **`src/app/api/payload/[...slug]/route.ts`** - Payload REST API handler
   - Exports: GET, POST, PATCH, DELETE
   - Uses Payload 3.0 official REST handlers

4. **`.env.local`** - Environment variables
   - `DATABASE_URL=file:./payload.db`
   - `PAYLOAD_SECRET=<generated-secure-key>`
   - `NEXT_PUBLIC_SERVER_URL=http://localhost:3000`
   - `RESEND_API_KEY=<placeholder>`

5. **`tsconfig.json`** - Updated paths
   - Added: `"@payload-config": ["./src/payload.config.ts"]`

### Navigation Updates

**Modified:** `src/lib/data.ts`
- Added "Newsletter" link to `navigationMenu` array
- Position: After "Community" dropdown, before "Prayer Hub"
- Direct link: `{ name: 'Newsletter', href: '/newsletter' }`
- Page creation deferred to Phase 2

### Phase 2: Admin Panel Configuration & Critical Fixes

**Error #1: Missing RootLayout Provider**

**Error Message:**
```
Error: Cannot destructure property 'config' of 'ue(...)' as it is undefined.
```

**Root Cause:**
- Payload admin UI requires `RootLayout` provider from `@payloadcms/next/layouts`
- Missing context provider wrapper in `(payload)` route group
- Admin page tried to access config context before it was provided

**Solution - Created `src/app/(payload)/layout.tsx`:**
```typescript
import { RootLayout } from '@payloadcms/next/layouts'
import { importConfig } from 'payload'
import config from '@payload-config'

export default async function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await importConfig(config)
  return <RootLayout config={config}>{children}</RootLayout>
}
```

**Key Learnings:**
- `RootLayout` provider is **mandatory** for all Payload admin routes
- Must be placed in `(payload)` route group layout, not root layout
- `importConfig()` initializes Payload before rendering admin UI
- This pattern matches official payload-3.0-demo repository structure

**Error #2: TypeScript Type Errors in Admin Page**

**Errors Encountered:**
```typescript
// Error: Property 'params' does not exist on type 'AdminViewProps'
// Error: Type 'Promise<{ segments?: string[] }>' is not assignable to 'string[]'
```

**Root Cause:**
- Next.js 15 uses async `params` and `searchParams` in App Router
- Payload `AdminViewProps` type doesn't match Next.js async props pattern
- Route segment parameters must be awaited before use

**Solution - Fixed `src/app/(payload)/admin/[[...segments]]/page.tsx`:**
```typescript
export default async function AdminView({
  params,
  searchParams,
}: {
  params: Promise<{ segments?: string[] }>
  searchParams: Promise<Record<string, string | string[]>>
}) {
  const { segments = [] } = await params
  const resolvedSearchParams = await searchParams

  return (
    <RenderAdmin
      params={{ segments }}
      searchParams={resolvedSearchParams}
    />
  )
}
```

**Pattern Explanation:**
- Await `params` and `searchParams` (Next.js 15 requirement)
- Extract `segments` with default empty array fallback
- Pass resolved values to `RenderAdmin` component
- Maintains type safety with explicit Promise types

**Error #3: Build Failures**

**Initial Build Errors:**
1. Missing `(payload)/layout.tsx` causing context errors
2. Type mismatches in admin page props
3. Unhandled promise rejections in route handlers

**Final Build Success After:**
- Creating RootLayout provider wrapper
- Fixing async props handling
- Verifying all Payload imports resolve correctly
- Confirming SQLite adapter configuration

### React 19 Compatibility Audit

**Codebase Analysis Results:**
- ✅ No `defaultProps` on function components (deprecated in React 19)
- ✅ No `propTypes` usage (TypeScript used instead)
- ✅ No legacy Context API
- ✅ Modern Context API used correctly (`carousel.tsx`)
- ✅ All components use explicit function typing (no React.FC)
- ✅ Zero code modifications required for React 19

**Third-Party Library Compatibility:**
- framer-motion 12.23.24: ✅ Compatible
- embla-carousel-react 8.6.0: ✅ Compatible
- @radix-ui/* 1.x: ✅ Compatible
- lucide-react 0.548.0: ✅ Compatible
- All Payload packages: ✅ Require React 19

### Build & Type-Check Results

**npm install:**
- ✅ All dependencies resolved successfully
- ✅ Zero peer dependency conflicts
- ✅ React 19.1.0 + Next.js 15.3.3 installed
- ✅ Exact version locking prevents future breakage

**Type-check:**
- ✅ Zero TypeScript errors
- ✅ Strict mode compliance maintained
- ✅ All Payload types generated correctly
- ✅ Async props properly typed

**Build:**
- ✅ Production build successful
- ✅ All routes compiled (including admin routes)
- ✅ No Turbopack errors
- ✅ Confirmed by user after all fixes applied

### Files Created/Modified

**Created:**
1. `src/collections/Newsletters.ts` (2.3 KB) - Newsletter subscriber schema
2. `src/app/api/payload/[...slug]/route.ts` (343 bytes) - REST API handler
3. `src/payload.config.ts` (1.2 KB) - Main Payload configuration
4. `src/app/(payload)/layout.tsx` (389 bytes) - **CRITICAL: RootLayout provider**
5. `src/app/(payload)/admin/[[...segments]]/page.tsx` (665 bytes) - Admin UI page with async props
6. `.env.local` (306 bytes) - Environment variables

**Modified:**
1. `package.json` - Exact version locking for Payload ecosystem
2. `tsconfig.json` - Path aliases for @payload-config
3. `src/lib/data.ts` - Navigation menu update
4. `package-lock.json` - Dependency tree regenerated

**Verified Existing:**
- All existing components React 19 compatible
- TypeScript strict mode intact
- Tailwind v4 configuration unchanged
- 22 existing CMS articles preserved

### Technical Highlights

**Payload Configuration Pattern:**
```typescript
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  serverURL: process.env['NEXT_PUBLIC_SERVER_URL'] || 'http://localhost:3000',
  collections: [Newsletters],
  db: sqliteAdapter({
    client: { url: process.env['DATABASE_URL'] || 'file:./payload.db' },
    push: true,
  }),
  editor: lexicalEditor({}),
  admin: { user: 'users' },
  typescript: { outputFile: path.resolve(__dirname, 'lib/payload/types.ts') },
})
```

**Newsletter Collection Schema:**
```typescript
export const Newsletters: CollectionConfig = {
  slug: 'newsletter-subscribers',
  admin: { useAsTitle: 'email' },
  access: {
    read: () => true,    // Public (for unsubscribe)
    create: () => true,  // Public (for signup)
    update: ({ req }) => !!req.user,  // Admin only
    delete: ({ req }) => !!req.user,  // Admin only
  },
  fields: [
    { name: 'email', type: 'email', required: true, unique: true, index: true },
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'status', type: 'select', options: ['active', 'unsubscribed', 'bounced'], defaultValue: 'active' },
    { name: 'interests', type: 'select', hasMany: true, options: [...] },
    { name: 'subscribedAt', type: 'date', defaultValue: () => new Date() },
    { name: 'ipAddress', type: 'text', admin: { readOnly: true } },
  ],
}
```

**API Route Handler (Payload 3.0 Pattern):**
```typescript
export {
  REST_DELETE as DELETE,
  REST_GET as GET,
  REST_PATCH as PATCH,
  REST_POST as POST,
} from '@payloadcms/next/routes'
```

**RootLayout Provider Pattern (CRITICAL):**
```typescript
import { RootLayout } from '@payloadcms/next/layouts'
import { importConfig } from 'payload'
import config from '@payload-config'

export default async function PayloadLayout({ children }: { children: React.ReactNode }) {
  await importConfig(config)
  return <RootLayout config={config}>{children}</RootLayout>
}
```

### Project State

- **Status:** Phase 1 & 2 Complete - Admin Panel Ready for Testing
- **Build:** ✅ Passing with zero errors
- **Type Safety:** ✅ Zero TypeScript errors
- **Dependencies:** ✅ Exact versions locked for stability
- **Database:** ✅ SQLite configured (will auto-create on first admin login)
- **Admin Panel:** ✅ Available at `http://localhost:3000/admin`
- **API Endpoints:** ✅ REST API at `/api/payload/*`
- **Navigation:** ✅ Newsletter link added to main menu
- **Context Provider:** ✅ RootLayout properly configured
- **React Compatibility:** ✅ Zero code changes needed for React 19

### Configuration Summary

**Tech Stack (Final - Locked Versions):**
- Next.js 15.3.3 (App Router)
- React 19.1.0
- TypeScript 5.9.3 (strict mode)
- Tailwind CSS 4.1.16
- Payload CMS 3.63.0 (exact)
- SQLite database (offline)

**Admin Access:**
- Route: `http://localhost:3000/admin`
- First-time setup: Create admin user on first visit
- Collections: Newsletter Subscribers
- Database: SQLite auto-creates on initialization

**Environment Variables:**
- `DATABASE_URL`: SQLite file path (file:./payload.db)
- `PAYLOAD_SECRET`: Authentication secret (generated)
- `NEXT_PUBLIC_SERVER_URL`: Server URL for API
- `RESEND_API_KEY`: Email service (placeholder, to be added)

### Next Steps (Phase 3 - To Be Implemented)

1. **Admin Panel Testing:**
   - Run `npm run dev`
   - Navigate to `http://localhost:3000/admin`
   - Create first admin user
   - Test newsletter subscriber CRUD operations

2. **Newsletter Page Creation:**
   - Create `/newsletter` page with blog-style layout
   - Display newsletter archive (future collection)
   - Newsletter signup form component

3. **Newsletter Signup Component:**
   - Build `<NewsletterSignup />` component with brand styling
   - API route: `/api/newsletter/subscribe`
   - Form validation and error handling
   - Interest preference selection

4. **Email Integration:**
   - Add Resend API key to `.env.local`
   - Create welcome email template
   - Implement subscription confirmation email
   - Add unsubscribe functionality

5. **Admin Dashboard Enhancements:**
   - CSV export functionality
   - Bulk action workflows
   - Analytics dashboard

### Security Considerations

- IP address tracking for audit trail
- User agent logging for abuse detection
- Public access limited to read/create operations
- Admin authentication required for modifications
- Environment variables secured in `.env.local` (gitignored)
- PAYLOAD_SECRET cryptographically generated

### Lessons Learned

1. **Exact version matching is critical for Payload CMS:** Using `^3.63.0` can break on patch updates; lock to exact versions
2. **RootLayout provider is mandatory:** Cannot render admin UI without proper context provider wrapper
3. **Next.js 15 async params pattern:** Must await `params` and `searchParams` before destructuring
4. **Official demo repo is the source of truth:** payload-3.0-demo repository provides tested patterns for Next.js 15 integration
5. **Version alignment matters:** Next.js 15.3.3 + React 19.1.0 + Payload 3.63.0 is the tested combination
6. **Route group layouts are powerful:** `(payload)` route group isolates admin routes from public site layout
7. **SQLite is ideal for offline development:** No external database server needed for development phase
