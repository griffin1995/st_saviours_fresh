import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * LIVE STREAM BANNER COMPONENT
 * Prominent banner promoting daily live-streamed Mass
 *
 * Features:
 * - 10vh height (10% of viewport)
 * - Gold brand background
 * - Responsive layout (stacked on mobile, side-by-side on desktop)
 * - Navy blue bordered button
 * - Server Component (no client-side JavaScript needed)
 */

interface LiveStreamBannerProps {
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function LiveStreamBanner({
  text = "The 10.00am mass is streamed live daily, followed by the Rosary",
  buttonText = "Watch Live Stream",
  buttonHref = "#live-stream-section"
}: LiveStreamBannerProps) {
  return (
    <section className="bg-gold-600 min-h-[10vh] flex items-center">
      {/* Mobile: Stacked layout */}
      <div className="w-full px-4 py-6 flex flex-col items-center gap-4 sm:hidden">
        <h2 className="text-white text-xl font-light text-center m-0">
          {text}
        </h2>
        <Link
          href={buttonHref}
          className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold  hover:bg-white hover:text-primary-700 border-2 border-primary-700 whitespace-nowrap"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Desktop: Three-column flex layout - equal widths for true centering */}
      <div className="hidden sm:flex sm:items-center w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Left spacer - flex: 1 for equal width */}
        <div className="flex-1"></div>

        {/* Center - H2 text, flex: 1 for equal width */}
        <div className="flex-1 flex justify-center">
          <h2 className="text-white text-2xl lg:text-3xl font-light whitespace-nowrap m-0">
            {text}
          </h2>
        </div>

        {/* Right - Button area, flex: 1 for equal width */}
        <div className="flex-1 flex justify-center">
          <Link
            href={buttonHref}
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold  hover:bg-white hover:text-primary-700 border-2 border-primary-700 whitespace-nowrap"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
