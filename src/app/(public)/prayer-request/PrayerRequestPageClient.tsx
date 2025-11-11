"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import {
  HeartIcon as Heart,
  // UserIcon as User,
  EnvelopeIcon as Envelope,
  PhoneIcon as Phone,
  // ChatBubbleLeftRightIcon as ChatBubble,
  CheckCircleIcon as CheckCircle,
  ExclamationTriangleIcon as Warning,
  // ArrowLeftIcon as ArrowLeft,
  PaperAirplaneIcon as Send,
  // EyeSlashIcon as EyeSlash,
  LockClosedIcon as Lock,
  HandRaisedIcon as HandRaised,
} from "@heroicons/react/24/solid";
import Link from "next/link";

// Components
import { PageLayout, PageHero } from "@/components/layout";
import {
  Card,
  CardContent,
  Heading,
  Text,
  Section,
  Container,
  Button,
  // Grid,
} from "@/components/ui";
import { prefersReducedMotion } from "@/lib/utils";

// CMS
import type {
  PrayerRequestCategory,
} from "@/lib/cms/cms-content";

interface PrayerRequestPageProps {
  categories: PrayerRequestCategory[];
  parishName: string;
  contactInfo: any;
  heroImage?: { url: string; alt: string };
}

// Category icon mapping
// const categoryIcons: Record<string, React.ComponentType<any>> = {
//   Heart,
//   CheckCircle: CheckCircle,
//   ChatBubble,
//   User,
//   HandRaised,
//   Warning,
// };

export default function PrayerRequestPageClient({
  categories,
  parishName,
  contactInfo,
  heroImage,
}: PrayerRequestPageProps) {
  const reducedMotion = prefersReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    isUrgent: false,
    isPrivate: true,
    isAnonymous: false,
    subject: "",
    intention: "",
    specificDetails: "",
    followUpPreference: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.isAnonymous) {
      if (!formData.name.trim()) {
        newErrors['name'] = "Name is required for non-anonymous requests";
      }
      if (!formData.email.trim()) {
        newErrors['email'] = "Email is required for follow-up";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors['email'] = "Please enter a valid email address";
      }
    }

    if (!formData.category) {
      newErrors['category'] = "Please select a prayer category";
    }

    if (!formData.subject.trim()) {
      newErrors['subject'] = "Please provide a brief subject";
    }

    if (!formData.intention.trim()) {
      newErrors['intention'] = "Please describe your prayer intention";
    }

    if (formData.intention.trim().length < 10) {
      newErrors['intention'] = "Please provide more detail about your prayer intention";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real implementation, this would submit to your backend
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting prayer request:", error);
      setErrors({ submit: "There was an error submitting your request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageLayout
        title={`Prayer Request Submitted - ${parishName}`}
        description="Your prayer request has been submitted successfully."
        background="slate"
      >
        <Section background="slate" className="py-32">
          <Container>
            <m.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="p-6 bg-green-500/20 rounded-full inline-flex mb-8">
                <CheckCircle className="h-16 w-16 text-green-300" />
              </div>
              
              <Heading level="h1" color="white" className="mb-6">
                Prayer Request Received
              </Heading>
              
              <Text size="lg" color="gray-100" className="mb-8">
                Thank you for sharing your prayer intention with our community. 
                {!formData.isAnonymous && !formData.isPrivate && (
                  " Your request will be included in our parish prayers."
                )}
                {!formData.isAnonymous && formData.isPrivate && (
                  " Your private request will be offered by our clergy during Mass."
                )}
                {formData.isAnonymous && (
                  " Your anonymous request will be remembered in our prayers."
                )}
              </Text>

              <Card className="bg-white/10 backdrop-blur-sm border-slate-600 mb-8">
                <CardContent className="p-8">
                  <div className="text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-gold-300 mt-1 flex-shrink-0" />
                      <div>
                        <Text size="base" color="white" className="font-semibold mb-1">
                          Pastoral Care
                        </Text>
                        <Text size="sm" color="gray-100">
                          Our pastoral team will remember your intention in their daily prayers.
                        </Text>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <HandRaised className="h-5 w-5 text-gold-300 mt-1 flex-shrink-0" />
                      <div>
                        <Text size="base" color="white" className="font-semibold mb-1">
                          Mass Intentions
                        </Text>
                        <Text size="sm" color="gray-100">
                          Your prayer will be offered during our daily Mass celebrations.
                        </Text>
                      </div>
                    </div>

                    {!formData.isAnonymous && (
                      <div className="flex items-start gap-3">
                        <Envelope className="h-5 w-5 text-gold-300 mt-1 flex-shrink-0" />
                        <div>
                          <Text size="base" color="white" className="font-semibold mb-1">
                            Follow-up Contact
                          </Text>
                          <Text size="sm" color="gray-100">
                            We may reach out if you've requested follow-up support.
                          </Text>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prayer-hub">
                  <Button
                    variant="primary"
                    className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Explore More Prayers
                  </Button>
                </Link>
                
                <Link href="/prayer-hub/request">
                  <Button
                    variant="secondary"
                    className="hover:bg-white hover:text-slate-900"
                    style={{ color: 'rgba(255,255,255,1)' }}
                  >
                    Submit Another Request
                  </Button>
                </Link>
              </div>
            </m.div>
          </Container>
        </Section>
      </PageLayout>
    );
  }

  return (
      <PageLayout
        title={`Prayer Requests - ${parishName}`}
        description="Submit your prayer intentions to our parish community. All requests are handled with care and confidentiality."
        keywords="prayer requests, prayer intentions, Catholic prayers, parish prayers, spiritual support"
        background="slate"
      >
        {/* Hero Section */}
        <PageHero
          title="Prayer Requests"
          subtitle="Share your intentions with our prayer community"
          backgroundImage={heroImage?.url || ""}
          overlay="dark"
        />

        {/* Breadcrumb Navigation */}
        <Section background="slate" className="py-6 border-b border-slate-700">
          <Container>
            <m.div
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex items-center gap-2 text-sm text-gray-300">
                <Link 
                  href="/prayer-hub" 
                  className="hover:text-gold-300 transition-colors"
                >
                  Prayer Hub
                </Link>
                <span>/</span>
                <span className="text-white">Prayer Requests</span>
              </nav>
            </m.div>
          </Container>
        </Section>

        {/* Introduction */}
        <Section background="slate" className="py-16">
          <Container>
            <m.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Heading level="h2" color="white" className="mb-6">
                How Prayer Requests Work
              </Heading>
              <Text size="lg" color="gray-100" className="mb-8">
                Your prayer intentions matter to us. Share your needs, thanksgiving, 
                or intercessions with our caring parish community.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-blue-500/20 border-blue-400/30">
                  <CardContent className="p-6 text-center">
                    <Lock className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                    <Heading level="h4" color="white" className="mb-2">
                      Confidential
                    </Heading>
                    <Text size="sm" color="gray-100">
                      Your requests are handled with complete privacy and care
                    </Text>
                  </CardContent>
                </Card>

                <Card className="bg-green-500/20 border-green-400/30">
                  <CardContent className="p-6 text-center">
                    <HandRaised className="h-8 w-8 text-green-300 mx-auto mb-3" />
                    <Heading level="h4" color="white" className="mb-2">
                      Prayed For
                    </Heading>
                    <Text size="sm" color="gray-100">
                      Included in daily Mass and parish prayer intentions
                    </Text>
                  </CardContent>
                </Card>

                <Card className="bg-purple-500/20 border-purple-400/30">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-8 w-8 text-purple-300 mx-auto mb-3" />
                    <Heading level="h4" color="white" className="mb-2">
                      Pastoral Care
                    </Heading>
                    <Text size="sm" color="gray-100">
                      Optional follow-up support from our pastoral team
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </m.div>

            {/* Prayer Request Form */}
            <div className="max-w-2xl mx-auto">
              <m.div
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-slate-600">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Privacy Options */}
                      <div className="space-y-4">
                        <Heading level="h3" color="white" className="mb-4">
                          Privacy Preferences
                        </Heading>
                        
                        <div className="space-y-3">
                          <label className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              name="isAnonymous"
                              checked={formData.isAnonymous}
                              onChange={handleInputChange}
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                            />
                            <div>
                              <Text size="base" color="white" className="font-medium">
                                Submit anonymously
                              </Text>
                              <Text size="sm" color="gray-100">
                                Your identity will not be recorded with this request
                              </Text>
                            </div>
                          </label>

                          {!formData.isAnonymous && (
                            <label className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                name="isPrivate"
                                checked={formData.isPrivate}
                                onChange={handleInputChange}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                              />
                              <div>
                                <Text size="base" color="white" className="font-medium">
                                  Keep request private
                                </Text>
                                <Text size="sm" color="gray-100">
                                  Only our clergy will see the details of your request
                                </Text>
                              </div>
                            </label>
                          )}

                          <label className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              name="isUrgent"
                              checked={formData.isUrgent}
                              onChange={handleInputChange}
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                            />
                            <div>
                              <Text size="base" color="white" className="font-medium">
                                Urgent prayer needed
                              </Text>
                              <Text size="sm" color="gray-100">
                                For immediate spiritual or pastoral care needs
                              </Text>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Contact Information */}
                      {!formData.isAnonymous && (
                        <div className="space-y-4">
                          <Heading level="h3" color="white" className="mb-4">
                            Contact Information
                          </Heading>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-100 mb-2">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                                placeholder="Your full name"
                              />
                              {errors['name'] && (
                                <Text size="sm" className="mt-1" style={{ color: '#ef4444' }}>
                                  {errors['name']}
                                </Text>
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-100 mb-2">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                                placeholder="your.email@example.com"
                              />
                              {errors['email'] && (
                                <Text size="sm" className="mt-1" style={{ color: '#ef4444' }}>
                                  {errors['email']}
                                </Text>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-100 mb-2">
                              Phone Number (Optional)
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                              placeholder="Your phone number"
                            />
                          </div>
                        </div>
                      )}

                      {/* Prayer Category */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Prayer Category *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                        >
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                        {errors['category'] && (
                          <Text size="sm" className="mt-1" style={{ color: '#ef4444' }}>
                            {errors['category']}
                          </Text>
                        )}
                      </div>

                      {/* Prayer Subject */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Brief Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                          placeholder="Brief description of your prayer request"
                          maxLength={100}
                        />
                        <div className="flex justify-between items-center mt-1">
                          {errors['subject'] && (
                            <Text size="sm" style={{ color: '#ef4444' }}>
                              {errors['subject']}
                            </Text>
                          )}
                          <Text size="sm" className="ml-auto text-gray-400">
                            {formData.subject.length}/100
                          </Text>
                        </div>
                      </div>

                      {/* Prayer Intention */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Prayer Intention *
                        </label>
                        <textarea
                          name="intention"
                          value={formData.intention}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 resize-none"
                          placeholder="Please share your prayer intention in detail..."
                        />
                        {errors['intention'] && (
                          <Text size="sm" className="mt-1" style={{ color: '#ef4444' }}>
                            {errors['intention']}
                          </Text>
                        )}
                      </div>

                      {/* Additional Details */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Additional Context (Optional)
                        </label>
                        <textarea
                          name="specificDetails"
                          value={formData.specificDetails}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 resize-none"
                          placeholder="Any additional details that would help us pray more specifically..."
                        />
                      </div>

                      {/* Follow-up Preference */}
                      {!formData.isAnonymous && (
                        <div>
                          <label className="block text-sm font-medium text-gray-100 mb-2">
                            Follow-up Preference
                          </label>
                          <select
                            name="followUpPreference"
                            value={formData.followUpPreference}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600  text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                          >
                            <option value="email">Email contact preferred</option>
                            <option value="phone">Phone call preferred</option>
                            <option value="none">No follow-up needed</option>
                          </select>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="pt-6">
                        {errors['submit'] && (
                          <div className="mb-4 p-4 bg-red-500/20 border border-red-400/30 ">
                            <Text size="sm" style={{ color: '#ef4444' }}>
                              {errors['submit']}
                            </Text>
                          </div>
                        )}
                        
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          className="w-full bg-gold-500 text-slate-900 hover:bg-gold-400 disabled:bg-gold-500/50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent mr-2" />
                              Submitting Prayer Request...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Submit Prayer Request
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </m.div>
            </div>
          </Container>
        </Section>

        {/* Emergency Contact */}
        <Section background="slate" className="py-12 border-t border-slate-700">
          <Container>
            <m.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Card className="bg-red-500/20 border-red-400/30 max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <Warning className="h-8 w-8 text-red-300 mx-auto mb-4" />
                  <Heading level="h4" color="white" className="mb-2">
                    Urgent Pastoral Care
                  </Heading>
                  <Text size="base" color="gray-100" className="mb-4">
                    For immediate pastoral emergencies, please contact us directly:
                  </Text>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white  hover:bg-red-700 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`tel:${contactInfo.emergencyPhone}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white  hover:bg-red-700 transition-colors"
                    >
                      <Warning className="h-4 w-4 mr-2" />
                      Emergency: {contactInfo.emergencyPhone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          </Container>
        </Section>
      </PageLayout>
  );
}

