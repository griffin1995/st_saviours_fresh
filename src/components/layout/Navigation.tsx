'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { navigationMenu } from '@/lib/data';

// Hardcoded church information
const CHURCH_NAME = "St Saviour's";
const CHURCH_LOCATION = 'Lewisham';

interface NavigationProps {
  className?: string;
}

/**
 * MIGRATED NAVIGATION COMPONENT
 * Upgraded from hover-based to click-based dropdown system
 * Features from old site preserved:
 * - Full-screen dropdown menu with grid layout
 * - Mobile-responsive with collapsible dropdowns
 * - Dark theme with gold accents
 * - Escape key and outside click handling
 *
 * Improvements for new site:
 * - Click-based dropdown interaction for better UX
 * - Uses Next.js 15 App Router patterns
 * - Modern React hooks with useCallback for performance
 * - Better TypeScript typing and accessibility
 * - Only one dropdown open at a time
 * - Fixed hydration by using CSS for scroll effects
 */
export default function Navigation({ className = '' }: NavigationProps) {
  // State management
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position - using mounted flag to avoid hydration mismatch
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial scroll position after mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key for closing dropdowns
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      const target = e.target as Element;
      if (!target.closest('[data-navigation]') && !target.closest('.dropdown-area')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }
    return undefined;
  }, [activeDropdown]);

  // Desktop dropdown toggle handler (click-based)
  const handleDropdownToggle = useCallback((itemName: string): void => {
    setActiveDropdown((prev) => (prev === itemName ? null : itemName));
  }, []);

  // Keyboard navigation handler for desktop menu
  const handleKeyDown = useCallback((e: React.KeyboardEvent, itemName: string): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(itemName);
    }
  }, [handleDropdownToggle]);

  const handleMobileMenuToggle = useCallback((): void => {
    setMobileMenuOpen((prev) => !prev);
    if (mobileMenuOpen) {
      setActiveDropdown(null);
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = useCallback((): void => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <>
      <nav
        data-navigation
        className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-200 ${
          isScrolled || activeDropdown !== null || mobileMenuOpen
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl'
            : 'bg-transparent'
        } ${className}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[15%_70%_15%] lg:grid-cols-[15%_70%_15%] items-stretch h-30">
            {/* Logo Section - Far Left (15%) */}
            <div className="flex justify-start items-center h-full">
              <Link
                href="/"
                className="flex items-center space-x-4 group h-full"
                onClick={handleLinkClick}
              >
                <div className="relative w-20 h-20 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">LOGO</span>
                </div>
                <div className="hidden sm:flex flex-col justify-center h-full">
                  <span className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-gold-300">
                    {CHURCH_NAME}
                  </span>
                  <span className="text-base text-white/90 -mt-1 transition-colors duration-200 group-hover:text-gold-200">
                    Catholic Church, {CHURCH_LOCATION}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - True Center (70%) */}
            <div className="hidden lg:flex justify-center items-center space-x-2 h-full">
              {navigationMenu.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleDropdownToggle(item.name)}
                  onKeyDown={(e) => handleKeyDown(e, item.name)}
                  className={`flex items-center px-6 py-4 text-lg font-medium transition-all duration-200 h-16 ${
                    activeDropdown === item.name
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                  aria-label={`${item.name} menu`}
                >
                  {item.name}
                  <ChevronDownIcon
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Section - Donate Button & Mobile Menu (15%) */}
            <div className="flex justify-end items-center space-x-4 h-full">
              {/* Donate Button - Desktop */}
              <Link
                href="/donate"
                onClick={handleLinkClick}
                className="hidden lg:inline-flex items-center gap-3 px-6 py-2 bg-white text-slate-900 hover:bg-gray-100 font-semibold transition-colors duration-200 shadow-lg"
              >
                <HeartIcon className="h-5 w-5" />
                <span className="hidden xl:inline text-lg">Donate</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMobileMenuToggle}
                className="lg:hidden p-4 text-white hover:bg-white/10 transition-colors h-16 w-16 flex items-center justify-center"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-8 w-8" />
                ) : (
                  <Bars3Icon className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              {navigationMenu.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 font-medium text-base transition-colors"
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Donate Button */}
              <div className="pt-6 mt-6 border-t border-slate-700/50">
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-slate-900 hover:bg-gray-100 font-semibold transition-colors"
                  onClick={handleLinkClick}
                >
                  <HeartIcon className="h-5 w-5" />
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Dropdown Menu */}
      {activeDropdown && (
        <div
          className="fixed left-0 right-0 bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-slate-700/50 z-[9998] dropdown-area"
          style={{ top: '120px' }}
          data-navigation
          role="menu"
          aria-label={`${activeDropdown} menu`}
        >
          <div className="w-full px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {navigationMenu
                .find(item => item.name === activeDropdown)
                ?.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="group block p-6 hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20"
                    onClick={handleLinkClick}
                    role="menuitem"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-gold-300">
                          {subItem.name}
                        </h3>
                        <p className="text-sm text-white/70 mt-1 group-hover:text-white/90">
                          Learn more about {subItem.name.toLowerCase()}
                        </p>
                      </div>
                      <ChevronDownIcon className="h-5 w-5 text-gold-300 -rotate-90 opacity-0 group-hover:opacity-100" />
                    </div>
                  </Link>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
              <p className="text-white/70 mb-4">
                Our parish team is here to support you
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-semibold shadow-lg hover:from-gold-700 hover:to-gold-800 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                onClick={handleLinkClick}
              >
                Contact Us
                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop Overlay */}
      {(activeDropdown !== null || mobileMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9997]"
          style={{ top: activeDropdown !== null ? '360px' : '120px' }}
          onClick={() => {
            setActiveDropdown(null);
            setMobileMenuOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
