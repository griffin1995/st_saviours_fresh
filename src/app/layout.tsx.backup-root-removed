import type { Metadata } from 'next';
import { Noto_Serif, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './styles/tailwind.css';

/**
 * FONT OPTIMIZATION - Next.js 15 Best Practices
 * Using next/font/google for automatic font optimization
 * Fonts are self-hosted and optimized at build time
 * Future: Font URLs can be configured via CMS
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
 * Hardcoded for now to ensure site works immediately
 */
const siteConfig = {
  name: "St Saviour's Catholic Church",
  shortName: "St Saviour's",
  location: 'Lewisham',
  description: 'Welcome to St Saviour\'s Catholic Church in Lewisham. Join us for Mass, sacraments, and community events. A vibrant Catholic parish serving the local community.',
  url: 'https://stsaviours-lewisham.org', // TODO: Replace with actual domain
  email: 'parish@stsaviours-lewisham.org', // TODO: Replace with actual email
  phone: '+44 20 1234 5678', // TODO: Replace with actual phone
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
 * Future: Metadata will be dynamically generated from CMS
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  // Basic Metadata
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

  // OpenGraph for Social Media Sharing
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.location}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg', // TODO: Add actual church image
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.location}`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },

  // Search Engine Robots
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

  // Additional Metadata
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Verification (Future: Add actual verification codes from CMS)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

/**
 * ROOT LAYOUT COMPONENT
 * This is the main layout wrapper for the entire application
 * All pages will inherit this layout
 *
 * Future CMS Integration:
 * - Site config loaded from CMS API
 * - Metadata dynamically generated
 * - Analytics/tracking codes configured via CMS
 * - Global announcements/banners from CMS
 */
export default function RootLayout({
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
                // TODO: Add actual coordinates from CMS
                latitude: '51.4634',
                longitude: '-0.0091',
              },
              // Future: Add service times from CMS
              // event: [{
              //   "@type": "Event",
              //   "name": "Sunday Mass",
              //   "startDate": "2024-01-07T09:00",
              //   "endDate": "2024-01-07T10:00",
              // }],
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
        {/* Future: Add global providers here (e.g., theme, auth, CMS context) */}
        {children}

        {/* Future: Analytics will be added here from CMS config */}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
