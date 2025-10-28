import { z } from 'zod'

// Base metadata for all content types
const BaseContentMetadata = z.object({
  id: z.string().uuid(), // Unique identifier
  slug: z.string(), // URL-friendly identifier
  title: z.string(), // Primary title
  description: z.string().optional(), // Short description
  authorId: z.string(), // Reference to author
  createdAt: z.date(), 
  updatedAt: z.date(),
  publishedAt: z.date().optional(), // When content becomes public
  status: z.enum([
    'draft', 
    'in_review', 
    'scheduled', 
    'published', 
    'archived'
  ]),
  tags: z.array(z.string()).optional(),
  language: z.enum(['en', 'es', 'pl', 'pt']).default('en'),
  permissions: z.object({
    viewRoles: z.array(z.string()).default(['public']),
    editRoles: z.array(z.string()).default(['admin', 'editor'])
  })
})

// Image content type with specific metadata
const ImageContentSchema = BaseContentMetadata.extend({
  type: z.literal('image'),
  url: z.string().url(),
  altText: z.string(),
  caption: z.string().optional(),
  categories: z.array(z.enum([
    'staff_photo', 
    'historical', 
    'religious_imagery', 
    'architecture', 
    'event', 
    'saint'
  ])),
  dimensions: z.object({
    width: z.number(),
    height: z.number()
  }).optional()
})

// News and Announcement content type
const NewsContentSchema = BaseContentMetadata.extend({
  type: z.literal('news'),
  content: z.string(), // Rich text content
  category: z.enum([
    'parish_announcement', 
    'community_event', 
    'diocesan_news', 
    'church_activities'
  ]),
  featuredImage: z.string().optional(), // Image ID reference
  expiresAt: z.date().optional(), // Optional expiration date
  relatedLinks: z.array(z.object({
    title: z.string(),
    url: z.string().url()
  })).optional()
})

// Prayer content type
const PrayerContentSchema = BaseContentMetadata.extend({
  type: z.literal('prayer'),
  text: z.string(), // Full prayer text
  liturgicalContext: z.enum([
    'general', 
    'mass', 
    'rosary', 
    'adoration', 
    'sacramental', 
    'personal'
  ]),
  originalLanguage: z.string().optional(),
  author: z.string().optional(), // Original prayer author
  recommendedOccasions: z.array(z.string()).optional()
})

// Knowledge Hub content type
const KnowledgeHubSchema = BaseContentMetadata.extend({
  type: z.literal('knowledge_hub'),
  content: z.string(), // Rich text content
  category: z.enum([
    'theology', 
    'church_history', 
    'sacraments', 
    'scripture_study', 
    'pastoral_care'
  ]),
  difficultyLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  relatedTopics: z.array(z.string()).optional(),
  references: z.array(z.object({
    title: z.string(),
    url: z.string().url().optional()
  })).optional()
})

// Learning Hub content type - extends Knowledge Hub for educational content
const LearningHubSchema = BaseContentMetadata.extend({
  type: z.literal('learning_hub'),
  content: z.string(), // Rich text content
  subtitle: z.string().optional(),
  excerpt: z.string(),
  
  // Hierarchical category system
  category: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string(),
    parent: z.string().optional() // For subcategories
  }),
  
  // Learning-specific metadata
  readTime: z.string(),
  difficultyLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  learningObjectives: z.array(z.string()).optional(),
  prerequisites: z.array(z.string()).optional(),
  
  // Featured image
  featuredImage: z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional()
  }),
  
  // SEO metadata
  seo: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()),
    canonicalUrl: z.string().optional()
  }),
  
  // Content relationships
  relatedContent: z.array(z.string()).optional(), // Content IDs
  bibliography: z.array(z.string()).optional(),
  quotes: z.array(z.object({
    text: z.string(),
    source: z.string(),
    citation: z.string().optional()
  })).optional(),
  
  // Interactive features
  interactiveElements: z.array(z.object({
    type: z.enum(['quiz', 'reflection', 'discussion', 'prayer', 'meditation']),
    title: z.string(),
    content: z.string(),
    order: z.number()
  })).optional(),
  
  // Progress tracking
  estimatedCompletionTime: z.number().optional(), // minutes
  completionCriteria: z.array(z.string()).optional(),
  
  featured: z.boolean().default(false)
})

// Saint Article content type
const SaintArticleSchema = BaseContentMetadata.extend({
  type: z.literal('saint_article'),
  fullName: z.string(),
  birthDate: z.date().optional(),
  deathDate: z.date().optional(),
  feastDay: z.date(),
  biography: z.string(), // Detailed biography
  patronageAreas: z.array(z.string()),
  relatedPrayers: z.array(z.string()).optional(), // Prayer IDs
  notableQuotes: z.array(z.string()).optional()
})

// General Page Content
const GeneralContentSchema = BaseContentMetadata.extend({
  type: z.literal('page'),
  sections: z.array(z.object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    order: z.number()
  })),
  pageType: z.enum([
    'static', 
    'dynamic', 
    'landing', 
    'informational'
  ]),
  parentPage: z.string().optional() // Optional parent page reference
})

// Content Relationship Schema for cross-referencing
const ContentRelationshipSchema = z.object({
  sourceContentId: z.string().uuid(),
  sourceContentType: z.string(),
  targetContentId: z.string().uuid(),
  targetContentType: z.string(),
  relationType: z.enum([
    'related', 
    'references', 
    'inspired_by', 
    'part_of'
  ])
})

// Author Profile Schema
const AuthorProfileSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  role: z.enum([
    'parish_priest', 
    'deacon', 
    'admin', 
    'contributor', 
    'editor'
  ]),
  bio: z.string().optional(),
  permissions: z.object({
    canPublish: z.boolean().default(false),
    canEdit: z.boolean().default(false)
  })
})

// Export type definitions for TypeScript
export type ImageContent = z.infer<typeof ImageContentSchema>
export type NewsContent = z.infer<typeof NewsContentSchema>
export type PrayerContent = z.infer<typeof PrayerContentSchema>
export type KnowledgeHubContent = z.infer<typeof KnowledgeHubSchema>
export type LearningHubContent = z.infer<typeof LearningHubSchema>
export type SaintArticleContent = z.infer<typeof SaintArticleSchema>
export type GeneralContent = z.infer<typeof GeneralContentSchema>
export type ContentRelationship = z.infer<typeof ContentRelationshipSchema>
export type AuthorProfile = z.infer<typeof AuthorProfileSchema>

// Validation functions
export const validateContent = {
  image: (data: unknown) => ImageContentSchema.parse(data),
  news: (data: unknown) => NewsContentSchema.parse(data),
  prayer: (data: unknown) => PrayerContentSchema.parse(data),
  knowledgeHub: (data: unknown) => KnowledgeHubSchema.parse(data),
  learningHub: (data: unknown) => LearningHubSchema.parse(data),
  saintArticle: (data: unknown) => SaintArticleSchema.parse(data),
  generalContent: (data: unknown) => GeneralContentSchema.parse(data)
}

// Content Management Utility Functions
export const contentUtils = {
  generateSlug: (title: string) => 
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  
  filterContentByTag: <T extends { tags?: string[] }>(
    contents: T[], 
    tag: string
  ) => contents.filter(content => 
    content.tags?.includes(tag)
  ),
  
  sortContentByDate: <T extends { createdAt: Date }>(
    contents: T[], 
    ascending = false
  ) => contents.sort((a, b) => 
    ascending 
      ? a.createdAt.getTime() - b.createdAt.getTime()
      : b.createdAt.getTime() - a.createdAt.getTime()
  )
}