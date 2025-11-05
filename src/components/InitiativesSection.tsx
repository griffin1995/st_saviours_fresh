import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import InitiativeCard from '@/components/InitiativeCard';

/**
 * INITIATIVES SECTION COMPONENT
 * Displays parish initiatives in 50/50 image/text card format
 *
 * Features:
 * - Section header with badge, title, description, and CTA button
 * - Renders multiple InitiativeCard components
 * - Accepts all content via props
 * - Server Component with content passed on render
 */

interface InitiativeData {
  image: string;
  alt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imagePosition?: 'left' | 'right';
  color?: 'gold-600' | 'primary-700';
}

interface InitiativesSectionProps {
  /** Badge text above the title */
  badgeText?: string;
  /** Main title (first line) */
  titleLine1?: string;
  /** Second line of title */
  titleLine2?: string;
  /** Section description */
  description?: string;
  /** Header button text */
  buttonText?: string;
  /** Header button href */
  buttonHref?: string;
  /** Array of initiative card data */
  initiatives: InitiativeData[];
}

export default function InitiativesSection({
  badgeText = "Parish Initiatives",
  titleLine1 = "Our Active",
  titleLine2 = "Ministries & Programs",
  description = "Discover the meaningful ways our parish community serves God and neighbours through dedicated programs and outreach efforts.",
  buttonText = "Get Involved",
  buttonHref = "/ministries",
  initiatives
}: InitiativesSectionProps) {
  return (
    <section id="initiatives" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                {badgeText}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-primary-900">
              <span className="block">{titleLine1}</span>
              <span className="block text-3xl lg:text-4xl font-medium">{titleLine2}</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              {description}
            </p>
          </div>

          <Link
            href={buttonHref}
            className="inline-flex items-center px-6 py-3 bg-primary-900 text-white hover:bg-primary-800 font-semibold"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Initiative Cards */}
        <div className="space-y-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              image={initiative.image}
              alt={initiative.alt}
              title={initiative.title}
              description={initiative.description}
              linkText={initiative.linkText}
              linkHref={initiative.linkHref}
              imagePosition={initiative.imagePosition || "left"}
              color={initiative.color || "gold-600"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
