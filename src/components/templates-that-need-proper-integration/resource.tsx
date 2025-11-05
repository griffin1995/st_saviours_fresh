import { Book, Download, Share2 } from "lucide-react";

import { Button } from '@/components/ui/Button';

const Resource = () => {
  return (
    <section className="py-32">
      <div className="container grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="order-last md:order-none md:col-span-4 lg:col-span-3">
          <aside className="flex flex-col gap-2">
            <div className="border-border bg-card mb-6 overflow-hidden  border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3
                  className="flex items-center text-sm font-semibold"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Book className="text-muted-foreground mr-2.5 size-3.5" />
                  Parish Guide
                </h3>
              </div>
              <div className="p-5">
                <div className="text-foreground gap-4 text-lg font-semibold leading-snug">
                  <p>A Guide to Growing in Faith at St Saviour&apos;s Parish</p>
                </div>
              </div>
            </div>

            <div className="border-border bg-card mb-6 overflow-hidden  border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3
                  className="flex items-center text-sm font-semibold"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Download className="text-muted-foreground mr-2.5 size-3.5" />
                  Download Options
                </h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Take this guide with you for personal prayer and reflection or share with family and friends.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Button
                      className="w-full justify-between"
                      variant="primary"
                    >
                      PDF Format
                      <Download className="ml-2 size-4" />
                    </Button>
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                    >
                      Print Version
                      <Download className="ml-2 size-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mt-4 text-center text-xs">
                    Read time: 7 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="border-border bg-card mb-6 overflow-hidden  border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3
                  className="flex items-center text-sm font-semibold"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#0f172a",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Share2 className="text-muted-foreground mr-2.5 size-3.5" />
                  Share this guide
                </h3>
              </div>
              <div className="p-5">
                <ul className="flex items-center gap-2">
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on Instagram"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg"
                        alt="Instagram"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg"
                        alt="LinkedIn"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on Product Hunt"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg"
                        alt="Product Hunt"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg"
                        alt="Twitter"
                        className="size-5"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <div className="md:col-span-7 md:col-start-5 lg:col-start-6">
          <article className="prose dark:prose-invert prose-sm">
            <h1
              style={{
                fontSize: "clamp(1.875rem, 4vw, 3.75rem)",
                fontWeight: "700",
                color: "#0f172a",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.025em",
                lineHeight: "1.1",
                marginBottom: "1rem"
              }}
            >
              A Guide to Growing in Faith at St Saviour&apos;s Parish
            </h1>
            <p>
              Welcome to St Saviour&apos;s Catholic Church, where faith comes alive and
              community flourishes. Whether you&apos;re new to our parish or have been
              part of our family for years, this guide will help you discover meaningful
              ways to deepen your relationship with God and connect with our vibrant community.
            </p>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "600",
                color: "#0f172a",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.025em",
                lineHeight: "2.25rem",
                marginTop: "2rem",
                marginBottom: "1rem"
              }}
            >
              Beginning Your Faith Journey
            </h2>
            <p>
              Faith is a journey, not a destination. At St Saviour&apos;s, we believe that{" "}
              <a href="/sacraments">every person is called to grow</a> in their
              relationship with Christ, regardless of where they are starting from.
            </p>
            <blockquote>
              &ldquo;Come to me, all you who are weary and burdened, and I will give you rest.&rdquo; - Matthew 11:28
            </blockquote>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#0f172a",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.025em",
                lineHeight: "2rem",
                marginTop: "1.5rem",
                marginBottom: "0.75rem"
              }}
            >
              Ways to Grow in Faith
            </h3>
            <p>
              Our parish offers numerous opportunities for spiritual growth and formation.
              Here are some key areas to consider:
            </p>
            <ul>
              <li>Regular Mass attendance and active participation</li>
              <li>Personal prayer and scripture reading</li>
              <li>Sacramental life including Confession and Adoration</li>
              <li>Bible study groups and faith formation classes</li>
              <li>Service to others through parish ministries</li>
            </ul>
            <p>
              Each of these practices helps us draw closer to God and strengthens our
              faith community. Remember, spiritual growth takes time and patience with
              yourself as you develop these habits.
            </p>
            <h3>Joining Parish Ministries</h3>
            <p>
              One of the most rewarding ways to grow in faith is through active service
              in our parish ministries. We have opportunities for people of all ages
              and interests, from liturgical roles to community outreach programs.
            </p>
            <p>
              Whether you feel called to serve as a reader at Mass, join our choir,
              help with youth ministry, or participate in our St Vincent de Paul Society,
              there&apos;s a place for you to use your gifts in service of others.
            </p>
            <h3>Building Community Connections</h3>
            <p>
              Faith grows stronger when shared with others. Our parish offers various
              ways to connect with fellow parishioners and build lasting friendships
              centered on our shared love of Christ.
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Ministry Area</th>
                    <th>Meeting Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bible Study Group</td>
                    <td>Weekly</td>
                  </tr>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td>St Vincent de Paul</td>
                    <td>Bi-weekly</td>
                  </tr>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td>Parish Choir</td>
                    <td>Weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Remember that growing in faith is a lifelong journey. Be patient with
              yourself, stay open to God&apos;s grace, and don&apos;t hesitate to reach out to
              Fr. Johnson or any of our parish team if you have questions or need guidance.
            </p>
            <p>
              We&apos;re here to support you every step of the way as you discover the joy
              and peace that comes from a deepening relationship with Christ in our
              parish community.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export { Resource };
