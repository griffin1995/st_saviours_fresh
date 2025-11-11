import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

/**
 * Container component variants for consistent layout widths
 */
const containerVariants = cva(
  'mx-auto px-4 sm:px-6 lg:px-8',
  {
    variants: {
      size: {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl', 
        xl: 'max-w-8xl',
        full: 'max-w-full'
      }
    },
    
    defaultVariants: {
      size: 'lg'
    }
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

/**
 * Container component for consistent page layout widths
 * 
 * @example
 * <Container size="lg">
 *   <h1>Page content</h1>
 * </Container>
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, className }))}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'

/**
 * Section component variants for consistent spacing
 */
const sectionVariants = cva(
  'w-full',
  {
    variants: {
      spacing: {
        none: 'py-0',
        xs: 'py-8',
        sm: 'py-12',
        md: 'py-16',
        lg: 'py-24',
        xl: 'py-32'
      },
      
      background: {
        white: 'bg-white',
        navy: 'bg-navy-900 text-white',
        'navy-light': 'bg-navy-50',
        slate: 'bg-slate-900 text-white',
        'slate-800': 'bg-slate-800 text-white',
        'gray-950': 'bg-gray-950 text-white',
        transparent: 'bg-transparent'
      }
    },
    
    defaultVariants: {
      spacing: 'lg',
      background: 'white'
    }
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /**
   * Container size for the section content
   */
  containerSize?: VariantProps<typeof containerVariants>['size']
}

/**
 * Section component for page sections with consistent spacing
 * 
 * @example
 * <Section spacing="lg" background="white">
 *   <Heading level="h2">Section Title</Heading>
 *   <Text>Section content</Text>
 * </Section>
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    spacing, 
    background, 
    containerSize = 'lg',
    children,
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ spacing, background, className }))}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    )
  }
)

Section.displayName = 'Section'
