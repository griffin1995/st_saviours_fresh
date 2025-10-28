import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon as ArrowLeft } from '@heroicons/react/24/solid';

// Components
import { PageLayout, PageHero } from '@/components/layout';
import UniversalBlogTemplate from '@/components/blog/UniversalBlogTemplate';
import { Section, Container, Text, Button } from '@/components/ui';
import ThreePillarCards from '@/components/ThreePillarCards';

// CMS
import { getParishName, getLearningHubPageImage } from '@/lib/cms/cms-content';
import { getContentBySlug, getBreadcrumbs, getChildContent } from '@/lib/cms/learning-hub-utils';
import { mainCategories, type ContentItem } from '@/lib/cms/learning-hub-content';

// Blog utilities
import { convertLearningHubArticleToBlog } from '@/lib/blog/blog-utils';

interface ContentPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

function buildPath(item: ContentItem, parentPath: string[] = []): string[][] {
  const currentPath = [...parentPath, item.slug];
  let paths = [currentPath];

  if (item.children) {
    item.children.forEach(child => {
      const childPaths = buildPath(child, currentPath);
      paths = [...paths, ...childPaths];
    });
  }

  return paths;
}

export async function generateStaticParams() {
  let paths: string[][] = [];

  mainCategories.forEach(category => {
    const categoryPaths = buildPath(category);
    paths = [...paths, ...categoryPaths];
  });

  return paths.map(slugArr => ({
    slug: slugArr
  }));
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { slug: slugArr } = await params;
  const slug = slugArr.join('/');
  const content = getContentBySlug(slug);

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
              <h1 className="text-4xl font-bold text-white mb-4">
                Content Not Found
              </h1>
              <Text size="lg" color="gray-100" className="mb-8">
                The content you're looking for doesn't exist or has been moved.
              </Text>
              <Link href="/learning-hub">
                <Button
                  variant="primary"
                  className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Learning Hub
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </PageLayout>
    );
  }

  const children = getChildContent(slug);
  const breadcrumbs = getBreadcrumbs(slug);
  const parishName = getParishName();
  const heroImage = getLearningHubPageImage();

  // If this is an article page, use the new universal blog template
  // The conversion function returns all required props directly - no complex transformation needed
  if (content.isArticle && content.articleContent) {
    const templateProps = convertLearningHubArticleToBlog(
      content,
      content.articleContent,
      breadcrumbs || [],
      [] // Related articles - can be populated later
    );
    return <UniversalBlogTemplate {...templateProps} />;
  }

  // Otherwise, use the category template
  return (
    <PageLayout
        title={`${content.title} - Learning Hub - ${parishName}`}
        description={content.description}
        keywords={`Catholic learning, ${content.title.toLowerCase()}, religious education`}
        background="slate"
      >
        {/* Hero Section */}
        <PageHero
          title={content.title}
          subtitle={content.description}
          backgroundImage={content.imageUrl || heroImage?.url || '/images/learning-hub/default.jpg'}
          overlay="dark"
        />

        {/* Breadcrumb Navigation */}
        <Section background="slate" className="py-6 border-b border-slate-700">
          <Container>
            <div>
              <nav className="flex items-center gap-2 text-sm text-gray-300">
                <Link
                  href="/learning-hub"
                  className="hover:text-gold-300 transition-colors"
                >
                  Learning Hub
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.slug}>
                    <span>/</span>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-white">{crumb.title}</span>
                    ) : (
                      <Link
                        href={`/learning-hub/${crumb.slug}`}
                        className="hover:text-gold-300 transition-colors"
                      >
                        {crumb.title}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </Container>
        </Section>

        {/* Time Period (if available) */}
        {content.timeline && (
          <Section background="slate" className="py-8">
            <Container>
              <div
                className="text-center"
              >
                <Text size="lg" color="gray-300">
                  {content.timeline.start} – {content.timeline.end}
                </Text>
              </div>
            </Container>
          </Section>
        )}

        {/* Sub-categories/Children */}
        {children.length > 0 && (
          <Section background="slate" className="py-16">
            <Container>
              <ThreePillarCards
                cards={children.map(child => ({
                  title: child.title,
                  description: child.description,
                  imageUrl: child.imageUrl || '/images/learning-hub/default.jpg',
                  url: `/learning-hub/${child.slug}`
                }))}
                className="bg-transparent"
              />
            </Container>
          </Section>
        )}

        {/* Back Navigation */}
        <Section background="slate" className="py-12 border-t border-slate-700">
          <Container>
            <div
              className="text-center"
            >
              <Link href={breadcrumbs.length > 1 ? `/learning-hub/${breadcrumbs[breadcrumbs.length - 2]?.slug}` : '/learning-hub'}>
                <Button
                  variant="secondary"
                  className="hover:bg-white hover:text-slate-900"
                  style={{ color: 'rgba(255,255,255,1)' }}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2]?.title : 'Learning Hub'}
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </PageLayout>
  );
}