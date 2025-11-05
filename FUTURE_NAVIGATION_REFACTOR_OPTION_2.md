# Navigation Refactor Option 2: Radix UI NavigationMenu

**Status:** Future Enhancement
**Current Implementation:** Option 1 (Conditional Rendering - Completed)
**When to Use:** When ready for architectural improvement and better accessibility patterns

---

## Overview

This document outlines the approach for refactoring the current custom navigation implementation to use official Radix UI NavigationMenu primitives. This follows the W3C Disclosure Navigation pattern and provides better accessibility out-of-the-box.

---

## Current State (After Option 1)

**File:** `/home/jack/Documents/st_saviours_fresh/src/components/layout/Navigation.tsx`

**Implementation:** Custom navigation with conditional rendering
- Items with dropdowns render as `<button>` elements
- Items without dropdowns render as `<Link>` elements
- Manual state management for dropdown toggles
- Custom positioning logic for homepage banner awareness
- Custom backdrop overlay

**Pros:**
- ✅ Works correctly
- ✅ Semantic HTML
- ✅ Accessible
- ✅ Low maintenance overhead

**Cons:**
- ⚠️ Custom implementation (not using Radix primitives)
- ⚠️ Manual ARIA attribute management
- ⚠️ No built-in keyboard navigation patterns
- ⚠️ Code duplication between mobile/desktop

---

## Option 2: Radix UI NavigationMenu Refactor

**Effort:** 2-3 hours
**Risk:** Medium
**Complexity:** Moderate

---

## Research Findings

### Radix UI NavigationMenu Pattern

From official Radix UI documentation:

> NavigationMenu does not use the WAI-ARIA menu role. Menu and menubars behave like native operating system menus with complex functionality like composite focus management and first-character navigation, which are often considered unnecessary for website navigation.

> It follows the W3C Disclosure Navigation Menu example for more appropriate website navigation patterns.

**Key Features:**
- Built-in keyboard navigation (Arrow keys, Home, End, Escape)
- Automatic ARIA attribute management
- Focus management
- Built-in viewport positioning
- Active state management with `aria-current`

**Official Documentation:**
- https://www.radix-ui.com/primitives/docs/components/navigation-menu
- Uses disclosure pattern (expand/collapse)
- Supports mixed dropdown and direct link items

---

## Implementation Approach

### Step 1: Install Radix UI NavigationMenu

```bash
npm install @radix-ui/react-navigation-menu
```

### Step 2: Basic Structure

```typescript
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export default function Navigation() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        {navigationMenu.map((item) => {
          const hasDropdown = item.dropdown && item.dropdown.length > 0;

          return (
            <NavigationMenu.Item key={item.name}>
              {hasDropdown ? (
                <>
                  <NavigationMenu.Trigger>
                    {item.name}
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content>
                    <ul className="grid gap-3 p-4">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <NavigationMenu.Link asChild>
                            <Link href={subItem.href}>
                              {subItem.name}
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </>
              ) : (
                <NavigationMenu.Link asChild>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
```

### Step 3: Preserve Custom Logic

**Homepage Banner Awareness:**
The current implementation has smart positioning logic that accounts for the 10vh LiveStreamBanner on homepage:

```typescript
const isHomepage = pathname === '/';
const [isScrolled, setIsScrolled] = useState(false);

// Navigation positioning
className={`${
  isHomepage && !isScrolled ? 'absolute top-[10vh]' : 'fixed top-0'
} ...`}
```

**Integration with Radix:**
```typescript
<NavigationMenu.Root
  className={`${
    isHomepage && !isScrolled ? 'absolute top-[10vh]' : 'fixed top-0'
  } w-full z-50 ...`}
>
  {/* Navigation content */}
</NavigationMenu.Root>
```

### Step 4: Style Integration

**Current Styling Patterns:**
- Background: `bg-slate-900 text-white`
- Hover: `hover:text-gold-400`
- Active dropdown: `bg-white/20 rounded`
- Transitions: `duration-300`

**Radix Styling Approach:**
Use Tailwind classes with data attributes:

```typescript
<NavigationMenu.Trigger
  className="text-white hover:text-gold-400 transition-colors duration-300
             data-[state=open]:bg-white/20 rounded px-3 py-2"
>
  {item.name}
</NavigationMenu.Trigger>

<NavigationMenu.Content
  className="absolute top-full left-0 bg-slate-900 border border-slate-700
             data-[motion=from-start]:animate-enterFromLeft
             data-[motion=from-end]:animate-enterFromRight"
>
  {/* Content */}
</NavigationMenu.Content>
```

### Step 5: Viewport Management

Radix provides built-in viewport for dropdown positioning:

```typescript
<NavigationMenu.Root>
  <NavigationMenu.List>
    {/* Items */}
  </NavigationMenu.List>

  <NavigationMenu.Viewport
    className="absolute top-full left-0 w-full"
  />
</NavigationMenu.Root>
```

### Step 6: Mobile Implementation

**Current Approach:** Separate mobile menu with different rendering
**Radix Approach:** Can use same NavigationMenu with responsive styles or keep separate mobile implementation

**Recommendation:** Keep mobile menu separate (less disruptive)
- Desktop: Use Radix NavigationMenu
- Mobile: Keep existing collapsible menu pattern

---

## Migration Checklist

### Phase 1: Preparation
- [ ] Review Radix UI NavigationMenu documentation
- [ ] Audit current custom logic that must be preserved
- [ ] Create feature branch for refactor
- [ ] Set up local testing environment

### Phase 2: Desktop Implementation
- [ ] Install @radix-ui/react-navigation-menu
- [ ] Replace desktop navigation map with NavigationMenu.Root structure
- [ ] Implement conditional rendering (dropdown vs direct link)
- [ ] Migrate styling to Radix data attributes
- [ ] Preserve homepage positioning logic
- [ ] Test keyboard navigation (Arrow keys, Escape, Tab)
- [ ] Verify ARIA attributes automatically applied

### Phase 3: Integration
- [ ] Connect with existing state management (if needed)
- [ ] Integrate backdrop overlay logic
- [ ] Handle outside click behavior
- [ ] Test scroll-based positioning changes
- [ ] Verify mobile menu still works independently

### Phase 4: Styling & Polish
- [ ] Match existing visual design
- [ ] Add animations/transitions
- [ ] Ensure chevron rotation works
- [ ] Test hover states
- [ ] Verify active state indicators

### Phase 5: Testing
- [ ] Manual testing of all navigation items
- [ ] Test Prayer Hub and Learning Hub direct links
- [ ] Test all dropdown menus
- [ ] Keyboard navigation testing
- [ ] Screen reader testing (NVDA, VoiceOver)
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing

### Phase 6: Cleanup
- [ ] Remove old custom dropdown logic
- [ ] Remove manual ARIA attribute management
- [ ] Clean up unused state variables
- [ ] Update TypeScript types if needed
- [ ] Document new component structure

---

## Benefits After Migration

### Accessibility
- ✅ Automatic ARIA attribute management
- ✅ Built-in keyboard navigation patterns
- ✅ Focus management handled automatically
- ✅ Follows W3C Disclosure Navigation pattern

### Developer Experience
- ✅ Less custom code to maintain
- ✅ Built-in patterns reduce bugs
- ✅ TypeScript support from Radix
- ✅ Future-proof with Radix updates

### Code Quality
- ✅ Reduced code duplication
- ✅ Cleaner component structure
- ✅ Better separation of concerns
- ✅ Leverages battle-tested library

### User Experience
- ✅ Consistent keyboard interactions
- ✅ Better screen reader support
- ✅ Smoother animations (if configured)
- ✅ More predictable behavior

---

## Potential Challenges

### Challenge 1: Homepage Positioning Logic
**Issue:** Custom absolute/fixed positioning based on scroll state
**Solution:** Apply className to NavigationMenu.Root, preserve existing logic

### Challenge 2: Backdrop Overlay
**Issue:** Current implementation has custom backdrop for mobile/desktop
**Solution:** Keep backdrop separate from Radix component, trigger on dropdown open

### Challenge 3: Mobile Menu
**Issue:** Mobile uses completely different pattern (full-screen overlay)
**Solution:** Keep mobile menu separate, only use Radix for desktop

### Challenge 4: Styling Migration
**Issue:** Current styles use custom classes, Radix uses data attributes
**Solution:** Map existing styles to Radix data attributes systematically

### Challenge 5: State Management
**Issue:** Current `activeDropdown` state might conflict with Radix internal state
**Solution:** Remove `activeDropdown`, use Radix's built-in state management

---

## Code Comparison

### Current Implementation (Option 1)

```typescript
// Desktop Navigation
{navigationMenu.map((item) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  return hasDropdown ? (
    <button
      onClick={() => handleDropdownToggle(item.name)}
      className="..."
      aria-expanded={activeDropdown === item.name}
      aria-haspopup="true"
    >
      {item.name}
      <ChevronDownIcon />
    </button>
  ) : (
    <Link href={item.href} className="...">
      {item.name}
    </Link>
  );
})}

// Separate dropdown rendering
{navigationMenu
  .find(item => item.name === activeDropdown)
  ?.dropdown?.map((subItem) => (
    <Link href={subItem.href}>{subItem.name}</Link>
  ))}
```

### Radix UI Implementation (Option 2)

```typescript
<NavigationMenu.Root>
  <NavigationMenu.List>
    {navigationMenu.map((item) => {
      const hasDropdown = item.dropdown && item.dropdown.length > 0;

      return (
        <NavigationMenu.Item key={item.name}>
          {hasDropdown ? (
            <>
              <NavigationMenu.Trigger>
                {item.name}
                <ChevronDownIcon />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content>
                {item.dropdown.map((subItem) => (
                  <NavigationMenu.Link asChild key={subItem.name}>
                    <Link href={subItem.href}>
                      {subItem.name}
                    </Link>
                  </NavigationMenu.Link>
                ))}
              </NavigationMenu.Content>
            </>
          ) : (
            <NavigationMenu.Link asChild>
              <Link href={item.href}>
                {item.name}
              </Link>
            </NavigationMenu.Link>
          )}
        </NavigationMenu.Item>
      );
    })}
  </NavigationMenu.List>

  <NavigationMenu.Viewport />
</NavigationMenu.Root>
```

**Key Differences:**
- Radix handles trigger/content relationship automatically
- No manual state management for `activeDropdown`
- Built-in ARIA attributes
- Viewport component handles positioning
- Less code overall

---

## Performance Considerations

### Bundle Size
- Radix UI NavigationMenu: ~15KB (gzipped)
- Current custom implementation: ~0KB (pure React/Next.js)
- Trade-off: Slightly larger bundle for better functionality

### Runtime Performance
- Radix: Optimized event handlers, efficient re-renders
- Current: Already optimized, minimal re-renders
- Verdict: Similar performance, Radix potentially more optimized for complex scenarios

---

## When to Implement This Refactor

**Good Times:**
- After completing all critical features
- When planning accessibility audit
- During scheduled refactoring sprint
- When team has bandwidth for testing

**Not Good Times:**
- Right before major launch/deadline
- During active development of new features
- When short on QA resources

---

## Alternative: shadcn/ui NavigationMenu

If you prefer pre-built components, shadcn/ui also provides a NavigationMenu component built on Radix primitives:

```bash
npx shadcn@latest add navigation-menu
```

**Pros:**
- Pre-styled with Tailwind
- TypeScript-first
- Customizable
- Follows design system patterns

**Cons:**
- More opinionated styling
- May require more customization to match current design
- Slightly larger footprint

---

## Resources

### Official Documentation
- Radix UI NavigationMenu: https://www.radix-ui.com/primitives/docs/components/navigation-menu
- W3C Disclosure Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- shadcn/ui NavigationMenu: https://ui.shadcn.com/docs/components/navigation-menu

### Code Examples
- Radix Examples: https://www.radix-ui.com/primitives/docs/components/navigation-menu#examples
- Next.js Integration: https://github.com/radix-ui/primitives/tree/main/packages/react/navigation-menu

### Accessibility
- ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/
- WebAIM Navigation Best Practices: https://webaim.org/articles/

---

## Decision Matrix

| Factor | Current (Option 1) | Radix Refactor (Option 2) |
|--------|-------------------|---------------------------|
| Accessibility | Good | Excellent |
| Maintenance | Medium | Low |
| Code Complexity | Medium | Low |
| Bundle Size | Smaller | Slightly Larger |
| Custom Logic Support | Full Control | Mostly Supported |
| Development Time | Done | 2-3 hours |
| Risk | None (implemented) | Medium |
| Future-proof | Good | Excellent |

---

## Recommendation

**Implement Option 2 when:**
1. You have 2-3 hours for focused refactoring
2. Accessibility audit is planned
3. Team is comfortable with Radix UI patterns
4. No urgent deadlines approaching

**Stay with Option 1 if:**
1. Current implementation meets all requirements
2. No accessibility issues reported
3. Team prefers custom solutions
4. Bundle size is critical concern

---

## Notes

- Option 1 (current implementation) is production-ready and fully functional
- Option 2 is an enhancement, not a requirement
- Both approaches achieve the same user experience
- Radix UI provides long-term benefits for maintainability and accessibility
- Migration can be done incrementally (desktop first, then mobile)

---

**Document Created:** 2025-11-05
**Last Updated:** 2025-11-05
**Status:** Reference for future refactoring
