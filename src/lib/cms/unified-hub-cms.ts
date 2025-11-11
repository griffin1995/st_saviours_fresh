/**
 * Unified Hub CMS - Single source of truth for all blog hubs
 *
 * Supports three hubs:
 * - learning-hub: Educational content about Catholic faith, theology, history
 * - prayer-hub: Prayers, devotions, liturgical resources
 * - spiritual-reflections: Homilies, reflections, spiritual writings
 *
 * Content is stored in src/lib/cms/hub-content-data.ts as structured TypeScript data.
 * NO MARKDOWN PARSING - all content is stored as HTML in the CMS.
 */

import type { HubArticle } from './hub-content-data';
import {
  getArticlesByHub,
  getArticleBySlug as getArticleBySlugFromData
} from './hub-content-data';
import { CATEGORY_CUSTOM_CONTENT } from './category-content';

// Valid hub slugs
export const VALID_HUBS = ['learning-hub', 'prayer-hub', 'spiritual-reflections'] as const;
export type HubSlug = typeof VALID_HUBS[number];

// Hub metadata configuration
export interface HubConfig {
  slug: HubSlug;
  title: string;
  description: string;
  heroImage: string;
  baseRoute: string;
}

export const HUB_CONFIGS: Record<HubSlug, HubConfig> = {
  'learning-hub': {
    slug: 'learning-hub',
    title: 'Learning Hub',
    description: 'Explore the rich history and theology of the Catholic Church',
    heroImage: '/images/inside-church-3-glass-windows.jpg',
    baseRoute: '/learning-hub'
  },
  'prayer-hub': {
    slug: 'prayer-hub',
    title: 'Prayer Hub',
    description: 'Catholic prayers, devotions, and liturgical resources',
    heroImage: '/images/open-bible-rosary.jpg',
    baseRoute: '/prayer-hub'
  },
  'spiritual-reflections': {
    slug: 'spiritual-reflections',
    title: 'Spiritual Reflections',
    description: 'Homilies, reflections, and spiritual writings',
    heroImage: '/images/painted-glass-jesus.jpg',
    baseRoute: '/spiritual-reflections'
  }
};

// Table of Contents Item
export interface TableOfContentsItem {
  id: string;
  title: string;
}

// Source/Reference Link
export interface SourceLink {
  title: string;
  url: string;
}

// Article/Content Metadata
export interface HubArticleMetadata {
  title: string;
  description?: string;
  author?: string;
  publishedDate?: string;
  category?: string;
  tags?: string[];
  imageUrl?: string;
  imageCaption?: string;
  featured?: boolean;
  readingTime?: number;
  intro?: string;
  tableOfContents?: TableOfContentsItem[];
  sources?: SourceLink[];
  references?: SourceLink[];
}

// Full article with content (compatible with CMS data structure)
export interface HubArticleWithMetadata {
  slug: string;
  fullSlug: string;
  hub: HubSlug;
  metadata: HubArticleMetadata;
  content: string; // HTML content
  breadcrumbs: Breadcrumb[];
}

// Breadcrumb for navigation
export interface Breadcrumb {
  title: string;
  slug: string;
}

// Category Introduction Configuration
export interface CategoryIntroduction {
  label: string;
  title: string;
  subtitle: string;
  paragraphs: Array<{
    text: string;
    emphasized?: boolean;
  }>;
}

// Category Categories Section Configuration
export interface CategoryCategoriesConfig {
  sectionLabel: string;
  sectionTitle: string;
  description: string;
}

// Category CTA Configuration
export interface CategoryCTAConfig {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

// Category/Section
export interface HubCategory {
  slug: string;
  fullSlug: string;
  hub: HubSlug;
  title: string;
  description?: string;
  imageUrl?: string;
  children: (HubCategory | HubArticleWithMetadata)[];
  breadcrumbs: Breadcrumb[];
}

// Enhanced Category with Layout Content
export interface HubCategoryEnhanced extends HubCategory {
  introduction?: CategoryIntroduction;
  categoriesConfig?: CategoryCategoriesConfig;
  ctaConfig?: CategoryCTAConfig;
}

/**
 * Validate if a slug is a valid hub
 */
export function isValidHub(slug: string): slug is HubSlug {
  return VALID_HUBS.includes(slug as HubSlug);
}

/**
 * Convert CMS HubArticle to HubArticleWithMetadata format
 */
function convertToArticleWithMetadata(article: HubArticle): HubArticleWithMetadata {
  // Extract category from slug for breadcrumbs
  const slugParts = article.slug.split('/');
  const breadcrumbs: Breadcrumb[] = [];

  if (slugParts.length > 1) {
    const categorySlug = slugParts[0];
    if (categorySlug) {
      breadcrumbs.push({
        title: categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        slug: categorySlug
      });
    }
  }

  // Build metadata object conforming to exactOptionalPropertyTypes
  const metadata: HubArticleMetadata = {
    title: article.title,
    ...(article.description !== undefined && { description: article.description }),
    ...(article.intro !== undefined && !article.description && { description: article.intro }),
    ...(article.author !== undefined && { author: article.author }),
    ...(article.publishedDate !== undefined && { publishedDate: article.publishedDate }),
    ...(article.category !== undefined && { category: article.category }),
    ...(article.tags !== undefined && { tags: article.tags }),
    ...(article.featured !== undefined && { featured: article.featured }),
    ...(article.readingTime !== undefined && { readingTime: article.readingTime }),
    ...(article.intro !== undefined && { intro: article.intro }),
    ...(article.imageCaption !== undefined && { imageCaption: article.imageCaption }),
    ...(article.tableOfContents !== undefined && { tableOfContents: article.tableOfContents }),
    ...(article.sources !== undefined && { sources: article.sources }),
    ...(article.references !== undefined && { references: article.references })
  };

  return {
    slug: slugParts[slugParts.length - 1] || article.slug,
    fullSlug: article.slug,
    hub: article.hub,
    metadata,
    content: article.content,
    breadcrumbs
  };
}

/**
 * Get all content for a specific hub
 * Returns articles organized by category
 */
export function getHubContent(hub: HubSlug): (HubCategory | HubArticleWithMetadata)[] {
  const articles = getArticlesByHub(hub);

  // Group articles by category
  const categoriesMap = new Map<string, HubArticle[]>();

  for (const article of articles) {
    const category = article.category || 'Uncategorized';
    if (!categoriesMap.has(category)) {
      categoriesMap.set(category, []);
    }
    categoriesMap.get(category)!.push(article);
  }

  // Convert to category structure
  const result: (HubCategory | HubArticleWithMetadata)[] = [];

  for (const [categoryName, categoryArticles] of categoriesMap) {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');

    const category: HubCategory = {
      slug: categorySlug,
      fullSlug: categorySlug,
      hub,
      title: categoryName,
      children: categoryArticles.map(convertToArticleWithMetadata),
      breadcrumbs: []
    };

    result.push(category);
  }

  return result;
}

/**
 * Get content by slug path within a hub
 */
export function getContentBySlug(
  hub: HubSlug,
  slugPath: string[]
): HubCategory | HubArticleWithMetadata | null {
  const fullSlug = slugPath.join('/');
  const article = getArticleBySlugFromData(hub, fullSlug);

  if (article) {
    return convertToArticleWithMetadata(article);
  }

  // Check if it's a category
  const allContent = getHubContent(hub);
  const categorySlug = slugPath[0];

  for (const item of allContent) {
    if ('children' in item && item.slug === categorySlug) {
      return item;
    }
  }

  return null;
}

/**
 * Get all articles (leaf nodes) from a hub
 */
export function getAllArticles(hub: HubSlug): HubArticleWithMetadata[] {
  const articles = getArticlesByHub(hub);
  return articles.map(convertToArticleWithMetadata);
}

/**
 * Get top-level categories for a hub
 */
export function getTopLevelCategories(hub: HubSlug): HubCategory[] {
  const content = getHubContent(hub);
  return content.filter((item): item is HubCategory => 'children' in item);
}

/**
 * Generate static params for all hubs and their content
 */
export function generateAllHubParams(): Array<{ hub: string; slug?: string[] }> {
  const params: Array<{ hub: string; slug?: string[] }> = [];

  // Add hub landing pages
  for (const hub of VALID_HUBS) {
    params.push({ hub });
  }

  // Add all content pages
  for (const hub of VALID_HUBS) {
    const articles = getAllArticles(hub);
    for (const article of articles) {
      params.push({
        hub,
        slug: article.fullSlug.split('/')
      });
    }

    const categories = getTopLevelCategories(hub);
    for (const category of categories) {
      params.push({
        hub,
        slug: [category.slug]
      });
    }
  }

  return params;
}

/**
 * Get breadcrumbs for a content item
 */
export function getBreadcrumbs(hub: HubSlug, slugPath: string[]): Breadcrumb[] {
  const content = getContentBySlug(hub, slugPath);
  if (!content) return [];

  return [
    { title: HUB_CONFIGS[hub].title, slug: '' },
    ...content.breadcrumbs
  ];
}

/**
 * Search articles across a hub
 */
export function searchHub(hub: HubSlug, query: string): HubArticleWithMetadata[] {
  const articles = getAllArticles(hub);
  const lowerQuery = query.toLowerCase();

  return articles.filter(article =>
    article.metadata.title.toLowerCase().includes(lowerQuery) ||
    article.metadata.description?.toLowerCase().includes(lowerQuery) ||
    article.metadata.tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get featured articles for a hub
 */
export function getFeaturedArticles(hub: HubSlug, limit = 3): HubArticleWithMetadata[] {
  const articles = getAllArticles(hub);
  return articles
    .filter(article => article.metadata.featured)
    .slice(0, limit);
}

/**
 * Get related articles from the same category
 */
export function getRelatedArticles(hub: HubSlug, currentArticle: HubArticleWithMetadata, limit = 3): HubArticleWithMetadata[] {
  const allArticles = getAllArticles(hub);

  // Filter articles from the same category (excluding current article)
  const relatedArticles = allArticles.filter(article =>
    article.fullSlug !== currentArticle.fullSlug &&
    article.metadata.category === currentArticle.metadata.category
  );

  return relatedArticles.slice(0, limit);
}

/**
 * Type guards
 */
export function isHubArticle(item: HubCategory | HubArticleWithMetadata): item is HubArticleWithMetadata {
  return 'content' in item;
}

export function isHubCategory(item: HubCategory | HubArticleWithMetadata): item is HubCategory {
  return 'children' in item;
}

/**
 * Interface for UnifiedHubLayout component props
 */
export interface UnifiedHubLayoutProps {
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    primaryButton?: {
      text: string;
      href: string;
    };
    secondaryButton?: {
      text: string;
      href: string;
    };
  };
  breadcrumbs?: Array<{
    title: string;
    href: string;
  }>;
  introduction?: CategoryIntroduction;
  categories: {
    sectionLabel: string;
    sectionTitle: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
      imageUrl: string;
      url: string;
    }>;
  };
  cta: CategoryCTAConfig;
}

/**
 * Generate category layout content compatible with UnifiedHubLayout component
 *
 * @param _hub - The hub slug (learning-hub, prayer-hub, spiritual-reflections) - reserved for future use
 * @param category - The category object to generate content for
 * @param config - The hub configuration
 * @param breadcrumbs - Breadcrumb trail for navigation
 * @returns Props object compatible with UnifiedHubLayout component
 */
export function getCategoryLayoutContent(
  _hub: HubSlug,
  category: HubCategory,
  config: HubConfig,
  breadcrumbs: Breadcrumb[]
): UnifiedHubLayoutProps {
  // Check for custom content first
  const categoryPath = `${_hub}/${category.fullSlug}`;
  const customContent = CATEGORY_CUSTOM_CONTENT[categoryPath];
  const enhanced = category as HubCategoryEnhanced;

  // Determine parent breadcrumb for back button
  const parentBreadcrumb = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : breadcrumbs[0];
  const parentTitle = parentBreadcrumb ? parentBreadcrumb.title : config.title;
  const parentHref = parentBreadcrumb && parentBreadcrumb.slug
    ? `${config.baseRoute}/${parentBreadcrumb.slug}`
    : config.baseRoute;

  return {
    // Hero configuration
    hero: {
      title: category.title,
      description: category.description || config.description,
      backgroundImage: category.imageUrl || config.heroImage,
      primaryButton: {
        text: `Explore ${category.title}`,
        href: '#topics'
      },
      secondaryButton: {
        text: `Back to ${parentTitle}`,
        href: parentHref
      }
    },

    // Breadcrumb navigation
    breadcrumbs: breadcrumbs.map(crumb => ({
      title: crumb.title,
      href: crumb.slug ? `${config.baseRoute}/${crumb.slug}` : config.baseRoute
    })),

    // Introduction section (check custom content first, then enhanced, then generate default)
    introduction: customContent?.introduction ||
                  enhanced.introduction || {
      label: `About ${category.title}`,
      title: 'Exploring',
      subtitle: category.title,
      paragraphs: category.description ? [
        { text: category.description, emphasized: false }
      ] : [
        {
          text: `Welcome to the ${category.title} section. Browse our collection of resources and deepen your understanding.`,
          emphasized: false
        }
      ]
    },

    // Categories/Topics section (check custom content first)
    categories: {
      sectionLabel: customContent?.categoriesConfig?.sectionLabel ||
                    enhanced.categoriesConfig?.sectionLabel ||
                    `Browse ${category.title}`,
      sectionTitle: customContent?.categoriesConfig?.sectionTitle ||
                    enhanced.categoriesConfig?.sectionTitle ||
                    category.title,
      description: customContent?.categoriesConfig?.description ||
                   enhanced.categoriesConfig?.description ||
                   `Explore our curated collection of ${category.title.toLowerCase()} resources.`,
      cards: category.children.map(child => {
        if (isHubArticle(child)) {
          return {
            title: child.metadata.title,
            description: child.metadata.description || '',
            imageUrl: child.metadata.imageUrl || config.heroImage,
            url: `${config.baseRoute}/${child.fullSlug}`
          };
        } else {
          return {
            title: child.title,
            description: child.description || '',
            imageUrl: child.imageUrl || config.heroImage,
            url: `${config.baseRoute}/${child.fullSlug}`
          };
        }
      })
    },

    // Call-to-action section (check custom content first, then enhanced, then generate default)
    cta: customContent?.ctaConfig ||
         enhanced.ctaConfig || {
      title: `Discover ${category.title}`,
      description: `Dive deeper into ${category.title.toLowerCase()} and expand your understanding of Catholic faith and tradition.`,
      primaryButton: {
        text: 'Browse All Topics',
        href: '#topics'
      },
      secondaryButton: {
        text: `Back to ${config.title}`,
        href: config.baseRoute
      }
    }
  };
}

// Re-export types for backward compatibility
export type { HubArticle };
