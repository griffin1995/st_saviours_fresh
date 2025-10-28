import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import * as Separator from '@radix-ui/react-separator';
import {
  BookOpen,
  Heart,
  Star,
  Calendar,
  Sun,
  Cross,
  ArrowRight,
  Search,
  Users,
  Clock
} from 'lucide-react';

/**
 * PRAYER HUB PAGE - St Saviour's Catholic Church
 *
 * Server Component - optimal Next.js 15 App Router pattern
 * Following homepage design system:
 * - White background with block-style magazine layout
 * - Consistent spacing, typography, and color scheme
 * - Gold accent colors and slate-900 text
 * - Card-based design with hover effects
 * - NO Framer Motion (Server Component)
 * - All content hardcoded inline
 */

export const metadata: Metadata = {
  title: "Prayer Hub | St Saviour's Catholic Church",
  description: "Explore our collection of Catholic prayers, devotions, and spiritual resources. From daily prayers to seasonal liturgical celebrations, find guidance for your prayer life.",
  keywords: "Catholic prayers, daily prayers, rosary, Mass prayers, devotions, liturgical prayers, seasonal prayers, Marian prayers, saint prayers"
};

export default function PrayerHubPage() {
  // Prayer categories data
  const prayerCategories = [
    {
      title: "Daily Prayers",
      description: "Essential prayers for your daily spiritual journey. Morning offerings, grace before meals, evening prayers, and more.",
      icon: Sun,
      colorGradient: "from-amber-500 to-orange-500",
      url: "/prayer-hub/daily-prayers",
      count: "12 prayers"
    },
    {
      title: "Mass Prayers",
      description: "Prayers for the Holy Sacrifice of the Mass. Responses, Gloria, Creed, and prayers after Communion.",
      icon: BookOpen,
      colorGradient: "from-blue-500 to-indigo-500",
      url: "/prayer-hub/mass-prayers",
      count: "8 prayers"
    },
    {
      title: "Marian Devotions",
      description: "Prayers to Our Blessed Mother. The Rosary, Hail Mary, Memorare, and devotions to Mary's Immaculate Heart.",
      icon: Heart,
      colorGradient: "from-pink-500 to-rose-500",
      url: "/prayer-hub/marian-devotions",
      count: "15 prayers"
    },
    {
      title: "Seasonal Prayers",
      description: "Prayers for the liturgical year. Advent, Christmas, Lent, Easter, and feast day prayers.",
      icon: Calendar,
      colorGradient: "from-purple-500 to-violet-500",
      url: "/prayer-hub/seasonal-prayers",
      count: "20+ prayers"
    },
    {
      title: "Prayers to Saints",
      description: "Invoke the intercession of the saints. Prayers to patron saints, doctors of the Church, and holy men and women.",
      icon: Star,
      colorGradient: "from-green-500 to-emerald-500",
      url: "/prayer-hub/saint-prayers",
      count: "25+ prayers"
    },
    {
      title: "Special Intentions",
      description: "Prayers for specific needs. Healing, guidance, protection, thanksgiving, and prayers for the deceased.",
      icon: Cross,
      colorGradient: "from-slate-600 to-slate-700",
      url: "/prayer-hub/special-intentions",
      count: "18 prayers"
    }
  ];

  // Featured prayers data
  const featuredPrayers = [
    {
      title: "The Our Father",
      subtitle: "The Lord's Prayer",
      description: "The prayer Jesus taught us, perfect for beginning each day and seeking God's will.",
      category: "Daily Prayers",
      estimatedTime: "1 min",
      image: "/images/hands-up-praising.jpg"
    },
    {
      title: "The Rosary",
      subtitle: "Marian Devotion",
      description: "Meditate on the mysteries of Christ's life while praying with Our Lady.",
      category: "Marian Devotions",
      estimatedTime: "20 min",
      image: "/images/open-bible-rosary.jpg"
    },
    {
      title: "Prayer Before Mass",
      subtitle: "Eucharistic Preparation",
      description: "Prepare your heart to receive Jesus in the Holy Eucharist.",
      category: "Mass Prayers",
      estimatedTime: "3 min",
      image: "/images/inside-church-aisle.jpg"
    }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/praising-black-white-hands-up.jpg"
        title="Prayer Hub"
        description="A treasury of Catholic prayers and devotions. Explore our collection of prayers from daily devotions to seasonal liturgical celebrations."
        primaryButton={{
          text: "Explore Prayers",
          href: "#prayer-categories"
        }}
        secondaryButton={{
          text: "Submit Request",
          href: "#prayer-request"
        }}
      />

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* FEATURED PRAYERS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Featured Prayers
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Essential Prayers</span>
              <span className="block text-3xl lg:text-4xl font-medium">For Your Journey</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              Start with these foundational prayers that form the heart of Catholic devotional life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredPrayers.map((prayer, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={prayer.image}
                    alt={prayer.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase tracking-wide rounded">
                      {prayer.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gold-600" />
                      <span className="text-sm text-slate-600 font-medium">{prayer.estimatedTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {prayer.title}
                  </h3>
                  <p className="text-sm text-gold-600 font-semibold mb-3">{prayer.subtitle}</p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {prayer.description}
                  </p>

                  <div className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold transition-colors group/link">
                    <span>Read Prayer</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* PRAYER CATEGORIES SECTION */}
      <section id="prayer-categories" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Explore Categories
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Prayer</span>
              <span className="block text-3xl lg:text-4xl font-medium">Categories</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Explore our organized collection of Catholic prayers and devotions for every occasion and need.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {prayerCategories.map((category, index) => (
              <Link
                key={index}
                href={category.url}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${category.colorGradient} mb-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-slate-600 font-medium">{category.count}</span>
                    <div className="inline-flex items-center text-gold-600 font-bold text-sm group-hover:underline">
                      <span>View Prayers</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* PRAYER RESOURCES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Prayer Resources
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Additional</span>
              <span className="block text-3xl lg:text-4xl font-medium">Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Prayer Request Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Prayer Requests</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Submit your intentions for our prayer community to lift up in prayer.
              </p>
              <Link
                href="/prayer-hub/request"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-bold transition-colors group/link"
              >
                <span>Submit Request</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Liturgical Calendar Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Liturgical Calendar</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                View feast days and seasonal prayers throughout the Church year.
              </p>
              <div className="inline-flex items-center text-blue-600 font-bold">
                <span>View Calendar</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Search Prayers Card */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Search Prayers</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Find specific prayers by topic, occasion, or saint.
              </p>
              <div className="inline-flex items-center text-amber-600 font-bold">
                <span>Search Now</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* PRAYER COMMUNITY SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/mid-mass-priest-and-community.jpg"
                alt="Prayer Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-gold-500" />
                  <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                    Join Our Community
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                  <span className="block">Pray</span>
                  <span className="block text-3xl lg:text-4xl font-medium">Together</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Prayer is the foundation of our Catholic faith. Through prayer, we grow closer to God,
                  seek His guidance, and find strength in times of trial.
                </p>
                <p>
                  At St Saviour's, we encourage both personal prayer and communal worship. Join our
                  prayer groups, attend adoration, or simply spend quiet time before the Blessed Sacrament.
                </p>
                <p className="text-slate-900 font-semibold">
                  Whether you're seeking comfort, thanksgiving, or intercession, you'll find a prayer
                  to lift your heart to God.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/parish-groups"
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Prayer Groups
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* CALL TO ACTION SECTION */}
      <section id="prayer-request" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-gold-500" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Begin Your Prayer Journey
          </h2>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Prayer is <strong className="font-semibold text-white">conversation with God</strong>. Whether you're
            just beginning or deepening an existing prayer life, we're here to support you. Explore our
            collection, join our community, and <strong className="font-semibold text-white">discover the peace</strong> that
            comes from time spent in God's presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#prayer-categories"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Prayers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/prayer-hub/request"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <Heart className="mr-2 h-5 w-5" />
              Submit Prayer Request
            </Link>

            <Link
              href="/mass"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Mass Times
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
