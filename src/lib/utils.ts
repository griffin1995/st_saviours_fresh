import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function prefersReducedMotion(): boolean {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return false; // Default to false on server side
  }

  // Check user's motion preference
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
