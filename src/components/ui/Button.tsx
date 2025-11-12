import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

/**
 * Button component variants using CVA for consistent styling
 * Based on the design system specification
 */
const buttonVariants = cva(
  // Base styles applied to all buttons
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        // Primary: Gold brand color (main CTA)
        primary: [
          'bg-gold-600 text-white border border-gold-600',
          'hover:bg-gold-500 hover:shadow-lg hover:border-gold-500',
          'focus:ring-gold-600 focus:ring-offset-2',
          'active:bg-gold-700 shadow-md'
        ],

        // Secondary: Navy brand color
        secondary: [
          'bg-primary-700 text-white border-2 border-primary-700',
          'hover:bg-primary-600 hover:border-primary-600',
          'focus:ring-primary-600 focus:ring-offset-white',
          'active:bg-primary-800'
        ],

        // Outline: Neutral with gray (now slate via override)
        outline: [
          'border bg-white text-gray-700',
          'border-gray-300 hover:bg-gray-50 hover:border-gray-400',
          'focus:ring-gray-300 focus:ring-offset-white',
          'active:bg-gray-100'
        ],

        // Ghost: Minimal neutral button
        ghost: [
          'bg-transparent text-gray-600',
          'hover:bg-gray-100 hover:text-gray-900',
          'focus:ring-gray-300 focus:ring-offset-white',
          'active:bg-gray-200'
        ],

        // Destructive: Semantic red (keep as-is)
        destructive: [
          'bg-red-600 text-white',
          'hover:bg-red-700 hover:shadow-lg',
          'focus:ring-red-500 focus:ring-offset-white',
          'active:bg-red-800'
        ]
      },
      
      size: {
        xs: 'h-8 px-3 text-xs rounded-lg',
        sm: 'h-9 sm:h-10 px-3 sm:px-4 text-sm rounded-lg sm:rounded-xl',
        md: 'h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base rounded-xl',
        lg: 'h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl sm:rounded-2xl',
        xl: 'h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl rounded-2xl'
      },
      
      // Full width option
      fullWidth: {
        true: 'w-full',
        false: 'w-auto'
      }
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean
  
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode
  
  /**
   * Icon to display after the button text  
   */
  rightIcon?: React.ReactNode
}

/**
 * Button component with consistent styling and accessibility
 * 
 * @example
 * <Button variant="primary" size="lg">
 *   Get in Touch
 * </Button>
 * 
 * @example
 * <Button variant="secondary" leftIcon={<Phone />}>
 *   Call Us
 * </Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        
        {children}
        
        {!loading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Export the variants for external use
export { buttonVariants }