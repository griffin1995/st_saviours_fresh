// CMS DATA SOURCE: Learning Hub content display components using cms-learning-hub.ts functions
import {
  BookOpenIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PlayIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  CalendarDaysIcon,
  EyeIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon
} from '@heroicons/react/24/solid'
import { m } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// CMS DATA SOURCE: Using cms-learning-hub.ts for content data
import {
  Button,
  Card,
  CardContent,
  Heading,
  Text
} from '@/components/ui'
import type { LearningHubContent } from '@/lib/cms/cms-learning-hub'

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
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-300 bg-green-500/20'
      case 'intermediate': return 'text-yellow-300 bg-yellow-500/20'
      case 'advanced': return 'text-red-300 bg-red-500/20'
      default: return 'text-gray-300 bg-gray-500/20'
    }
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

  if (variant === 'compact') {
    return (
        <Link href={`/learning-hub/${content.slug}`}>
          <Card className={`bg-white/10 backdrop-blur-sm border-slate-600 hover:border-white transition-all duration-300 group cursor-pointer ${className}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${getTypeColor(content.type)}`}>
                  {content.type === 'article' ? (
                    <DocumentTextIcon className="h-4 w-4" />
                  ) : content.type === 'subcategory' ? (
                    <AcademicCapIcon className="h-4 w-4" />
                  ) : (
                    <BookOpenIcon className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Heading 
                    level="h4" 
                    color="white" 
                    className="truncate text-sm group-hover:text-gold-300 transition-colors"
                  >
                    {content.title}
                  </Heading>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <span className="capitalize">{getTypeLabel(content.type)}</span>
                    {content.readTime && (
                      <>
                        <span>•</span>
                        <span>{content.readTime}</span>
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

  return (
      <Link href={`/learning-hub/${content.slug}`}>
        <Card className={`bg-white/10 backdrop-blur-sm border-slate-600 hover:border-white hover:scale-105 transition-all duration-300 group cursor-pointer h-full ${className}`}>
          <CardContent className="p-0">
            {/* Content Image */}
            {content.image && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={content.image.src}
                  alt={content.image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                    {getTypeLabel(content.type)}
                  </span>
                  {content.featured && (
                    <span className="px-2 py-1 bg-gold-500 text-black rounded-full text-xs font-bold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Progress Indicator */}
                {showProgress && content.type === 'subcategory' && (
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center bg-black/60 rounded-lg px-2 py-1 text-sm text-white">
                      <PlayIcon className="h-4 w-4 mr-1" />
                      {content.childIds.length} items
                    </div>
                  </div>
                )}

                {/* Difficulty Badge */}
                {content.metadata?.difficulty && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(content.metadata.difficulty)}`}>
                      {content.metadata.difficulty}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Content Details */}
            <div className="p-6">
              {/* Meta Information */}
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                {content.readTime && (
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {content.readTime}
                  </div>
                )}
                {content.publishedDate && (
                  <div className="flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 mr-1" />
                    {content.publishedDate}
                  </div>
                )}
                {content.metadata?.estimatedTime && (
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    {content.metadata.estimatedTime}
                  </div>
                )}
              </div>

              {/* Title and Description */}
              <Heading
                level="h3"
                color="white"
                className="mb-3 group-hover:text-gold-300 transition-colors"
              >
                {content.title}
              </Heading>

              <Text
                size="base"
                color="gray-100"
                className="mb-4 leading-relaxed line-clamp-3"
              >
                {content.description}
              </Text>

              {/* Tags */}
              {content.tags && content.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Learning Objectives Preview */}
              {content.metadata?.learningObjectives && content.metadata.learningObjectives.length > 0 && (
                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center mb-2">
                    <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-400" />
                    <Text size="sm" color="gray-100" className="font-medium">
                      Learning Goals:
                    </Text>
                  </div>
                  <Text size="sm" color="gray-100" className="line-clamp-2">
                    {content.metadata.learningObjectives[0]}
                    {content.metadata.learningObjectives.length > 1 && 
                      ` and ${content.metadata.learningObjectives.length - 1} more...`
                    }
                  </Text>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  {content.author && (
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {content.author}
                    </div>
                  )}
                  {content.type === 'subcategory' && (
                    <div className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      {content.childIds.length} items
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
      if (selectedType !== 'all' && item.type !== selectedType) {return false}
      if (selectedDifficulty !== 'all' && item.metadata?.difficulty !== selectedDifficulty) {return false}
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'date':
          return (b.publishedDate || '').localeCompare(a.publishedDate || '')
        case 'difficulty':
          const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 }
          const aDiff = difficultyOrder[a.metadata?.difficulty as keyof typeof difficultyOrder] || 0
          const bDiff = difficultyOrder[b.metadata?.difficulty as keyof typeof difficultyOrder] || 0
          return aDiff - bDiff
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 bg-white/5 rounded-lg">
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
            {filteredContent.map((item, index) => (
              <m.div
                key={item.id}
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
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContent.map((item, index) => (
              <m.div
                key={item.id}
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
            ))}
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