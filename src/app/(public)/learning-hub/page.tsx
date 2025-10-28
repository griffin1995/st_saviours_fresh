import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import * as Separator from '@radix-ui/react-separator';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import {
  BookOpen,
  Crown,
  Clock,
  ArrowRight,
  Users,
  Heart,
  Star,
  Calendar
} from 'lucide-react';

/**
 * LEARNING HUB PAGE - St Saviour's Catholic Church
 *
 * Server Component - optimal Next.js 15 App Router pattern
 * Following homepage design system:
 * - White background with block-style magazine layout
 * - Consistent spacing, typography, and color scheme
 * - Gold accent colors and slate-900 text
 * - Card-based design with 2/3 aspect ratio cards
 * - NO Framer Motion (Server Component)
 * - All content hardcoded inline
 */

export const metadata: Metadata = {
  title: "Learning Hub | St Saviour's Catholic Church",
  description: "Welcome to St Saviour's Learning Hub, your go-to resource for information and analysis on religious topics and leading theologians.",
  keywords: "Catholic learning, theology, church history, saints, religious education, faith formation, popes, theologians"
};

export default function LearningHubPage() {
  // Learning categories data
  const learningCategories = [
    {
      title: "Theology and Theologians",
      description: "Study of theology and notable theologians throughout Church history. Explore the profound insights of Catholic thinkers who have shaped our understanding of faith.",
      image: "/images/open-bible-rosary.jpg",
      url: "/learning-hub/theology-and-theologians",
      icon: BookOpen
    },
    {
      title: "Popes",
      description: "Study of popes throughout Church history. Learn about the successors of St Peter who have guided the Church through the centuries.",
      image: "/images/praising-black-white-hands-up.jpg",
      url: "/learning-hub/popes",
      icon: Crown
    },
    {
      title: "Timelines of Church History",
      description: "Chronological overview of Church history by century. Trace the development of the Catholic Church from its apostolic origins to the present day.",
      image: "/images/inside-church-aisle.jpg",
      url: "/learning-hub/church-history-timeline",
      icon: Clock
    },
    {
      title: "History of the Catholic Church",
      description: "Overview of the Catholic Church's history from its origins to modern times. Discover how the Church has persevered and flourished through two millennia.",
      image: "/images/st_saviours_interior_1939_archive_photo.jpeg",
      url: "/learning-hub/church-history",
      icon: Calendar
    },
    {
      title: "Directory of Terms",
      description: "Glossary of Catholic terms, popes, and Church contacts. Your reference guide to understanding Catholic vocabulary and concepts.",
      image: "/images/priest-hand-raised.jpg",
      url: "/learning-hub/directory-of-terms",
      icon: BookOpen
    },
    {
      title: "The Lives of the Saints",
      description: "Biographies of saints across Church history. Be inspired by the lives of holy men and women who answered God's call.",
      image: "/images/hands-up-praising.jpg",
      url: "/learning-hub/lives-of-saints",
      icon: Star
    }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/inside-church-3-glass-windows.jpg"
        title="Learning Hub"
        description="Explore the rich history and theology of the Catholic Church. Welcome to St Saviour's Learning Hub, your go-to resource for information and analysis on religious topics and leading theologians."
        primaryButton={{
          text: "Discover Topics",
          href: "#topics"
        }}
        secondaryButton={{
          text: "Our Resources",
          href: "#resources"
        }}
      />

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* INTRODUCTION SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                  About the Hub
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                <span className="block">Your Journey of</span>
                <span className="block text-3xl lg:text-4xl font-medium">Faith & Knowledge</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Welcome to St Saviour's Learning Hub, your go-to resource for information and analysis on a range of religious topics and leading theologians. Our hope is that the Hub will provide you with an engaging and easy to understand introduction to some of the history and the theological ideas that have powered the Catholic Church over the centuries.
              </p>
              <p>
                Whether you're a student, a parishioner, or you are a visitor with a curious mind, the Learning Hub is designed to start your own, more in-depth research into and understanding of our faith.
              </p>
              <p>
                At the Learning Hub, we believe that learning should be a continuous and enjoyable journey. Each article is meticulously researched and written to ensure that you receive the most reliable information available. The Hub will be updated weekly with new articles.
              </p>
              <p className="text-slate-900 font-semibold">
                Even so, some of these articles are not an easy read, either because they are long, or they cover complex subjects. If you want further explanation of some of the concepts covered, please feel free to talk to the parish priests, who will be happy to take you through some of the finer points that are covered in various articles.
              </p>
              <p>
                We hope however, that you find enough of them stimulating and the basis for your own research. At the end of each article is a reading list, which we hope you will follow.
              </p>
              <p>
                The Hub platform is user-friendly and intuitive; making it easy for you to navigate through the different categories and find the information you need. We also encourage you to follow up with your own research and community engagement through St Saviour's various social groups.
              </p>
              <p>
                In addition to our growing number of articles, the Learning Hub will, over time, offer a variety of multimedia resources such as videos, infographics, and podcasts. These resources are designed to complement our written content and provide you with a richer learning experience.
              </p>
              <p className="text-xl font-semibold text-slate-900">
                For more information and access to a growing number of articles and features, please explore the topics below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* LEARNING TOPICS SECTION */}
      <section id="topics" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Explore Topics
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Learning</span>
              <span className="block text-3xl lg:text-4xl font-medium">Categories</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              Dive deep into Catholic theology, history, and spirituality through our carefully curated categories.
              Each section offers comprehensive articles and resources for your faith journey.
            </p>
          </div>

          {/* Topics Grid - 2/3 Aspect Ratio Cards like homepage */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {learningCategories.map((category, index) => (
              <Link
                key={index}
                href={category.url}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                  <AspectRatio.Root ratio={2 / 3}>
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <category.icon className="h-6 w-6 text-gold-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-gold-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>
                        <div className="inline-flex items-center text-gold-300 font-bold text-sm group-hover:underline">
                          <span>Explore Articles</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </AspectRatio.Root>
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

      {/* RESOURCES & ENGAGEMENT SECTION */}
      <section id="resources" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Get Involved
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Deepen Your</span>
              <span className="block text-3xl lg:text-4xl font-medium">Understanding</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Beyond reading, engage with our parish community through discussion groups and educational programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 rounded-lg">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Study Groups</h3>
                  <p className="text-sm font-semibold text-gold-600">Join the conversation</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Participate in our weekly Bible study and theology discussion groups where you can explore these topics together with fellow parishioners.
              </p>
              <Link
                href="/parish-groups"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold transition-colors group/link"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Resource Card 2 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 rounded-lg">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Reading Lists</h3>
                  <p className="text-sm font-semibold text-gold-600">Continue learning</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Each article includes carefully curated reading lists to help you explore topics in greater depth at your own pace.
              </p>
              <div className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold transition-colors">
                <span>Explore Articles</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 rounded-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Ask the Priests</h3>
                  <p className="text-sm font-semibold text-gold-600">Personal guidance</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Have questions about complex theological concepts? Our parish priests are available to discuss and explain topics from the Learning Hub.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold transition-colors group/link"
              >
                <span>Contact Parish</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* CALL TO ACTION SECTION */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-gold-500" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Start Your Learning Journey
          </h2>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            We are committed to fostering a <strong className="font-semibold text-white">community of lifelong learners</strong>.
            By exploring the Learning Hub, you become part of a vibrant community that values curiosity, critical thinking,
            and the <strong className="font-semibold text-white">pursuit of knowledge</strong>. We invite you to explore, learn, and grow with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#topics"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Topics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/parish-groups"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Study Groups
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <Heart className="mr-2 h-5 w-5" />
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
