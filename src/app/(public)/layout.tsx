import type { Metadata } from 'next';
import { Noto_Serif, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../styles/tailwind.css';

/**
 * FONT OPTIMIZATION - Next.js 15 Best Practices
 * Using next/font/google for automatic font optimization
 * Fonts are self-hosted and optimized at build time
 */
const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const sourceSerif4 = Source_Serif_4({
  variable: '--font-source-serif-4',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

/**
 * SITE CONFIGURATION
 * Future: These values will be fetched from CMS
 */
const siteConfig = {
  name: "St Saviour's Catholic Church",
  shortName: "St Saviour's",
  location: 'Lewisham',
  description: 'Welcome to St Saviour\'s Catholic Church in Lewisham. Join us for Mass, sacraments, and community events. A vibrant Catholic parish serving the local community.',
  url: 'https://stsaviours-lewisham.org',
  email: 'parish@stsaviours-lewisham.org',
  phone: '+44 20 1234 5678',
  address: {
    street: 'Lewisham High Street',
    city: 'Lewisham',
    region: 'London',
    postalCode: 'SE13',
    country: 'United Kingdom',
  },
};

/**
 * SEO METADATA - Comprehensive Configuration
 * Following Google's best practices for church websites
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.location}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'Catholic Church',
    'Lewisham',
    'Mass Times',
    'Sacraments',
    'Catholic Community',
    'St Saviour\'s',
    'London Church',
    'Catholic Parish',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.location}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.location}`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
};

/**
 * PUBLIC PAGES LAYOUT
 *
 * This is the ROOT layout for the public site.
 * Renders full HTML document with fonts, metadata, navigation, and footer.
 *
 * ARCHITECTURE NOTE:
 * Following payload-3.0-demo pattern where each route group has its own root layout.
 * - (public)/layout.tsx = Full HTML document for public site
 * - (payload)/layout.tsx = Full HTML document for Payload admin (using Payload's RootLayout)
 * - NO top-level app/layout.tsx to avoid nested HTML documents
 *
 * This prevents hydration errors from duplicate <html>/<body> tags.
 */
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data for Google - Critical for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Church',
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.region,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '51.4634',
                longitude: '-0.0091',
              },
            }),
          }}
        />
      </head>
      <body
        className={`
          ${notoSerif.variable}
          ${sourceSerif4.variable}
          ${jetbrainsMono.variable}
          antialiased
        `}
      >
        {/* Navigation - Client Component */}
        <Navigation />

        {/* Page Content - Each page controls its own Hero if needed */}
        {children}

        {/* Footer - Server Component */}
        <Footer />
      </body>
    </html>
  );
}
