import React from 'react'

import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import { cn } from '@/lib/utils'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  /**
   * Override the default white background
   */
  background?: 'white' | 'gray' | 'slate'
  /**
   * Whether to include the site navigation
   */
  includeNavigation?: boolean
  /**
   * Whether to include the site footer
   */
  includeFooter?: boolean
  // Legacy props kept for backward compatibility (unused but accepted)
  title?: string
  description?: string
  keywords?: string
  openGraph?: any
  structuredData?: any
}

/**
 * Modern page layout component with consistent structure
 *
 * Note: Metadata (title, description, etc.) should now be handled at the page level
 * using Next.js App Router metadata API. See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 *
 * @example
 * // In your page.tsx:
 * export const metadata: Metadata = {
 *   title: 'About Us',
 *   description: 'Learn about our church community',
 * }
 *
 * // Then use PageLayout for visual structure:
 * <PageLayout>
 *   <Section>
 *     <Heading>Page content</Heading>
 *   </Section>
 * </PageLayout>
 */
export default function PageLayout({
  children,
  className = "",
  background = 'white',
  includeNavigation = true,
  includeFooter = true,
}: PageLayoutProps) {
  // Background classes
  // NOTE: Uses 'bg-white-fixed' instead of 'bg-white' due to Tailwind CSS compilation issue
  // where 'bg-white' was not rendering properly (showed transparent instead of white)
  // See CLAUDE.md "Critical Bug Fixes" section for full details
  const backgroundClasses = {
    white: 'bg-white-fixed', // Custom class in globals.css - ensures reliable white background
    gray: 'bg-gray-50',
    slate: 'bg-slate-900'
  }

  return (
    <div
      data-page-layout
      className={cn(
        'min-h-screen flex flex-col',
        backgroundClasses[background]
      )}
    >
      {includeNavigation && <Navigation />}

      <main className={cn('flex-grow', className)}>
        {children}
      </main>

      {includeFooter && <Footer />}
    </div>
  )
}
