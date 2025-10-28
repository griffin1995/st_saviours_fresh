interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureProps {
  title: string;
  description: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
}

const Feature = ({
  title = "Our Parish Ministries",
  description = "Discover the various ways to grow in faith and serve our community through these meaningful ministries and programs at St Saviour's Catholic Church.",
  feature1 = {
    title: "Liturgical Ministry",
    description:
      "Serve at the heart of our worship through roles as readers, altar servers, extraordinary ministers of Holy Communion, and welcomers.",
    image: "/images/inside-church-aisle.jpg",
  },
  feature2 = {
    title: "Sacred Music Ministry",
    description:
      "Enhance our liturgical celebrations through beautiful sacred music, from traditional hymns to contemporary worship songs.",
    image: "/images/open-bible-rosary.jpg",
  },
  feature3 = {
    title: "Youth & Family Ministry",
    description:
      "Building faith and friendships among young people through social events, faith discussions, retreats, and service projects.",
    image: "/images/hands-up-praising.jpg",
  },
  feature4 = {
    title: "Outreach & Service",
    description:
      "Living out the Gospel through practical charity, providing assistance to families facing hardship in our local community.",
    image: "/images/praising-black-white-hands-up.jpg",
  },
}: FeatureProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1
            className="text-center font-semibold"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: "600",
              color: "#0f172a",
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.025em",
              lineHeight: "1.1",
              textAlign: "center",
              maxWidth: "48rem"
            }}
          >
            {title}
          </h1>
          <p className="text-muted-foreground text-center text-lg font-medium md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                <h2
                  className="text-xl font-semibold"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.025em",
                    lineHeight: "1.75rem"
                  }}
                >
                  {feature1.title}
                </h2>
                <p className="text-muted-foreground">{feature1.description}</p>
                <img
                  src={feature1.image}
                  alt={feature1.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold" style={{fontSize: "1.25rem", fontWeight: "600", color: "#0f172a", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", letterSpacing: "-0.025em", lineHeight: "1.75rem"}}>{feature2.title}</h2>
                <p className="text-muted-foreground">{feature2.description}</p>
                <img
                  src={feature2.image}
                  alt={feature2.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold" style={{fontSize: "1.25rem", fontWeight: "600", color: "#0f172a", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", letterSpacing: "-0.025em", lineHeight: "1.75rem"}}>{feature3.title}</h2>
                <p className="text-muted-foreground">{feature3.description}</p>
                <img
                  src={feature3.image}
                  alt={feature3.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold" style={{fontSize: "1.25rem", fontWeight: "600", color: "#0f172a", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", letterSpacing: "-0.025em", lineHeight: "1.75rem"}}>{feature4.title}</h2>
                <p className="text-muted-foreground">{feature4.description}</p>
                <img
                  src={feature4.image}
                  alt={feature4.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature };
