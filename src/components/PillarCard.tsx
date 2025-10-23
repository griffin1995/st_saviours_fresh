import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';

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
}

export default function PillarCard({ image, alt, title, description }: PillarCardProps) {
  return (
    <div className="relative overflow-hidden">
      <AspectRatio.Root ratio={2 / 3}>
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Fixed height title area for alignment across cards */}
            <div className="h-28 flex flex-col justify-end">
              <h3 className="text-4xl font-bold m-0 text-text-on-dark leading-tight">{title}</h3>
              <Separator.Root className="w-full h-px bg-text-on-dark mt-3" />
            </div>

            {/* Fixed height text area for alignment across cards */}
            <div className="h-52 mt-4 overflow-hidden">
              <p className="text-text-on-dark text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </AspectRatio.Root>
    </div>
  );
}
