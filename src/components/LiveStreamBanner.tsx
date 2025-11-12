'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Banner,
  BannerAction,
  BannerClose,
  BannerTitle,
} from '@/components/ui/shadcn-io/banner';

/**
 * LIVE STREAM BANNER - SHADCN VERSION
 * Dismissible announcement banner for daily live-streamed Mass
 *
 * Features:
 * - Official shadcn/ui component architecture
 * - Brand gold background with responsive design
 * - Min-height 10vh (works with 90vh hero = 100vh total visible on load)
 * - Dismissible with close button
 * - Session-based persistence (returns on new visits)
 * - Full responsive breakpoints per design system
 * - Positioned below hero section
 */

export default function LiveStreamBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Check session storage on mount
  useEffect(() => {
    const dismissed = sessionStorage.getItem('livestream-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  // Handle close - store in session
  const handleClose = () => {
    sessionStorage.setItem('livestream-banner-dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <Banner
      visible={isVisible}
      onClose={handleClose}
      className="bg-gold-600 text-white border-0 rounded-none
                 min-h-[10vh]
                 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6
                 flex-col gap-4 items-center justify-center
                 sm:flex-row sm:gap-6 md:gap-8"
    >
      {/* Title - Responsive text sizing */}
      <BannerTitle className="text-center sm:text-left flex-1
                              text-base sm:text-lg md:text-xl lg:text-2xl
                              font-light leading-relaxed
                              text-white">
        The 10.00am mass is streamed live daily, followed by the Rosary
      </BannerTitle>

      {/* Action Button - Brand styled */}
      <BannerAction
        variant="outline"
        size="default"
        asChild
        className="bg-primary-700 text-white border-2 border-primary-700
                   hover:bg-white hover:text-primary-700
                   px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
                   text-sm sm:text-base md:text-lg
                   font-semibold rounded-lg transition-all duration-300
                   whitespace-nowrap"
      >
        <Link href="#live-stream-section" className="inline-flex items-center gap-2">
          Watch Live Stream
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
      </BannerAction>

      {/* Close Button - Custom styling for visibility */}
      <BannerClose
        className="text-white hover:text-white/80 hover:bg-white/10
                   transition-colors duration-300
                   shrink-0"
        aria-label="Dismiss live stream announcement"
      />
    </Banner>
  );
}
