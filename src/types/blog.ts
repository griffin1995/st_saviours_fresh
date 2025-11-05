/**
 * Universal Blog Template Types
 * Compatible with Learning Hub articles and Prayer Hub prayers
 */

export interface BlogHeroContent {
  mainTitle: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export interface BlogMetadata {
  publishedDate: string;
  category: string;
  readTime: string;
  author: string;
  featured?: boolean;
  views?: number;
  likes?: number;
  socialStats?: {
    reddit?: number;
    twitter?: number;
    facebook?: number;
  };
}

export interface BlogTableOfContentsItem {
  id: string;
  title: string;
}

export interface BlogRelatedItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  likes?: number;
  views?: number;
  category?: string;
  type?: 'article' | 'prayer';
}

export interface BlogSource {
  title: string;
  url: string;
}

export interface BlogContent {
  hero: string;
  intro: string;
  title: string;
  mainText: string;
  author?: string;
  readingTime?: number;
  sources?: BlogSource[];
  references?: BlogSource[];
  tableOfContents?: BlogTableOfContentsItem[];
  relatedItems?: BlogRelatedItem[];
  previousItem?: {
    slug: string;
    title: string;
    type?: 'article' | 'prayer';
  };
  nextItem?: {
    slug: string;
    title: string;
    type?: 'article' | 'prayer';
  };
  scriptureReferences?: Array<{
    book: string;
    chapter: number;
    verse: string;
    text: string;
  }>;
}

export interface Breadcrumb {
  title: string;
  slug: string;
  type?: 'category' | 'subcategory' | 'article';
}

export type ContentType = 'article' | 'prayer';

// Additional type exports for compatibility
export interface BlogCategory {
  id: string;
  slug: string;
  title: string;
  description?: string;
  parentId?: string;
}

export interface LearningHubArticle extends BlogContent {
  type: 'learning-hub';
  periodStart?: string;
  periodEnd?: string;
  difficultyLevel?: string;
  estimatedReadTime?: number;
  theologians?: string[];
  readingList?: string[];
  categoryPath?: string[];
}

export interface PrayerHubArticle extends BlogContent {
  type: 'prayer-hub';
  language?: string;
  occasion?: string;
  categoryPath?: string[];
}
