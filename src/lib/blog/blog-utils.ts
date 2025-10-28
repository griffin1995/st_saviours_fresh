import type { ContentItem, ArticleContent } from '@/lib/cms/learning-hub-content';

/**
 * Converts Learning Hub article data to UniversalBlogTemplate props
 * Simplified to directly return template-compatible props
 */
export function convertLearningHubArticleToBlog(
  article: ContentItem,
  content: ArticleContent,
  breadcrumbs: Array<{ title: string; slug: string }>,
  relatedArticles?: ContentItem[]
) {
  const readingMinutes = content.readingTime || 10;

  return {
    hero: {
      mainTitle: article.title,
      subtitle: article.description,
      imageSrc: article.imageUrl || '/images/learning-hub/default.jpg',
      imageAlt: article.title,
    },
    metadata: {
      publishedDate: content.publishedDate || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      category: content.category || (breadcrumbs && breadcrumbs.length >= 2 ? breadcrumbs[breadcrumbs.length - 2]?.title || 'Learning Hub' : 'Learning Hub'),
      readTime: formatReadingTime(readingMinutes),
      author: content.author || 'Parish Team',
      socialStats: content.socialStats || {},
    },
    content: {
      hero: content.hero,
      intro: content.intro,
      title: content.title,
      mainText: content.mainText,
      author: content.author || 'Parish Team',
      readingTime: readingMinutes,
      sources: content.sources || [],
      scriptureReferences: [],
      relatedItems: relatedArticles?.map((related) => ({
        id: related.id,
        slug: related.slug,
        title: related.title,
        subtitle: related.description,
        imageSrc: related.imageUrl || '/images/learning-hub/default.jpg',
        imageAlt: related.title,
        type: 'article' as const,
        category: 'Learning Hub',
      })) || [],
      ...(content.previousArticle && {
        previousItem: {
          slug: content.previousArticle.slug,
          title: content.previousArticle.title,
          type: 'article' as const,
        }
      }),
      ...(content.nextArticle && {
        nextItem: {
          slug: content.nextArticle.slug,
          title: content.nextArticle.title,
          type: 'article' as const,
        }
      }),
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
