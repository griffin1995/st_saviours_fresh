'use client';

import Navigation from './Navigation';

/**
 * HEADER COMPONENT
 *
 * This component now delegates all navigation functionality to the
 * migrated Navigation component which includes:
 * - Full-screen dropdown menus
 * - Mobile-responsive interface
 * - Dark theme with gold accents
 * - Smooth hover interactions
 * - All navigation links from old site
 */
export default function Header() {
  return <Navigation />;
}