import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const templates = [
  {
    name: 'Timeline',
    description: 'A vertical timeline component for displaying chronological events',
    path: '/templates/timeline',
  },
  {
    name: 'Team',
    description: 'A team member grid layout with avatars and roles',
    path: '/templates/team',
  },
  {
    name: 'Resource',
    description: 'A resource/article layout with sidebar and sharing options',
    path: '/templates/resource',
  },
  {
    name: 'Gallery',
    description: 'An image gallery with carousel navigation',
    path: '/templates/gallery',
  },
  {
    name: 'Feature1',
    description: 'A feature grid layout with images and descriptions',
    path: '/templates/feature1',
  },
  {
    name: 'Feature2',
    description: 'A tabbed features component with icons and descriptions',
    path: '/templates/feature2',
  },
  {
    name: 'FAQ',
    description: 'An accordion-style FAQ section',
    path: '/templates/faq',
  },
  {
    name: 'Footer',
    description: 'A comprehensive footer with multiple column layout',
    path: '/templates/footer',
  },
  {
    name: 'Compliance',
    description: 'A compliance and legal information layout component',
    path: '/templates/compliance',
  },
  {
    name: 'Content',
    description: 'A content showcase layout with rich formatting options',
    path: '/templates/content',
  },
];

export default function TemplatesIndexPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Template Showcase</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse and preview all available component templates. Click on any template to see it in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.name} className="border  p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="mb-4 text-sm">{template.description}</p>
              <Link href={template.path}>
                <Button className="w-full">
                  View Template
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/">
            <Button variant="outline">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}