// CMS Content utilities for retrieving all content from settings
// Client-side version that uses CMS data structure

import type { WebsiteSettings } from './cms-data';

// Default CMS content structure - this should match the CMS settings.json
const defaultContent: WebsiteSettings = {
  contact: {
    address: "Brockley Rise, London SE23 1NG",
    phone: "020 8852 7411",
    email: "parish@saintsaviours.org.uk",
    emergencyPhone: "999",
    safeguardingPhone: "020 8858 2854"
  },
  parish: {
    name: "St Saviour's Catholic Church",
    location: "Lewisham",
    priest: "Fr Krisz Katona",
    assistantPriest: "Revd. Carlos Lozano",
    diocese: "Southwark",
    established: "1889",
    charityNumber: "233699",
    officeHours: {
      days: "Mon-Fri",
      time: "9:00 AM - 5:00 PM"
    }
  },
  social: {
    facebook: "https://www.facebook.com/stsaviourslewisham",
    youtube: "https://www.youtube.com/@stsaviourslewisham",
    instagram: "",
    twitter: ""
  },
  website: {
    announcements: [
      {
        id: "ann-001",
        title: "Welcome to Our New Website",
        message: "Explore our enhanced features including live streaming and online Mass times.",
        type: "info",
        active: true,
        showUntil: "2025-03-01"
      }
    ],
    maintenanceMode: false,
    liveStreamEnabled: true,
    liveStreamUrl: "https://www.youtube.com/@stsaviourslewisham/live",
    donationsEnabled: true,
    donationsUrl: "https://donate.givealittle.co/campaigns/st-saviours-lewisham"
  },
  features: {
    massBooking: false,
    eventRegistration: true,
    newsletter: true,
    prayerRequests: true,
    venueHire: true
  },
  images: {
    logo: "/images/logo.svg",
    hero: [
      {
        id: "hero-1",
        url: "/images/pexels-pixabay-218480.jpg",
        alt: "Beautiful interior of St Saviour's Catholic Church showing altar and pews filled with warm light",
        title: "Welcome to St Saviour's Catholic Church",
        subtitle: "A community of faith in the heart of Lewisham",
        overlay: "from-black/60 via-black/40 to-black/60",
        priority: true
      },
      {
        id: "hero-2",
        url: "/images/pexels-jibarofoto-2014775.jpg",
        alt: "Congregation gathered in prayer during Mass at St Saviour's Catholic Church",
        title: "Join Us in Prayer and Fellowship",
        subtitle: "Discover the warmth of our parish family",
        overlay: "from-black/70 via-black/30 to-black/50",
        priority: false
      },
      {
        id: "hero-3",
        url: "/images/pexels-pixabay-248199.jpg",
        alt: "Stunning Gothic architecture and stained glass windows of our historic Victorian church",
        title: "A Place of Sacred Beauty",
        subtitle: "Experience our historic Victorian church",
        overlay: "from-black/60 via-black/40 to-black/60",
        priority: false
      },
      {
        id: "hero-4",
        url: "/images/pexels-pixabay-208216.jpg",
        alt: "Diverse parish community celebrating together at St Saviour's, showing families and individuals of all ages",
        title: "Growing in Faith Together",
        subtitle: "All are welcome in God's house",
        overlay: "from-black/60 via-black/40 to-black/60",
        priority: false
      }
    ],
    history: [
      {
        id: "history-1",
        url: "/images/pexels-pixabay-208216.jpg",
        alt: "Historical image of St Saviour's foundation",
        category: "Heritage"
      },
      {
        id: "history-2",
        url: "/images/pexels-jibarofoto-2014775.jpg",
        alt: "Parish community gathered together",
        category: "Community"
      },
      {
        id: "history-3",
        url: "/images/pexels-pixabay-248199.jpg",
        alt: "Church mission and ministry",
        category: "Mission"
      },
      {
        id: "history-4",
        url: "/images/pexels-pixabay-218480.jpg",
        alt: "Vision for the future",
        category: "Vision"
      }
    ],
    news: [
      {
        id: "news-1",
        url: "/images/pexels-pixabay-208216.jpg",
        alt: "Lenten season preparation",
        category: "Liturgical Season"
      },
      {
        id: "news-2",
        url: "/images/pexels-jibarofoto-2014775.jpg",
        alt: "Parish pilgrimage",
        category: "Pilgrimage"
      },
      {
        id: "news-3",
        url: "/images/pexels-pixabay-248199.jpg",
        alt: "First Holy Communion",
        category: "Sacraments"
      },
      {
        id: "news-4",
        url: "/images/pexels-pixababy-218480.jpg",
        alt: "Parish restoration project",
        category: "Parish Life"
      }
    ],
    cta: {
      priest: {
        url: "/images/pexels-brett-sayles-3633711.jpg",
        alt: "Meet Father Krisz - Our parish priest ready to guide and support our faith community"
      },
      venue: {
        url: "/images/pexels-shelaghmurphy-1666816.jpg",
        alt: "Beautiful church interior available for weddings and special celebrations"
      }
    },
    sacraments: [
      {
        sacrament: "baptism",
        url: "/images/sacraments/baptism.jpg",
        alt: "Baptism ceremony at St Saviour's"
      },
      {
        sacrament: "confirmation",
        url: "/images/sacraments/confirmation.jpg",
        alt: "Confirmation ceremony at St Saviour's"
      },
      {
        sacrament: "eucharist",
        url: "/images/sacraments/eucharist.jpg",
        alt: "Holy Eucharist celebration"
      },
      {
        sacrament: "confession",
        url: "/images/sacraments/confession.jpg",
        alt: "Confession and reconciliation"
      },
      {
        sacrament: "anointing",
        url: "/images/sacraments/anointing.jpg",
        alt: "Anointing of the sick"
      },
      {
        sacrament: "orders",
        url: "/images/sacraments/orders.jpg",
        alt: "Holy Orders ordination"
      },
      {
        sacrament: "matrimony",
        url: "/images/sacraments/matrimony.jpg",
        alt: "Wedding ceremony at St Saviour's"
      }
    ],
    prayers: [
      {
        category: "mass-prayers",
        url: "/images/prayers/mass-prayers.jpg",
        alt: "Congregation participating in Mass prayers"
      },
      {
        category: "daily-prayers",
        url: "/images/prayers/daily-prayers.jpg",
        alt: "Morning prayer and personal devotion"
      },
      {
        category: "marian-prayers",
        url: "/images/prayers/marian-prayers.jpg",
        alt: "Rosary prayer and Marian devotions"
      },
      {
        category: "seasonal-prayers",
        url: "/images/prayers/seasonal-prayers.jpg",
        alt: "Seasonal liturgical prayers and celebrations"
      },
      {
        category: "sacramental-prayers",
        url: "/images/prayers/sacramental-prayers.jpg",
        alt: "Prayers for sacramental celebrations"
      },
      {
        category: "saints-prayers",
        url: "/images/prayers/saints-prayers.jpg",
        alt: "Prayers to saints and intercession"
      }
    ],
    pages: {
      "about-us": {
        url: "/images/pages/about-us.jpg",
        alt: "About St Saviour's Catholic Church"
      },
      "contact-us": {
        url: "/images/pages/contact-us.jpg",
        alt: "Contact St Saviour's Catholic Church"
      },
      "mass-times": {
        url: "/images/pages/mass-times.jpg",
        alt: "Mass times at St Saviour's"
      },
      "find-us": {
        url: "/images/pages/find-us.jpg",
        alt: "Find St Saviour's Catholic Church"
      },
      "donate": {
        url: "/images/pages/donate.jpg",
        alt: "Support St Saviour's Catholic Church"
      },
      "venue-hire": {
        url: "/images/pages/venue-hire.jpg",
        alt: "Venue hire at St Saviour's"
      },
      "gallery": {
        url: "/images/pages/gallery.jpg",
        alt: "Photo gallery of St Saviour's"
      },
      "streaming": {
        url: "/images/pages/streaming.jpg",
        alt: "Live streaming services"
      },
      "podcasts": {
        url: "/images/pages/podcasts.jpg",
        alt: "St Saviour's podcasts and talks"
      },
      "prayer-hub": {
        url: "/images/pages/prayer-hub.jpg",
        alt: "Prayer Hub - Catholic prayers and devotions"
      },
      "learning-hub": {
        url: "/images/pages/learning-hub.jpg",
        alt: "Learning Hub - Catholic faith education"
      }
    }
  }
};

// Get all CMS content (in future, this can fetch from API)
export function getCMSContent(): WebsiteSettings {
  return defaultContent;
}

// Get parish information
export function getParishInfo() {
  const content = getCMSContent();
  return content.parish;
}

// Get parish name
export function getParishName() {
  const parish = getParishInfo();
  return parish.name;
}

// Get contact information
export function getContactInfo() {
  const content = getCMSContent();
  return content.contact;
}

// Prayer Request Categories
export interface PrayerRequestCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  description: string;
  pastoralNotes?: string;
}

export const prayerRequestCategories: PrayerRequestCategory[] = [
  {
    id: 'healing',
    label: 'Healing & Health',
    icon: 'Heart',
    color: 'red',
    description: 'Physical, emotional, and spiritual healing',
    pastoralNotes: 'Include anointing of the sick when appropriate'
  },
  {
    id: 'thanksgiving',
    label: 'Thanksgiving',
    icon: 'Check',
    color: 'green',
    description: 'Gratitude for blessings received',
    pastoralNotes: 'Encourage continued gratitude practices'
  },
  {
    id: 'guidance',
    label: 'Guidance',
    icon: 'MessageCircle',
    color: 'blue',
    description: 'Discernment and decision-making',
    pastoralNotes: 'Consider spiritual direction referrals'
  },
  {
    id: 'family',
    label: 'Family',
    icon: 'Users',
    color: 'purple',
    description: 'Family relationships and concerns',
    pastoralNotes: 'May benefit from family counseling resources'
  },
  {
    id: 'deceased',
    label: 'For the Deceased',
    icon: 'Cross',
    color: 'gray',
    description: 'Prayers for the souls of the departed',
    pastoralNotes: 'Offer Mass intentions and bereavement support'
  },
  {
    id: 'vocations',
    label: 'Vocations',
    icon: 'Star',
    color: 'gold',
    description: 'Religious vocations and discernment',
    pastoralNotes: 'Connect with diocesan vocations office'
  }
];

export function getPrayerRequestCategories(): PrayerRequestCategory[] {
  return prayerRequestCategories;
}

export function getPrayerHubPageImage() {
  const content = getCMSContent();
  return content.images.pages["prayer-hub"];
}
