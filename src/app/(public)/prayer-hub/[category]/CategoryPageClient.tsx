"use client";

import { m } from "framer-motion";
import {
  BookOpenIcon as BookOpen,
  HeartIcon as Heart,
  StarIcon as Star,
  CalendarDaysIcon as Calendar,
  SunIcon as Sun,
  PlusIcon as Cross,
  ArrowLeftIcon as ArrowLeft,
  ArrowRightIcon as ArrowRight,
  ClockIcon as Clock,
} from "@heroicons/react/24/solid";
import Link from "next/link";

// Components
import { PageLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  Heading,
  Text,
  Section,
  Container,
  Button,
} from "@/components/ui";

// Types
import type { PrayerCategory, Prayer } from "@/lib/cms/cms-content";

interface CategoryPageClientProps {
  category: PrayerCategory;
  prayers: Prayer[];
  parishName: string;
  categoryImage: { url: string; alt: string; category?: string } | undefined;
}

// Icon mapping for prayer categories
const categoryIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  BookOpen: BookOpen,
  Sun: Sun,
  Heart: Heart,
  Calendar: Calendar,
  Cross: Cross,
  Star: Star,
};

export default function CategoryPageClient({
  category,
  prayers,
  parishName,
  categoryImage,
}: CategoryPageClientProps) {
  const reducedMotion = false;
  const IconComponent = categoryIcons[category.icon] || BookOpen;

  if (prayers.length === 0) {
    return (
      <PageLayout
        title={`${category.title} - Prayer Hub - ${parishName}`}
        description={category.description}
        background="slate"
      >
        <Section background="slate" className="py-32">
          <Container>
            <div className="text-center">
              <Heading level="h1" color="white" className="mb-4">
                No Prayers Available
              </Heading>
              <Text size="lg" color="gray-100" className="mb-8">
                There are currently no prayers in this category.
              </Text>
              <Link href="/prayer-hub">
                <Button
                  variant="primary"
                  className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Prayer Hub
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`${category.title} - Prayer Hub - ${parishName}`}
      description={`${category.description} Explore our collection of Catholic ${category.title.toLowerCase()} for your spiritual journey.`}
      keywords={`${category.title}, Catholic prayers, ${category.liturgicalContext}, devotions, spiritual life`}
      background="slate"
    >
      {/* Category Hero */}
      <Section background="slate" className="py-24 relative overflow-hidden">
        {categoryImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={categoryImage.url}
              alt={categoryImage.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
          </div>
        )}

        <Container className="relative z-10">
          <m.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className={`inline-flex p-6 rounded-full bg-gradient-to-r ${category.color} mb-6`}
            >
              <IconComponent className="h-12 w-12 text-white" />
            </div>
            <Heading level="h1" color="white" className="mb-4">
              {category.title}
            </Heading>
            <Text size="xl" color="gray-100" className="mb-8 max-w-3xl mx-auto">
              {category.description}
            </Text>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <span className="px-3 py-1 bg-slate-700/50 rounded-full capitalize">
                {category.liturgicalContext} Context
              </span>
              <span className="px-3 py-1 bg-slate-700/50 rounded-full">
                {prayers.length} Prayer{prayers.length !== 1 ? 's' : ''}
              </span>
            </div>
          </m.div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section background="slate" className="py-6 border-b border-slate-700">
        <Container>
          <m.div
            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/prayer-hub">
              <Button
                variant="secondary"
                className="hover:bg-white hover:text-slate-900"
                style={{ color: 'rgba(255,255,255,1)' }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Prayer Hub
              </Button>
            </Link>
          </m.div>
        </Container>
      </Section>

      {/* Prayers Grid */}
      <Section background="slate" className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prayers.map((prayer, index) => (
              <m.div
                key={prayer.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/prayer-hub/${category.slug}/${prayer.slug}`}>
                  <Card className="bg-white/10 backdrop-blur-sm border-slate-600 hover:border-gold-500 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-6">
                      {/* Prayer Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${category.color}/20`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <span className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs capitalize">
                            {prayer.type}
                          </span>
                        </div>
                        {prayer.featured && (
                          <Star className="h-5 w-5 text-gold-300" />
                        )}
                      </div>

                      {/* Prayer Title */}
                      <Heading
                        level="h3"
                        color="white"
                        className="mb-2 group-hover:text-gold-300 transition-colors"
                      >
                        {prayer.title}
                      </Heading>

                      {prayer.subtitle && (
                        <Text size="sm" color="gray-100" className="mb-3 italic">
                          {prayer.subtitle}
                        </Text>
                      )}

                      {/* Prayer Preview */}
                      <div className="mb-4">
                        <Text size="sm" color="gray-100" className="line-clamp-3">
                          {prayer.text.substring(0, 120)}...
                        </Text>
                      </div>

                      {/* Prayer Meta */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {prayer.estimatedTime}
                          </div>
                          <span className="capitalize">
                            {prayer.difficulty === "simple"
                              ? "Beginner"
                              : prayer.difficulty === "moderate"
                              ? "Intermediate"
                              : "Advanced"}
                          </span>
                        </div>

                        {prayer.occasions.length > 0 && (
                          <div className="flex items-center text-sm text-gray-300">
                            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="truncate">
                              {prayer.occasions.slice(0, 2).join(", ")}
                              {prayer.occasions.length > 2 && "..."}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prayer.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {prayer.tags.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs">
                            +{prayer.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Liturgical Season Badge */}
                      {prayer.liturgicalSeason && (
                        <div className="mb-4">
                          <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium capitalize">
                            {prayer.liturgicalSeason} Season
                          </span>
                        </div>
                      )}

                      {/* Action */}
                      <div className="flex items-center justify-between">
                        <Text
                          size="sm"
                          color="gold"
                          className="font-medium group-hover:underline"
                        >
                          Read Prayer
                        </Text>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gold-300 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </m.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="slate" className="py-16 border-t border-slate-700">
        <Container>
          <m.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 border-gold-400/30">
              <CardContent className="p-8">
                <Heading level="h3" color="white" className="mb-4">
                  Need Prayer Support?
                </Heading>
                <Text size="base" color="gray-100" className="mb-6">
                  Submit your prayer intentions to our parish community or request
                  personal spiritual guidance from our clergy.
                </Text>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/prayer-hub/request">
                    <Button
                      variant="primary"
                      className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Submit Prayer Request
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button
                      variant="secondary"
                      className="hover:bg-white hover:text-slate-900"
                      style={{ color: 'rgba(255,255,255,1)' }}
                    >
                      Contact Parish Priest
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </m.div>
        </Container>
      </Section>
    </PageLayout>
  );
}
