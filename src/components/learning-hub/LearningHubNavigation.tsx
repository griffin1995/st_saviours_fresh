// CMS DATA SOURCE: Learning Hub navigation following hierarchical content structure
import {
  ChevronRightIcon,
  HomeIcon,
  BookOpenIcon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  UsersIcon
} from '@heroicons/react/24/solid'
import { m, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

// CMS DATA SOURCE: Using cms-learning-hub.ts functions for navigation data
import type { LearningHubContent } from '@/lib/cms/cms-learning-hub'
import {
  getContentHierarchy,
  getContentByParent
} from '@/lib/cms/cms-learning-hub'

// Error boundary for navigation components

interface BreadcrumbProps {
  contentId: string
  className?: string
}

// CMS DATA SOURCE: Breadcrumb navigation following content hierarchy
export function LearningHubBreadcrumb({ contentId, className = '' }: BreadcrumbProps) {
  const hierarchy = getContentHierarchy(contentId)
  
  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    'catholic-faith': BookOpenIcon,
    'liturgy-worship': HeartIcon,
    'scripture-study': AcademicCapIcon,
    'spiritual-life': SparklesIcon,
    'parish-life': UsersIcon,
    'family-faith': HomeIcon
  }

  if (hierarchy.length === 0) {return null}

  return (
      <nav 
        className={`flex items-center space-x-2 text-sm ${className}`}
        aria-label="Learning path breadcrumb"
      >
        <Link 
          href="/learning-hub"
          className="flex items-center text-gray-300 hover:text-white transition-colors"
          aria-label="Return to Learning Hub home"
        >
          <HomeIcon className="h-4 w-4 mr-1" />
          Learning Hub
        </Link>
        
        {hierarchy.map((item, index) => {
          const isLast = index === hierarchy.length - 1
          const IconComponent = iconMap[item.id] || BookOpenIcon
          
          return (
            <React.Fragment key={item.id}>
              <ChevronRightIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
              {isLast ? (
                <span 
                  className="flex items-center text-white font-medium"
                  aria-current="page"
                >
                  <IconComponent className="h-4 w-4 mr-1" />
                  {item.title}
                </span>
              ) : (
                <Link
                  href={`/learning-hub/${item.slug}`}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <IconComponent className="h-4 w-4 mr-1" />
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          )
        })}
      </nav>
  )
}

interface TreeNavigationProps {
  rootContent: LearningHubContent
  currentPath?: string[]
  className?: string
  reducedMotion?: boolean
}

// CMS DATA SOURCE: Tree navigation for hierarchical content browsing
export function LearningHubTreeNavigation({ 
  rootContent, 
  currentPath = [], 
  className = '',
  reducedMotion = false
}: TreeNavigationProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(currentPath))
  const childContent = getContentByParent(rootContent.id)

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId)
    } else {
      newExpanded.add(nodeId)
    }
    setExpandedNodes(newExpanded)
  }

  const isExpanded = expandedNodes.has(rootContent.id)
  const hasChildren = childContent.length > 0
  const isCurrentPage = currentPath.includes(rootContent.id)

  return (
      <div className={`learning-tree-node ${className}`}>
        <div 
          className={`flex items-center py-2 px-3 rounded-lg transition-colors cursor-pointer ${
            isCurrentPage 
              ? 'bg-gold-500/20 text-gold-300 border-l-2 border-gold-500' 
              : 'text-gray-300 hover:bg-white/5 hover:text-white'
          }`}
          onClick={() => hasChildren ? toggleNode(rootContent.id) : null}
          role={hasChildren ? "button" : undefined}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-label={hasChildren ? `${isExpanded ? 'Collapse' : 'Expand'} ${rootContent.title}` : undefined}
        >
          {hasChildren && (
            <m.div
              initial={false}
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="mr-2"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </m.div>
          )}
          
          <Link
            href={`/learning-hub/${rootContent.slug}`}
            className="flex-1 flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm font-medium truncate">
              {rootContent.title}
            </span>
            {rootContent.type === 'category' && (
              <span className="ml-2 px-2 py-1 bg-gray-700 text-xs rounded">
                {rootContent.childIds.length}
              </span>
            )}
          </Link>
        </div>

        <AnimatePresence initial={false}>
          {hasChildren && isExpanded && (
            <m.div
              initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="ml-6 overflow-hidden"
            >
              <div className="border-l border-gray-600 pl-4 space-y-1">
                {childContent.map((child) => (
                  <LearningHubTreeNavigation
                    key={child.id}
                    rootContent={child}
                    currentPath={currentPath}
                    reducedMotion={reducedMotion}
                  />
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
  )
}

interface QuickNavigationProps {
  currentContent: LearningHubContent
  className?: string
}

// CMS DATA SOURCE: Quick navigation for content relationships
export function LearningHubQuickNavigation({ currentContent, className = '' }: QuickNavigationProps) {
  const siblings = currentContent.parentId 
    ? getContentByParent(currentContent.parentId)
    : []
    
  const currentIndex = siblings.findIndex(s => s.id === currentContent.id)
  const previousContent = currentIndex > 0 ? siblings[currentIndex - 1] : null
  const nextContent = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null

  return (
      <nav 
        className={`flex justify-between items-center ${className}`}
        aria-label="Content navigation"
      >
        {previousContent ? (
          <Link 
            href={`/learning-hub/${previousContent.slug}`}
            className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
          >
            <ChevronRightIcon className="h-4 w-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-gray-400">Previous</div>
              <div className="text-sm font-medium text-white truncate">
                {previousContent.title}
              </div>
            </div>
          </Link>
        ) : (
          <div /> // Spacer
        )}

        {nextContent && (
          <Link 
            href={`/learning-hub/${nextContent.slug}`}
            className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group text-right"
          >
            <div>
              <div className="text-xs text-gray-400">Next</div>
              <div className="text-sm font-medium text-white truncate">
                {nextContent.title}
              </div>
            </div>
            <ChevronRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </nav>
  )
}

interface ProgressIndicatorProps {
  hierarchy: LearningHubContent[]
  className?: string
}

// CMS DATA SOURCE: Progress indicator for learning path completion
export function LearningHubProgressIndicator({ hierarchy, className = '' }: ProgressIndicatorProps) {
  if (hierarchy.length < 2) {return null}

  const currentLevel = hierarchy[hierarchy.length - 1]
  const parentLevel = hierarchy[hierarchy.length - 2]

  if (!parentLevel || !currentLevel || !currentLevel.parentId) {return null}
  
  const allSiblings = getContentByParent(currentLevel.parentId)
  const currentIndex = allSiblings.findIndex(s => s.id === currentLevel.id)
  const progress = ((currentIndex + 1) / allSiblings.length) * 100

  return (
      <div className={`progress-indicator ${className}`}>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="text-gray-300">
            Progress in {parentLevel.title}
          </span>
          <span className="text-white font-medium">
            {currentIndex + 1} of {allSiblings.length}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-gold-500 to-gold-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={allSiblings.length}
            aria-label={`Progress: ${currentIndex + 1} of ${allSiblings.length} items completed`}
          />
        </div>
      </div>
  )
}