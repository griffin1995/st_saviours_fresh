"use client";

import React, { useState } from "react";
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
  TagIcon as Tag,
  ShareIcon as Share,
  PrinterIcon as Printer,
  BookmarkIcon as Bookmark,
  ChatBubbleLeftRightIcon as ChatBubble,
  LightBulbIcon as LightBulb,
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
import { prefersReducedMotion } from "@/lib/utils";

// Types
import type { PrayerCategory, Prayer } from "@/lib/cms/cms-content";

interface PrayerPageClientProps {
  prayer: Prayer;
  category: PrayerCategory;
  relatedPrayers: Prayer[];
  parishName: string;
}

// Icon mapping for prayer categories
const categoryIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  BookOpen,
  Sun,
  Heart,
  Calendar,
  Cross,
  Star,
};

export default function PrayerPageClient({
  prayer,
  category,
  relatedPrayers,
  parishName,
}: PrayerPageClientProps) {
  const reducedMotion = prefersReducedMotion();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const IconComponent = categoryIcons[category.icon] || BookOpen;

  if (!prayer || !category) {
    return (
      <PageLayout
        title="Prayer Not Found"
        description="The requested prayer could not be found."
        background="slate"
      >
        <Section background="slate" className="py-32">
          <Container>
            <div className="text-center">
              <Heading level="h1" color="white" className="mb-4">
                Prayer Not Found
              </Heading>
              <Text size="lg" color="gray-100" className="mb-8">
                The prayer you&apos;re looking for doesn&apos;t exist or has been moved.
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

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: prayer.title,
        text: prayer.subtitle || prayer.title,
        url: window.location.href,
      });
    } else if (typeof window !== 'undefined') {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, this would persist to localStorage or user account
  };

  return (
      <PageLayout
        title={`${prayer.title} - ${category.title} - Prayer Hub - ${parishName}`}
        description={`${prayer.subtitle || prayer.title}. ${prayer.text.substring(0, 120)}...`}
        keywords={`${prayer.title}, ${category.title}, Catholic prayer, ${prayer.tags.join(", ")}, devotion`}
        background="slate"
      >
        {/* Prayer Hero */}
        <Section background="slate" className="py-16 border-b border-slate-700">
          <Container>
            <m.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb Navigation */}
              <nav className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Link
                    href="/prayer-hub"
                    className="hover:text-gold-300 transition-colors"
                  >
                    Prayer Hub
                  </Link>
                  <span>/</span>
                  <Link
                    href={`/prayer-hub/${category.slug}`}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {category.title}
                  </Link>
                  <span>/</span>
                  <span className="text-white">{prayer.title}</span>
                </div>
              </nav>

              {/* Prayer Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm">
                        {category.title}
                      </span>
                    </div>
                  </div>

                  <Heading level="h1" color="white" className="mb-4">
                    {prayer.title}
                  </Heading>

                  {prayer.subtitle && (
                    <Text size="xl" color="gray-100" className="mb-6 italic">
                      {prayer.subtitle}
                    </Text>
                  )}

                  {/* Prayer Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {prayer.estimatedTime}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      {prayer.difficulty === "simple"
                        ? "Beginner"
                        : prayer.difficulty === "moderate"
                        ? "Intermediate"
                        : "Advanced"}
                    </div>
                    {prayer.liturgicalSeason && (
                      <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full capitalize">
                        {prayer.liturgicalSeason} Season
                      </span>
                    )}
                    {prayer.featured && (
                      <div className="flex items-center text-gold-300">
                        <Star className="h-4 w-4 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {prayer.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button
                    variant="secondary"
                    onClick={toggleBookmark}
                    className="hover:bg-white hover:text-slate-900"
                    style={{ color: isBookmarked ? '#f59e0b' : 'rgba(255,255,255,1)' }}
                  >
                    <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleShare}
                    className="hover:bg-white hover:text-slate-900"
                    style={{ color: 'rgba(255,255,255,1)' }}
                  >
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handlePrint}
                    className="hover:bg-white hover:text-slate-900"
                    style={{ color: 'rgba(255,255,255,1)' }}
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                </div>
              </div>
            </m.div>
          </Container>
        </Section>

        {/* Prayer Content */}
        <Section background="slate" className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <m.div
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                {/* Instructions */}
                {prayer.instructions && (
                  <Card className="bg-blue-500/20 border-blue-400/30 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <LightBulb className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                        <div>
                          <Heading level="h4" color="white" className="mb-2">
                            How to Pray
                          </Heading>
                          <Text size="base" color="gray-100">
                            {prayer.instructions}
                          </Text>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Prayer Text */}
                <Card className="bg-white/10 backdrop-blur-sm border-slate-600 mb-8">
                  <CardContent className="p-8">
                    <div className="prose prose-lg prose-invert max-w-none">
                      <Text
                        size="lg"
                        color="white"
                        className="leading-relaxed whitespace-pre-line font-light"
                        style={{ lineHeight: '1.8' }}
                      >
                        {prayer.text}
                      </Text>
                    </div>

                    {/* Attribution */}
                    {prayer.attribution && (
                      <div className="mt-8 pt-6 border-t border-slate-600">
                        <Text size="sm" color="gray-300" className="italic">
                          — {prayer.attribution}
                          {prayer.source && (
                            <span className="block mt-1">
                              Source: {prayer.source}
                            </span>
                          )}
                        </Text>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Scripture References */}
                {prayer.scriptureReferences && prayer.scriptureReferences.length > 0 && (
                  <Card className="bg-yellow-500/20 border-yellow-400/30 mb-8">
                    <CardContent className="p-6">
                      <Heading level="h4" color="white" className="mb-4">
                        Scripture References
                      </Heading>
                      <div className="space-y-4">
                        {prayer.scriptureReferences.map((ref, index) => (
                          <div key={index} className="border-l-4 border-yellow-400 pl-4">
                            <Text size="sm" className="font-semibold mb-1 text-yellow-300">
                              {ref.book} {ref.chapter}:{ref.verse}
                            </Text>
                            <Text size="base" color="gray-100" className="italic">
                              &ldquo;{ref.text}&rdquo;
                            </Text>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Intentions */}
                {prayer.intentions && prayer.intentions.length > 0 && (
                  <Card className="bg-green-500/20 border-green-400/30 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Heart className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                        <div>
                          <Heading level="h4" color="white" className="mb-3">
                            Prayer Intentions
                          </Heading>
                          <ul className="space-y-2">
                            {prayer.intentions.map((intention, index) => (
                              <li key={index}>
                                <Text size="base" color="gray-100">
                                  • {intention}
                                </Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Reflection Prompts */}
                {prayer.reflectionPrompts && prayer.reflectionPrompts.length > 0 && (
                  <Card className="bg-purple-500/20 border-purple-400/30 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <ChatBubble className="h-6 w-6 text-purple-300 mt-1 flex-shrink-0" />
                        <div>
                          <Heading level="h4" color="white" className="mb-3">
                            Reflection Questions
                          </Heading>
                          <div className="space-y-3">
                            {prayer.reflectionPrompts.map((prompt, index) => (
                              <div key={index} className="border-l-4 border-purple-400 pl-4">
                                <Text size="base" color="gray-100">
                                  {prompt}
                                </Text>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Occasions */}
                {prayer.occasions.length > 0 && (
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-6">
                      <Heading level="h4" color="white" className="mb-3">
                        Appropriate Occasions
                      </Heading>
                      <div className="flex flex-wrap gap-3">
                        {prayer.occasions.map((occasion, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-600/50 text-gray-200 rounded-full text-sm"
                          >
                            {occasion}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </m.div>

              {/* Navigation */}
              <m.div
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-between mb-12"
              >
                <Link href={`/prayer-hub/${category.slug}`}>
                  <Button
                    variant="secondary"
                    className="hover:bg-white hover:text-slate-900"
                    style={{ color: 'rgba(255,255,255,1)' }}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {category.title}
                  </Button>
                </Link>

                <Link href="/prayer-hub/request">
                  <Button
                    variant="primary"
                    className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Submit Prayer Request
                  </Button>
                </Link>
              </m.div>
            </div>
          </Container>
        </Section>

        {/* Related Prayers */}
        {relatedPrayers.length > 0 && (
          <Section background="slate" className="py-16 border-t border-slate-700">
            <Container>
              <m.div
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Heading level="h2" color="white" className="text-center mb-12">
                  Related Prayers
                </Heading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPrayers.map((relatedPrayer, index) => (
                    <m.div
                      key={relatedPrayer.id}
                      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <Link href={`/prayer-hub/${relatedPrayer.categoryId}/${relatedPrayer.slug}`}>
                        <Card className="bg-white/10 backdrop-blur-sm border-slate-600 hover:border-gold-500 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs capitalize">
                                {relatedPrayer.type}
                              </span>
                              <div className="flex items-center text-gray-300 text-sm">
                                <Clock className="h-4 w-4 mr-1" />
                                {relatedPrayer.estimatedTime}
                              </div>
                            </div>
                            <Heading
                              level="h4"
                              color="white"
                              className="mb-2 group-hover:text-gold-300 transition-colors"
                            >
                              {relatedPrayer.title}
                            </Heading>
                            {relatedPrayer.subtitle && (
                              <Text size="sm" color="gray-100" className="mb-4 italic">
                                {relatedPrayer.subtitle}
                              </Text>
                            )}
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-300 capitalize">
                                {relatedPrayer.difficulty === "simple"
                                  ? "Beginner"
                                  : relatedPrayer.difficulty === "moderate"
                                  ? "Intermediate"
                                  : "Advanced"}
                              </span>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gold-300 group-hover:translate-x-1 transition-all" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </Container>
          </Section>
        )}
      </PageLayout>
  );
}
