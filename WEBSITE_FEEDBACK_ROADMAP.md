# St Saviour's Parish Website - Feedback & Development Roadmap

**Document Version:** 1.0
**Last Updated:** November 11, 2025
**Status:** Active Development
**Project Lead:** Jack Griffin (Web Developer)
**Content Coordinator:** Francesca

---

## 📋 Executive Summary

This document consolidates all council feedback received during the pre-launch review period for the St Saviour's Parish website. The feedback has been organized into actionable development tasks, prioritized by urgency and impact, and mapped to a phased implementation roadmap.

### Key Highlights

- **Launch Date:** Wednesday, November 19, 2025
- **Next PPC Meeting:** December 3, 2025
- **Total Feedback Items:** 47 actionable items across 3 categories
- **Critical Issues Identified:** 2 (mobile homepage banner, navigation UX)
- **New Feature Requests:** 12 major features
- **Strategic Initiatives:** 2 (intergenerational engagement, interfaith dialogue)

### Overall Sentiment

**Positive Reception:** "Absolutely love the site" - "Fantastic start"
**Areas for Improvement:** Mobile homepage first impression, content organization
**Strategic Opportunity:** Expand from informational website to community engagement platform

---

## Project Objectives

### Primary Goals
1. **Launch-Ready Website:** Resolve critical issues before November 19 go-live
2. **User Experience Excellence:** Ensure intuitive navigation and mobile optimization
3. **Content Richness:** Provide valuable resources for all parishioner segments
4. **Community Engagement:** Transform website into active community hub
5. **Strategic Alignment:** Support intergenerational and interfaith initiatives

### Success Metrics
- Zero critical UX issues at launch
- Mobile responsiveness score: 95%+
- Content engagement: Track most-visited sections
- Newsletter signups: Target x subscribers in first 3 months

---

## 🚨 Critical Issues (Pre-Launch - Priority 1)

### Issue #1: Mobile Homepage Banner - UX Confusion
**Category:** User Experience
**Severity:** High
**Reporter:** Primary mobile user feedback
**Device:** Mobile

**Problem Statement:**
The homepage banner creates a poor first impression with multiple UX issues:
1. Logo overlaps "live link" button (accessibility issue)
2. Blue box labeled "Watch live mass here →" functions as menu button (not direct link)
3. Brown/yellow color questioned by users
4. Banner appears cluttered and oversized
5. Overall presentation is "messy" and not "neat and tidy"

**User Expectation vs. Reality:**
- **Expected:** Click "Watch live mass here" → Go directly to stream
- **Actual:** Click → Opens menu dropdown, due to overlapping the burger menu.

**Impact:**
- First impression is critical (top of homepage)
- Confusion reduces trust and usability
- Mobile-first users affected most

**Recommended Solutions:**

**Design Improvements Required:**
- Moved the banner underneath the 'Hero' section, but still above the fold.

- Reduce banner height: 10vh → 8vh (more subtle)
- Fix logo overlap: Add proper spacing/padding
- Color adjustment: Consider using `gold-500` instead of brown/yellow
- Simplify layout: Remove redundant elements

**Files to Modify:**
- `src/components/LiveStreamBanner.tsx`
- `src/components/Hero.tsx` (adjust height compensation)
- `src/components/layout/Navigation.tsx` (scroll threshold adjustment)

**Deadline:** Before November 19 launch

---

### Issue #2: Navigation Positioning Logic
**Category:** Technical Debt
**Severity:** Medium-High
**Related To:** Issue #1

**Problem:**
Current navigation scroll logic assumes 10vh banner height. If banner height changes, scroll threshold breaks.

**Current Implementation:**
```typescript
const bannerHeight = window.innerHeight * 0.1; // Hardcoded 10vh
setIsScrolled(window.scrollY > bannerHeight);
```

**Recommended Solution:**
```typescript
// Dynamic calculation based on actual banner element
const bannerElement = document.getElementById('live-stream-banner');
const bannerHeight = bannerElement?.offsetHeight || 0;
setIsScrolled(window.scrollY > bannerHeight);
```

**Files to Modify:**
- `src/components/layout/Navigation.tsx`

**Estimated Time:** 1 hour
**Deadline:** Before November 19 launch

---

## 📦 Development Roadmap

### Phase 0: Pre-Launch Critical Fixes (Nov 11-18, 2025)

**Timeline:** 1 week before launch
**Status:** 🔴 In Progress
**Goal:** Resolve all critical issues for successful November 19 launch

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Fix mobile banner UX confusion | P0 | 3-4 hours | 🔴 Not Started |
| Redesign banner layout (reduce clutter) | P0 | 2-3 hours | 🔴 Not Started |
| Fix logo overlap issue | P0 | 1 hour | 🔴 Not Started |
| Adjust banner color (gold-500) | P0 | 30 mins | 🔴 Not Started |
| Dynamic navigation scroll threshold | P1 | 1 hour | 🔴 Not Started |
| Mobile responsive testing (all pages) | P1 | 4 hours | 🔴 Not Started |
| Final TypeScript error check | P1 | 30 mins | 🔴 Not Started |
| Production build test | P1 | 30 mins | 🔴 Not Started |

**Deliverables:**
- ✅ Mobile homepage passes user acceptance testing
- ✅ Zero critical UX issues
- ✅ Production build successful
- ✅ All stakeholder concerns addressed

**Total Estimated Time:** 12-14 hours

---

### Phase 1: Launch & Stabilization (Nov 19 - Dec 3, 2025)

**Timeline:** 2 weeks (Launch through next PPC meeting)
**Status:** 🟡 Upcoming
**Goal:** Smooth launch, collect user feedback, prepare church photography integration

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Website goes live (Nov 19) | P0 | N/A | 🟡 Scheduled |
| Monitor error logs and user reports | P0 | Ongoing | 🟡 Planned |
| Set up continuous feedback survey | P1 | 2 hours | 🟡 Planned |
| Implement survey (Hugo + Gifty specs) | P1 | 3 hours | 🟡 Planned |
| Prepare church photo integration workflow | P2 | 2 hours | 🟡 Planned |
| Replace placeholder images (early Dec) | P2 | 4 hours | 🟡 Planned |
| Analytics setup (track most-visited sections) | P2 | 2 hours | 🟡 Planned |
| Performance optimization audit | P3 | 3 hours | 🟡 Planned |

**Key Milestones:**
- **Nov 19:** Website launch
- **Nov 19-26:** Monitor feedback and errors
- **Dec 3:** Next PPC meeting (present feedback summary)
- **Early Dec:** Church photography and image replacement

**Deliverables:**
- ✅ Successful launch with uptime monitoring
- ✅ Feedback survey live and collecting responses
- ✅ Analytics tracking configured
- ✅ Church photos integrated

**Total Estimated Time:** 16 hours

---

### Phase 2: Content Expansion (Dec 2025 - Jan 2026)

**Timeline:** 6 weeks post-launch
**Status:** 🔵 Planning
**Goal:** Add requested content features and media archive functionality

#### 2.1 Newsletter System Integration (Week 1-2)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Create `/newsletter` page (blog-style layout) | P1 | 4 hours | 🔵 Planned |
| Build `<NewsletterSignup />` component | P1 | 3 hours | 🔵 Planned |
| API route: `/api/newsletter/subscribe` | P1 | 2 hours | 🔵 Planned |
| Form validation and error handling | P1 | 2 hours | 🔵 Planned |
| Interest preference selection UI | P2 | 2 hours | 🔵 Planned |
| Add Resend API key to `.env.local` | P1 | 15 mins | 🔵 Planned |
| Create welcome email template | P2 | 3 hours | 🔵 Planned |
| Implement subscription confirmation email | P2 | 2 hours | 🔵 Planned |
| Add unsubscribe functionality | P1 | 2 hours | 🔵 Planned |
| Test newsletter admin panel | P1 | 1 hour | 🔵 Planned |

**Deliverables:**
- ✅ Newsletter page with signup form
- ✅ Email confirmation workflow
- ✅ Admin panel for subscriber management
- ✅ CSV export functionality

**Total Estimated Time:** 21 hours

---

#### 2.2 Media Content Archive (Week 3-4)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Design "Media & Stories" section | P2 | 4 hours | 🔵 Planned |
| Create video/interview archive structure | P2 | 3 hours | 🔵 Planned |
| Build content category system | P2 | 2 hours | 🔵 Planned |
| Video embed component (YouTube/Vimeo) | P2 | 2 hours | 🔵 Planned |
| Gallery component for event photos | P2 | 3 hours | 🔵 Planned |
| Content tagging system (CMS) | P2 | 3 hours | 🔵 Planned |

**Content Categories:**
- Maureen's Flower Arrangements
- Father Kr.'s Telescope & Astronomy
- Miracles with Angelo
- The Congress with Christine
- Pastoral Care: Funerals with Father Kenneth
- International Priests Interviews

**Deliverables:**
- ✅ Media archive section with video embeds
- ✅ Photo gallery for events
- ✅ Content categorization and filtering
- ✅ Search functionality

**Total Estimated Time:** 17 hours

---

#### 2.3 Community Programs Pages (Week 5-6)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Create "Community Programs" page | P2 | 3 hours | 🔵 Planned |
| Book Club section (with reading lists) | P2 | 2 hours | 🔵 Planned |
| Christian Cinema page (coming soon) | P3 | 2 hours | 🔵 Planned |
| Learning Hub / Resources page | P2 | 4 hours | 🔵 Planned |
| Liturgy courses link aggregation | P2 | 2 hours | 🔵 Planned |
| External resource management | P3 | 2 hours | 🔵 Planned |

**Deliverables:**
- ✅ Community Programs landing page
- ✅ Book Club with meeting schedules
- ✅ Learning Hub with curated resources
- ✅ Placeholder for Christian Cinema (awaiting projector)

**Total Estimated Time:** 15 hours

---

### Phase 3: Social Media & Engagement (Jan - Feb 2026)

**Timeline:** 8 weeks
**Status:** 🔵 Planning
**Goal:** Establish social media presence and integrate with website

#### 3.1 Social Media Setup (Week 1-2)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Create Facebook parish account | P1 | 1 hour | 🔵 Planned |
| Create Instagram parish account | P1 | 1 hour | 🔵 Planned |
| Develop branding guidelines | P2 | 4 hours | 🔵 Planned |
| Create content calendar template | P2 | 3 hours | 🔵 Planned |
| Set up posting schedule (liturgical focus) | P2 | 2 hours | 🔵 Planned |
| Admin access management | P1 | 1 hour | 🔵 Planned |

**Deliverables:**
- ✅ Active Facebook and Instagram accounts
- ✅ Consistent branding across platforms
- ✅ 30-day content calendar
- ✅ Team access configured

**Total Estimated Time:** 12 hours

**Note:** Coordinate with Francesca for WhatsApp group organization

---

#### 3.2 Website Social Integration (Week 3-4)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Add social media feed embeds | P2 | 3 hours | 🔵 Planned |
| Social sharing buttons (all pages) | P2 | 2 hours | 🔵 Planned |
| Follow/subscribe CTAs | P2 | 2 hours | 🔵 Planned |
| Instagram feed on homepage | P3 | 3 hours | 🔵 Planned |
| Social proof testimonials section | P3 | 3 hours | 🔵 Planned |

**Deliverables:**
- ✅ Social media integrated into website
- ✅ Cross-platform content sharing
- ✅ Follow buttons on all pages
- ✅ Live social feed displays

**Total Estimated Time:** 13 hours

---

### Phase 4: Events & Engagement Platform (Feb - Mar 2026)

**Timeline:** 6 weeks
**Status:** 🔵 Planning
**Goal:** Transform website into community engagement platform

#### 4.1 Events System Infrastructure (Week 1-3)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Design events database schema (Payload) | P1 | 3 hours | 🔵 Planned |
| Create Events collection in CMS | P1 | 4 hours | 🔵 Planned |
| Build event listing page | P1 | 5 hours | 🔵 Planned |
| Individual event detail pages | P1 | 4 hours | 🔵 Planned |
| Event registration/RSVP functionality | P2 | 8 hours | 🔵 Planned |
| Calendar integration (Google Calendar) | P2 | 4 hours | 🔵 Planned |
| Event categories/filtering | P2 | 3 hours | 🔵 Planned |
| Email reminders for registered attendees | P3 | 4 hours | 🔵 Planned |

**Event Categories:**
- Mass Times & Special Liturgies
- Youth Events
- Interfaith Gatherings
- Community Social Events
- Learning & Formation
- Service Projects

**Deliverables:**
- ✅ Full-featured events management system
- ✅ Public event calendar
- ✅ Registration and attendance tracking
- ✅ Automated email notifications

**Total Estimated Time:** 35 hours

---

#### 4.2 Community Engagement Features (Week 4-6)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Event photo gallery (user submissions) | P3 | 4 hours | 🔵 Planned |
| Community story submission portal | P3 | 5 hours | 🔵 Planned |
| Suggestion/feedback form for events | P2 | 2 hours | 🔵 Planned |
| Testimonials submission workflow | P3 | 3 hours | 🔵 Planned |
| Moderation queue for user content | P2 | 4 hours | 🔵 Planned |
| Analytics dashboard (admin only) | P3 | 5 hours | 🔵 Planned |

**Deliverables:**
- ✅ User-generated content system
- ✅ Community participation features
- ✅ Content moderation workflow
- ✅ Admin analytics dashboard

**Total Estimated Time:** 23 hours

---

### Phase 5: Strategic Initiatives (Mar - Jun 2026)

**Timeline:** 12 weeks
**Status:** 🔵 Strategic Planning
**Goal:** Implement intergenerational and interfaith strategies

**Dependencies:**
- ⏳ Awaiting Archdiocese of Southwark meeting (Hugo + Father Kr.)
- ⏳ Awaiting interfaith partner identification (Hugo + Francesca)
- ⏳ Awaiting youth ministry leadership appointment

#### 5.1 Youth Ministry Hub (Week 1-4)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Design Youth Ministry section | P2 | 5 hours | 🔵 Planned |
| Youth events calendar integration | P2 | 3 hours | 🔵 Planned |
| Young adult fellowship page | P2 | 3 hours | 🔵 Planned |
| Youth testimonials collection | P3 | 3 hours | 🔵 Planned |
| Resources for parents/youth leaders | P2 | 4 hours | 🔵 Planned |
| Youth content strategy implementation | P2 | 8 hours | 🔵 Planned |

**Content Focus:**
- Youth event coverage
- Young adult faith stories
- Vocational discernment resources
- Service project spotlights
- Youth-led initiatives

**Deliverables:**
- ✅ Dedicated youth ministry section
- ✅ Age-appropriate content and design
- ✅ Youth engagement metrics tracking
- ✅ Parent/leader resources

**Total Estimated Time:** 26 hours

---

#### 5.2 Interfaith Dialogue Section (Week 5-8)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| Create "Interfaith Dialogue" page | P2 | 4 hours | 🔵 Planned |
| Partner organization directory | P2 | 3 hours | 🔵 Planned |
| Interfaith event listings | P2 | 3 hours | 🔵 Planned |
| Past gatherings photo gallery | P3 | 3 hours | 🔵 Planned |
| Educational resources (Catholic teaching) | P2 | 5 hours | 🔵 Planned |
| "Our Neighbors" spotlight series | P3 | 6 hours | 🔵 Planned |

**Content Themes:**
- Tolerance and mutual respect
- Shared community service projects
- Educational series on different faiths
- Joint prayer/reflection events
- Catholic interfaith teaching

**Deliverables:**
- ✅ Interfaith section with partner links
- ✅ Event collaboration showcase
- ✅ Educational content library
- ✅ Community story features

**Total Estimated Time:** 24 hours

---

#### 5.3 Intergenerational Features (Week 9-12)

| Task | Priority | Estimated Time | Status |
|------|----------|----------------|--------|
| "Community Stories" collection (Payload) | P2 | 4 hours | 🔵 Planned |
| Multi-generational testimonials | P3 | 5 hours | 🔵 Planned |
| Elder-youth mentorship program page | P3 | 3 hours | 🔵 Planned |
| Traditional practices showcase | P3 | 4 hours | 🔵 Planned |
| Family faith stories section | P3 | 4 hours | 🔵 Planned |
| Intergenerational event promotion | P2 | 3 hours | 🔵 Planned |

**Deliverables:**
- ✅ Intergenerational content strategy
- ✅ Multi-age participation features
- ✅ Family-focused resources
- ✅ Mentorship program visibility

**Total Estimated Time:** 23 hours

---

## 📊 Priority Matrix

### Priority Levels Defined

| Level | Description | Timeline | Examples |
|-------|-------------|----------|----------|
| **P0** | Critical - Blocks launch or core functionality | Fix immediately | Banner UX, navigation bugs |
| **P1** | High - Essential features for launch success | 1-2 weeks | Newsletter, feedback survey |
| **P2** | Medium - Important but not blocking | 1-3 months | Media archive, social media |
| **P3** | Low - Nice-to-have enhancements | 3-6 months | User-generated content, analytics |

---

### Feature Prioritization by Impact vs. Effort

#### High Impact, Low Effort (Do First)
- Fix mobile banner UX confusion ⚡
- Add newsletter signup form ⚡
- Create feedback survey ⚡
- Add social media links ⚡
- Fix navigation scroll logic ⚡

#### High Impact, High Effort (Plan Carefully)
- Events management system 📅
- Media content archive 🎥
- Youth ministry hub 👥
- Social media integration 📱
- User-generated content platform 📝

#### Low Impact, Low Effort (Quick Wins)
- Add liturgy course links 🔗
- Create Book Club page 📚
- Add partner organization links 🤝
- Social sharing buttons ➡️

#### Low Impact, High Effort (Defer)
- Advanced analytics dashboard 📊
- Payment processing for events 💳
- Multi-language support 🌍
- Mobile app development 📱

---

## 🎯 Feature Request Summary

### Content & Media (12 features)

**Media Content Series:**
1. ✅ Maureen's Flower Arrangements (video/photo series)
2. ✅ Father Kr.'s Telescope & Astronomy
3. ✅ Miracles with Angelo (testimonial series)
4. ✅ The Congress with Christine (event coverage)
5. ✅ Funerals: Interview with Father Kenneth (pastoral care)
6. ✅ International Priests Interviews (global church connections)

**Community Programs:**
7. ✅ Book Club (reading lists, meeting schedules)
8. ✅ Christian Cinema (conditional on projector acquisition)
9. ✅ Learning Hub (liturgy courses, educational resources)

**Social Media:**
10. ✅ Facebook parish account
11. ✅ Instagram parish account
12. ✅ Liturgical presence on social media

---

### Technical Features (8 features)

**Newsletter System:**
1. ✅ Newsletter subscription form
2. ✅ Newsletter page (archive/content)
3. ✅ Email integration (Resend API)
4. ✅ Subscriber management (Payload CMS)

**Events System:**
5. ✅ Event calendar with registration
6. ✅ Event categories and filtering
7. ✅ RSVP/attendance tracking
8. ✅ Email reminders

---

### Strategic Initiatives (6 features)

**Intergenerational Engagement:**
1. ✅ Youth ministry section
2. ✅ Young adult fellowship page
3. ✅ Intergenerational story features
4. ✅ Multi-generational testimonials

**Interfaith Dialogue:**
5. ✅ Interfaith section with partner directory
6. ✅ Joint event collaboration showcase

---

### Administrative (4 features)

1. ✅ Feedback survey (continuous collection)
2. ✅ WhatsApp group organization (Francesca lead)
3. ✅ Analytics tracking (usage patterns)
4. ✅ Content moderation workflow

---

## 👥 Stakeholder & Responsibility Matrix

### Core Team

| Role | Name | Responsibilities | Contact |
|------|------|------------------|---------|
| **Web Developer** | Jack Griffin | Technical implementation, architecture, design | Primary contact |
| **Content Coordinator** | Francesca | Content strategy, WhatsApp coordination, interfaith planning | Key stakeholder |
| **Strategy Lead** | Hugo Martinho | Media strategy, intergenerational/interfaith initiatives | Strategic direction |
| **Survey Lead** | Gifty Thomas | Survey design and implementation | Feedback collection |

---

### Pastoral Team

| Role | Responsibilities | Content Involvement |
|------|------------------|---------------------|
| **Father Kr.** | Archdiocese liaison, astronomy content, international priest coordination | High |
| **Father Kenneth** | Funeral pastoral care interview, spiritual guidance | Medium |
| **Father Michael** | International priest coordination | Medium |
| **School Chaplain** | St Matthew Academy connection | Low |

---

### Content Contributors

| Name | Content Area | Type |
|------|--------------|------|
| **Maureen** | Flower arrangements | Video/photo series |
| **Angelo** | Miracles testimonials | Interview/story |
| **Christine** | Congress coverage | Event recap |
| **@~Paz** | Meeting coordination | Administrative |
| **@~Kk** | Church photography | Visual content |
| **Anna** | Feedback coordination | Community liaison |
| **Paul** | Screen recording feedback | User testing |

---

## 🔧 Technical Specifications

### Current Tech Stack (Locked Versions)

```json
{
  "next": "15.3.3",
  "react": "19.1.0",
  "typescript": "5.9.3",
  "tailwindcss": "4.1.16",
  "payload": "3.63.0",
  "@payloadcms/db-sqlite": "3.63.0",
  "framer-motion": "12.23.24",
  "@radix-ui/*": "^1.x"
}
```

### Infrastructure Requirements

**Database:**
- SQLite (development & production)
- Payload CMS 3.0 collections:
  - `newsletter-subscribers` ✅ Implemented
  - `events` 🔵 Planned
  - `community-stories` 🔵 Planned
  - `media-content` 🔵 Planned

**Email Service:**
- Resend API (transactional emails)
- Newsletter delivery
- Event notifications

**Media Storage:**
- Image optimization: Sharp
- Video hosting: YouTube/Vimeo embed
- File uploads: Payload media management

**Analytics:**
- Google Analytics 4 (or privacy-focused alternative)
- Custom event tracking
- Heatmap analysis (optional)

---

### Development Environment

**Build Requirements:**
- Node.js 18+
- npm 9+
- TypeScript strict mode
- Zero build errors before deployment

**Quality Standards:**
- ESLint v9 flat config
- Prettier formatting
- Type safety (no `any` types)
- Accessibility (WCAG 2.1 AA)
- Mobile-first responsive design

---

## 📈 Success Metrics & KPIs

### Launch Success (Phase 0-1)

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Zero critical bugs at launch | 100% | Error monitoring |
| Mobile responsiveness score | 95%+ | Lighthouse audit |
| Page load time | <3 seconds | PageSpeed Insights |
| Accessibility score | 90%+ | WAVE, axe DevTools |
| TypeScript errors | 0 | Build process |

---

### User Engagement (Phase 2-3)

| Metric | 3-Month Target | 6-Month Target | Measurement |
|--------|----------------|----------------|-------------|
| Newsletter subscribers | 200 | 500 | Payload CMS |
| Feedback survey responses | 100 | 250 | Survey platform |
| Social media followers | 150 | 400 | Platform analytics |
| Event registrations | 50/quarter | 100/quarter | Events system |
| Content views (media archive) | 500 | 1,500 | Google Analytics |

---

### Community Impact (Phase 4-5)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Youth section visits | 30% of total traffic | Analytics |
| Interfaith event participation | 3 events/quarter | Manual tracking |
| User-generated content submissions | 20/month | CMS submissions |
| Intergenerational program engagement | 40 families | Registration data |
| Partner organization collaborations | 5 partners | Manual tracking |

---

### Content Performance

| Content Type | Engagement Target | Success Indicator |
|--------------|-------------------|-------------------|
| Media interviews | 100+ views/video | YouTube analytics |
| Blog posts | 50+ reads/article | Page views |
| Event listings | 80% registration rate | Conversion rate |
| Newsletter | 35% open rate | Email analytics |
| Social media posts | 5% engagement rate | Platform metrics |

---

## 💰 Resource Allocation

### Development Time Summary

| Phase | Duration | Development Hours | Status |
|-------|----------|-------------------|--------|
| **Phase 0:** Pre-Launch Critical Fixes | 1 week | 12-14 hours | 🔴 Current |
| **Phase 1:** Launch & Stabilization | 2 weeks | 16 hours | 🟡 Next |
| **Phase 2:** Content Expansion | 6 weeks | 53 hours | 🔵 Planned |
| **Phase 3:** Social Media & Engagement | 8 weeks | 25 hours | 🔵 Planned |
| **Phase 4:** Events Platform | 6 weeks | 58 hours | 🔵 Planned |
| **Phase 5:** Strategic Initiatives | 12 weeks | 73 hours | 🔵 Planned |
| **TOTAL** | **35 weeks (~8 months)** | **237 hours** | - |

---

### Phase-by-Phase Budget

**Assuming:**
- Developer rate: $75/hour (mid-level web developer)
- Content creation: $50/hour (videography, writing)
- Project management: $60/hour (coordination)

| Phase | Dev Hours | Dev Cost | Content Hours | Content Cost | PM Hours | PM Cost | **Total** |
|-------|-----------|----------|---------------|--------------|----------|---------|-----------|
| Phase 0 | 14 | $1,050 | 0 | $0 | 2 | $120 | **$1,170** |
| Phase 1 | 16 | $1,200 | 8 | $400 | 4 | $240 | **$1,840** |
| Phase 2 | 53 | $3,975 | 20 | $1,000 | 8 | $480 | **$5,455** |
| Phase 3 | 25 | $1,875 | 15 | $750 | 6 | $360 | **$2,985** |
| Phase 4 | 58 | $4,350 | 10 | $500 | 10 | $600 | **$5,450** |
| Phase 5 | 73 | $5,475 | 25 | $1,250 | 12 | $720 | **$7,445** |
| **TOTAL** | **239** | **$17,925** | **78** | **$3,900** | **42** | **$2,520** | **$24,345** |

**Note:** These are estimates. Actual costs may vary based on:
- Volunteer contributions (reduces cost significantly)
- Complexity of features
- Content production quality requirements
- Third-party service costs (email, hosting, etc.)

---

### External Service Costs (Annual)

| Service | Purpose | Estimated Cost |
|---------|---------|----------------|
| **Domain Registration** | Website URL | $15/year |
| **Web Hosting** | Vercel/Netlify (free tier likely sufficient) | $0-$20/month |
| **Email Service** | Resend API (transactional) | $0-$50/month |
| **Database** | SQLite (self-hosted) | $0 |
| **Media Storage** | Cloudinary/AWS S3 | $0-$30/month |
| **Analytics** | Google Analytics 4 | Free |
| **SSL Certificate** | Included with hosting | Free |
| **TOTAL (Annual)** | - | **$15-$1,215/year** |

**Recommended Tier:** Start with free tiers, scale as needed (likely <$500/year)

---

## 🚧 Dependencies & Blockers

### External Dependencies

| Dependency | Owner | Status | Impact | Mitigation |
|------------|-------|--------|--------|------------|
| Projector acquisition | Father Kr. | ⏳ Pending | Christian Cinema feature | Create "Coming Soon" placeholder |
| Church photography | @~Kk | 🟡 Scheduled (Early Dec) | Visual content quality | Use placeholders, plan replacement |
| Resend API key | Admin | 🔴 Needed | Email functionality | Test with Ethereal (dev mode) |
| Archdiocese meeting | Father Kr. + Hugo | 🟡 Scheduled | Strategic direction | Proceed with flexible architecture |
| Interfaith partners | Hugo + Francesca | 🟡 In Discussion | Interfaith content | Build infrastructure first |
| Youth ministry leader | Pastoral Team | ⏳ Pending | Youth content strategy | General youth section first |

---

### Technical Blockers

| Blocker | Impact | Status | Resolution |
|---------|--------|--------|------------|
| Mobile banner UX | Launch readiness | 🔴 Critical | Phase 0 fix |
| Newsletter page | Navigation link broken | 🟡 High | Phase 2 creation |
| Payload admin testing | CMS functionality | 🟡 Medium | Post-launch testing |
| Social media accounts | Integration features | 🟡 Medium | Create accounts first |
| Event registration payment | Paid events | 🔵 Low | Future enhancement |

---

### Coordination Requirements

**Tight Coordination Needed:**
- **Jack + Francesca:** WhatsApp organization, content migration
- **Hugo + Francesca:** Interfaith partner definition
- **Father Kr. + Hugo:** Archdiocese meeting, astronomy content
- **Gifty + Hugo:** Survey design and implementation
- **Jack + Hugo:** Social media integration, content strategy

**Regular Check-ins:**
- Weekly development updates (Jack → Francesca)
- Bi-weekly strategic alignment (Hugo + Jack + Francesca)
- Monthly PPC reporting (Jack → Parish Pastoral Council)

---

## 📝 Survey Implementation Plan

### Survey Objectives
1. Continuous feedback collection (rolling survey)
2. User satisfaction measurement
3. Feature request identification
4. Content preference insights

### Survey Design Specifications (Per Gifty Thomas)

**Technical Requirements:**
- ✅ Consent question first
- ✅ Anonymous responses
- ✅ Short, direct questions
- ✅ Easy-to-answer choices (multiple choice preferred)
- ✅ 1-3 minute completion time max
- ✅ Include "Others" / "Maybe" options alongside Yes/No
- ✅ Descriptive/open-ended questions at end only
- 🙏 Pray before sending

---

### Recommended Survey Questions

**Section 1: Consent & Demographics (Required)**
1. Do you consent to participate in this survey? (Yes/No)
2. How did you access the website? (Mobile/Tablet/Desktop/Other)
3. Are you a: (Parishioner/Visitor/Considering joining/Other)

**Section 2: User Experience (Multiple Choice)**
4. How easy was it to find what you were looking for? (Very Easy/Easy/Neutral/Difficult/Very Difficult)
5. How would you rate the mobile experience? (Excellent/Good/Fair/Poor/Did not use mobile)
6. How clear is the navigation menu? (Very Clear/Clear/Neutral/Confusing/Very Confusing)

**Section 3: Content (Multiple Choice)**
7. Which sections are most valuable to you? (Select all that apply)
   - Mass times & live stream
   - Prayer Hub
   - Learning Hub
   - Newsletter
   - Community events
   - Contact information
   - Other: _______

8. What content would you like to see more of? (Select all that apply)
   - Youth programs
   - Family activities
   - Prayer resources
   - Educational content
   - Event updates
   - Parish news
   - Other: _______

**Section 4: Features (Yes/No/Maybe)**
9. Would you sign up for the parish newsletter? (Yes/No/Maybe)
10. Would you register for events online? (Yes/No/Maybe)
11. Would you like to see a parish mobile app in the future? (Yes/No/Maybe)

**Section 5: Open Feedback (Optional Text)**
12. What do you like most about the website?
13. What could be improved?
14. Any other suggestions or comments?

**Section 6: Closing**
15. Overall, how satisfied are you with the website? (1-5 stars)

**Survey Platform Options:**
- Google Forms (free, easy setup)
- Typeform (beautiful UI, free tier available)
- SurveyMonkey (robust features)
- Custom form (integrate with Payload CMS)

**Implementation Timeline:**
- Setup: 2 hours (Hugo + Jack)
- Testing: 1 hour
- Launch: Day of website launch (Nov 19)
- Review responses: Weekly

---

## 🎓 Best Practices & Guidelines

### Design Principles
1. **Mobile-First:** Design for mobile, enhance for desktop
2. **Accessibility:** WCAG 2.1 AA compliance minimum
3. **Performance:** Page load <3 seconds on 3G
4. **Clarity:** Clear hierarchy, easy-to-scan content
5. **Brand Consistency:** Tailwind v4 @theme colors only

### Content Guidelines
1. **Tone:** Welcoming, inclusive, pastoral
2. **Length:** Short paragraphs, scannable headings
3. **Images:** Always include alt text for accessibility
4. **Videos:** Include captions/transcripts
5. **Links:** Descriptive link text (no "click here")

### Development Standards
1. **Code Quality:** TypeScript strict mode, zero errors
2. **Testing:** Test on real devices before deployment
3. **Version Control:** Commit after each feature completion
4. **Documentation:** Update CLAUDE.md with major changes
5. **Security:** Never commit API keys, use .env files

### Communication Protocols
1. **User Feedback:** Review weekly, prioritize quarterly
2. **Stakeholder Updates:** Bi-weekly progress reports
3. **Emergency Issues:** Report immediately to Jack
4. **Feature Requests:** Log in feedback document, review monthly
5. **Content Updates:** Coordinate with Francesca 48 hours in advance

---

## 🔍 Risk Assessment & Mitigation

### High-Risk Items

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|---------------------|
| **Launch delayed due to critical bugs** | Medium | High | Phase 0 focus on critical fixes only; thorough testing |
| **User confusion from poor UX** | High | High | Fix banner/navigation issues pre-launch; collect feedback early |
| **Low newsletter signups** | Medium | Medium | Prominent placement, value proposition, incentives |
| **Social media low engagement** | Medium | Medium | Content calendar, consistent posting, community-focused content |
| **Event system unused** | Low | High | User training, clear value proposition, easy registration |

---

### Medium-Risk Items

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|---------------------|
| **Content production delays** | Medium | Medium | Build infrastructure first, add content iteratively |
| **Third-party service costs exceed budget** | Low | Medium | Start with free tiers, monitor usage, plan scaling |
| **Interfaith initiative unclear** | Medium | Medium | Wait for Archdiocese meeting guidance, flexible architecture |
| **Youth engagement low** | Medium | Medium | Collaborate with youth leaders, age-appropriate design |
| **Technical debt accumulation** | Medium | Medium | Regular code reviews, refactoring sprints |

---

### Low-Risk Items

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|---------------------|
| **Browser compatibility issues** | Low | Low | Test on major browsers, use modern standards |
| **Database storage limits** | Low | Low | SQLite scales well for parish size, monitor growth |
| **Volunteer availability** | Medium | Low | Document everything, modular development |
| **Feature creep** | High | Low | Phased roadmap, strict prioritization |

---

## 📚 Appendix

### A. Key Documents Reference

| Document | Location | Purpose |
|----------|----------|---------|
| **CLAUDE.md** | `/home/user/st_saviours_fresh/CLAUDE.md` | Development rules, session history |
| **README.md** | `/home/user/st_saviours_fresh/README.md` | Project overview, setup instructions |
| **DESIGN_SYSTEM.md** | `/home/user/st_saviours_fresh/DESIGN_SYSTEM.md` | Tailwind v4 tokens, components |
| **ARCHITECTURE.md** | `/home/user/st_saviours_fresh/ARCHITECTURE.md` | Technical architecture decisions |
| **This Document** | `/home/user/st_saviours_fresh/WEBSITE_FEEDBACK_ROADMAP.md` | Feedback & roadmap |

---

### B. Contact Information

**Development Team:**
- **Jack Griffin:** Web Developer (Primary Contact)
- **Hugo Martinho:** Media & Communications Strategist
- **Francesca:** Content Coordinator

**Pastoral Team:**
- **Father Kr.:** Technology liaison, astronomy content
- **Father Kenneth:** Pastoral care content
- **Father Michael:** International connections

**PPC Representatives:**
- **@~Paz:** Meeting coordination
- **Gifty Thomas:** Survey lead
- **Anna:** Community liaison

---

### C. Glossary

| Term | Definition |
|------|------------|
| **CMS** | Content Management System (Payload CMS in this project) |
| **CTA** | Call-to-Action (buttons, links encouraging user action) |
| **P0, P1, P2, P3** | Priority levels (0=critical, 3=low priority) |
| **PPC** | Parish Pastoral Council |
| **RSVP** | Event registration/attendance confirmation |
| **SQLite** | Lightweight database system used for Payload CMS |
| **UX** | User Experience (how users interact with website) |
| **WCAG** | Web Content Accessibility Guidelines |

---

### D. Changelog

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| Nov 11, 2025 | 1.0 | Initial document creation from feedback batches 1-3 | Jack Griffin |

---

## 📞 Next Steps & Action Items

### Immediate Actions (This Week - Before Nov 19)

**For Jack (Developer):**
- [ ] Fix mobile homepage banner UX (4 hours)
- [ ] Redesign banner layout and colors (3 hours)
- [ ] Fix navigation scroll threshold logic (1 hour)
- [ ] Comprehensive mobile testing (4 hours)
- [ ] Final production build test (30 mins)
- [ ] Prepare launch day monitoring (1 hour)

**For Hugo (Strategy):**
- [ ] Set up feedback survey with parish email (2 hours)
- [ ] Create initial social media content calendar (3 hours)
- [ ] Coordinate with Francesca on interfaith planning (1 meeting)

**For Francesca (Content):**
- [ ] Review and approve banner design changes
- [ ] Prepare church photography shoot checklist
- [ ] Begin WhatsApp groups audit

**For All Stakeholders:**
- [ ] Review this roadmap document
- [ ] Provide feedback or questions before launch
- [ ] Prepare for November 19 go-live

---

### Post-Launch Week (Nov 19-26)

**Monitoring:**
- [ ] Check error logs daily
- [ ] Review user feedback from survey
- [ ] Monitor website uptime and performance
- [ ] Track analytics for most-visited sections

**Communication:**
- [ ] Announce launch to parish (Sunday bulletin)
- [ ] Share on WhatsApp groups
- [ ] Send newsletter announcement (if list exists)
- [ ] Post on social media (if accounts created)

---

### PPC Meeting (Dec 3)

**Preparation:**
- [ ] Compile feedback summary
- [ ] Present Phase 2 plans for approval
- [ ] Discuss budget for ongoing development
- [ ] Review church photography timeline
- [ ] Present survey results (2 weeks data)

---

## 🙏 Closing Notes

This roadmap represents a comprehensive plan to transform the St Saviour's Parish website from an informational resource into a vibrant community engagement platform. The phased approach ensures:

1. **Launch Readiness:** Critical issues resolved before go-live
2. **Iterative Improvement:** Continuous enhancement based on user feedback
3. **Strategic Alignment:** Features support intergenerational and interfaith goals
4. **Sustainable Development:** Realistic timelines with clear priorities
5. **Stakeholder Involvement:** Regular communication and collaborative decision-making

**Success depends on:**
- Clear communication between all stakeholders
- Realistic expectations about timelines and resources
- User feedback driving future enhancements
- Flexibility to adapt as needs evolve
- Commitment to quality over speed

---

**Document Status:** Active Development Roadmap
**Next Review:** December 3, 2025 (Post-Launch PPC Meeting)
**Maintained By:** Jack Griffin (Web Developer)
**Last Updated:** November 11, 2025

---

*"For where two or three gather in my name, there am I with them." - Matthew 18:20*

May this website serve as a digital gathering place for our parish community.
