"use client";

import { ChevronRightIcon, HeartIcon, EyeIcon, ShareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { type JSX } from 'react';
import Footer from '@/components/layout/Footer';
import type {
  BlogHeroContent,
  BlogMetadata,
  BlogContent,
  Breadcrumb,
  ContentType,
} from '@/types/blog';

// ============================================================================
// TypeScript Interfaces
// ============================================================================

export interface UniversalBlogTemplateProps {
  // Core content
  hero: BlogHeroContent;
  metadata: BlogMetadata;
  content: BlogContent;

  // Navigation
  breadcrumbs?: Breadcrumb[];
  baseHref?: string; // e.g., '/learning-hub' or '/prayer-hub'
  backLabel?: string; // e.g., 'Back to Learning Hub'

  // Content type
  contentType?: ContentType;

  // Additional context
  parishName?: string;

  // Social/Sharing stats (optional - will hide if not provided)
  socialStats?: {
    reddit?: number;
    twitter?: number;
    facebook?: number;
  };
}

// ============================================================================
// Design Tokens
// ============================================================================

const COLORS = {
  background: '#FFFCF0',
  text: '#141414',
  textBlack: '#000000',
  textWhite: '#FFFFFF',
  buttonBg: '#0F172A',
  border: '#262626',
  tocBg: '#0F172A',
  buttonText: '#E4E4E7',
} as const;

// ============================================================================
// Component
// ============================================================================

export default function UniversalBlogTemplate({
  hero,
  metadata,
  content,
  baseHref = '/learning-hub',
  contentType = 'article',
  socialStats,
}: UniversalBlogTemplateProps): JSX.Element {
  // State for Read More functionality
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Split related items into similar and other categories
  const similarItems = React.useMemo(() => {
    return content.relatedItems?.filter(item => item.category === metadata.category) || [];
  }, [content.relatedItems, metadata.category]);

  const otherCategoryItems = React.useMemo(() => {
    return content.relatedItems?.filter(item => item.category !== metadata.category) || [];
  }, [content.relatedItems, metadata.category]);

  // Default social stats if none provided
  const defaultSocialStats = {
    reddit: socialStats?.reddit ?? 0,
    twitter: socialStats?.twitter ?? 0,
    facebook: socialStats?.facebook ?? 0,
  };

  // Show social stats section only if we have non-zero values
  const showSocialStats = defaultSocialStats.reddit > 0 ||
                          defaultSocialStats.twitter > 0 ||
                          defaultSocialStats.facebook > 0;

  return (
    <>
      <div className="min-h-screen" style={{ background: COLORS.background }}>
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden h-[598px] min-h-[400px] max-h-[598px] sm:h-[500px] md:h-[550px] lg:h-[598px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Dark Overlay - Increased for better text visibility */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Hero Text Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
            <h1
              className="text-center font-bold leading-[150%] tracking-[-0.03em] text-white
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                         [text-shadow:0_4px_12px_rgba(0,0,0,0.9),0_2px_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.7)]
                         drop-shadow-2xl"
              style={{ color: COLORS.textWhite }}
            >
              {content.title}
            </h1>
            <h2
              className="text-center font-normal leading-[150%] tracking-[-0.03em] text-white
                         text-sm sm:text-base md:text-lg
                         [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]
                         drop-shadow-lg"
              style={{ color: COLORS.textWhite }}
            >
              {hero.subtitle}
            </h2>
          </div>
        </section>

        {/* Main Content Area */}
        <section
          className="mx-auto w-full max-w-[1920px]"
          style={{
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Article Content (1238:1920 ratio) */}
            <div
              className="flex w-full flex-col lg:flex-[1238]"
              style={{
                minHeight: isExpanded ? 'auto' : 0,
                maxHeight: isExpanded ? 'none' : 'calc(100vh - 6.25rem)',
                overflow: isExpanded ? 'visible' : 'hidden',
                borderRight: `1px solid ${COLORS.border}`,
              }}
            >
              {/* Introduction Section */}
              <div
                className="flex flex-col gap-[14px] py-[80px]"
                style={{
                  paddingLeft: 'clamp(20px, 8.44vw, 162px)',
                  paddingRight: 'clamp(20px, 8.44vw, 162px)',
                  borderBottom: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              >
                <h3 className="text-[30px] font-medium leading-[150%] tracking-[-0.03em]">
                  Introduction
                </h3>
                <p className="text-[18px] font-normal leading-[150%] tracking-[-0.03em]">
                  {content.intro}
                </p>
              </div>

              {/* Article Body Content */}
              <div
                className="relative flex flex-col gap-[30px] py-[80px]"
                style={{
                  paddingLeft: 'clamp(20px, 8.44vw, 162px)',
                  paddingRight: 'clamp(20px, 8.44vw, 162px)',
                  color: COLORS.text,
                  flex: isExpanded ? 'none' : 1,
                  overflow: isExpanded ? 'visible' : 'hidden',
                  position: 'relative',
                }}
              >
                {/* Dynamic HTML Content */}
                <div
                  className="blog-prose"
                  dangerouslySetInnerHTML={{ __html: content.mainText }}
                />

                {/* Gradient Fade Overlay (only when collapsed) */}
                {!isExpanded && (
                  <div
                    className="absolute bottom-0 left-0 flex h-[215px] w-full flex-col items-center justify-center px-[10px] py-[80px] pb-[30px] pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, rgba(255, 252, 240, 0) -98.48%, ${COLORS.background} 55.11%)`,
                    }}
                  />
                )}

                {/* Read More Button */}
                {!isExpanded && (
                  <div className="absolute bottom-[30px] left-0 flex w-full justify-center">
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="flex flex-row items-center gap-[10px] px-[24px] py-[14px] bg-primary-800 hover:bg-primary-900 border border-primary-900 text-white transition-colors pointer-events-auto min-w-[180px]"
                    >
                      <span className="text-[18px] font-normal leading-[150%] tracking-[-0.03em]">
                        Read more...
                      </span>
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar (682:1920 ratio) */}
            <div
              className="flex w-full flex-col lg:flex-[682] lg:self-start"
              style={{
                height: 'calc(100vh - 6.25rem)',
                overflow: 'hidden',
                contain: 'layout style paint',
                willChange: 'transform',
                transform: 'translateZ(0)',
                position: isExpanded ? 'relative' : 'sticky',
                top: isExpanded ? 'auto' : 'clamp(6.25rem, 6.25rem, 7rem)',
              }}
            >
              {/* Social Sharing Pills */}
              {showSocialStats && (
                <div
                  className="flex flex-row items-center gap-[10px] py-[30px]"
                  style={{
                    paddingLeft: 'clamp(16px, 3.33vw, 64px)',
                    paddingRight: 'clamp(16px, 3.33vw, 64px)',
                  }}
                >
                  {/* Reddit Pill */}
                  {defaultSocialStats.reddit > 0 && (
                    <div
                      className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[24px] py-[10px]"
                      style={{
                        background: COLORS.textWhite,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <div className="relative h-[34px] w-[34px]">
                        <svg className="h-full w-full" fill="#FF5500" viewBox="0 0 24 24">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                        </svg>
                      </div>
                      <span
                        className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]"
                        style={{ fontFamily: 'Kumbh Sans', color: COLORS.text }}
                      >
                        {defaultSocialStats.reddit}
                      </span>
                    </div>
                  )}

                  {/* Twitter/X Pill */}
                  {defaultSocialStats.twitter > 0 && (
                    <div
                      className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[24px] py-[10px]"
                      style={{
                        background: COLORS.textWhite,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <div className="relative flex h-[34px] w-[34px] items-center justify-center">
                        <ShareIcon
                          className="h-6 w-6"
                          style={{ stroke: COLORS.text, strokeWidth: 1.5 }}
                        />
                      </div>
                      <span
                        className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]"
                        style={{ fontFamily: 'Kumbh Sans', color: COLORS.text }}
                      >
                        {defaultSocialStats.twitter}
                      </span>
                    </div>
                  )}

                  {/* Facebook Pill */}
                  {defaultSocialStats.facebook > 0 && (
                    <div
                      className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[24px] py-[10px]"
                      style={{
                        background: COLORS.textWhite,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <div className="relative flex h-[34px] w-[34px] items-center justify-center">
                        <HeartIcon
                          className="h-6 w-6"
                          style={{ stroke: COLORS.text, strokeWidth: 1.5 }}
                        />
                      </div>
                      <span
                        className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]"
                        style={{ fontFamily: 'Kumbh Sans', color: COLORS.text }}
                      >
                        {defaultSocialStats.facebook}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Metadata Grid */}
              <div
                className="flex flex-col gap-[30px] py-[40px]"
                style={{
                  paddingLeft: 'clamp(16px, 3.33vw, 64px)',
                  paddingRight: 'clamp(16px, 3.33vw, 64px)',
                  borderTop: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              >
                {/* Row 1 */}
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-row gap-[12px]">
                    <div className="flex flex-1 flex-col gap-[8px]">
                      <span className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        Published Date
                      </span>
                      <span className="text-[16px] font-medium leading-[150%] tracking-[-0.03em]">
                        {metadata.publishedDate}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-[8px]">
                      <span className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        Category
                      </span>
                      <span className="text-[16px] font-medium leading-[150%] tracking-[-0.03em]">
                        {metadata.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-[12px]">
                    <div className="flex flex-1 flex-col gap-[8px]">
                      <span className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        Estimated time
                      </span>
                      <span className="text-[16px] font-medium leading-[150%] tracking-[-0.03em]">
                        {metadata.readTime}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-[8px]">
                      <span className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        Written by
                      </span>
                      <span className="text-[16px] font-medium leading-[150%] tracking-[-0.03em]">
                        {metadata.author}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Two Column Layout: Table of Contents and Further Reading */}
                <div className="flex flex-col md:flex-row gap-[12px]">
                  {/* Table of Contents */}
                  {content.tableOfContents && content.tableOfContents.length > 0 && (
                    <div className="flex flex-1 flex-col gap-[12px]">
                      <h5 className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        In This {contentType === 'article' ? 'Article' : 'Prayer'}
                      </h5>
                      <div
                        className="flex flex-col gap-[12px] p-[16px]"
                        style={{ background: COLORS.tocBg }}
                      >
                        {content.tableOfContents.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="cursor-pointer text-[16px] font-normal leading-[150%] tracking-[-0.03em] text-white hover:underline"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Further Reading / Sources */}
                  {content.sources && content.sources.length > 0 && (
                    <div className="flex flex-1 flex-col gap-[12px]">
                      <h5 className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        Further Reading
                      </h5>
                      <div
                        className="flex flex-col gap-[12px] p-[16px]"
                        style={{ border: `1px solid ${COLORS.border}` }}
                      >
                        {content.sources.map((source, index) => (
                          <a
                            key={index}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[16px] font-normal leading-[150%] tracking-[-0.03em] hover:underline"
                            style={{ color: COLORS.text }}
                          >
                            {source.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* References */}
                  {content.references && content.references.length > 0 && (
                    <div className="flex flex-1 flex-col gap-[12px]">
                      <h5 className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        References
                      </h5>
                      <div
                        className="flex flex-col gap-[12px] p-[16px]"
                        style={{ border: `1px solid ${COLORS.border}` }}
                      >
                        {content.references.map((ref, index) => (
                          <a
                            key={index}
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[16px] font-normal leading-[150%] tracking-[-0.03em] hover:underline"
                            style={{ color: COLORS.text }}
                          >
                            {ref.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scripture References (for Prayer Hub) */}
                  {content.scriptureReferences && content.scriptureReferences.length > 0 && (
                    <div className="flex flex-1 flex-col gap-[12px]">
                      <h5 className="text-[16px] font-normal leading-[150%] tracking-[-0.03em]">
                        Scripture References
                      </h5>
                      <div
                        className="flex flex-col gap-[12px] p-[16px]"
                        style={{ border: `1px solid ${COLORS.border}` }}
                      >
                        {content.scriptureReferences.map((ref, index) => (
                          <div key={index} className="flex flex-col gap-[4px]">
                            <span
                              className="text-[14px] font-medium leading-[150%] tracking-[-0.03em]"
                              style={{ color: COLORS.text }}
                            >
                              {ref.book} {ref.chapter}:{ref.verse}
                            </span>
                            <span
                              className="text-[14px] font-normal leading-[150%] tracking-[-0.03em] italic"
                              style={{ color: COLORS.text }}
                            >
                              {ref.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Articles/Prayers Section */}
        {similarItems.length > 0 && (
          <section
            className="mx-auto w-full max-w-[1920px] py-[80px]"
            style={{
              paddingLeft: 'clamp(20px, 8.44vw, 162px)',
              paddingRight: 'clamp(20px, 8.44vw, 162px)',
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div className="flex flex-col gap-[60px]">
              {/* Header */}
              <div className="flex flex-row items-center justify-between">
                <h3
                  className="flex-1 text-[28px] font-medium leading-[130%] tracking-[-0.03em]"
                  style={{ fontFamily: 'Kumbh Sans', color: COLORS.text }}
                >
                  Similar {contentType === 'article' ? 'Articles' : 'Prayers'}
                </h3>
                <Link href={baseHref}>
                  <button className="flex flex-row items-center gap-[10px] px-[24px] py-[18px] bg-primary-800 hover:bg-primary-900 border border-primary-900 text-white transition-colors">
                    <span className="text-[18px] font-normal leading-[150%] tracking-[-0.03em]">
                      View All {contentType === 'article' ? 'Articles' : 'Prayers'}
                    </span>
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </Link>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                {similarItems.slice(0, 3).map((card) => (
                  <div key={card.id} className="flex flex-col gap-[20px]">
                    {/* Card Image */}
                    <div className="relative w-full overflow-hidden " style={{ aspectRatio: '590/222' }}>
                      <Image src={card.imageSrc} alt={card.imageAlt} fill className="object-cover" />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col gap-[20px]">
                      {/* Text */}
                      <div className="flex flex-col gap-[10px]">
                        <h4
                          className="text-[20px] font-semibold leading-[150%] tracking-[-0.03em]"
                          style={{ color: COLORS.textBlack }}
                        >
                          {card.title}
                        </h4>
                        {card.subtitle && (
                          <p
                            className="text-[20px] font-semibold leading-[150%] tracking-[-0.03em]"
                            style={{ color: COLORS.textBlack }}
                          >
                            {card.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Stats and CTA */}
                      <div className="flex flex-row items-center gap-[50px]">
                        {/* Stats Pills */}
                        {(card.likes !== undefined || card.views !== undefined) && (
                          <div className="flex flex-row gap-[10px]">
                            {card.likes !== undefined && (
                              <div className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[16px] py-[8px] bg-primary-800 border border-primary-900">
                                <HeartIcon className="h-6 w-6 stroke-white" style={{ strokeWidth: 1.5 }} />
                                <span
                                  className="text-[18px] font-normal leading-[150%] tracking-[-0.03em] text-white"
                                  style={{ fontFamily: 'Kumbh Sans' }}
                                >
                                  {card.likes}
                                </span>
                              </div>
                            )}
                            {card.views !== undefined && (
                              <div className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[16px] py-[8px] bg-primary-800 border border-primary-900">
                                <EyeIcon className="h-6 w-6 stroke-white" style={{ strokeWidth: 1.5 }} />
                                <span
                                  className="text-[18px] font-normal leading-[150%] tracking-[-0.03em] text-white"
                                  style={{ fontFamily: 'Kumbh Sans' }}
                                >
                                  {card.views}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* CTA Button */}
                        <Link href={`${baseHref}/${card.slug}`} className="flex-1">
                          <button className="flex w-full flex-row items-center justify-center gap-[10px] px-[24px] py-[18px] bg-primary-800 hover:bg-primary-900 border border-primary-900 text-white transition-colors">
                            <span className="text-[18px] font-normal leading-[150%] tracking-[-0.03em]">
                              Read more...
                            </span>
                            <ChevronRightIcon className="h-6 w-6" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Categories Section */}
        {otherCategoryItems.length > 0 && (
          <section
            className="mx-auto w-full max-w-[1920px] py-[80px]"
            style={{
              paddingLeft: 'clamp(20px, 8.44vw, 162px)',
              paddingRight: 'clamp(20px, 8.44vw, 162px)',
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div className="flex flex-col gap-[60px]">
              {/* Header */}
              <div className="flex flex-row items-center justify-between">
                <h3
                  className="flex-1 text-[28px] font-medium leading-[130%] tracking-[-0.03em]"
                  style={{ fontFamily: 'Kumbh Sans', color: COLORS.text }}
                >
                  Other Categories
                </h3>
                <Link href={baseHref}>
                  <button className="flex flex-row items-center gap-[10px] px-[24px] py-[18px] bg-primary-800 hover:bg-primary-900 border border-primary-900 text-white transition-colors">
                    <span className="text-[18px] font-normal leading-[150%] tracking-[-0.03em]">
                      Browse All Categories
                    </span>
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </Link>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                {otherCategoryItems.slice(0, 3).map((card) => (
                  <div key={card.id} className="flex flex-col gap-[20px]">
                    {/* Card Image */}
                    <div className="relative w-full overflow-hidden " style={{ aspectRatio: '590/222' }}>
                      <Image src={card.imageSrc} alt={card.imageAlt} fill className="object-cover" />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col gap-[20px]">
                      {/* Text */}
                      <div className="flex flex-col gap-[10px]">
                        <h4
                          className="text-[20px] font-semibold leading-[150%] tracking-[-0.03em]"
                          style={{ color: COLORS.textBlack }}
                        >
                          {card.title}
                        </h4>
                        {card.subtitle && (
                          <p
                            className="text-[20px] font-semibold leading-[150%] tracking-[-0.03em]"
                            style={{ color: COLORS.textBlack }}
                          >
                            {card.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Stats and CTA */}
                      <div className="flex flex-row items-center gap-[50px]">
                        {/* Stats Pills */}
                        {(card.likes !== undefined || card.views !== undefined) && (
                          <div className="flex flex-row gap-[10px]">
                            {card.likes !== undefined && (
                              <div className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[16px] py-[8px] bg-primary-800 border border-primary-900">
                                <HeartIcon className="h-6 w-6 stroke-white" style={{ strokeWidth: 1.5 }} />
                                <span
                                  className="text-[18px] font-normal leading-[150%] tracking-[-0.03em] text-white"
                                  style={{ fontFamily: 'Kumbh Sans' }}
                                >
                                  {card.likes}
                                </span>
                              </div>
                            )}
                            {card.views !== undefined && (
                              <div className="flex flex-row items-center justify-center gap-[4px] rounded-[100px] px-[16px] py-[8px] bg-primary-800 border border-primary-900">
                                <EyeIcon className="h-6 w-6 stroke-white" style={{ strokeWidth: 1.5 }} />
                                <span
                                  className="text-[18px] font-normal leading-[150%] tracking-[-0.03em] text-white"
                                  style={{ fontFamily: 'Kumbh Sans' }}
                                >
                                  {card.views}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* CTA Button */}
                        <Link href={`${baseHref}/${card.slug}`} className="flex-1">
                          <button className="flex w-full flex-row items-center justify-center gap-[10px] px-[24px] py-[18px] bg-primary-800 hover:bg-primary-900 border border-primary-900 text-white transition-colors">
                            <span className="text-[18px] font-normal leading-[150%] tracking-[-0.03em]">
                              Read more...
                            </span>
                            <ChevronRightIcon className="h-6 w-6" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
