'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ThreePillarCards from '@/components/ThreePillarCards';

/**
 * UNIFIED HUB LAYOUT COMPONENT
 *
 * Provides a consistent layout structure for both hub landing pages and category pages.
 * Includes hero, breadcrumbs, introduction, categories, and CTA sections.
 *
 * Features:
 * - Responsive design with Tailwind CSS v4
 * - Conditional rendering of breadcrumbs and introduction sections
 * - Brand colors (primary, gold, slate)
 * - Full accessibility with ARIA attributes
 * - TypeScript strict mode compliance
 *
 * Usage:
 * <UnifiedHubLayout
 *   hero={{ title: "Learning Hub", description: "...", backgroundImage: "/..." }}
 *   breadcrumbs={[{ title: "Home", href: "/" }, { title: "Learning Hub", href: "/learning-hub" }]}
 *   introduction={{ label: "About", title: "Welcome", subtitle: "To Our Hub", paragraphs: [...] }}
 *   categories={{ sectionLabel: "Topics", sectionTitle: "Browse", description: "...", cards: [...] }}
 *   cta={{ title: "Get Started", description: "...", primaryButton: {...}, secondaryButton: {...} }}
 * />
 */

// ============================================================================
// TypeScript Interfaces
// ============================================================================

export interface HeroConfig {
  title: string;
  description: string;
  backgroundImage: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface IntroductionConfig {
  label: string;
  title: string;
  subtitle: string;
  paragraphs: Array<{ text: string; emphasized?: boolean }>;
}

export interface PillarCard {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface CategoriesConfig {
  sectionLabel: string;
  sectionTitle: string;
  description: string;
  cards: PillarCard[];
}

export interface CTAConfig {
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

export interface UnifiedHubLayoutProps {
  hero: HeroConfig;
  breadcrumbs?: BreadcrumbItem[];
  introduction?: IntroductionConfig;
  categories: CategoriesConfig;
  cta: CTAConfig;
}

// ============================================================================
// Component
// ============================================================================

export function UnifiedHubLayout({
  hero,
  breadcrumbs,
  introduction,
  categories,
  cta
}: UnifiedHubLayoutProps) {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        title={hero.title}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        {...(hero.primaryButton && { primaryButton: hero.primaryButton })}
        {...(hero.secondaryButton && { secondaryButton: hero.secondaryButton })}
      />

      {/* BREADCRUMBS SECTION (Conditional) */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-2 text-slate-400">/</span>
                    )}
                    {isLast ? (
                      <span
                        className="font-medium text-slate-900"
                        aria-current="page"
                      >
                        {crumb.title}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {crumb.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
      )}

      {/* INTRODUCTION SECTION (Conditional) */}
      {introduction && (
        <section
          className="py-16 bg-white"
          aria-labelledby="introduction-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              {/* Gold marker and label */}
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-2 h-2 bg-gold-500"
                  aria-hidden="true"
                />
                <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                  {introduction.label}
                </span>
              </div>

              {/* Two-tier heading */}
              <h2
                id="introduction-heading"
                className="text-4xl sm:text-5xl lg:text-5xl font-light text-slate-900 mb-4"
              >
                <span className="block">{introduction.title}</span>
                <span className="block text-3xl sm:text-4xl lg:text-4xl font-medium">
                  {introduction.subtitle}
                </span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
              {introduction.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={paragraph.emphasized ? 'text-slate-900 font-semibold' : ''}
                  dangerouslySetInnerHTML={{ __html: paragraph.text }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORIES SECTION */}
      <section
        id="categories"
        className="py-16 bg-slate-50"
        aria-labelledby="categories-heading"
        aria-describedby="categories-description"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            {/* Gold marker and label */}
            <div className="flex items-center space-x-3 mb-4">
              <div
                className="w-2 h-2 bg-gold-500"
                aria-hidden="true"
              />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                {categories.sectionLabel}
              </span>
            </div>

            {/* Two-tier heading */}
            <h2
              id="categories-heading"
              className="text-4xl sm:text-5xl lg:text-5xl font-light text-primary-900 mb-4"
            >
              <span className="block">{categories.sectionTitle}</span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl font-medium">
                Categories
              </span>
            </h2>

            {/* Description */}
            <p
              id="categories-description"
              className="text-base sm:text-lg text-slate-700 max-w-3xl"
            >
              {categories.description}
            </p>
          </div>

          {/* Categories Cards */}
          <ThreePillarCards
            cards={categories.cards}
            className="bg-transparent"
          />
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section
        className="py-16 bg-slate-900"
        aria-labelledby="cta-heading"
        aria-describedby="cta-description"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            {cta.title}
          </h2>

          <p
            id="cta-description"
            className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {cta.description}
          </p>

          {/* CTA Buttons */}
          {(cta.primaryButton || cta.secondaryButton) && (
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
          )}
        </div>
      </section>
    </main>
  );
}
