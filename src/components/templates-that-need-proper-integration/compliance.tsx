import { Badge } from '@/components/ui/Badge';

const Compliance = () => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="bg-background gap-1.5">
              <span className="size-1.5 rounded-full bg-green-500" />
              Safeguarding
            </Badge>
            <h1
              className="text-balance font-medium"
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3rem)",
                fontWeight: "500",
                color: "#0f172a",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.025em",
                lineHeight: "1.1",
              }}
            >
              Parish Safeguarding & Child Protection
            </h1>
            <p
              className="text-muted-foreground text-lg"
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
                color: "#64748b",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                lineHeight: "1.75rem"
              }}
            >
              Creating a safe environment for all is our absolute priority. Our comprehensive safeguarding policies and trained volunteers ensure that children, young people, and vulnerable adults are protected and can flourish in our parish community.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
                alt="GDPR"
                className="h-22 opacity-50 grayscale md:h-28 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
                alt="ISO-27001"
                className="h-22 opacity-60 grayscale md:h-28 dark:invert"
              />
            </div>
          </div>
          <div className="border-border bg-background rounded-2xl border">
            <div className="border-border relative overflow-hidden border-b p-6 lg:px-8 lg:py-11">
              <div>
                <h2
                  className="font-medium"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.025em",
                    lineHeight: "2rem"
                  }}
                >
                  DBS Checks & Training
                </h2>
                <p
                  className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    color: "#64748b",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    lineHeight: "1.25rem",
                    marginTop: "0.5rem"
                  }}
                >
                  All volunteers and staff undergo enhanced DBS checks and receive comprehensive safeguarding training to ensure the highest standards of protection.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO-27001"
                className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="relative overflow-hidden p-6 lg:px-8 lg:py-11">
              <div>
                <h2
                  className="text-xl font-medium lg:text-2xl"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.025em",
                    lineHeight: "2rem"
                  }}
                >
                  Safe Spaces & Procedures
                </h2>
                <p
                  className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    color: "#64748b",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    lineHeight: "1.25rem",
                    marginTop: "0.5rem"
                  }}
                >
                  Clear policies and procedures ensure all activities are conducted in safe, supervised environments with appropriate oversight and accountability.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg"
                alt="ISO-27001"
                className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="border-border relative overflow-hidden border-t p-6 lg:px-8 lg:py-11">
              <div>
                <h2
                  className="text-xl font-medium lg:text-2xl"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.025em",
                    lineHeight: "2rem"
                  }}
                >
                  Reporting & Support
                </h2>
                <p
                  className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    color: "#64748b",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    lineHeight: "1.25rem",
                    marginTop: "0.5rem"
                  }}
                >
                  Clear reporting channels and pastoral support are available for anyone with concerns, ensuring transparency and appropriate response to all safeguarding matters.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg"
                alt="ISO-27001"
                className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance };
