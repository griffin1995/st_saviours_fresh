/**
 * SEPARATOR COMPONENT - ST SAVIOUR'S CATHOLIC CHURCH
 * Created: January 2025
 * Purpose: Clean visual separation component for navigation and UI elements
 *
 * CONTEXT7 SOURCE: /radix-ui/react-separator - Separator component pattern for visual organization
 * SEPARATOR_REASON: Official Radix UI documentation for adding clean visual separation between elements
 */

import React from 'react';

import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = 'Separator';