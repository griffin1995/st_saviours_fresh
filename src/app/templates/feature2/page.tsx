import { FeatureTabs } from '@/components/templates-that-need-proper-integration/feature-tabs';
import { Cog, Lightbulb, ListChecks } from "lucide-react";

export default function FeatureTabsPage() {
  return (
    <FeatureTabs
      features={[
        {
          id: "feature-1",
          heading: "Learn",
          icon: <Lightbulb className="size-4" />,
          description: "Begin your journey of faith through Bible study, catechesis, and discovering God's word in our welcoming parish community.",
          image: "/images/open-bible-rosary.jpg",
          url: "#",
          isDefault: true,
        },
        {
          id: "feature-2",
          icon: <ListChecks className="size-4" />,
          heading: "Grow",
          description: "Deepen your relationship with Christ through prayer, the sacraments, and active participation in parish life and ministries.",
          image: "/images/inside-church-aisle.jpg",
          url: "#",
          isDefault: false,
        },
        {
          id: "feature-3",
          icon: <Cog className="size-4" />,
          heading: "Serve",
          description: "Live out your faith by serving others in our community through charitable works, volunteering, and sharing God's love.",
          image: "/images/hands-up-praising.jpg",
          url: "#",
          isDefault: false,
        },
      ]}
    />
  );
}