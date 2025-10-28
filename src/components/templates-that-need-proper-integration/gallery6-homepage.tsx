"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from '@/components/ui/Button';
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6Homepage = ({
  heading = "Church Groups",
  demoUrl = "/parish-groups",
  items = [
    {
      id: "item-1",
      title: "St Bakhita Group",
      summary:
        "A welcoming community for migrants and all parishioners, rooted in prayer and fellowship. Monthly meetings after Mass with Scripture readings, reflection, and intercessions.",
      url: "/parish-groups",
      image: "/images/hands-up-praising.jpg",
    },
    {
      id: "item-2",
      title: "Parish Choir",
      summary:
        "Enhance our liturgical celebrations through sacred music. From traditional hymns to contemporary worship, our choir welcomes singers of all abilities.",
      url: "/parish-groups",
      image: "/images/open-bible-rosary.jpg",
    },
    {
      id: "item-3",
      title: "SVP - St Vincent de Paul Society",
      summary:
        "Living out the Gospel through practical charity. Providing food assistance, clothing, furniture, and friendship to families facing hardship in our local community.",
      url: "/parish-groups",
      image: "/images/praising-black-white-hands-up.jpg",
    },
    {
      id: "item-4",
      title: "Legion of Mary",
      summary:
        "Dedicated to prayer, evangelisation, and service under the patronage of Our Lady. Members engage in parish visiting, prayer groups, and outreach ministries.",
      url: "/parish-groups",
      image: "/images/hands-up-praising.jpg",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2
              className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6"
              style={{
                fontSize: "2.25rem",
                fontWeight: "600",
                color: "#0f172a",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.025em",
                lineHeight: "2.5rem",
                marginBottom: "1.5rem"
              }}
            >
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "#0f172a",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                textDecoration: "none"
              }}
            >
              View All Groups
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4">
            {items.map((item, index) => (
              <CarouselItem key={item.id} className={`${index === 0 ? 'ml-0' : 'ml-8'} md:max-w-[452px]`}>
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-3/2 flex overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      color: "#0f172a",
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      lineHeight: "2rem",
                      paddingTop: "1rem",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "400",
                      color: "#64748b",
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      lineHeight: "1.5rem",
                      marginBottom: "2rem"
                    }}
                  >
                    {item.summary}
                  </div>
                  <div
                    className="flex items-center text-sm"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#0f172a",
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6Homepage };
