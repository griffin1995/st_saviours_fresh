import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';

/**
 * INITIATIVE CARD COMPONENT
 * 50/50 image and text layout card for highlighting parish initiatives
 *
 * Features:
 * - Responsive grid layout (stacks on mobile, 50/50 on desktop with vertical separator)
 * - 16:9 aspect ratio image centered vertically with text content
 * - Vertical white separator between image and text (desktop only)
 * - Alternating image position (left or right)
 * - Brand gold background (gold-600) with generous padding
 * - Horizontal white separator line below title
 * - Call-to-action button (white bg with gold text)
 * - Server Component (no client-side JavaScript)
 * - Uses global brand typography (font-heading, font-body)
 */

interface InitiativeCardProps {
  /** Path to the image */
  image: string;
  /** Alt text for accessibility */
  alt: string;
  /** Card title/heading */
  title: string;
  /** Card description text */
  description: string;
  /** Link button text */
  linkText: string;
  /** Link button href */
  linkHref: string;
  /** Image position - 'left' or 'right' */
  imagePosition?: 'left' | 'right';
  /** Color for background and link - defaults to 'gold-600' */
  color?: 'gold-600' | 'primary-700';
}

export default function InitiativeCard({
  image,
  alt,
  title,
  description,
  linkText,
  linkHref,
  imagePosition = 'left',
  color = 'gold-600'
}: InitiativeCardProps) {
  // Color mapping to ensure Tailwind classes are included
  const colorVariants = {
    'gold-600': 'bg-gold-600 text-gold-600',
    'primary-700': 'bg-primary-700 text-primary-700',
  };

  const bgClass = colorVariants[color as keyof typeof colorVariants]?.split(' ')[0] || 'bg-gold-600';
  const textClass = colorVariants[color as keyof typeof colorVariants]?.split(' ')[1] || 'text-gold-600';

  return (
    <div className={`${bgClass} px-4 py-8 sm:px-6 sm:py-10 md:px-7 md:py-12 lg:px-8 lg:py-14 shadow-lg rounded-xl`}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-7 md:gap-8 lg:gap-0 items-center">
        {/* Image */}
        <div className={`relative ${imagePosition === 'right' ? 'lg:order-3' : 'lg:order-1'}`}>
          <AspectRatio.Root ratio={16 / 9} className="rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AspectRatio.Root>
        </div>

        {/* Vertical Separator - Desktop only, 90% of text area height */}
        <Separator.Root
          orientation="vertical"
          decorative
          className="hidden lg:block w-px h-[90%] bg-white mx-6 lg:mx-8 order-2"
        />

        {/* Text Content */}
        <div className={`flex flex-col justify-center ${imagePosition === 'right' ? 'lg:order-1' : 'lg:order-3'}`}>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
            {title}
          </h3>
          <Separator.Root className="w-16 sm:w-18 md:w-20 h-px bg-white mb-4 sm:mb-5 md:mb-6" />
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-7 md:mb-8">
            {description}
          </p>
          <Link
            href={linkHref}
            className={`inline-flex items-center self-start
                       px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5
                       text-sm sm:text-base md:text-lg
                       bg-white ${textClass} hover:bg-gold-50 font-semibold
                       rounded-lg transition-all duration-300`}
          >
            {linkText}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
