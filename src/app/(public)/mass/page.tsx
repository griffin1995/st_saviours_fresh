import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import * as Separator from '@radix-ui/react-separator';
import {
  Calendar,
  Clock,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Heart,
  Users,
  PlayCircle
} from 'lucide-react';

/**
 * MASS TIMES PAGE - St Saviour's Catholic Church
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
  title: "Mass Times & Services | St Saviour's Catholic Church",
  description: "Find Mass times, confession schedules, and service information at St Saviour's Catholic Church in Lewisham. Join us for worship in our vibrant Catholic community.",
  keywords: "Mass times, Catholic services, Lewisham, confession, adoration, Sunday Mass, weekday Mass, church services"
};

export default function MassTimesPage() {
  // Mass timings data
  const massSchedule = [
    {
      day: 'Sunday',
      masses: [
        { time: '8:30 AM', type: 'Sunday Mass', description: 'Morning worship' },
        { time: '10:00 AM', type: 'Sunday Mass', description: 'Family Mass' },
        { time: '11:30 AM', type: 'Sunday Mass', description: 'Main celebration' },
        { time: '2:00 PM', type: 'Spanish Mass', description: '1st and 3rd Sundays only' },
        { time: '5:30 PM', type: 'Sunday Mass', description: 'Evening service' }
      ]
    },
    {
      day: 'Monday',
      masses: [
        { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
        { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' }
      ]
    },
    {
      day: 'Tuesday',
      masses: [
        { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
        { time: '6:30 PM', type: 'Pilgrim Mass', description: 'Special intention Mass' }
      ]
    },
    {
      day: 'Wednesday',
      masses: [
        { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
        { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' }
      ]
    },
    {
      day: 'Thursday',
      masses: [
        { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
        { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' }
      ]
    },
    {
      day: 'Friday',
      masses: [
        { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
        { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' }
      ]
    },
    {
      day: 'Saturday',
      masses: [
        { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
        { time: '12:00 PM', type: 'Pilgrim Mass', description: 'Special intention Mass' },
        { time: '5:30 PM', type: 'Saturday Vigil', description: 'Sunday obligation Mass' },
        { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' }
      ]
    }
  ];

  // Get current day for highlighting
  const today = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = dayNames[today];

  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/inside-church-aisle.jpg"
        title="Mass Times & Services"
        description="Join us for Mass, confession, and adoration. All are welcome to worship with our vibrant Catholic community in the heart of Lewisham."
        primaryButton={{
          text: "View Mass Times",
          href: "#mass-schedule"
        }}
        secondaryButton={{
          text: "Contact Parish",
          href: "#contact-info"
        }}
      />

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* WEEKLY MASS SCHEDULE SECTION */}
      <section id="mass-schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Mass Times
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Weekly Mass</span>
              <span className="block text-3xl lg:text-4xl font-medium">Schedule</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              Our regular weekly Mass times, carefully arranged to serve our diverse community.
              <strong className="font-semibold text-slate-900"> All are welcome</strong> to join us in worship.
            </p>
          </div>

          {/* Mass Schedule Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {massSchedule.map((schedule, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                  schedule.day === currentDay
                    ? 'border-gold-500'
                    : 'border-gray-200'
                }`}
              >
                {/* Day Header */}
                <div className={`px-6 py-4 ${
                  schedule.day === currentDay
                    ? 'bg-gold-500'
                    : 'bg-slate-900'
                }`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {schedule.day}
                    </h3>
                    {schedule.day === currentDay && (
                      <span className="px-2 py-1 bg-white text-gold-600 rounded text-xs font-bold uppercase">
                        Today
                      </span>
                    )}
                  </div>
                </div>

                {/* Mass Times */}
                <div className="p-6 space-y-4">
                  {schedule.masses.map((mass, massIndex) => (
                    <div key={massIndex} className="border-l-4 border-gold-500 pl-4 py-2">
                      <div className="flex items-center text-gold-600 text-sm mb-1">
                        <Clock className="mr-1 h-4 w-4" />
                        {mass.time}
                      </div>
                      <div className="text-slate-900 font-semibold">{mass.type}</div>
                      <div className="text-gray-600 text-sm">{mass.description}</div>
                    </div>
                  ))}
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

      {/* ADDITIONAL SERVICES SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Additional Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              <span className="block">Confession &</span>
              <span className="block text-3xl lg:text-4xl font-medium">Adoration Times</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Beyond our regular Mass schedule, we offer additional spiritual services to
              <strong className="font-semibold"> nourish your faith journey</strong> and deepen your relationship with God.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Confession Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-8 w-8 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Confession</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Sacrament of Reconciliation available for all seeking God's mercy and forgiveness.
                </p>
              </div>

              {/* Times */}
              <div className="p-8">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-bold text-slate-900">Saturday 4:45 PM - 5:15 PM</p>
                        <p className="text-gray-600 mt-1">Before Vigil Mass</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-bold text-slate-900">Sunday 9:30 AM - 10:00 AM</p>
                        <p className="text-gray-600 mt-1">Before Sunday Mass</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-bold text-slate-900">By Appointment</p>
                        <p className="text-gray-600 mt-1">Contact the parish office to arrange</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adoration Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Adoration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Eucharistic Adoration and quiet prayer time before the Blessed Sacrament.
                </p>
              </div>

              {/* Times */}
              <div className="p-8">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-bold text-slate-900">First Friday 7:00 PM - 8:00 PM</p>
                        <p className="text-gray-600 mt-1">Monthly Holy Hour</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-bold text-slate-900">Daily after 10:00 AM Mass</p>
                        <p className="text-gray-600 mt-1">Brief exposition for personal prayer</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg text-center border border-gray-200">
                    <p className="text-gray-600 italic">
                      Special adoration times during Lent and Advent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      />

      {/* IMPORTANT INFORMATION SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Important Info */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-gold-500" />
                  <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                    Important Information
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                  <span className="block text-2xl lg:text-3xl font-medium">Good to Know</span>
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Calendar,
                    title: "Special Occasions",
                    description: "Mass times may vary during Christmas, Easter, and other special liturgical seasons. Please check our weekly newsletter or contact the parish office for holiday schedules."
                  },
                  {
                    icon: Heart,
                    title: "First Time Visitors",
                    description: "We warmly welcome all visitors to our services. If you have any questions or need assistance, please don't hesitate to speak with our welcoming team."
                  },
                  {
                    icon: Users,
                    title: "Accessibility",
                    description: "Our church is wheelchair accessible with designated seating areas. Hearing loops are available for those with hearing aids."
                  },
                  {
                    icon: PlayCircle,
                    title: "Live Streaming",
                    description: "Can't attend in person? Join us online for live-streamed Sunday Masses and special celebrations through our website."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-2 bg-gold-500" />
                  <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">020 8852 3073</p>
                      <p className="text-gray-600">Parish Office</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">lewisham@rcaos.org.uk</p>
                      <p className="text-gray-600">Email Us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">Lewisham High Street</p>
                      <p className="text-gray-600">SE13 6AA, London</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-4">
                <div className="relative h-96 w-full rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-700 font-medium">St Saviour's Catholic Church</p>
                    <p className="text-slate-500 text-sm">Lewisham High Street, SE13 6AA</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-3">Find us in the heart of Lewisham</p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center bg-gold-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gold-700 transition-colors duration-300"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
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
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-gold-500" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Join Us for Worship
          </h2>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you're a <strong className="font-semibold text-white">regular parishioner</strong> or
            visiting for the first time, we invite you to join our vibrant Catholic community in
            worship and fellowship. Experience <strong className="font-semibold text-white">the beauty of the Mass</strong> and
            the warmth of our welcoming parish family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Live Stream
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
