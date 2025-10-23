'use client';

import Link from 'next/link';

/**
 * SIMPLE TEST NAVIGATION
 * Testing if Client Component renders at all
 */

export default function NavigationTest() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-white text-xl font-bold">
            St Saviour's TEST
          </Link>
          <div className="flex gap-4">
            <Link href="/about-us" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/mass" className="text-white hover:text-gray-300">
              Mass Times
            </Link>
            <Link href="/contact-us" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
