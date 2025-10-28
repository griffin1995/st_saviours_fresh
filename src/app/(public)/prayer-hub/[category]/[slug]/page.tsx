
// CMS
import {
  getPrayerCategories,
  getPrayersByCategory,
  getPrayerBySlug,
  getRelatedPrayers,
  getParishName,
} from "@/lib/cms/cms-content";

// Client Component
import PrayerPageClient from "./PrayerPageClient";

interface PrayerPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getPrayerCategories();
  const paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const prayers = getPrayersByCategory(category.id);
    for (const prayer of prayers) {
      paths.push({
        category: category.slug,
        slug: prayer.slug,
      });
    }
  }

  return paths;
}

export default async function PrayerPage({ params }: PrayerPageProps) {
  const { category: categorySlug, slug: prayerSlug } = await params;

  const categories = getPrayerCategories();
  const category = categories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return null;
  }

  const prayer = getPrayerBySlug(prayerSlug);

  if (!prayer || prayer.categoryId !== category.id) {
    return null;
  }

  const relatedPrayers = getRelatedPrayers(prayer.id);
  const parishName = getParishName();

  return (
    <PrayerPageClient
      prayer={prayer}
      category={category}
      relatedPrayers={relatedPrayers}
      parishName={parishName}
    />
  );
}
