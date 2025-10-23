import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import * as Separator from '@radix-ui/react-separator';
import { Calendar, Users, Clock, Heart, MapPin, Mail, ArrowRight, Phone } from 'lucide-react';

/**
 * ABOUT US PAGE - St Saviour's Catholic Church
 *
 * Server Component - optimal Next.js 15 App Router pattern
 * Following Essential_Boilerplate.txt rules:
 * - Massive single file with all content hardcoded inline
 * - NO Framer Motion (Server Component)
 * - NO separate data files
 * - Only Hero component is extracted for reuse
 * - Everything else inline
 */

export const metadata: Metadata = {
  title: "About St Saviour's Catholic Church | Our Story & Mission",
  description: "Learn about St Saviour's Catholic Church in Lewisham - over 150 years of faith, hope, and love. Discover our history, mission, values, and vibrant community.",
};

export default function AboutUsPage() {
  return (
    <main id="main-content" role="main">
      {/* HERO SECTION */}
      <Hero
        title="About St Saviour's Catholic Church"
        description="For over 130 years, our vibrant parish community has been a beacon of faith and hope in Lewisham. In this special Jubilee Year of Hope, St Saviour's is a designated Sanctuary Church for all pilgrims seeking closer communion with Christ. All are welcome."
        backgroundImage="/images/outside-church-flowers-foreground.jpg"
        primaryButton={{
          text: "Discover Our Story",
          href: "#our-story"
        }}
        secondaryButton={{
          text: "Meet Our Team",
          href: "#leadership"
        }}
      />

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* OUR STORY SECTION - 2/3 content + 1/3 stats sidebar */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Left 2/3 - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                {/* Section heading */}
                <div className="mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-500" />
                      <span className="text-black font-semibold text-sm uppercase tracking-wider">
                        Our Story
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
                      <span className="block">A Living Legacy of</span>
                      <span className="block text-3xl lg:text-4xl text-black font-medium">
                        Faith, Hope & Love
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-xl text-black space-y-8 leading-relaxed">
                  <p className="text-xl lg:text-2xl font-light text-black leading-relaxed">
                    <strong className="font-semibold">Since 1894</strong>, St Saviour&apos;s Catholic Church has stood as a spiritual home
                    in the heart of Lewisham, serving generations of faithful families and welcoming newcomers to our
                    vibrant parish community.
                  </p>

                  <p className="text-lg leading-relaxed text-black">
                    Our beautiful <strong className="font-semibold">Victorian church building</strong>, opened in 1909, houses a diverse
                    and multicultural congregation that reflects the rich tapestry of our South East London community.
                    We celebrate <strong className="font-semibold">Mass in multiple languages</strong>, offer comprehensive sacramental
                    preparation, and provide pastoral care that meets the needs of all ages and backgrounds.
                  </p>

                  <p className="text-lg leading-relaxed text-black">
                    From our historic <strong className="font-semibold">Campanile topped by Christ the King</strong> to our modern
                    ministries and outreach programs, St Saviour&apos;s bridges tradition and innovation. We are
                    committed to being <strong className="font-semibold">a beacon of hope</strong> in Lewisham, living out Christ&apos;s
                    call to love one another through worship, education, fellowship, and service.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 1/3 - Quick Stats Card */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Stats Card */}
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
                  {/* Header */}
                  <div className="p-6 border-b border-slate-700 bg-slate-800">
                    <h3 className="text-xl font-serif font-semibold text-white">
                      Parish by the Numbers
                    </h3>
                    <p className="text-sm text-white mt-1">
                      A vibrant community
                    </p>
                  </div>

                  {/* Stats List */}
                  <div className="p-6 bg-slate-900">
                    <div className="space-y-6">
                      {/* Stat 1: Years of Service */}
                      <div className="flex items-center justify-between py-3 border-b border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gold-700/20 rounded-lg flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-gold-400" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">
                              135+
                            </div>
                            <div className="text-sm text-white">
                              Years of Service
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stat 2: Parish Families */}
                      <div className="flex items-center justify-between py-3 border-b border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gold-700/20 rounded-lg flex items-center justify-center">
                            <Users className="h-5 w-5 text-gold-400" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">
                              500+
                            </div>
                            <div className="text-sm text-white">
                              Parish Families
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stat 3: Weekly Masses */}
                      <div className="flex items-center justify-between py-3 border-b border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gold-700/20 rounded-lg flex items-center justify-center">
                            <Clock className="h-5 w-5 text-gold-400" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">
                              7
                            </div>
                            <div className="text-sm text-white">
                              Weekly Masses
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stat 4: Countries Represented */}
                      <div className="flex items-center justify-between py-3 border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gold-700/20 rounded-lg flex items-center justify-center">
                            <Heart className="h-5 w-5 text-gold-400" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">
                              80+
                            </div>
                            <div className="text-sm text-white">
                              Countries Represented
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* MISSION & VALUES SECTION - 4 value cards in 2x2 grid */}
      <section id="mission" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-black font-semibold text-sm uppercase tracking-wider">
                  Our Mission & Values
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
                <span className="block">Living Christ&apos;s Love</span>
                <span className="block text-3xl lg:text-4xl text-black font-medium">
                  In Our Community
                </span>
              </h2>
            </div>
          </div>

          {/* Values Grid - 2x2 Block Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1: Love & Compassion */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src="/images/hands-up-praising.jpg"
                  alt="Love & Compassion"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Love & Compassion
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We strive to show Christ&apos;s love through our actions and care for one another, welcoming all who seek God&apos;s embrace and building a community where everyone belongs.
                </p>
              </div>
            </div>

            {/* Value 2: Community & Fellowship */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src="/images/mid-mass-priest-and-community.jpg"
                  alt="Community & Fellowship"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Community & Fellowship
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We welcome people from all walks of life and build meaningful relationships across generations, celebrating our diversity as a strength that enriches our parish family.
                </p>
              </div>
            </div>

            {/* Value 3: Worship & Liturgy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src="/images/inside-church-aisle.jpg"
                  alt="Worship & Liturgy"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Worship & Liturgy
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We gather to celebrate the Eucharist and grow in our relationship with God through beautiful liturgy, sacred music, and reverent worship that nourishes our souls.
                </p>
              </div>
            </div>

            {/* Value 4: Learning & Formation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src="/images/open-bible-rosary.jpg"
                  alt="Learning & Formation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Learning & Formation
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to ongoing faith formation and deepening our understanding of Catholic teaching through education programs, Bible study, and spiritual guidance for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* HISTORY TIMELINE SECTION - 5 milestone cards */}
      <section id="history" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-black font-semibold text-sm uppercase tracking-wider">
                  Our History
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
                <span className="block">A Journey Through</span>
                <span className="block text-3xl lg:text-4xl text-black font-medium">
                  Centuries of Faith
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From medieval origins to modern sanctuary, discover the remarkable story of St Saviour&apos;s.
              </p>
            </div>
          </div>

          {/* Timeline Blocks - Simple Cards */}
          <div className="space-y-8">
            {/* Milestone 1: 849-918 - Medieval Origins */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative h-64 md:h-auto">
                  <Image
                    src="/images/pexels-pixabay-218480.jpg"
                    alt="Medieval Origins"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gold-500 text-white text-sm font-semibold rounded-full">
                      849-918
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                    Medieval Origins
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    King Alfred the Great was Lord of the Manor of Leofshema. In 918, the Manor was given to Saint Peter&apos;s Abbey, Ghent.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 2: 1894 - Parish Founded */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative h-64 md:h-auto">
                  <Image
                    src="/images/st_saviours_interior_1939_archive_photo.jpeg"
                    alt="Parish Founded"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gold-500 text-white text-sm font-semibold rounded-full">
                      1894
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                    Parish Founded
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fr McClymont was appointed as the first resident priest, establishing the modern St Saviour&apos;s parish.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3: 1909 - Church Opens */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative h-64 md:h-auto">
                  <Image
                    src="/images/outside-church-flowers-foreground.jpg"
                    alt="Church Opens"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gold-500 text-white text-sm font-semibold rounded-full">
                      1909
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                    Church Opens
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Foundation stone laid on April 24th and church officially opened by Bishop Peter Amigo on December 9th, with the Lord and Lady Mayor of London attending.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 4: 1928-29 - Campanile Completed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative h-64 md:h-auto">
                  <Image
                    src="/images/inside-church-aisle.jpg"
                    alt="Campanile Completed"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gold-500 text-white text-sm font-semibold rounded-full">
                      1928-29
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                    Campanile Completed
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The famous Campanile topped by a 12-foot statue of Christ the King was completed as a commemoration of the Centenary of Catholic Emancipation.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 5: 2025 - Jubilee Sanctuary */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative h-64 md:h-auto">
                  <Image
                    src="/images/mid-mass-priest-and-community.jpg"
                    alt="Jubilee Sanctuary"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gold-500 text-white text-sm font-semibold rounded-full">
                      2025
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                    Jubilee Sanctuary
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    St Saviour&apos;s was designated a special sanctuary during the Jubilee Year of Hope, serving parishioners from 80+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* LEADERSHIP SECTION - 3 priest cards */}
      <section id="leadership" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-gold-500" />
                <span className="text-black font-semibold text-sm uppercase tracking-wider">
                  Leadership
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
                <span className="block">Meet Our</span>
                <span className="block text-3xl lg:text-4xl text-black font-medium">
                  Spiritual Shepherds
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our dedicated priests guide our parish community with wisdom, compassion, and faith.
              </p>
            </div>
          </div>

          {/* Priest Cards - 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Priest 1: Fr Krzysztof Krzyskow */}
            <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-80">
                <Image
                  src="/images/fr_krzysztof_krzyskow_parish_priest_st_saviours.jpeg"
                  alt="Fr Krzysztof Krzyskow - Parish Priest"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Fr Krzysztof Krzyskow
                  </h3>
                  <p className="text-gold-600 font-semibold text-lg">
                    Parish Priest
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Leading our parish with wisdom and compassion, Fr Krzysztof brings years of pastoral experience to guide our community in faith and service. His dedication to the Gospel and his care for each parishioner makes St Saviour&apos;s a true spiritual home.
                </p>
              </div>
            </div>

            {/* Priest 2: Fr Kenneth Iwunna */}
            <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-80">
                <Image
                  src="/images/fr_kenneth_iwunna_assistant_priest_st_saviours.jpeg"
                  alt="Fr Kenneth Iwunna - Assistant Priest"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Fr Kenneth Iwunna
                  </h3>
                  <p className="text-gold-600 font-semibold text-lg">
                    Assistant Priest
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Supporting our parish ministries and outreach programs, Fr Kenneth brings energy and dedication to serving our diverse community. His passion for youth ministry and evangelization inspires parishioners of all ages to deepen their faith.
                </p>
              </div>
            </div>

            {/* Priest 3: Placeholder */}
            <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-80">
                <Image
                  src="/images/fr_kenneth_iwunna_assistant_priest_st_saviours.jpeg"
                  alt="Lorem Ipsum - Lorem Ipsum"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Lorem Ipsum
                  </h3>
                  <p className="text-gold-600 font-semibold text-lg">
                    Lorem Ipsum
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root decorative className="my-8 h-px w-full bg-gray-200" />

      {/* CONTACT CTA SECTION - 2-column layout with CTA + map */}
      <section id="contact" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - CTA Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-semibold text-white mb-6">
                  Join Our Faith Community
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Whether you&apos;re new to the area or have been part of Lewisham for years,
                  we&apos;d love to welcome you to St Saviour&apos;s vibrant Catholic community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/mass"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  Mass Times
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-700/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Visit Us</p>
                    <p className="text-gray-300">Lewisham High Street, SE13 6AA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-700/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Call Us</p>
                    <p className="text-gray-300">020 8852 3073</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map Placeholder */}
            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
                <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                    <p className="text-white font-medium">St Saviour&apos;s Catholic Church</p>
                    <p className="text-gray-300 text-sm">Lewisham High Street, SE13 6AA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
