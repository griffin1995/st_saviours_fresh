import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Search
} from 'lucide-react';

/**
 * NEWS PAGE - St Saviour's Catholic Church
 *
 * Server Component - optimal Next.js 15 App Router pattern
 * Following homepage design system:
 * - White background with block-style magazine layout
 * - Consistent spacing, typography, and color scheme
 * - Card-based news layout matching homepage community news
 * - Gold accent colors and slate-900 text
 */

export const metadata: Metadata = {
  title: "Parish News | St Saviour's Catholic Church",
  description: "Stay updated with the latest news and events from St Saviour's Catholic Church in Lewisham. Read about parish activities, community events, and spiritual life.",
  keywords: "parish news, St Saviour's Church, Lewisham, events, community news, Catholic news, parish updates"
};

export default function NewsPage() {
  // Mock news data - in a real app this would come from a CMS or API
  const featuredNews = [
    {
      id: 1,
      title: "Jubilee 2025: Our Journey as Pilgrims of Hope",
      excerpt: "St Saviour's has been designated as a Jubilee Sanctuary Church for 2025. Join us as we embark on this extraordinary Holy Year journey together.",
      content: "Pope Francis has proclaimed 2025 as a Jubilee Year of Hope, and we are blessed that St Saviour's has been designated as one of the official Jubilee Sanctuary Churches...",
      image: "/images/hands-up-praising.jpg",
      category: "Jubilee 2025",
      date: "2025-01-20",
      readTime: "8 min read",
      featured: true,
      tags: ["Jubilee", "Pope Francis", "Hope", "Sanctuary"]
    },
    {
      id: 2,
      title: "First Holy Communions 2025",
      excerpt: "Congratulations to all the children who received their First Holy Communion this year. It was a beautiful celebration of faith and community.",
      content: "On a glorious Sunday morning, our church was filled with joy as twelve children from our parish family received their First Holy Communion...",
      image: "/images/praising-black-white-hands-up.jpg",
      category: "Sacraments",
      date: "2025-01-15",
      readTime: "5 min read",
      featured: false,
      tags: ["First Communion", "Sacraments", "Children", "Faith Formation"]
    },
    {
      id: 3,
      title: "Parish Lenten Programme Begins",
      excerpt: "Join us for our Lenten journey with special services, stations of the cross, and opportunities for prayer and reflection throughout the season.",
      content: "As we enter the holy season of Lent, St Saviour's invites you to join our comprehensive programme of prayer, penance, and preparation...",
      image: "/images/inside-church-aisle.jpg",
      category: "Liturgical Season",
      date: "2025-01-10",
      readTime: "7 min read",
      featured: false,
      tags: ["Lent", "Prayer", "Stations of the Cross", "Spirituality"]
    }
  ];

  const allNews = [
    ...featuredNews,
    {
      id: 4,
      title: "St Vincent de Paul Society Update",
      excerpt: "Our SVP continues to serve families in need throughout Lewisham. Learn how you can support this vital ministry in our community.",
      content: "The St Vincent de Paul Society at St Saviour's has been working tirelessly to support local families facing hardship...",
      image: "/images/open-bible-rosary.jpg",
      category: "Parish Groups",
      date: "2025-01-05",
      readTime: "6 min read",
      featured: false,
      tags: ["SVP", "Charity", "Community Service", "Outreach"]
    },
    {
      id: 5,
      title: "New Parish Choir Members Welcomed",
      excerpt: "Our parish choir continues to grow! We welcome new members who bring fresh voices and enthusiasm to our liturgical celebrations.",
      content: "Music has always been an integral part of worship at St Saviour's, and we're delighted to welcome five new members to our parish choir...",
      image: "/images/mid-mass-priest-and-community.jpg",
      category: "Parish Life",
      date: "2024-12-28",
      readTime: "4 min read",
      featured: false,
      tags: ["Choir", "Music", "Liturgy", "Community"]
    },
    {
      id: 6,
      title: "Christmas Carol Service Success",
      excerpt: "Thank you to everyone who joined us for our annual Christmas Carol Service. The church was filled with beautiful music and Christmas spirit.",
      content: "Our annual Christmas Carol Service was a wonderful celebration that brought together parishioners and visitors from across Lewisham...",
      image: "/images/outside-church-flowers-foreground.jpg",
      category: "Events",
      date: "2024-12-20",
      readTime: "5 min read",
      featured: false,
      tags: ["Christmas", "Carols", "Community", "Celebration"]
    },
    {
      id: 7,
      title: "Weekly Parish Newsletter - 10 November 2025",
      excerpt: "This week's newsletter features Christ the King celebrations, Advent wreath preparation workshops, Christmas Mass schedule, and parish Christmas bazaar planning.",
      content: "Welcome to this week's parish newsletter. As we approach the end of the liturgical year with the Solemnity of Christ the King, we begin preparations for Advent. Details of our Advent wreath making workshop, Christmas Mass schedules, and the annual parish bazaar included...",
      image: "/images/hands-up-praising.jpg",
      category: "Newsletter",
      date: "2025-11-10",
      readTime: "6 min read",
      featured: false,
      tags: ["Newsletter", "November", "Weekly", "Advent"]
    },
    {
      id: 8,
      title: "Weekly Parish Newsletter - 3 November 2025",
      excerpt: "This week's parish news includes remembering our faithful departed, November memorial Masses, cemetery visits, and prayers for holy souls.",
      content: "In this week's newsletter, we continue to remember all the faithful departed during this special month of November. Mass intentions for loved ones, cemetery blessing schedule, and opportunities for prayer and reflection included...",
      image: "/images/mid-mass-priest-and-community.jpg",
      category: "Newsletter",
      date: "2025-11-03",
      readTime: "6 min read",
      featured: false,
      tags: ["Newsletter", "November", "Weekly", "Memorial"]
    },
    {
      id: 9,
      title: "Weekly Parish Newsletter - 27 October 2025",
      excerpt: "Last week's newsletter with All Saints Day Mass schedule, All Souls Day preparations, November memorial Mass intentions, and parish autumn events.",
      content: "As we prepare to honor all saints and pray for all souls, this week's newsletter includes Mass schedules for All Saints Day (Nov 1st) and All Souls Day (Nov 2nd), information about submitting memorial Mass intentions, and our parish autumn social events...",
      image: "/images/open-bible-rosary.jpg",
      category: "Newsletter",
      date: "2025-10-27",
      readTime: "6 min read",
      featured: false,
      tags: ["Newsletter", "October", "Weekly", "All Souls"]
    }
  ];

  const categories = ["All", "Featured", "Newsletter", "Jubilee 2025", "Sacraments", "Liturgical Season", "Parish Groups", "Parish Life", "Events"];

  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/mid-mass-priest-and-community.jpg"
        title="Parish News & Updates"
        description="Stay connected with the latest happenings in our vibrant parish community. From liturgical celebrations to outreach programs, discover what's new at St Saviour's."
        primaryButton={{
          text: "Read Latest News",
          href: "#latest-news"
        }}
        secondaryButton={{
          text: "Subscribe to Updates",
          href: "#newsletter"
        }}
      />

      {/* <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      /> */}

      {/* FEATURED NEWS SECTION */}
      <section id="latest-news" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                Featured Story
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
              Latest Parish News
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              Read about the latest developments, events, and spiritual life at St Saviour's.
              Our community is always growing and there's always something new happening.
            </p>
          </div>

          {/* Featured Article - Large Card */}
          {featuredNews[0] && (
          <div className="mb-16">
            <article className="group bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={featuredNews[0].image}
                    alt={featuredNews[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase tracking-wide rounded">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold uppercase tracking-wide rounded">
                      {featuredNews[0].category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={featuredNews[0].date}>
                        {new Date(featuredNews[0].date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">{featuredNews[0].readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-primary-900 mb-4 group-hover:text-gold-600 transition-colors">
                    {featuredNews[0].title}
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {featuredNews[0].excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/news/${featuredNews[0].id}`}
                    className="inline-flex items-center text-primary-700 hover:text-primary-600 font-bold transition-colors group/link"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
          )}
        </div>
      </section>

      {/* <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      /> */}

      {/* FILTER & SEARCH SECTION */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2  text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-gold-500 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 bg-white border border-gray-200  text-slate-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALL NEWS GRID SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allNews.slice(1).map((article) => (
              <article
                key={article.id}
                className="group bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase tracking-wide rounded">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-700 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                        +{article.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-primary-700 hover:text-primary-600 font-bold transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 bg-primary-900 text-white hover:bg-primary-800 font-bold  transition-colors duration-300 text-lg">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      /> */}

      {/* NEWSLETTER SIGNUP SECTION */}
      <section id="newsletter" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                Stay Updated
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl">
              Subscribe to our newsletter and be the first to know about parish events,
              spiritual programs, and community news.
            </p>
          </div>

          <div className="bg-slate-50 border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-12 w-12 text-gold-500" />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Parish Newsletter</h3>
            <p className="text-slate-700 mb-6">
              Receive weekly updates delivered straight to your inbox.
              No spam, just parish news and spiritual reflections.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-200  text-slate-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <button className="px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 font-semibold  transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}