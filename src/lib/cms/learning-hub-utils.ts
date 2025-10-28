import type { ContentItem } from './learning-hub-content';
import { mainCategories } from './learning-hub-content';

// Get a category by its slug at any level
export function getContentBySlug(targetSlug: string): ContentItem | null {
  const parts = targetSlug.split('/');
  let currentItems = mainCategories;
  let currentItem: ContentItem | null = null;

  for (const part of parts) {
    const foundItem = currentItems.find(item => item.slug === part);
    if (!foundItem) return null;
    currentItem = foundItem;
    currentItems = currentItem.children || [];
  }

  return currentItem;
}

// Get child content for a given parent
export function getChildContent(parentSlug: string): ContentItem[] {
  const parent = getContentBySlug(parentSlug);
  return parent?.children || [];
}

// Get the full path to a content item
export function getBreadcrumbs(slug: string): Array<{ title: string; slug: string }> {
  const parts = slug.split('/');
  const breadcrumbs: Array<{ title: string; slug: string }> = [];
  let currentSlug = '';

  for (const part of parts) {
    currentSlug = currentSlug ? `${currentSlug}/${part}` : part;
    const item = getContentBySlug(currentSlug);
    if (item) {
      breadcrumbs.push({
        title: item.title,
        slug: currentSlug
      });
    }
  }

  return breadcrumbs;
}

// Get siblings of a content item
export function getSiblingContent(slug: string): ContentItem[] {
  const parts = slug.split('/');
  if (parts.length < 2) return []; // No siblings for root items
  
  const parentSlug = parts.slice(0, -1).join('/');
  const parent = getContentBySlug(parentSlug);
  return parent?.children || [];
}

// Get content by time period
export function getContentByTimePeriod(start: string, end: string): ContentItem[] {
  function searchByTime(items: ContentItem[]): ContentItem[] {
    let results: ContentItem[] = [];
    
    for (const item of items) {
      if (item.timeline && item.timeline.start === start && item.timeline.end === end) {
        results.push(item);
      }
      if (item.children) {
        results = [...results, ...searchByTime(item.children)];
      }
    }
    
    return results;
  }
  
  return searchByTime(mainCategories);
}

// Get related content based on time period
export function getRelatedContent(slug: string, limit = 3): ContentItem[] {
  const content = getContentBySlug(slug);
  if (!content || !content.timeline) return [];
  
  const sameTimePeriod = getContentByTimePeriod(
    content.timeline.start,
    content.timeline.end
  ).filter(item => item.slug !== slug);
  
  return sameTimePeriod.slice(0, limit);
}

// Export utility object for easy importing
export const LearningHubUtils = {
  getContentBySlug,
  getChildContent,
  getBreadcrumbs,
  getSiblingContent,
  getContentByTimePeriod,
  getRelatedContent
};