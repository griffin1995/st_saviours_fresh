import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import * as Separator from '@radix-ui/react-separator';
import { getSacramentData, getAllSacramentSlugs } from '../sacraments-data';

/**
 * DYNAMIC SACRAMENT PAGE
 *
 * Handles all 7 sacrament pages with one file using Next.js 15 dynamic routes
 * Following Essential_Boilerplate.txt rules:
 * - Server Component (optimal pattern)
 * - All content inline from sacraments-data.ts
 * - No Framer Motion
 * - Exact styling from old site
 * - generateStaticParams for pre-rendering
 */

// Generate static params for all 7 sacraments at build time
export async function generateStaticParams() {
  const slugs = getAllSacramentSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata dynamically for each sacrament
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const sacrament = getSacramentData(params.slug);

  if (!sacrament) {
    return {
      title: 'Sacrament Not Found',
    };
  }

  return {
    title: `${sacrament.title} | St Saviour's Catholic Church`,
    description: sacrament.metaDescription,
  };
}

// Main page component
export default async function SacramentPage(props: {
  params: Promise<{ slug: string }>;
}) {
  // Await params (Next.js 15 requirement)
  const params = await props.params;
  const sacrament = getSacramentData(params.slug);

  // Return 404 if sacrament not found
  if (!sacrament) {
    notFound();
  }

  return (
    <main id="main-content" role="main">
      {/* HERO SECTION */}
      <Hero
        title={sacrament.hero.title}
        description={sacrament.hero.description}
        backgroundImage={sacrament.hero.backgroundImage}
        primaryButton={sacrament.hero.primaryButton}
        {...(sacrament.hero.secondaryButton && { secondaryButton: sacrament.hero.secondaryButton })}
      />

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* MAIN INFO SECTION - 2/3 content + 1/3 sidebar */}
      <section id="baptism-info" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Left 2/3 - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                {/* Section heading */}
                <div className="mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-500" />
                      <span className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                        {sacrament.mainInfo.sectionLabel}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {sacrament.mainInfo.heading}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-xl text-black space-y-8 leading-relaxed">
                  {sacrament.mainInfo.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`leading-relaxed text-black ${
                        index === 0 ? 'text-xl lg:text-2xl font-light' : 'text-lg'
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1/3 - Key Aspects & Scripture Cards */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Key Aspects Card */}
                <div className="bg-slate-50 rounded-xl p-8 shadow-lg space-y-6">
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-6">
                    Key Aspects
                  </h3>

                  {sacrament.keyAspects.map((aspect, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <aspect.icon className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{aspect.title}</h4>
                        <p className="text-sm text-gray-700">{aspect.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scripture Card */}
                <div className="rounded-xl p-6 md:p-8 shadow-lg bg-blue-900">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gold-500/20">
                      <sacrament.scripture.icon className="h-8 w-8 text-gold-400" />
                    </div>
                  </div>
                  <blockquote className="space-y-4">
                    <p className="text-white text-base md:text-lg italic leading-relaxed text-center">
                      &quot;{sacrament.scripture.quote}&quot;
                    </p>
                    <footer className="font-semibold text-center text-gold-400">
                      - {sacrament.scripture.reference}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* EFFECTS SECTION */}
      <section id="effects" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                  {sacrament.effects.sectionLabel}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {sacrament.effects.heading}
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                {sacrament.effects.subheading}
              </p>
            </div>
          </div>

          {/* Effects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sacrament.effects.cards.map((effect, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gold-500/10">
                      <effect.icon className="h-8 w-8 text-gold-600" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">
                    {effect.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                    {effect.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* REQUIREMENTS SECTION */}
      <section id="requirements" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                  {sacrament.requirements.sectionLabel}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {sacrament.requirements.heading}
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                {sacrament.requirements.subheading}
              </p>
            </div>
          </div>

          {/* Requirements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {sacrament.requirements.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gold-500/10">
                      <category.icon className="h-8 w-8 text-gold-600" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
                    {category.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 text-center mb-6 italic">
                    {category.description}
                  </p>
                  <div className="space-y-3 border-t border-gray-200 pt-6">
                    {category.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-gold-600">✓</div>
                        <p className="text-gray-600 font-medium text-sm md:text-base">
                          {req}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* CALL TO ACTION SECTION */}
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                  {sacrament.callToAction.sectionLabel}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {sacrament.callToAction.heading}
              </h2>
              <p
                className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{
                  __html: sacrament.callToAction.subheading.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
                }}
              />
            </div>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-900 to-blue-800">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Call the parish office to speak with our team
                  </p>
                  <a
                    href="tel:02088523073"
                    className="text-gold-600 hover:text-gold-700 font-semibold"
                  >
                    020 8852 3073
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-900 to-blue-800">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Send us your questions or schedule an appointment
                  </p>
                  <a
                    href="/contact-us"
                    className="text-gold-600 hover:text-gold-700 font-semibold"
                  >
                    Contact Form →
                  </a>
                </div>
              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-900 to-blue-800">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stop by the parish office during office hours
                  </p>
                  <a
                    href="/find-us"
                    className="text-gold-600 hover:text-gold-700 font-semibold"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
