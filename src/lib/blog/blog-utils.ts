import type { HubArticleWithMetadata } from '@/lib/cms/unified-hub-cms';

/**
 * Converts Hub article data to UniversalBlogTemplate props
 * Simplified to directly return template-compatible props
 */
export function convertLearningHubArticleToBlog(
  article: HubArticleWithMetadata,
  breadcrumbs: Array<{ title: string; slug: string }>,
  relatedArticles?: HubArticleWithMetadata[]
) {
  const readingMinutes = article.metadata.readingTime || 10;

  return {
    hero: {
      mainTitle: article.metadata.title,
      subtitle: article.metadata.description || article.metadata.intro,
      imageSrc: article.metadata.imageUrl || '/images/learning-hub/default.jpg',
      imageAlt: article.metadata.title,
    },
    metadata: {
      publishedDate: article.metadata.publishedDate || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      category: article.metadata.category || (breadcrumbs && breadcrumbs.length >= 2 ? breadcrumbs[breadcrumbs.length - 2]?.title || 'Learning Hub' : 'Learning Hub'),
      readTime: formatReadingTime(readingMinutes),
      author: article.metadata.author || 'Parish Team',
      socialStats: {},
    },
    content: {
      hero: undefined,
      intro: article.metadata.intro,
      title: article.metadata.title,
      mainText: article.content,
      author: article.metadata.author || 'Parish Team',
      readingTime: readingMinutes,
      sources: article.metadata.sources || [],
      scriptureReferences: [],
      relatedItems: relatedArticles?.map((related) => ({
        id: related.fullSlug,
        slug: related.fullSlug,
        title: related.metadata.title,
        subtitle: related.metadata.description,
        imageSrc: related.metadata.imageUrl || '/images/learning-hub/default.jpg',
        imageAlt: related.metadata.title,
        type: 'article' as const,
        category: 'Learning Hub',
      })) || [],
      // Previous/Next navigation would need to be calculated separately
    },
    breadcrumbs: (breadcrumbs || []).map((crumb) => ({
      title: crumb.title,
      slug: crumb.slug,
      type: 'category' as const,
    })),
    contentType: 'article' as const,
    baseHref: '/learning-hub',
    parishName: 'St Saviour\'s Church',
    backLabel: 'Back to Learning Hub',
  };
}

export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return 'Quick read';
  if (minutes === 1) return '1 min read';
  return minutes + ' min read';
}

export function analyzeContentReadingTime(htmlContent: string): number {
  const wordsPerMinute = 200;
  const text = htmlContent.replace(/<[^>]*>/g, '');
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
