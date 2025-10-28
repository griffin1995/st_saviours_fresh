// CMS
import {
  getPrayerRequestCategories,
  getPrayerHubPageImage,
  getParishName,
  getContactInfo,
} from "@/lib/cms/cms-content";

// Client Component
import PrayerRequestPageClient from "./PrayerRequestPageClient";

export default function PrayerRequestPage() {
  const categories = getPrayerRequestCategories();
  const parishName = getParishName();
  const contactInfo = getContactInfo();
  const heroImage = getPrayerHubPageImage();

  return (
    <PrayerRequestPageClient
      categories={categories}
      parishName={parishName}
      contactInfo={contactInfo}
      {...(heroImage && { heroImage })}
    />
  );
}
