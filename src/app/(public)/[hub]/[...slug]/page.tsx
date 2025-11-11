import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon as ArrowLeft } from '@heroicons/react/24/solid';
import { PageLayout } from '@/components/layout';
import UniversalBlogTemplate from '@/components/blog/UniversalBlogTemplate';
import { Section, Container, Text, Button } from '@/components/ui';
import { UnifiedHubLayout } from '@/components/hub/UnifiedHubLayout';
import {
  isValidHub,
  HUB_CONFIGS,
  getContentBySlug,
  getBreadcrumbs,
  isHubArticle,
  generateAllHubParams,
  getRelatedArticles,
  getCategoryLayoutContent,
  type HubCategory
} from '@/lib/cms/unified-hub-cms';
import { getParishName } from '@/lib/cms/cms-content';

interface HubContentPageProps {
  params: Promise<{
    hub: string;
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const allParams = generateAllHubParams();

  // Filter to only return params with slug arrays
  return allParams
    .filter(param => param.slug && param.slug.length > 0)
    .map(param => ({
      hub: param.hub,
      slug: param.slug!
    }));
}

export async function generateMetadata({ params }: HubContentPageProps): Promise<Metadata> {
  const { hub, slug } = await params;

  if (!isValidHub(hub)) {
    return { title: 'Hub Not Found' };
  }

  const content = getContentBySlug(hub, slug);
  if (!content) {
    return { title: 'Content Not Found' };
  }

  const config = HUB_CONFIGS[hub];
  const parishName = getParishName();

  if (isHubArticle(content)) {
    return {
      title: `${content.metadata.title} | ${config.title} | ${parishName}`,
      description: content.metadata.description || config.description,
      keywords: content.metadata.tags?.join(', ') || `Catholic, ${hub}, ${config.title}`
    };
  } else {
    return {
      title: `${content.title} | ${config.title} | ${parishName}`,
      description: content.description || config.description,
      keywords: `Catholic, ${hub}, ${config.title}, ${content.title}`
    };
  }
}

export default async function HubContentPage({ params }: HubContentPageProps) {
  const { hub, slug } = await params;

  // Validate hub
  if (!isValidHub(hub)) {
    notFound();
  }

  const config = HUB_CONFIGS[hub];
  const content = getContentBySlug(hub, slug);

  // Content not found
  if (!content) {
    return (
      <PageLayout
        title="Content Not Found"
        description="The requested content could not be found."
        background="slate"
      >
        <Section background="slate" className="py-32">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Content Not Found</h1>
              <Text size="lg" color="gray-100" className="mb-8">
                The content you're looking for doesn't exist or has been moved.
              </Text>
              <Link href={config.baseRoute}>
                <Button
                  variant="primary"
                  className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {config.title}
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </PageLayout>
    );
  }

  const breadcrumbs = getBreadcrumbs(hub, slug);
  const parishName = getParishName();

  // ARTICLE PAGE - Use UniversalBlogTemplate
  if (isHubArticle(content)) {
    // Format the published date properly
    const publishedDate = content.metadata.publishedDate || new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Calculate reading time if not provided
    const readingTime = content.metadata.readingTime || Math.ceil(content.content.split(' ').length / 200);

    // Get related articles from the same category
    const relatedArticles = getRelatedArticles(hub, content, 3);
    const relatedItems = relatedArticles.map(article => {
      const item: any = {
        id: article.fullSlug,
        slug: article.fullSlug,
        title: article.metadata.title,
        imageSrc: article.metadata.imageUrl || config.heroImage,
        imageAlt: article.metadata.title,
        type: hub === 'prayer-hub' ? 'prayer' as const : 'article' as const
      };

      // Add optional properties only if they exist
      if (article.metadata.description) {
        item.subtitle = article.metadata.description;
      }
      if (article.metadata.category) {
        item.category = article.metadata.category;
      }

      return item;
    });

    return (
      <UniversalBlogTemplate
        hero={{
          mainTitle: content.metadata.title,
          subtitle: content.metadata.category || '',
          imageSrc: content.metadata.imageUrl || config.heroImage,
          imageAlt: content.metadata.title
        }}
        metadata={{
          publishedDate,
          category: content.metadata.category || config.title,
          readTime: `${readingTime} min read`,
          author: content.metadata.author || 'Parish Team'
        }}
        content={{
          hero: content.metadata.title,
          intro: content.metadata.intro || content.metadata.description || '',
          title: content.metadata.title,
          mainText: content.content, // HTML content from CMS
          author: content.metadata.author || 'Parish Team',
          readingTime: readingTime,
          tableOfContents: content.metadata.tableOfContents || [],
          sources: content.metadata.sources || [],
          references: content.metadata.references || [],
          scriptureReferences: [],
          relatedItems
        }}
        breadcrumbs={breadcrumbs.map(crumb => ({
          title: crumb.title,
          slug: crumb.slug,
          type: 'category' as const
        }))}
        contentType={hub === 'prayer-hub' ? 'prayer' : 'article'}
        baseHref={config.baseRoute}
        parishName={parishName}
      />
    );
  }

  // CATEGORY PAGE - Use UnifiedHubLayout
  const category = content as HubCategory;
  const layoutProps = getCategoryLayoutContent(hub, category, config, breadcrumbs);
  return <UnifiedHubLayout {...layoutProps} />;
}
