/**
 * Learning Hub CMS - Hierarchical Content Management System
 * 
 * Supports multi-level content organization beyond theology articles
 * CMS DATA SOURCE: Using hierarchical content structure for educational materials
 */

export interface LearningHubContent {
  id: string
  slug: string
  title: string
  description: string
  type: 'category' | 'subcategory' | 'article' | 'resource'
  parentId?: string
  childIds: string[]
  level: number
  order: number
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  image?: {
    src: string
    alt: string
    caption?: string
  }
  content?: string
  author?: string
  readTime?: string
  publishedDate?: string
  lastModified?: string
  tags?: string[]
  seo?: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
  metadata?: {
    difficulty?: 'beginner' | 'intermediate' | 'advanced'
    estimatedTime?: string
    prerequisites?: string[]
    learningObjectives?: string[]
    resources?: Array<{
      title: string
      url: string
      type: 'pdf' | 'video' | 'audio' | 'link'
    }>
  }
}

export interface LearningHubCategory {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  color: string
  level: number
  parentId?: string
  childCount: number
  articleCount: number
  featured: boolean
  order: number
}

export interface LearningPath {
  id: string
  slug: string
  title: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  estimatedDuration: string
  prerequisites: string[]
  learningObjectives: string[]
  steps: Array<{
    id: string
    title: string
    contentId: string
    type: 'article' | 'resource' | 'activity'
    required: boolean
  }>
  featured: boolean
  order: number
}

// CMS DATA SOURCE: Main learning categories following hierarchical structure
export const learningHubCategories: LearningHubCategory[] = [
  {
    id: "catholic-faith",
    slug: "catholic-faith",
    title: "Catholic Faith Foundations",
    description: "Essential teachings, traditions, and practices of the Catholic Church",
    icon: "BookOpen",
    color: "from-blue-600 to-blue-500",
    level: 1,
    childCount: 4,
    articleCount: 12,
    featured: true,
    order: 1
  },
  {
    id: "liturgy-worship",
    slug: "liturgy-worship",
    title: "Liturgy & Worship",
    description: "Understanding the Mass, sacraments, and liturgical seasons",
    icon: "Heart",
    color: "from-purple-600 to-purple-500",
    level: 1,
    childCount: 3,
    articleCount: 8,
    featured: true,
    order: 2
  },
  {
    id: "scripture-study",
    slug: "scripture-study",
    title: "Scripture & Study",
    description: "Biblical interpretation, study methods, and theological insights",
    icon: "AcademicCap",
    color: "from-green-600 to-green-500",
    level: 1,
    childCount: 5,
    articleCount: 15,
    featured: true,
    order: 3
  },
  {
    id: "spiritual-life",
    slug: "spiritual-life",
    title: "Spiritual Life",
    description: "Prayer, contemplation, and growing in holiness",
    icon: "Sparkles",
    color: "from-pink-600 to-pink-500",
    level: 1,
    childCount: 4,
    articleCount: 10,
    featured: true,
    order: 4
  },
  {
    id: "parish-life",
    slug: "parish-life",
    title: "Parish Life",
    description: "Community involvement, ministries, and parish activities",
    icon: "Users",
    color: "from-yellow-600 to-yellow-500",
    level: 1,
    childCount: 3,
    articleCount: 6,
    featured: false,
    order: 5
  },
  {
    id: "family-faith",
    slug: "family-faith",
    title: "Family & Faith",
    description: "Raising children in faith, family devotions, and Catholic living",
    icon: "Home",
    color: "from-orange-600 to-orange-500",
    level: 1,
    childCount: 3,
    articleCount: 9,
    featured: false,
    order: 6
  }
]

// CMS DATA SOURCE: Sample hierarchical content structure
export const learningHubContent: LearningHubContent[] = [
  {
    id: "catholic-faith",
    slug: "catholic-faith",
    title: "Catholic Faith Foundations",
    description: "Essential teachings, traditions, and practices of the Catholic Church",
    type: "category",
    childIds: ["catechism-basics", "church-history", "saints-traditions", "catholic-social-teaching"],
    level: 1,
    order: 1,
    status: "published",
    featured: true,
    image: {
      src: "/images/inside-church-3-glass-windows.jpg",
      alt: "Beautiful stained glass windows representing Catholic faith traditions"
    },
    seo: {
      metaTitle: "Catholic Faith Foundations | Learning Hub | St Saviour's",
      metaDescription: "Explore the essential teachings, traditions, and practices of the Catholic Church through our comprehensive learning resources.",
      keywords: ["Catholic faith", "Catholic teachings", "Church traditions", "Catholic doctrine"]
    }
  },
  {
    id: "catechism-basics",
    slug: "catechism-basics", 
    title: "Catechism Basics",
    description: "Core Catholic teachings explained simply and clearly",
    type: "subcategory",
    parentId: "catholic-faith",
    childIds: ["creed-explained", "ten-commandments", "beatitudes"],
    level: 2,
    order: 1,
    status: "published",
    featured: false,
    image: {
      src: "/images/priest-taking-communion.jpg",
      alt: "Priest taking communion during Mass"
    }
  },
  {
    id: "creed-explained",
    slug: "creed-explained",
    title: "The Apostles' Creed Explained",
    description: "A line-by-line exploration of our fundamental statement of faith",
    type: "article",
    parentId: "catechism-basics", 
    childIds: [],
    level: 3,
    order: 1,
    status: "published",
    featured: true,
    content: `# The Apostles' Creed Explained

## Introduction

The Apostles' Creed is one of the most ancient and important statements of Christian faith. While not actually written by the twelve apostles, it summarizes the core beliefs they taught and represents the faith of the early Church.

## "I believe in God, the Father almighty, Creator of heaven and earth"

This opening declaration establishes several fundamental truths:
- **God as Father**: We acknowledge God's paternal relationship with humanity
- **Almighty**: God possesses unlimited power and authority  
- **Creator**: God is the source and origin of all existence

## "And in Jesus Christ, his only Son, our Lord"

Here we confess the divinity and unique nature of Jesus:
- **Only Son**: Jesus has a unique relationship with the Father
- **Our Lord**: We acknowledge Jesus' authority in our lives
- **Christ**: Jesus is the promised Messiah

## Historical Context

The Creed developed organically in the early Church as a baptismal formula and teaching tool. By the 4th century, various forms existed throughout the Christian world, eventually stabilizing into the form we know today.

## Living the Creed Today

The Apostles' Creed isn't just historical doctrine—it's meant to shape our daily lives:

1. **Trust in Providence**: Believing God is almighty and creator means trusting His plan
2. **Following Jesus**: Acknowledging Him as Lord means obedience to His teachings  
3. **Community**: Believing in the "communion of saints" calls us to unity

## Conclusion

Each time we recite the Apostles' Creed, we join our voices with countless Christians throughout history, declaring our shared faith in the God who created us, redeemed us, and continues to sanctify us.`,
    author: "St Saviour's Learning Hub",
    readTime: "8 min",
    publishedDate: "2024-12-15",
    lastModified: "2024-12-15",
    tags: ["Creed", "Faith", "Doctrine", "Prayer", "Catechism"],
    metadata: {
      difficulty: "beginner",
      estimatedTime: "15 minutes",
      prerequisites: [],
      learningObjectives: [
        "Understand the historical context of the Apostles' Creed",
        "Explain each line of the Creed",
        "Apply Creed teachings to daily life"
      ],
      resources: [
        {
          title: "Catechism of the Catholic Church - The Apostles' Creed",
          url: "https://www.vatican.va/archive/ccc_css/archive/catechism/p1s1c3a1.htm",
          type: "link"
        }
      ]
    },
    seo: {
      metaTitle: "The Apostles' Creed Explained | Catholic Faith Foundations | St Saviour's",
      metaDescription: "Explore the meaning and significance of the Apostles' Creed line by line, understanding this foundational statement of Catholic faith.",
      keywords: ["Apostles' Creed", "Catholic faith", "Christian doctrine", "prayer", "catechism"]
    }
  }
]

// Helper functions for CMS operations
export function getContentBySlug(slug: string): LearningHubContent | undefined {
  return learningHubContent.find(content => content.slug === slug)
}

export function getContentByParent(parentId: string): LearningHubContent[] {
  return learningHubContent
    .filter(content => content.parentId === parentId && content.status === 'published')
    .sort((a, b) => a.order - b.order)
}

export function getCategoryBySlug(slug: string): LearningHubCategory | undefined {
  return learningHubCategories.find(category => category.slug === slug)
}

export function getTopLevelCategories(): LearningHubCategory[] {
  return learningHubCategories
    .filter(category => category.level === 1)
    .sort((a, b) => a.order - b.order)
}

export function getFeaturedContent(): LearningHubContent[] {
  return learningHubContent.filter(content => 
    content.featured && 
    content.status === 'published' &&
    content.type === 'article'
  )
}

export function getContentHierarchy(contentId: string): LearningHubContent[] {
  const hierarchy: LearningHubContent[] = []
  let current = learningHubContent.find(c => c.id === contentId)
  
  while (current) {
    hierarchy.unshift(current)
    if (current.parentId) {
      const parent = learningHubContent.find(c => c.id === current!.parentId)
      if (parent) {
        current = parent
      } else {
        break
      }
    } else {
      break
    }
  }
  
  return hierarchy
}

export function getRelatedContent(contentId: string, limit = 3): LearningHubContent[] {
  const current = learningHubContent.find(c => c.id === contentId)
  if (!current) return []
  
  // Get siblings (same parent) and same-level content
  const related = learningHubContent.filter(content => 
    content.id !== contentId &&
    content.status === 'published' &&
    (content.parentId === current.parentId || content.level === current.level) &&
    content.type === 'article'
  )
  
  return related.slice(0, limit)
}

export function searchLearningContent(query: string): LearningHubContent[] {
  const lowercaseQuery = query.toLowerCase()
  return learningHubContent.filter(content => 
    content.status === 'published' && (
      content.title.toLowerCase().includes(lowercaseQuery) ||
      content.description.toLowerCase().includes(lowercaseQuery) ||
      content.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  )
}

export function getContentStats() {
  const published = learningHubContent.filter(c => c.status === 'published')
  return {
    totalContent: published.length,
    categories: published.filter(c => c.type === 'category').length,
    subcategories: published.filter(c => c.type === 'subcategory').length,
    articles: published.filter(c => c.type === 'article').length,
    resources: published.filter(c => c.type === 'resource').length
  }
}