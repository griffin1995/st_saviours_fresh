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
    <div className={`${bgClass} px-6 py-10 lg:px-8 lg:py-14 shadow-lg`}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
        {/* Image */}
        <div className={`relative ${imagePosition === 'right' ? 'lg:order-3' : 'lg:order-1'}`}>
          <AspectRatio.Root ratio={16 / 9}>
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
          className="hidden lg:block w-px h-[90%] bg-white mx-8 order-2"
        />

        {/* Text Content */}
        <div className={`flex flex-col justify-center ${imagePosition === 'right' ? 'lg:order-1' : 'lg:order-3'}`}>
          <h3 className="font-heading text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            {title}
          </h3>
          <Separator.Root className="w-20 h-px bg-white mb-6" />
          <p className="font-body text-lg lg:text-xl text-white leading-relaxed mb-8">
            {description}
          </p>
          <Link
            href={linkHref}
            className={`inline-flex items-center self-start px-6 py-3 bg-white ${textClass} hover:bg-gold-50 font-semibold`}
          >
            {linkText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
