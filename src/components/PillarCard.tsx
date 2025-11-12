import Image from 'next/image';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import { ArrowRight } from 'lucide-react';

/**
 * PILLAR CARD COMPONENT
 * Image card with overlay and text content
 * Used for highlighting key parish offerings (Masses, Prayer, Faith Formation)
 *
 * Features:
 * - 2:3 aspect ratio for vertical card design
 * - Image background with gradient overlay
 * - Text content overlaid at bottom with fixed heights for alignment
 * - Radix UI separator between title and description
 * - Server Component (no client-side JavaScript)
 * - Responsive image optimization
 */

interface PillarCardProps {
  /** Path to the image */
  image: string;
  /** Alt text for accessibility */
  alt: string;
  /** Card title/heading - can include JSX for line breaks */
  title: React.ReactNode;
  /** Card description text */
  description: string;
  /** Optional link href for card navigation - if not provided, card will be non-clickable */
  href?: string;
}

export default function PillarCard({ image, alt, title, description, href }: PillarCardProps) {
  // Shared content that will be wrapped in either Link or div
  const content = (
    <AspectRatio.Root ratio={2 / 3}>
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          {/* Responsive height title area for alignment across cards */}
          <div className="h-24 sm:h-28 md:h-32 flex flex-col justify-end">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                           font-bold m-0 text-text-on-dark leading-tight">
              {title}
            </h3>
            <Separator.Root className="w-full h-px bg-text-on-dark mt-2 sm:mt-3" />
          </div>

          {/* Responsive height text area for alignment across cards */}
          <div className="h-44 sm:h-52 md:h-60 mt-3 sm:mt-4 overflow-hidden">
            <p className="text-text-on-dark text-base sm:text-lg md:text-xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Call-to-action - only shown when card is clickable */}
          {href && (
            <div className="mt-4 sm:mt-6 flex items-center gap-2
                            text-white group-hover:text-gold-500
                            transition-colors duration-300
                            font-semibold text-xs sm:text-sm md:text-base">
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          )}
        </div>
      </div>
    </AspectRatio.Root>
  );

  // If href is provided, wrap in Link; otherwise use a div
  if (href) {
    return (
      <Link href={href} className="block relative overflow-hidden group">
        {content}
      </Link>
    );
  }

  return (
    <div className="block relative overflow-hidden group">
      {content}
    </div>
  );
}
