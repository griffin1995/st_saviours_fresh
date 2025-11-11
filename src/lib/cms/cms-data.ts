// CMS Data type definitions
// Only type definitions are kept - all functions moved to archives as they're unused

// Website Settings
export interface WebsiteSettings {
  contact: {
    address: string;
    phone: string;
    email: string;
    emergencyPhone: string;
    safeguardingPhone: string;
  };
  parish: {
    name: string;
    location: string;
    priest: string;
    assistantPriest?: string;
    diocese: string;
    established: string;
    charityNumber?: string;
    officeHours?: {
      days: string;
      time: string;
    };
  };
  social: {
    facebook: string;
    youtube: string;
    instagram: string;
    twitter: string;
  };
  website: {
    announcements: Array<{
      id: string;
      title: string;
      message: string;
      type: string;
      active: boolean;
      showUntil: string;
    }>;
    maintenanceMode: boolean;
    liveStreamEnabled: boolean;
    liveStreamUrl: string;
    donationsEnabled: boolean;
    donationsUrl: string;
  };
  features: {
    massBooking: boolean;
    eventRegistration: boolean;
    newsletter: boolean;
    prayerRequests: boolean;
    venueHire: boolean;
  };
  images: {
    logo: string;
    hero: Array<{
      id: string;
      url: string;
      alt: string;
      title: string;
      subtitle: string;
      overlay: string;
      priority: boolean;
    }>;
    history: Array<{
      id: string;
      url: string;
      alt: string;
      category: string;
    }>;
    news: Array<{
      id: string;
      url: string;
      alt: string;
      category: string;
    }>;
    cta: {
      priest: {
        url: string;
        alt: string;
      };
      venue: {
        url: string;
        alt: string;
      };
    };
    sacraments: Array<{
      sacrament: string;
      url: string;
      alt: string;
    }>;
    prayers: Array<{
      category: string;
      url: string;
      alt: string;
    }>;
    pages: {
      [pageName: string]: {
        url: string;
        alt: string;
      };
    };
  };
}
