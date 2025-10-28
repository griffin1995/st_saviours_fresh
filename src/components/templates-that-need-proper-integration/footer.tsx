import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/images/st-saviours-logo.svg",
    alt: "St Saviour's Catholic Church",
    title: "St Saviour's",
    url: "/",
  },
  tagline = "A welcoming Catholic community in Lewisham.",
  menuItems = [
    {
      title: "Parish",
      links: [
        { text: "About Us", url: "/about-us" },
        { text: "History", url: "/about-us#history" },
        { text: "Parish Team", url: "/about-us#team" },
        { text: "Contact", url: "/contact-us" },
        { text: "Directions", url: "/contact-us#directions" },
        { text: "Parish Newsletter", url: "/news" },
      ],
    },
    {
      title: "Worship",
      links: [
        { text: "Mass Times", url: "/mass" },
        { text: "Sacraments", url: "/sacraments" },
        { text: "Confessions", url: "/mass#confessions" },
        { text: "Special Liturgies", url: "/mass#special" },
        { text: "Music Ministry", url: "/ministries#music" },
        { text: "Children's Liturgy", url: "/ministries#children" },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "Parish Groups", url: "/groups" },
        { text: "Ministries", url: "/ministries" },
        { text: "Events", url: "/events" },
        { text: "Youth Ministry", url: "/ministries#youth" },
        { text: "Outreach", url: "/ministries#outreach" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Prayer Hub", url: "/prayer-hub" },
        { text: "Learning Hub", url: "/learning-hub" },
        { text: "Parish Blog", url: "/news" },
        { text: "Safeguarding", url: "/safeguarding" },
      ],
    },
  ],
  copyright = "© 2024 St Saviour's Catholic Church, Lewisham. All rights reserved.",
  bottomLinks = [
    { text: "Safeguarding Policy", url: "/safeguarding" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: FooterProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url={logo.url}>
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                  <LogoText
                    className="text-xl"
                  >
                    {logo.title}
                  </LogoText>
                </Logo>
              </div>
              <p
                className="mt-4 font-bold"
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.5rem",
                  marginTop: "1rem"
                }}
              >
                {tagline}
              </p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3
                  className="mb-4 font-bold"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.025em",
                    lineHeight: "1.75rem",
                    marginBottom: "1rem"
                  }}
                >
                  {section.title}
                </h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a
                        href={link.url}
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#64748b",
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                          lineHeight: "1.25rem",
                          textDecoration: "none"
                        }}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#64748b",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                lineHeight: "1.25rem"
              }}
            >
              {copyright}
            </p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a
                    href={link.url}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#64748b",
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      lineHeight: "1.25rem",
                      textDecoration: "underline"
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
