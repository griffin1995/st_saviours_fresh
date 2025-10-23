import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

/**
 * PUBLIC PAGES LAYOUT
 *
 * This layout wraps ONLY public-facing pages (About Us, Mass Times, Contact, etc.)
 * Does NOT wrap admin pages, error pages, or other route groups
 *
 * Best Practice: Route group layouts for shared UI
 * - Root layout (app/layout.tsx) = HTML, fonts, metadata
 * - Public layout (app/(public)/layout.tsx) = Navigation + Footer
 * - Admin layout (app/(admin)/layout.tsx) = Different UI
 *
 * Server Component - optimal Next.js 15 App Router pattern
 */

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Navigation - Client Component */}
      <Navigation />

      {/* Page Content - Each page controls its own Hero if needed */}
      {children}

      {/* Footer - Server Component */}
      <Footer />
    </>
  );
}
