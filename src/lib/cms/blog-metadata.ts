import type { BlogContent } from '@/types/blog';

/**
 * Generate SEO metadata for blog content
 */
export function generateSEOMetadata(content: BlogContent) {
  const baseTitle = "St Saviour's Catholic Church";

  return {
    title: `${content.title} | ${baseTitle}`,
    description: content.intro,
    keywords: [
      'Catholic Church',
      'Lewisham',
      'Catholic blog',
      'faith formation'
    ],
    canonicalUrl: `https://saintsaviours-lewisham.org.uk/blog/${content.title.toLowerCase().replace(/\s+/g, '-')}`,
    openGraph: {
      title: content.title,
      description: content.intro,
      type: 'article',
      images: [
        {
          url: '/images/inside-church-3-glass-windows.jpg',
          width: 1200,
          height: 630,
          alt: 'St Saviour\'s Catholic Church Interior'
        }
      ],
      authors: [content.author || 'Parish Team']
    }
  };
}

/**
 * Generate structured data for blog content
 */
export function generateStructuredData(content: BlogContent) {
  const baseData: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.intro,
    author: {
      '@type': 'Person',
      name: content.author || 'Parish Team'
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: "St Saviour's Catholic Church",
      logo: {
        '@type': 'ImageObject',
        url: 'https://saintsaviours-lewisham.org.uk/images/logo.png'
      }
    }
  };

  baseData['image'] = {
    '@type': 'ImageObject',
    url: '/images/inside-church-3-glass-windows.jpg',
    height: 630,
    width: 1200
  };

  return {
    ...baseData,
    about: {
      '@type': 'Thing',
      name: 'Catholic Teaching',
      description: 'Catholic theology and spiritual formation'
    }
  };
}

/**
 * Generate breadcrumb navigation data
 */
export function generateBreadcrumbs(categoryPath: string[]) {
  const breadcrumbs = [{
    '@type': 'ListItem',
    position: 1,
    item: {
      '@id': 'https://saintsaviours-lewisham.org.uk',
      name: 'Home'
    }
  }];

  let currentPath = '';
  categoryPath.forEach((slug, index) => {
    currentPath += `/${slug}`;
    breadcrumbs.push({
      '@type': 'ListItem',
      position: index + 2,
      item: {
        '@id': `https://saintsaviours-lewisham.org.uk${currentPath}`,
        name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
      }
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs
  };
}

/**
 * Generate social sharing metadata
 */
export function generateSocialMetadata(content: BlogContent) {
  return {
    twitter: {
      card: 'summary_large_image',
      site: '@StSaviours',
      title: content.title,
      description: content.intro,
      image: '/images/inside-church-3-glass-windows.jpg'
    },
    facebook: {
      url: `https://saintsaviours-lewisham.org.uk/blog/${content.title.toLowerCase().replace(/\s+/g, '-')}`,
      title: content.title,
      description: content.intro,
      image: '/images/inside-church-3-glass-windows.jpg',
      type: 'article'
    }
  };
}

/**
 * Generate RSS feed item
 */
export function generateRSSItem(content: BlogContent) {
  return {
    title: content.title,
    description: content.intro,
    url: `https://saintsaviours-lewisham.org.uk/blog/${content.title.toLowerCase().replace(/\s+/g, '-')}`,
    guid: content.title.toLowerCase().replace(/\s+/g, '-'),
    categories: ['Catholic Teaching', 'Spiritual Life'],
    author: content.author || 'Parish Team',
    date: new Date().toISOString(),
    enclosure: {
      url: '/images/inside-church-3-glass-windows.jpg',
      type: 'image/jpeg'
    }
  };
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry(content: BlogContent) {
  return {
    url: `https://saintsaviours-lewisham.org.uk/blog/${content.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  };
}