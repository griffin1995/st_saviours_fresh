// CMS DATA SOURCE: Learning Hub content display components using cms-learning-hub.ts functions
import {
  BookOpenIcon,
  ClockIcon,
  ArrowRightIcon,
  PlayIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  CalendarDaysIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon
} from '@heroicons/react/24/solid'
import { m } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// CMS DATA SOURCE: Using unified-hub-cms.ts for content data
import {
  Button,
  Card,
  CardContent,
  Heading,
  Text
} from '@/components/ui'
import type { HubArticleWithMetadata, HubCategory } from '@/lib/cms/unified-hub-cms'

// Type for content display (can be either article or category)
type LearningHubContent = HubArticleWithMetadata | HubCategory

// Components

interface ContentCardProps {
  content: LearningHubContent
  variant?: 'default' | 'featured' | 'compact'
  showProgress?: boolean
  reducedMotion?: boolean
  className?: string
}

// CMS DATA SOURCE: Individual content card component
export function LearningHubContentCard({
  content,
  variant = 'default',
  showProgress = false,
  className = ''
}: ContentCardProps) {
  // Note: getDifficultyColor is defined but not yet used - will be used when difficulty metadata is added to CMS
  // const getDifficultyColor = (difficulty?: string) => {
  //   switch (difficulty) {
  //     case 'beginner': return 'text-green-300 bg-green-500/20'
  //     case 'intermediate': return 'text-yellow-300 bg-yellow-500/20'
  //     case 'advanced': return 'text-red-300 bg-red-500/20'
  //     default: return 'text-gray-300 bg-gray-500/20'
  //   }
  // }

  const getContentType = (content: LearningHubContent): 'category' | 'article' => {
    return 'children' in content ? 'category' : 'article'
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'category': return 'text-blue-300 bg-blue-500/20'
      case 'subcategory': return 'text-purple-300 bg-purple-500/20'
      case 'article': return 'text-green-300 bg-green-500/20'
      case 'resource': return 'text-orange-300 bg-orange-500/20'
      default: return 'text-gray-300 bg-gray-500/20'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'category': return 'Category'
      case 'subcategory': return 'Learning Path'
      case 'article': return 'Article'
      case 'resource': return 'Resource'
      default: return type
    }
  }

  const contentType = getContentType(content)
  const title = 'metadata' in content ? content.metadata.title : content.title
  const description = 'metadata' in content ? content.metadata.description : content.description
  const slug = 'children' in content ? content.slug : content.fullSlug

  if (variant === 'compact') {
    const readTime = 'metadata' in content ? `${content.metadata.readingTime || 5} min read` : undefined

    return (
        <Link href={`/learning-hub/${slug}`}>
          <Card className={`bg-white/10 backdrop-blur-sm border-slate-600 hover:border-white transition-all duration-300 group cursor-pointer ${className}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2  ${getTypeColor(contentType)}`}>
                  {contentType === 'article' ? (
                    <DocumentTextIcon className="h-4 w-4" />
                  ) : contentType === 'category' ? (
                    <BookOpenIcon className="h-4 w-4" />
                  ) : (
                    <AcademicCapIcon className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Heading
                    level="h4"
                    color="white"
                    className="truncate text-sm group-hover:text-gold-300 transition-colors"
                  >
                    {title}
                  </Heading>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <span className="capitalize">{getTypeLabel(contentType)}</span>
                    {readTime && (
                      <>
                        <span>•</span>
                        <span>{readTime}</span>
                      </>
                    )}
                  </div>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-gold-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </Link>
    )
  }

  const imageUrl = 'metadata' in content ? content.metadata.imageUrl : content.imageUrl
  const featured = 'metadata' in content ? content.metadata.featured : false
  const readTime = 'metadata' in content ? `${content.metadata.readingTime || 5} min read` : undefined
  const publishedDate = 'metadata' in content ? content.metadata.publishedDate : undefined
  const author = 'metadata' in content ? content.metadata.author : undefined
  const tags = 'metadata' in content ? content.metadata.tags : undefined
  const childrenCount = 'children' in content ? content.children.length : 0

  return (
      <Link href={`/learning-hub/${slug}`}>
        <Card className={`bg-white/10 backdrop-blur-sm border-slate-600 hover:border-white hover:scale-105 transition-all duration-300 group cursor-pointer h-full ${className}`}>
          <CardContent className="p-0">
            {/* Content Image */}
            {imageUrl && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title || 'Content image'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(contentType)}`}>
                    {getTypeLabel(contentType)}
                  </span>
                  {featured && (
                    <span className="px-2 py-1 bg-gold-500 text-black rounded-full text-xs font-bold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Progress Indicator */}
                {showProgress && contentType === 'category' && childrenCount > 0 && (
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center bg-black/60  px-2 py-1 text-sm text-white">
                      <PlayIcon className="h-4 w-4 mr-1" />
                      {childrenCount} items
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Content Details */}
            <div className="p-6">
              {/* Meta Information */}
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                {readTime && (
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {readTime}
                  </div>
                )}
                {publishedDate && (
                  <div className="flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 mr-1" />
                    {publishedDate}
                  </div>
                )}
              </div>

              {/* Title and Description */}
              <Heading
                level="h3"
                color="white"
                className="mb-3 group-hover:text-gold-300 transition-colors"
              >
                {title}
              </Heading>

              <Text
                size="base"
                color="gray-100"
                className="mb-4 leading-relaxed line-clamp-3"
              >
                {description || ''}
              </Text>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs">
                      +{tags.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  {author && (
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {author}
                    </div>
                  )}
                  {contentType === 'category' && childrenCount > 0 && (
                    <div className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      {childrenCount} items
                    </div>
                  )}
                </div>
                <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-gold-300 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
  )
}

interface ContentListProps {
  content: LearningHubContent[]
  showFilters?: boolean
  showViewToggle?: boolean
  reducedMotion?: boolean
  className?: string
}

// CMS DATA SOURCE: Content list component with filtering and sorting
export function LearningHubContentList({ 
  content, 
  showFilters = true,
  showViewToggle = true,
  reducedMotion = false,
  className = ''
}: ContentListProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'title' | 'date' | 'difficulty'>('title')

  // Filter and sort content
  const filteredContent = content
    .filter(item => {
      const itemType = 'children' in item ? 'category' : 'article'
      if (selectedType !== 'all' && itemType !== selectedType) {return false}
      // Difficulty filtering only applies to articles with metadata
      if (selectedDifficulty !== 'all' && 'metadata' in item) {
        // Note: difficulty is not in the unified CMS yet, so this will always pass
        return true
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title': {
          const aTitle = 'metadata' in a ? a.metadata.title : a.title
          const bTitle = 'metadata' in b ? b.metadata.title : b.title
          return aTitle.localeCompare(bTitle)
        }
        case 'date': {
          const aDate = 'metadata' in a ? a.metadata.publishedDate : undefined
          const bDate = 'metadata' in b ? b.metadata.publishedDate : undefined
          return (bDate || '').localeCompare(aDate || '')
        }
        case 'difficulty':
          // Difficulty is not yet in unified CMS, keep same order
          return 0
        default:
          return 0
      }
    })

  if (content.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-6">
          <BookOpenIcon className="h-8 w-8 text-gray-400" />
        </div>
        <Heading level="h3" color="white" className="mb-4">
          No Content Available
        </Heading>
        <Text size="lg" color="gray-100">
          Content is currently being prepared. Check back soon!
        </Text>
      </div>
    )
  }

  return (
      <div className={`learning-content-list ${className}`}>
        {/* Filters and Controls */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 bg-white/5 ">
            <div className="flex flex-wrap items-center gap-4">
              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <FunnelIcon className="h-4 w-4 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-slate-700 text-white text-sm rounded px-3 py-1 border border-slate-600 focus:border-gold-500 focus:outline-none"
                >
                  <option value="all">All Types</option>
                  <option value="category">Categories</option>
                  <option value="subcategory">Learning Paths</option>
                  <option value="article">Articles</option>
                  <option value="resource">Resources</option>
                </select>
              </div>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-slate-700 text-white text-sm rounded px-3 py-1 border border-slate-600 focus:border-gold-500 focus:outline-none"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-700 text-white text-sm rounded px-3 py-1 border border-slate-600 focus:border-gold-500 focus:outline-none"
              >
                <option value="title">Sort by Title</option>
                <option value="date">Sort by Date</option>
                <option value="difficulty">Sort by Difficulty</option>
              </select>
            </div>

            {/* View Toggle */}
            {showViewToggle && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gold-500 text-black' : 'bg-slate-700 text-gray-300 hover:text-white'}`}
                  aria-label="Grid view"
                >
                  <Squares2X2Icon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gold-500 text-black' : 'bg-slate-700 text-gray-300 hover:text-white'}`}
                  aria-label="List view"
                >
                  <ListBulletIcon className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <Text size="sm" color="gray-300">
            Showing {filteredContent.length} of {content.length} items
          </Text>
        </div>

        {/* Content Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredContent.map((item, index) => {
              const itemKey = 'children' in item ? item.slug : item.fullSlug
              return (
                <m.div
                  key={itemKey}
                  initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <LearningHubContentCard
                    content={item}
                    variant="default"
                    showProgress={true}
                    reducedMotion={reducedMotion}
                  />
                </m.div>
              )
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContent.map((item, index) => {
              const itemKey = 'children' in item ? item.slug : item.fullSlug
              return (
                <m.div
                  key={itemKey}
                  initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <LearningHubContentCard
                    content={item}
                    variant="compact"
                    reducedMotion={reducedMotion}
                  />
                </m.div>
              )
            })}
          </div>
        )}

        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FunnelIcon className="h-8 w-8 text-gray-400" />
            </div>
            <Heading level="h3" color="white" className="mb-4">
              No Content Matches Your Filters
            </Heading>
            <Text size="lg" color="gray-100" className="mb-6">
              Try adjusting your filters to see more content.
            </Text>
            <Button
              variant="secondary"
              onClick={() => {
                setSelectedType('all')
                setSelectedDifficulty('all')
              }}
              className="text-white hover:bg-white hover:text-slate-900"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
  )
}