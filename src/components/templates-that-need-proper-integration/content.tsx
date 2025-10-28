"use client";

import {
  AlignLeft,
  GalleryVerticalEnd,
  Lightbulb,
  ListChecks,
  RefreshCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from '@/components/ui/Badge';

const Content = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <section className="py-32">
      <div className="container max-w-7xl">
        <div className="relative grid-cols-3 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Parish Life</Badge>
              <h1
                className="mt-3 text-3xl font-extrabold"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: "800",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.1",
                  marginTop: "0.75rem"
                }}
              >
                The Sacraments of Initiation
              </h1>
              <p
                className="text-muted-foreground mt-2 text-lg"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "400",
                  color: "#64748b",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem",
                  marginTop: "0.5rem"
                }}
              >
                The three Sacraments of Initiation - Baptism, Confirmation, and First Holy Communion - mark the beginning of a lifelong journey of faith. These sacred moments welcome us into the Catholic community and strengthen our relationship with God.
              </p>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-md object-cover"
              />
            </div>
            <section
              id="section1"
              ref={(ref) => addSectionRef("section1", ref)}
              className="prose dark:prose-invert mb-8"
            >
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.025em",
                  lineHeight: "2.25rem",
                  marginBottom: "1rem"
                }}
              >
                The Sacramental Journey
              </h2>
              <div className="ml-3.5">
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <RefreshCcw className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3
                      className="mt-2 text-base font-semibold"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#0f172a",
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        letterSpacing: "-0.025em",
                        lineHeight: "1.5rem",
                        marginTop: "0.5rem"
                      }}
                    >
                      Baptism - Born into Faith
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "400",
                        color: "#374151",
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        lineHeight: "1.75rem"
                      }}
                    >
                      Through the waters of Baptism, we are cleansed of original sin and welcomed into God's family. This first sacrament marks the beginning of our Christian life and our membership in the Church.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <GalleryVerticalEnd className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3
                      className="mt-2 text-base font-semibold"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#0f172a",
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        letterSpacing: "-0.025em",
                        lineHeight: "1.5rem",
                        marginTop: "0.5rem"
                      }}
                    >
                      First Holy Communion - Receiving Jesus
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "400",
                        color: "#374151",
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        lineHeight: "1.75rem"
                      }}
                    >
                      In First Holy Communion, we receive the Body and Blood of Christ for the first time. This sacred moment deepens our relationship with Jesus and strengthens our faith through the Eucharist.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <ListChecks className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3
                      className="mt-2 text-base font-semibold"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#0f172a",
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        letterSpacing: "-0.025em",
                        lineHeight: "1.5rem",
                        marginTop: "0.5rem"
                      }}
                    >
                      Confirmation - Sealed with the Spirit
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "400",
                        color: "#374151",
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        lineHeight: "1.75rem"
                      }}
                    >
                      Through Confirmation, we are sealed with the gifts of the Holy Spirit and strengthened for our mission as disciples. This sacrament completes our initiation and calls us to share our faith with others.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section2"
              ref={(ref) => addSectionRef("section2", ref)}
              className="prose dark:prose-invert mb-8"
            >
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.025em",
                  lineHeight: "2.25rem",
                  marginBottom: "1rem"
                }}
              >
                Preparation & Formation
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#374151",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem",
                  marginBottom: "1rem"
                }}
              >
                Preparation for each sacrament involves catechesis, prayer, and formation. Our parish offers comprehensive programs to help candidates understand the significance of each sacrament and prepare their hearts to receive God's grace.
              </p>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Sacrament</th>
                      <th>Typical Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Baptism</td>
                      <td>Infancy or any age</td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                      <td>First Holy Communion</td>
                      <td>Age 7-8</td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                      <td>Confirmation</td>
                      <td>Age 14-16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#374151",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem",
                  marginBottom: "1rem"
                }}
              >
                Each sacrament is a gift from God that transforms our lives and strengthens our faith. Through these sacred moments, we grow closer to Christ and are empowered to live as faithful disciples in our daily lives.
              </p>
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Parish Sacramental Programs</AlertTitle>
                <AlertDescription>
                  Contact the parish office to learn more about our sacramental preparation programs and upcoming celebration dates.
                </AlertDescription>
              </Alert>
            </section>

            <section
              id="section3"
              ref={(ref) => addSectionRef("section3", ref)}
              className="prose dark:prose-invert mb-8"
            >
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.025em",
                  lineHeight: "2.25rem",
                  marginBottom: "1rem"
                }}
              >
                Living the Sacramental Life
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#374151",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem",
                  marginBottom: "1rem"
                }}
              >
                The sacraments of initiation mark the beginning of our journey, but they call us to{" "}
                <a href="#">live faithfully</a> every day, sharing God's love with others through our words and actions.
              </p>
              <blockquote>
                &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo; - Matthew 28:19
              </blockquote>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#374151",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem",
                  marginBottom: "1rem"
                }}
              >
                As Catholics, we are called to live out our sacramental commitment through:
              </p>
              <ul>
                <li>Regular participation in Mass and the Eucharist</li>
                <li>Daily prayer and spiritual reflection</li>
                <li>Acts of service and charity in our community</li>
              </ul>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#374151",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem",
                  marginBottom: "1rem"
                }}
              >
                Through these practices, we continue to grow in our faith and share the joy of the Gospel with others, living as witnesses to the love of Christ in our world.
              </p>
            </section>
          </div>
          <div className="sticky top-8 hidden h-fit lg:block">
            <span className="flex items-center gap-2 text-sm">
              <AlignLeft className="h-4 w-4" />
              On this page
            </span>
            <nav className="mt-2 text-sm">
              <ul>
                <li>
                  <a
                    href="#section1"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section1"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    The Sacramental Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section2"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Preparation & Formation
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section3"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Living the Sacramental Life
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Content };
