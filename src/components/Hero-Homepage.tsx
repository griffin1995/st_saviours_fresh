'use client';

import Link from 'next/link';

/**
 * HERO COMPONENT - HOMEPAGE VERSION
 * Full-screen cinematic hero adjusted for 10vh LiveStreamBanner
 *
 * Features:
 * - 90vh height (to work with 10vh banner = 100vh total)
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
    <section className="relative h-[90vh] w-screen overflow-hidden">
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

      {/* Layer 1: Top gradient for navigation visibility */}
      <div
        className="absolute top-0 inset-x-0 h-[25%] bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-none z-[5]"
      />

      {/* Layer 2: Navy gradient for text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent"
      />

      {/* Layer 3: Gold accent gradient for warmth */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-gold-600/70 via-gold-600/20 to-transparent mix-blend-soft-light"
      />

      {/* Layer 4: Dot pattern texture overlay */}
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
              <div className="relative rounded-full px-4 py-1.5 text-base leading-7 text-white ring-1 ring-primary-300 hover:ring-primary-200 bg-white/10 backdrop-blur-sm">
                {badge.text}{' '}
                <a href={badge.linkHref} className="font-semibold text-white hover:text-primary-100">
                  <span className="absolute inset-0" />
                  {badge.linkText} <span>&rarr;</span>
                </a>
              </div>
            </div>
          )}

          {/* Main title/description/buttons - always rendered if provided */}
          {/* H1 with multi-layer text shadow */}
          {title && (
            <div className="mb-4 sm:mb-6">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                           font-semibold tracking-tight text-balance text-white
                           [text-shadow:0_1px_2px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.1)]"
              >
                {title}
              </h1>
            </div>
          )}

          {/* H2/Description with lighter weight and softer shadow */}
          {description && (
            <div>
              <p
                className="text-white text-center max-w-full mx-auto px-4
                           text-lg sm:text-xl md:text-2xl lg:text-3xl
                           font-light tracking-wide leading-relaxed
                           [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]"
              >
                {description}
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="bg-gold-600 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
                             text-sm sm:text-base md:text-lg
                             font-semibold text-white shadow-sm rounded-lg sm:rounded-xl
                             hover:bg-gold-500
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-gold-600
                             transition-colors duration-300"
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="border-2 border-gold-600 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
                             text-sm sm:text-base md:text-lg
                             font-semibold text-white rounded-lg sm:rounded-xl
                             hover:border-gold-500 hover:bg-gold-600/10
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-gold-600
                             transition-all duration-300"
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
              className="text-white opacity-70"
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
              className="text-sm font-serif tracking-widest uppercase text-white mt-2 opacity-60 [letter-spacing:0.1em]"
            >
              SCROLL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
