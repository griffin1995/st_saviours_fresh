
import { Card, CardContent } from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "1895",
    title: "Foundation of St Saviour's Parish",
    content:
      "St Saviour's Catholic Church was established to serve the growing Catholic community in Lewisham. The first Mass was celebrated in a small wooden building, marking the beginning of over a century of faith and service in our local area.",
  },
  {
    date: "1923-1925",
    title: "Construction of the Current Church",
    content:
      "Through the generous donations of parishioners and the dedication of Fr. Patrick O'Sullivan, construction began on our beautiful brick church building. The new church was consecrated in 1925 and featured stunning stained glass windows that remain a centerpiece of our worship space today.",
  },
  {
    date: "1962-1965",
    title: "Vatican II Renewal",
    content:
      "Following the Second Vatican Council, St Saviour's underwent significant liturgical and pastoral renewal. The altar was moved closer to the congregation, vernacular language was introduced in the Mass, and new ministries were established to encourage greater lay participation in parish life.",
  },
  {
    date: "2010-2015",
    title: "Major Restoration and Community Expansion",
    content:
      "A comprehensive restoration project restored the church's original beauty while adding modern accessibility features. The parish hall was renovated, and new community programs were launched, including expanded youth ministry and outreach services that continue to serve our neighbors today.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1
          className="text-foreground mb-10 text-center font-bold tracking-tighter"
          style={{
            fontSize: "clamp(1.875rem, 4vw, 3.75rem)",
            fontWeight: "700",
            color: "#0f172a",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.05em",
            lineHeight: "1",
            textAlign: "center",
            marginBottom: "2.5rem"
          }}
        >
          The History of St Saviour&apos;s Parish
        </h1>
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-muted absolute left-2 top-4"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
              <h4
                className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.75rem",
                  padding: "0.5rem 0"
                }}
              >
                {entry.title}
              </h4>

              <h5
                className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute"
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#64748b",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.5rem"
                }}
              >
                {entry.date}
              </h5>

              <Card className="my-5 border-none shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <div
                    className="prose dark:prose-invert text-foreground"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline };
