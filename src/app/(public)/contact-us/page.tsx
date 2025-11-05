import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageSquare,
  Heart,
  Users
} from 'lucide-react';

/**
 * CONTACT US PAGE - St Saviour's Catholic Church
 *
 * Server Component - optimal Next.js 15 App Router pattern
 * Following homepage design system:
 * - White background with block-style magazine layout
 * - Consistent spacing, typography, and color scheme
 * - Gold accent colors and slate-900 text
 * - Card-based design with hover effects
 */

export const metadata: Metadata = {
  title: "Contact St Saviour's Catholic Church | Get in Touch",
  description: "Contact St Saviour's Catholic Church in Lewisham. Find our address, phone number, email, Mass times, and office hours. We're here to help with all your pastoral needs.",
  keywords: "contact, St Saviour's Church, Lewisham, phone, email, address, Mass times, office hours, pastoral care"
};

export default function ContactUsPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/outside-church-flowers-foreground.jpg"
        title="Contact St Saviour's"
        description="We're here to help with all your spiritual needs. Whether you're seeking pastoral care, have questions about our services, or want to get involved in our community, we'd love to hear from you."
        primaryButton={{
          text: "Call Us Now",
          href: "tel:02088523073"
        }}
        secondaryButton={{
          text: "Our Location",
          href: "#location"
        }}
      />

      {/* <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      /> */}

      {/* QUICK CONTACT INFORMATION - FULL WIDTH */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-slate-700">
              We're always happy to welcome new parishioners, answer questions about our faith,
              or provide pastoral support to those in need.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone Contact */}
            <div className="group bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-1">Phone</h3>
                  <p className="text-sm font-semibold text-slate-600">Call during office hours</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Speak directly with our parish office for general inquiries, Mass bookings, and pastoral support.
              </p>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-lg font-bold text-primary-900 mb-1">020 8852 3073</p>
                <p className="text-sm text-slate-600">Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>
              <a
                href="tel:02088523073"
                className="inline-flex items-center text-slate-600 hover:text-slate-700 font-bold transition-colors group/link"
              >
                <span>Call Now</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Email Contact */}
            <div className="group bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-1">Email</h3>
                  <p className="text-sm font-semibold text-slate-600">Written inquiries</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Send us an email for detailed questions, prayer requests, or administrative matters.
              </p>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-bold text-primary-900 mb-1">lewisham@rcaos.org.uk</p>
                <p className="text-sm text-slate-600">We respond within 24 hours</p>
              </div>
              <a
                href="mailto:lewisham@rcaos.org.uk"
                className="inline-flex items-center text-slate-600 hover:text-slate-700 font-bold transition-colors group/link"
              >
                <span>Send Email</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Location */}
            <div className="group bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-1">Visit Us</h3>
                  <p className="text-sm font-semibold text-slate-600">Lewisham High Street</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Located in the heart of Lewisham, easily accessible by public transport and car.
              </p>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-bold text-primary-900 mb-1">Lewisham High Street</p>
                <p className="text-sm text-slate-600">SE13 6AA</p>
              </div>
              <Link
                href="#location"
                className="inline-flex items-center text-slate-600 hover:text-slate-700 font-bold transition-colors group/link"
              >
                <span>View Map</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Emergency/Pastoral Care */}
            <div className="group bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-1">Pastoral Care</h3>
                  <p className="text-sm font-semibold text-slate-600">24/7 emergencies</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                For urgent pastoral care, Last Rites, or spiritual emergencies outside office hours.
              </p>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-bold text-primary-900 mb-1">Emergency Line</p>
                <p className="text-sm text-slate-600">Available 24/7</p>
              </div>
              <a
                href="tel:02088523073"
                className="inline-flex items-center text-slate-600 hover:text-slate-700 font-bold transition-colors group/link"
              >
                <span>Emergency Contact</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      /> */}

      {/* OFFICE HOURS & CONTACT FORM - TWO COLUMN LAYOUT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT COLUMN: When We're Available - Office Hours */}
            <div>
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-gold-500" />
                  <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                    Office Hours
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
                  When We're Available
                </h2>
                <p className="text-lg text-slate-700">
                  Our parish office is open during these hours for appointments,
                  inquiries, and administrative matters.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM', note: 'Full office hours' },
                  { day: 'Saturday', hours: '9:00 AM - 1:00 PM', note: 'Morning only' },
                  { day: 'Sunday', hours: 'Before & after Mass', note: 'Limited availability' },
                ].map((schedule, index) => (
                  <div key={index} className="bg-white border border-gray-200 p-8 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-primary-900">{schedule.day}</h3>
                        <p className="text-sm text-slate-600">{schedule.note}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-600">{schedule.hours}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Send a Message - Contact Form */}
            <div>
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-gold-500" />
                  <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                    Send a Message
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-700">
                  Have a question, prayer request, or want to learn more about our community?
                  We'd love to hear from you.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8 shadow-xl">
                <div className="text-center">
                  <MessageSquare className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">Contact Form</h3>
                  <p className="text-slate-700 mb-6">
                    For now, please use our phone or email contact methods above.
                    A contact form will be available here soon.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:02088523073"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary-900 text-white hover:bg-primary-800 font-semibold transition-colors duration-300"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us
                    </a>
                    <a
                      href="mailto:lewisham@rcaos.org.uk"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gold-600 text-white hover:bg-gold-500 font-semibold transition-colors duration-300"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <Separator.Root
        decorative
        className="my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center"
      /> */}

      {/* LOCATION & MAP SECTION */}
      <section id="location" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gold-500" />
              <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
                Find Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              Located in the heart of Lewisham with excellent transport links.
              Parking is available nearby, and we're easily accessible by bus and train.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-slate-100  overflow-hidden shadow-lg aspect-square">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-slate-500 mx-auto mb-4" />
                    <p className="text-slate-700 font-medium">Interactive Map</p>
                    <p className="text-slate-500 text-sm">St Saviour's Catholic Church</p>
                    <p className="text-slate-500 text-sm">Lewisham High Street, SE13 6AA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-white border border-gray-200  p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10  flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Church Address</h3>
                    <p className="text-slate-700 leading-relaxed">
                      St Saviour's Catholic Church<br />
                      Lewisham High Street<br />
                      London SE13 6AA
                    </p>
                  </div>
                </div>
              </div>

              {/* Transport Links */}
              <div className="bg-white border border-gray-200  p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10  flex items-center justify-center">
                    <Users className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Transport Links</h3>
                    <div className="text-slate-700 leading-relaxed space-y-1">
                      <p><strong>Train:</strong> Lewisham Station (5-min walk)</p>
                      <p><strong>Bus:</strong> Multiple routes stop nearby</p>
                      <p><strong>Car:</strong> Street parking available</p>
                      <p><strong>Cycling:</strong> Bike racks provided</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div className="bg-white border border-gray-200  p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10  flex items-center justify-center">
                    <Heart className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Accessibility</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Wheelchair accessible entrance, hearing loop system available,
                      and reserved seating for those with mobility needs.
                    </p>
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