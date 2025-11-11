import Link from 'next/link';
import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';
import { Phone, Mail, MapPin } from 'lucide-react';

/**
 * FOOTER COMPONENT
 *
 * Following Essential_Boilerplate.txt rules:
 * - Server Component (no 'use client')
 * - All content hardcoded inline
 * - No Framer Motion
 * - Static footer with navigation and contact info
 * - Based on old site structure but simplified
 */

// Hardcoded parish information
const PARISH_INFO = {
  name: "St Saviour's",
  fullName: "St Saviour's Catholic Church",
  location: "Lewisham",
  description: "A welcoming Catholic parish community in the heart of Lewisham, serving our neighbors with faith, hope, and love since 1889. All are welcome in God's house.",
  address: "Lewisham High Street, London SE13 6JJ",
  phone: "020 8852 3073",
  email: "lewisham@rcaos.org.uk",
  charityNumber: "1173050",
  diocese: "Southwark"
};

// Footer navigation sections
const footerSections = [
  {
    title: "Visit Us",
    links: [
      { name: "Mass Times", href: "/mass" },
      { name: "Find Us", href: "/find-us" },
      { name: "Streaming", href: "/streaming" },
      { name: "Venue Hire", href: "/venue-hire" }
    ]
  },
  {
    title: "Parish Life",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "The Sacraments", href: "/the-sacraments" },
      { name: "Parish Groups", href: "/parish-groups" },
      { name: "News & Events", href: "/news" }
    ]
  },
  {
    title: "Support Us",
    links: [
      { name: "Donate", href: "/donate" },
      { name: "Gallery", href: "/gallery" },
      { name: "Podcasts", href: "/podcasts" },
      { name: "Newsletter", href: "/weekly-newsletter" }
    ]
  }
];

// Legal links
const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Accessibility", href: "/accessibility-statement" },
  { name: "Safeguarding", href: "/safeguarding" }
];

// Social media links
const socialMedia = {
  facebook: "https://www.facebook.com/stsaviourslewisham",
  youtube: "https://www.youtube.com/@stsaviourslewisham",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">

        {/* Desktop Layout - 4-column grid */}
        <div className="hidden lg:block py-4">
          <div className="grid grid-cols-9 gap-8">

            {/* Column 1: Logo and Description (3/9) */}
            <div className="col-span-3 space-y-2">
              <div>
                <div className="w-full h-12 relative">
                  <Image
                    src="/images/logo.png"
                    alt={`${PARISH_INFO.name} Logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <div className="py-2">
                <h2 className="text-lg font-semibold text-white">{PARISH_INFO.name}</h2>
              </div>

              <p className="text-gray-200 text-sm leading-relaxed">
                {PARISH_INFO.description}
              </p>
            </div>

            {/* Column 2: Visit Us (2/9) */}
            <div className="col-span-2">
              <h3 className="font-semibold mb-4 text-base sm:text-lg md:text-xl flex items-center gap-2 text-white">
                {footerSections[0]?.title}
                <Separator.Root className="flex-1 bg-white h-px" orientation="horizontal" />
              </h3>
              <nav aria-label="Visit Us navigation">
                <ul className="space-y-3">
                  {footerSections[0]?.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Parish Life (2/9) */}
            <div className="col-span-2">
              <h3 className="font-semibold mb-4 text-base sm:text-lg md:text-xl flex items-center gap-2 text-white">
                {footerSections[1]?.title}
                <Separator.Root className="flex-1 bg-white h-px" orientation="horizontal" />
              </h3>
              <nav aria-label="Parish Life navigation">
                <ul className="space-y-3">
                  {footerSections[1]?.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 4: Support Us (2/9) */}
            <div className="col-span-2">
              <h3 className="font-semibold mb-4 text-base sm:text-lg md:text-xl flex items-center gap-2 text-white">
                {footerSections[2]?.title}
                <Separator.Root className="flex-1 bg-white h-px" orientation="horizontal" />
              </h3>
              <nav aria-label="Support Us navigation">
                <ul className="space-y-3">
                  {footerSections[2]?.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Separator between Row 1 and Row 2 */}
        <div className="hidden lg:block">
          <Separator.Root className="w-full h-px bg-slate-700" orientation="horizontal" />
        </div>

        {/* Row 2: Address, Contact and Social - All in one line */}
        <div className="hidden lg:block">
          <div className="py-4">
            <div className="flex items-center justify-center gap-8 flex-wrap">

              {/* Address */}
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                <span className="text-gray-200 text-sm sm:text-base">{PARISH_INFO.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                <a
                  href={`tel:${PARISH_INFO.phone}`}
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  aria-label={`Call ${PARISH_INFO.phone}`}
                >
                  {PARISH_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                <a
                  href={`mailto:${PARISH_INFO.email}`}
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  aria-label={`Email ${PARISH_INFO.email}`}
                >
                  {PARISH_INFO.email}
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3" role="list" aria-label="Social media links">
                {socialMedia.facebook && (
                  <a
                    href={socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {socialMedia.youtube && (
                  <a
                    href={socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden py-8">
          <div className="space-y-6">

            {/* Mobile Logo and Description */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/images/logo.png"
                    alt={`${PARISH_INFO.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{PARISH_INFO.name}</h2>
                <p className="text-gray-300">Catholic Church</p>
              </div>
              <p className="text-gray-200 text-sm px-4">
                A welcoming Catholic parish community in the heart of Lewisham.
              </p>
            </div>

            {/* Mobile Navigation Sections */}
            <div className="space-y-6">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl text-white mb-3">{section.title}</h3>
                  <nav aria-label={`${section.title} navigation`}>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-200 hover:text-white transition-colors text-sm sm:text-base"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>

            {/* Mobile Contact */}
            <div className="space-y-4 pt-4 border-t border-slate-700">
              <div className="text-center space-y-3">
                <div>
                  <a
                    href={`tel:${PARISH_INFO.phone}`}
                    className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    aria-label={`Call ${PARISH_INFO.phone}`}
                  >
                    {PARISH_INFO.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${PARISH_INFO.email}`}
                    className="text-gray-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    aria-label={`Email ${PARISH_INFO.email}`}
                  >
                    {PARISH_INFO.email}
                  </a>
                </div>
              </div>

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-4">
                {socialMedia.facebook && (
                  <a
                    href={socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {socialMedia.youtube && (
                  <a
                    href={socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Separator between contact and legal */}
        <Separator.Root className="w-full h-px bg-slate-700" orientation="horizontal" />

        {/* Legal Links */}
        <div className="py-4">
          <div className="flex items-center justify-center flex-wrap gap-2 text-sm">
            <nav aria-label="Legal links" className="flex items-center gap-2 flex-wrap justify-center">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <Separator.Root className="w-px h-4 bg-gray-500" orientation="vertical" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Separator before copyright */}
        <Separator.Root className="w-full h-px bg-slate-700" orientation="horizontal" />

        {/* Copyright and Charity Information */}
        <div className="py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-300 text-center">
            <span>&copy; {currentYear} {PARISH_INFO.name}. All rights reserved.</span>
            <Separator.Root className="hidden sm:block w-px h-4 bg-gray-500" orientation="vertical" />
            <span>Registered Charity No. {PARISH_INFO.charityNumber}</span>
            <Separator.Root className="hidden sm:block w-px h-4 bg-gray-500" orientation="vertical" />
            <span>Roman Catholic Archdiocese of {PARISH_INFO.diocese}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
