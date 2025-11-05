"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
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
  items?: GalleryItem[];
}

const Gallery6Homepage = ({
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
    <section className="bg-transparent">
      <div className="bg-transparent">
        <div className="mb-8 flex items-center justify-end gap-2">
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
      <div className="bg-transparent">
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
                    <div className="aspect-3/2 flex overflow-clip">
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
                    className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium text-primary-950 md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl"
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-muted-foreground text-primary-400 mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9"
                  >
                    {item.summary}
                  </div>
                  <div
                    className="flex items-center text-sm text-primary-700 font-medium hover:text-primary-600"
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
