// CMS
import {
  getPrayerCategories,
  getPrayersByCategory,
  getPrayerCategoryImage,
  getParishName,
} from "@/lib/cms/cms-content";

// Client Component
import CategoryPageClient from "./CategoryPageClient";

// Components (for not found pages)
import { PageLayout } from "@/components/layout";
import {
  Button,
  Heading,
  Text,
  Section,
  Container,
} from "@/components/ui";
import Link from "next/link";
import { ArrowLeftIcon as ArrowLeft } from "@heroicons/react/24/solid";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getPrayerCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;

  const categories = getPrayerCategories();
  const category = categories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return (
      <PageLayout
        title="Category Not Found"
        description="The requested prayer category could not be found."
        background="slate"
      >
        <Section background="slate" className="py-32">
          <Container>
            <div className="text-center">
              <Heading level="h1" color="white" className="mb-4">
                Category Not Found
              </Heading>
              <Text size="lg" color="gray-100" className="mb-8">
                The prayer category you&apos;re looking for doesn&apos;t exist or has no prayers yet.
              </Text>
              <Link href="/prayer-hub">
                <Button
                  variant="primary"
                  className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Prayer Hub
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </PageLayout>
    );
  }

  const prayers = getPrayersByCategory(category.id);
  const parishName = getParishName();
  const categoryImage = getPrayerCategoryImage(categorySlug);

  return (
    <CategoryPageClient
      category={category}
      prayers={prayers}
      parishName={parishName}
      categoryImage={categoryImage}
    />
  );
}
