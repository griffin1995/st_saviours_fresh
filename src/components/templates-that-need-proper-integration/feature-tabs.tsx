import { Cog, Lightbulb, ListChecks } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Feature {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  image: string;
  url: string;
  isDefault: boolean;
}

interface FeatureTabsProps {
  features: Feature[];
}

const FeatureTabs = ({
  features = [
    {
      id: "feature-1",
      heading: "Learn",
      icon: <Lightbulb className="size-4" />,

      description:
        "Begin your journey of faith through Bible study, catechesis, and discovering God's word in our welcoming parish community.",
      image: "/images/open-bible-rosary.jpg",
      url: "#",
      isDefault: true,
    },
    {
      id: "feature-2",
      icon: <ListChecks className="size-4" />,

      heading: "Grow",
      description:
        "Deepen your relationship with Christ through prayer, the sacraments, and active participation in parish life and ministries.",
      image: "/images/inside-church-aisle.jpg",
      url: "#",
      isDefault: false,
    },
    {
      id: "feature-3",
      icon: <Cog className="size-4" />,
      heading: "Serve",
      description:
        "Live out your faith by serving others in our community through charitable works, volunteering, and sharing God's love.",
      image: "/images/hands-up-praising.jpg",
      url: "#",
      isDefault: false,
    },
  ],
}: FeatureTabsProps) => {
  const defaultTab =
    features.find((tab) => tab.isDefault)?.id || (features[0]?.id ?? "");

  return (
    <section className="py-32">
      <div className="container">
        <Tabs defaultValue={defaultTab} className="p-0">
          <TabsList className="bg-background flex h-auto w-full flex-col gap-2 p-0 md:flex-row">
            {features.map((tab) => {
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`hover:border-muted data-[state=active]:bg-muted group flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left shadow-none transition-opacity duration-200 hover:opacity-80 data-[state=active]:shadow-none ${
                    tab.isDefault ? "" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                    {tab.icon && (
                      <span className="bg-muted text-muted-foreground group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground flex size-8 items-center justify-center rounded-full transition-opacity duration-200 lg:size-10">
                        {tab.icon}
                      </span>
                    )}
                    <p className="text-lg font-semibold transition-opacity duration-200 md:text-2xl lg:text-xl">
                      {tab.heading}
                    </p>
                  </div>
                  <p className="text-muted-foreground font-normal transition-opacity duration-200 md:block">
                    {tab.description}
                  </p>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {features.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="transition-opacity duration-300"
            >
              <img
                src={tab.image}
                alt={tab.heading}
                className="aspect-video w-full rounded-md object-cover transition-opacity duration-300"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { FeatureTabs };
