import type { Metadata } from 'next';
import { Noto_Serif, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './template-styles.css'; // Template-specific CSS only

// Import the same fonts to match the root layout and prevent hydration mismatch
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

export const metadata: Metadata = {
  title: 'Template Showcase',
  description: 'Preview of UI component templates',
};

/**
 * ISOLATED TEMPLATE LAYOUT
 * This layout overrides the root layout for all template pages
 * It loads only the template-specific CSS and matches the root layout structure
 * to prevent hydration mismatches while keeping templates isolated
 */
export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${notoSerif.variable}
          ${sourceSerif4.variable}
          ${jetbrainsMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}