/**
 * URL structure for the blog system
 */

/**
 * Base routes for different content types
 */
export const BLOG_ROUTES = {
  // Learning Hub routes
  LEARNING_HUB: {
    INDEX: '/learning-hub',
    CATEGORY: (slug: string) => `/learning-hub/${slug}`,
    ARTICLE: (categoryPath: string[], slug: string) => 
      `/learning-hub/${categoryPath.join('/')}/${slug}`,
    THEOLOGIANS: '/learning-hub/theologians',
    THEOLOGIAN: (slug: string) => `/learning-hub/theologians/${slug}`,
    TIMELINE: '/learning-hub/timeline',
    PERIOD: (start: string, end: string) => 
      `/learning-hub/timeline/${start}-${end}`,
    SEARCH: '/learning-hub/search'
  },

  // Prayer Hub routes
  PRAYER_HUB: {
    INDEX: '/prayer-hub',
    CATEGORY: (slug: string) => `/prayer-hub/${slug}`,
    PRAYER: (categoryPath: string[], slug: string) => 
      `/prayer-hub/${categoryPath.join('/')}/${slug}`,
    LITURGICAL: (season: string) => `/prayer-hub/liturgical/${season}`,
    LANGUAGE: (lang: string) => `/prayer-hub/language/${lang}`,
    SEARCH: '/prayer-hub/search'
  },

  // Author routes
  AUTHOR: {
    INDEX: '/authors',
    PROFILE: (slug: string) => `/authors/${slug}`,
    ARTICLES: (slug: string) => `/authors/${slug}/articles`
  },

  // Archive routes
  ARCHIVE: {
    INDEX: '/archive',
    YEAR: (year: string) => `/archive/${year}`,
    MONTH: (year: string, month: string) => `/archive/${year}/${month}`
  },

  // Tag routes
  TAG: {
    INDEX: '/tags',
    ARTICLES: (tag: string) => `/tags/${tag}`
  },

  // Feed routes
  FEED: {
    RSS: '/feed.xml',
    ATOM: '/feed.atom',
    JSON: '/feed.json'
  }
};

/**
 * Generate breadcrumb data for a given path
 */
export function getBreadcrumbsFromPath(path: string) {
  const parts = path.split('/').filter(Boolean);
  const breadcrumbs = [];
  let currentPath = '';

  // Add home
  breadcrumbs.push({
    title: 'Home',
    path: '/'
  });

  // Add each path segment
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;

    currentPath += `/${part}`;

    // Special case for Learning Hub
    if (part === 'learning-hub') {
      breadcrumbs.push({
        title: 'Learning Hub',
        path: currentPath
      });
      continue;
    }
    
    // Special case for Prayer Hub
    if (part === 'prayer-hub') {
      breadcrumbs.push({
        title: 'Prayer Hub',
        path: currentPath
      });
      continue;
    }

    // Add current segment
    breadcrumbs.push({
      title: part.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      path: currentPath
    });
  }

  return breadcrumbs;
}

/**
 * Generate canonical URL for any blog content
 */
export function getCanonicalUrl(path: string) {
  return `https://saintsaviours-lewisham.org.uk${path}`;
}

/**
 * Generate sitemap for all blog routes
 */
export function generateBlogSitemap() {
  return {
    '/learning-hub': {
      changefreq: 'daily',
      priority: 0.8
    },
    '/prayer-hub': {
      changefreq: 'daily',
      priority: 0.8
    },
    '/authors': {
      changefreq: 'weekly',
      priority: 0.6
    },
    '/archive': {
      changefreq: 'weekly',
      priority: 0.5
    },
    '/tags': {
      changefreq: 'weekly',
      priority: 0.4
    }
  };
}

/**
 * Validate a blog URL path
 */
export function isValidBlogPath(path: string): boolean {
  // Split path into segments
  const segments = path.split('/').filter(Boolean);
  
  // Must start with learning-hub or prayer-hub
  if (!segments[0] || !['learning-hub', 'prayer-hub'].includes(segments[0])) {
    return false;
  }
  
  // Check path depth
  if (segments.length > 5) {
    return false;
  }
  
  // Validate each segment
  for (const segment of segments) {
    // Only allow alphanumeric characters, hyphens
    if (!/^[a-z0-9-]+$/.test(segment)) {
      return false;
    }
    
    // Don't allow consecutive hyphens
    if (segment.includes('--')) {
      return false;
    }
    
    // Don't allow segment to start/end with hyphen
    if (segment.startsWith('-') || segment.endsWith('-')) {
      return false;
    }
  }
  
  return true;
}

/**
 * Get next/prev links for pagination
 */
export function getPaginationLinks(currentPath: string, page: number, totalPages: number) {
  return {
    prev: page > 1 ? `${currentPath}?page=${page - 1}` : null,
    next: page < totalPages ? `${currentPath}?page=${page + 1}` : null
  };
}