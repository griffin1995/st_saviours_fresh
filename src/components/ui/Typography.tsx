import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

/**
 * Heading component variants for consistent typography
 */
const headingVariants = cva(
  'font-serif font-light text-slate-900',
  {
    variants: {
      level: {
        h1: 'text-4xl lg:text-6xl',
        h2: 'text-3xl lg:text-4xl', 
        h3: 'text-2xl lg:text-3xl font-medium',
        h4: 'text-xl lg:text-2xl font-medium',
        h5: 'text-lg lg:text-xl font-medium',
        h6: 'text-base lg:text-lg font-medium'
      },
      
      color: {
        default: 'text-slate-900',
        muted: 'text-gray-600',
        gold: 'text-gold-600',
        white: 'text-white'
      },
      
      align: {
        left: 'text-left',
        center: 'text-center', 
        right: 'text-right'
      }
    },
    
    defaultVariants: {
      level: 'h2',
      color: 'default',
      align: 'left'
    }
  }
)

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  /**
   * The semantic heading level (affects both styling and HTML element)
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Heading component with consistent typography scaling
 * 
 * @example
 * <Heading level="h1" color="default">
 *   About St Saviour's
 * </Heading>
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ 
    className, 
    level = 'h2', 
    color, 
    align,
    as,
    ...props 
  }, ref) => {
    // Use 'as' prop if provided, otherwise use 'level', fallback to 'h2'
    const Component = as || level || 'h2'
    
    return React.createElement(
      Component,
      {
        ref,
        className: cn(headingVariants({ level, color, align, className })),
        ...props
      }
    )
  }
)

Heading.displayName = 'Heading'

/**
 * Text component variants for body content
 */
const textVariants = cva(
  'leading-relaxed',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl'
      },
      
      color: {
        default: 'text-gray-600',
        muted: 'text-gray-500',
        dark: 'text-slate-900',
        white: 'text-white',
        gold: 'text-gold-600',
        'gray-100': 'text-gray-100',
        'gray-200': 'text-gray-200',
        'gray-300': 'text-gray-300'
      },
      
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
      },
      
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify'
      }
    },
    
    defaultVariants: {
      size: 'base',
      color: 'default',
      weight: 'normal',
      align: 'left'
    }
  }
)

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  /**
   * The HTML element to render
   */
  as?: 'p' | 'span' | 'div' | 'strong' | 'em'
}

/**
 * Text component for body content with consistent styling
 * 
 * @example
 * <Text size="lg" color="default">
 *   This is body text content.
 * </Text>
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ 
    className, 
    size, 
    color, 
    weight, 
    align,
    as = 'p',
    ...props 
  }, ref) => {
    return React.createElement(
      as,
      {
        ref,
        className: cn(textVariants({ size, color, weight, align, className })),
        ...props
      }
    )
  }
)

Text.displayName = 'Text'