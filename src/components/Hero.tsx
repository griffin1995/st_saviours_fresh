'use client';

import Link from 'next/link';

/**
 * HERO COMPONENT
 * Full-screen cinematic hero
 *
 * Features:
 * - Full viewport height (h-screen)
 * - Multi-layer overlays (navy + gold + dot pattern)
 * - Advanced typography with text shadows
 * - Scroll indicator with smooth scroll
 * - Client Component (for scroll functionality)
 */

interface HeroButton {
  text: string;
  href: string;
  primary?: boolean;
}

interface HeroBadge {
  text: string;
  linkText: string;
  linkHref: string;
}

interface HeroProps {
  title?: React.ReactNode;
  description?: string;
  backgroundImage: string;
  badge?: HeroBadge;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  description,
  backgroundImage,
  badge,
  primaryButton,
  secondaryButton,
  children
}: HeroProps) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Layer 1: Navy gradient for text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"
      />

      {/* Layer 2: Gold accent gradient for warmth */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-gold-600/70 via-gold-600/20 to-transparent mix-blend-soft-light"
      />

      {/* Layer 3: Dot pattern texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255, 255, 255) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: 0.1,
          maskImage: 'radial-gradient(800px circle at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(800px circle at center, white, transparent)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="w-[80vw] max-w-screen-xl mx-auto pt-12">
          {/* Extra children content (gradient blobs, badges, etc.) */}
          {children}

          {/* Announcement badge */}
          {badge && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-base leading-7 text-gray-200 ring-1 ring-gray-300 hover:ring-gray-200 bg-white/10 backdrop-blur-sm">
                {badge.text}{' '}
                <a href={badge.linkHref} className="font-semibold text-white hover:text-gray-200">
                  <span className="absolute inset-0" />
                  {badge.linkText} <span>&rarr;</span>
                </a>
              </div>
            </div>
          )}

          {/* Main title/description/buttons - always rendered if provided */}
          {/* H1 with multi-layer text shadow */}
          {title && (
            <div className="mb-6">
              <h1
                className="text-6xl font-semibold tracking-tight text-balance text-white sm:text-8xl"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1)'
                }}
              >
                {title}
              </h1>
            </div>
          )}

          {/* H2/Description with lighter weight and softer shadow */}
          {description && (
            <div>
              <p
                className="text-white text-center max-w-full mx-auto px-4 text-xl sm:text-2xl leading-8"
                style={{
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}
              >
                {description}
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="bg-gold-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="border-2 border-gold-600 px-4 py-3 text-base font-semibold text-white hover:border-gold-500 hover:bg-gold-600/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
                >
                  {secondaryButton.text} <span>→</span>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={handleScrollDown}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
              style={{ opacity: 0.7 }}
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-sm font-serif tracking-widest uppercase text-white mt-2"
              style={{
                opacity: 0.6,
                letterSpacing: '0.1em'
              }}
            >
              SCROLL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
