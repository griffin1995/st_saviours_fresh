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

// **PARISH INFORMATION**
export function getParishInfo() {
  const content = getCMSContent();
  return content.parish;
}

export function getParishName() {
  const parish = getParishInfo();
  return parish.name;
}

export function getParishLocation() {
  const parish = getParishInfo();
  return parish.location;
}

export function getParishPriest() {
  const parish = getParishInfo();
  return parish.priest;
}

export function getParishDiocese() {
  const parish = getParishInfo();
  return parish.diocese;
}

export function getParishEstablished() {
  const parish = getParishInfo();
  return parish.established;
}

export function getAssistantPriest() {
  const parish = getParishInfo();
  return parish.assistantPriest || '';
}

export function getParishCharityNumber() {
  const parish = getParishInfo();
  return parish.charityNumber || '';
}

export function getOfficeHours() {
  const parish = getParishInfo();
  return parish.officeHours || { days: 'Mon-Fri', time: '9:00 AM - 5:00 PM' };
}

// **CONTACT INFORMATION**
export function getContactInfo() {
  const content = getCMSContent();
  return content.contact;
}

export function getContactAddress() {
  const contact = getContactInfo();
  return contact.address;
}

export function getContactPhone() {
  const contact = getContactInfo();
  return contact.phone;
}

export function getContactEmail() {
  const contact = getContactInfo();
  return contact.email;
}

export function getEmergencyPhone() {
  const contact = getContactInfo();
  return contact.emergencyPhone;
}

export function getSafeguardingPhone() {
  const contact = getContactInfo();
  return contact.safeguardingPhone;
}

// **SOCIAL MEDIA**
export function getSocialMedia() {
  const content = getCMSContent();
  return content.social;
}

export function getFacebookUrl() {
  const social = getSocialMedia();
  return social.facebook;
}

export function getYouTubeUrl() {
  const social = getSocialMedia();
  return social.youtube;
}

export function getInstagramUrl() {
  const social = getSocialMedia();
  return social.instagram;
}

export function getTwitterUrl() {
  const social = getSocialMedia();
  return social.twitter;
}

// **WEBSITE SETTINGS**
export function getWebsiteSettings() {
  const content = getCMSContent();
  return content.website;
}

export function getAnnouncements() {
  const website = getWebsiteSettings();
  return website.announcements.filter(ann => ann.active);
}

export function isMaintenanceMode() {
  const website = getWebsiteSettings();
  return website.maintenanceMode;
}

export function isLiveStreamEnabled() {
  const website = getWebsiteSettings();
  return website.liveStreamEnabled;
}

export function getLiveStreamUrl() {
  const website = getWebsiteSettings();
  return website.liveStreamUrl;
}

export function isDonationsEnabled() {
  const website = getWebsiteSettings();
  return website.donationsEnabled;
}

export function getDonationsUrl() {
  const website = getWebsiteSettings();
  return website.donationsUrl;
}

// **FEATURES**
export function getFeatures() {
  const content = getCMSContent();
  return content.features;
}

export function isMassBookingEnabled() {
  const features = getFeatures();
  return features.massBooking;
}

export function isEventRegistrationEnabled() {
  const features = getFeatures();
  return features.eventRegistration;
}

export function isNewsletterEnabled() {
  const features = getFeatures();
  return features.newsletter;
}

export function isPrayerRequestsEnabled() {
  const features = getFeatures();
  return features.prayerRequests;
}

export function isVenueHireEnabled() {
  const features = getFeatures();
  return features.venueHire;
}

// **HERO CONTENT**
export function getHeroContent() {
  const content = getCMSContent();
  return content.images.hero;
}

export function getHeroTitles() {
  const hero = getHeroContent();
  return hero.map(h => ({ title: h.title, subtitle: h.subtitle }));
}

// **COMBINED UTILITIES**
export function getFullParishName() {
  const parish = getParishInfo();
  return `${parish.name}, ${parish.location}`;
}

export function getContactDisplay() {
  const contact = getContactInfo();
  return {
    address: contact.address,
    phone: contact.phone,
    email: contact.email
  };
}

export function getSocialLinks() {
  const social = getSocialMedia();
  return [
    { name: 'Facebook', url: social.facebook, active: !!social.facebook },
    { name: 'YouTube', url: social.youtube, active: !!social.youtube },
    { name: 'Instagram', url: social.instagram, active: !!social.instagram },
    { name: 'Twitter', url: social.twitter, active: !!social.twitter }
  ].filter(link => link.active);
}

// **PRAYER HUB CONTENT MANAGEMENT**
// CMS DATA SOURCE: Prayer-specific content following Catholic liturgical structure

// Prayer Categories with liturgical organization
export interface PrayerCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  liturgicalContext: 'liturgical' | 'devotional' | 'personal' | 'seasonal' | 'sacramental';
  order: number;
}

// Individual Prayer Structure
export interface Prayer {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  text: string;
  categoryId: string;
  type: 'traditional' | 'contemporary' | 'scripture' | 'litany' | 'novena';
  language: 'en' | 'es' | 'la' | 'pl';
  source?: string;
  attribution?: string;
  liturgicalSeason?: 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';
  occasions: string[];
  tags: string[];
  difficulty: 'simple' | 'moderate' | 'advanced';
  estimatedTime: string;
  featured: boolean;
  relatedPrayers?: string[];
  learningHubConnections?: string[];
  scriptureReferences?: Array<{
    book: string;
    chapter: number;
    verse: string;
    text: string;
  }>;
  instructions?: string;
  intentions?: string[];
  reflectionPrompts?: string[];
  status: 'draft' | 'published' | 'seasonal';
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

// Prayer Intention Types
export interface PrayerIntention {
  id: string;
  title: string;
  description: string;
  category: 'healing' | 'thanksgiving' | 'guidance' | 'family' | 'deceased' | 'vocations' | 'peace';
  liturgicalWeek?: number;
  isUniversal: boolean;
  isParishSpecific: boolean;
  startDate?: string;
  endDate?: string;
}

// CMS DATA SOURCE: Prayer categories with Catholic liturgical organization
export const prayerCategories: PrayerCategory[] = [
  {
    id: 'mass-prayers',
    slug: 'mass-prayers',
    title: 'Mass Prayers',
    description: 'Essential prayers of the Holy Sacrifice of the Mass',
    icon: 'BookOpen',
    color: 'from-red-600 to-red-500',
    liturgicalContext: 'liturgical',
    order: 1
  },
  {
    id: 'daily-prayers',
    slug: 'daily-prayers',
    title: 'Daily Prayers',
    description: 'Morning, evening, and meal prayers for everyday life',
    icon: 'Sun',
    color: 'from-blue-600 to-blue-500',
    liturgicalContext: 'personal',
    order: 2
  },
  {
    id: 'marian-prayers',
    slug: 'marian-prayers',
    title: 'Marian Devotions',
    description: 'Prayers to Our Lady, including the Rosary and other Marian devotions',
    icon: 'Heart',
    color: 'from-indigo-600 to-indigo-500',
    liturgicalContext: 'devotional',
    order: 3
  },
  {
    id: 'seasonal-prayers',
    slug: 'seasonal-prayers',
    title: 'Seasonal Prayers',
    description: 'Prayers for Advent, Christmas, Lent, Easter, and liturgical seasons',
    icon: 'Calendar',
    color: 'from-purple-600 to-purple-500',
    liturgicalContext: 'seasonal',
    order: 4
  },
  {
    id: 'sacramental-prayers',
    slug: 'sacramental-prayers',
    title: 'Sacramental Prayers',
    description: 'Prayers for Baptism, Confirmation, Eucharist, and other sacraments',
    icon: 'Cross',
    color: 'from-green-600 to-green-500',
    liturgicalContext: 'sacramental',
    order: 5
  },
  {
    id: 'saints-prayers',
    slug: 'saints-prayers',
    title: 'Saints & Intercession',
    description: 'Prayers to saints and for their intercession',
    icon: 'Star',
    color: 'from-yellow-600 to-yellow-500',
    liturgicalContext: 'devotional',
    order: 6
  }
];

// CMS DATA SOURCE: Prayer content with Catholic theological accuracy
export const prayers: Prayer[] = [
  {
    id: 'our-father',
    slug: 'our-father',
    title: 'The Our Father',
    subtitle: 'The Lord\'s Prayer',
    text: `Our Father, who art in heaven,
hallowed be thy name.
Thy kingdom come,
thy will be done,
on earth as it is in heaven.
Give us this day our daily bread,
and forgive us our trespasses,
as we forgive those who trespass against us.
And lead us not into temptation,
but deliver us from evil.
Amen.`,
    categoryId: 'daily-prayers',
    type: 'traditional',
    language: 'en',
    source: 'Gospel of Matthew 6:9-13, Gospel of Luke 11:2-4',
    attribution: 'Jesus Christ',
    occasions: ['Mass', 'Daily Prayer', 'Personal Devotion'],
    tags: ['foundational', 'jesus', 'gospel', 'essential'],
    difficulty: 'simple',
    estimatedTime: '1 minute',
    featured: true,
    relatedPrayers: ['hail-mary', 'glory-be'],
    learningHubConnections: ['creed-explained'],
    scriptureReferences: [
      {
        book: 'Matthew',
        chapter: 6,
        verse: '9-13',
        text: 'Our Father in heaven, hallowed be your name...'
      }
    ],
    instructions: 'Pray slowly and meditatively, considering each petition.',
    reflectionPrompts: [
      'What does it mean to call God "Father"?',
      'How do we forgive those who have hurt us?',
      'What does "thy will be done" mean in daily life?'
    ],
    status: 'published'
  },
  {
    id: 'hail-mary',
    slug: 'hail-mary',
    title: 'The Hail Mary',
    subtitle: 'Prayer to Our Lady',
    text: `Hail Mary, full of grace,
the Lord is with thee.
Blessed art thou amongst women,
and blessed is the fruit of thy womb, Jesus.
Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death.
Amen.`,
    categoryId: 'marian-prayers',
    type: 'traditional',
    language: 'en',
    source: 'Gospel of Luke 1:28, 1:42',
    attribution: 'Traditional Catholic Prayer',
    occasions: ['Rosary', 'Daily Prayer', 'Marian Devotions'],
    tags: ['mary', 'intercession', 'rosary', 'traditional'],
    difficulty: 'simple',
    estimatedTime: '30 seconds',
    featured: true,
    relatedPrayers: ['our-father', 'rosary-mysteries'],
    scriptureReferences: [
      {
        book: 'Luke',
        chapter: 1,
        verse: '28',
        text: 'Hail, full of grace, the Lord is with you!'
      }
    ],
    instructions: 'Often prayed as part of the Rosary. Meditate on Mary\'s role in salvation.',
    reflectionPrompts: [
      'How does Mary\'s "yes" to God inspire our own faithfulness?',
      'What does it mean to ask for Mary\'s intercession?'
    ],
    status: 'published'
  },
  {
    id: 'gloria',
    slug: 'gloria',
    title: 'Gloria in Excelsis',
    subtitle: 'Glory to God in the Highest',
    text: `Glory to God in the highest,
and on earth peace to people of good will.

We praise you,
we bless you,
we adore you,
we glorify you,
we give you thanks for your great glory,
Lord God, heavenly King,
O God, almighty Father.

Lord Jesus Christ, Only Begotten Son,
Lord God, Lamb of God, Son of the Father,
you take away the sins of the world,
have mercy on us;
you take away the sins of the world,
receive our prayer;
you are seated at the right hand of the Father,
have mercy on us.

For you alone are the Holy One,
you alone are the Lord,
you alone are the Most High,
Jesus Christ,
with the Holy Spirit,
in the glory of God the Father.
Amen.`,
    categoryId: 'mass-prayers',
    type: 'traditional',
    language: 'en',
    source: 'Ancient Christian hymn, 4th century',
    attribution: 'Early Christian Church',
    occasions: ['Sunday Mass', 'Feast Days', 'Solemn Celebrations'],
    tags: ['mass', 'trinity', 'praise', 'liturgical'],
    difficulty: 'moderate',
    estimatedTime: '2 minutes',
    featured: true,
    instructions: 'Sung or recited during Mass, usually on Sundays and feast days.',
    reflectionPrompts: [
      'How does this prayer acknowledge the Trinity?',
      'What does it mean to give glory to God?'
    ],
    status: 'published'
  },
  {
    id: 'advent-wreath-prayer',
    slug: 'advent-wreath-prayer',
    title: 'Advent Wreath Prayer',
    subtitle: 'Blessing for the Advent Season',
    text: `O God, by whose word all things are sanctified,
pour forth your blessing upon this wreath,
and grant that we who use it
may prepare our hearts for the coming of Christ
and may receive from you abundant graces.
Through Christ our Lord.
Amen.

Light of Christ, come into our hearts.
Light of Christ, shine in our darkness.
Light of Christ, kindle in us the fire of love.`,
    categoryId: 'seasonal-prayers',
    type: 'traditional',
    language: 'en',
    source: 'Catholic liturgical tradition',
    liturgicalSeason: 'advent',
    occasions: ['Advent Season', 'Family Prayer', 'Advent Wreath Lighting'],
    tags: ['advent', 'christ', 'light', 'preparation'],
    difficulty: 'simple',
    estimatedTime: '1 minute',
    featured: false,
    instructions: 'Pray while lighting candles on the Advent wreath, typically at dinner.',
    reflectionPrompts: [
      'How does light represent Christ in our lives?',
      'What does Advent preparation mean to you?'
    ],
    status: 'seasonal'
  }
];

// CMS DATA SOURCE: Prayer request categories with pastoral guidelines
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

// CMS DATA SOURCE: Universal and parish prayer intentions
export const prayerIntentions: PrayerIntention[] = [
  {
    id: 'universal-peace',
    title: 'For Peace in the World',
    description: 'That nations may work together for justice and peace',
    category: 'peace',
    isUniversal: true,
    isParishSpecific: false
  },
  {
    id: 'parish-families',
    title: 'For Our Parish Families',
    description: 'That families in our parish may grow in faith and love',
    category: 'family',
    isUniversal: false,
    isParishSpecific: true
  },
  {
    id: 'vocations-response',
    title: 'For Religious Vocations',
    description: 'That young people may respond generously to God\'s call',
    category: 'vocations',
    isUniversal: true,
    isParishSpecific: false
  }
];

// Helper functions for Prayer Hub CMS operations
export function getPrayersByCategory(categoryId: string): Prayer[] {
  return prayers
    .filter(prayer => prayer.categoryId === categoryId && prayer.status === 'published')
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getFeaturedPrayers(): Prayer[] {
  return prayers.filter(prayer => prayer.featured && prayer.status === 'published');
}

export function getPrayerBySlug(slug: string): Prayer | undefined {
  return prayers.find(prayer => prayer.slug === slug && prayer.status === 'published');
}

export function getSeasonalPrayers(season?: string): Prayer[] {
  if (!season) {
    return prayers.filter(prayer => prayer.liturgicalSeason && prayer.status !== 'draft');
  }
  return prayers.filter(prayer => 
    prayer.liturgicalSeason === season && prayer.status !== 'draft'
  );
}

export function getPrayersForOccasion(occasion: string): Prayer[] {
  return prayers.filter(prayer => 
    prayer.occasions.some(occ => occ.toLowerCase().includes(occasion.toLowerCase())) &&
    prayer.status === 'published'
  );
}

export function searchPrayers(query: string): Prayer[] {
  const lowercaseQuery = query.toLowerCase();
  return prayers.filter(prayer => 
    prayer.status === 'published' && (
      prayer.title.toLowerCase().includes(lowercaseQuery) ||
      prayer.text.toLowerCase().includes(lowercaseQuery) ||
      prayer.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  );
}

export function getRelatedPrayers(prayerId: string, limit = 3): Prayer[] {
  const prayer = prayers.find(p => p.id === prayerId);
  if (!prayer || !prayer.relatedPrayers) return [];
  
  return prayer.relatedPrayers
    .map(id => prayers.find(p => p.id === id))
    .filter((p): p is Prayer => p !== undefined && p.status === 'published')
    .slice(0, limit);
}

export function getPrayerCategories(): PrayerCategory[] {
  return prayerCategories.sort((a, b) => a.order - b.order);
}

export function getPrayerRequestCategories(): PrayerRequestCategory[] {
  return prayerRequestCategories;
}

export function getPrayerIntentions(parishOnly = false): PrayerIntention[] {
  if (parishOnly) {
    return prayerIntentions.filter(intention => intention.isParishSpecific);
  }
  return prayerIntentions;
}

// Integration with Learning Hub
export function getPrayerLearningConnections(prayerId: string): string[] {
  const prayer = prayers.find(p => p.id === prayerId);
  return prayer?.learningHubConnections || [];
}

// Liturgical Calendar Integration
export function getCurrentSeasonalPrayers(): Prayer[] {
  // This would integrate with a liturgical calendar service
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  
  let currentSeason: string;
  if (month === 12 || month === 1) {
    currentSeason = 'christmas';
  } else if (month >= 2 && month <= 4) {
    currentSeason = 'lent';
  } else if (month >= 4 && month <= 6) {
    currentSeason = 'easter';
  } else {
    currentSeason = 'ordinary';
  }
  
  return getSeasonalPrayers(currentSeason);
}

// **PRAYER HUB IMAGE MANAGEMENT**
// CMS DATA SOURCE: Prayer-specific images following CMS structure

export function getPrayerImages() {
  const content = getCMSContent();
  return content.images.prayers;
}

export function getPrayerCategoryImage(categorySlug: string) {
  const prayerImages = getPrayerImages();
  return prayerImages.find(img => img.category === categorySlug);
}

export function getPrayerHubPageImage() {
  const content = getCMSContent();
  return content.images.pages["prayer-hub"];
}

export function getLearningHubPageImage() {
  const content = getCMSContent();
  return content.images.pages["learning-hub"];
}

// **LEARNING HUB CONTENT MANAGEMENT**
// CMS DATA SOURCE: Educational content following Catholic teaching structure

// Learning Category Interface
export interface LearningCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  parentId?: string;
}

// Learning Content Interface
export interface LearningContent {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  content: string;
  categoryId: string;
  author?: string;
  readingTime: number;
  publishedDate: string;
  lastModified?: string;
  formattedDate?: string; // Optional pre-formatted date string for hydration consistency
  tags?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
  image?: {
    src: string;
    alt: string;
  };
  featuredImage?: {
    url: string;
    alt: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  status: 'draft' | 'published' | 'archived';
}

// CMS DATA SOURCE: Learning Hub Categories with Catholic educational structure
// Main categories with slugs matching card URLs
export const mainCategories = [
  {
    id: 'theology',
    slug: 'theology-and-theologians',
    title: 'Theology and Theologians',
    description: 'Study of theology and notable theologians throughout Church history.',
    subcategories: [
      {
        title: 'Early Church Fathers',
        description: 'Writings and teachings of the early Church Fathers from the first centuries.',
        imageUrl: '/images/learning-hub/early-church-fathers.jpg',
        url: '/learning-hub/theology-and-theologians/early-church-fathers'
      },
      {
        title: 'Medieval Theologians',
        description: 'Major theological developments during the Middle Ages.',
        imageUrl: '/images/learning-hub/medieval-theologians.jpg',
        url: '/learning-hub/theology-and-theologians/medieval-theologians'
      },
      {
        title: 'Modern Catholic Theology',
        description: 'Contemporary theological perspectives and developments.',
        imageUrl: '/images/learning-hub/modern-theology.jpg',
        url: '/learning-hub/theology-and-theologians/modern-theology'
      }
    ]
  },
  {
    id: 'popes',
    slug: 'popes',
    title: 'Popes',
    description: 'Study of popes throughout Church history.',
    subcategories: [
      {
        title: 'Early Papacy',
        description: 'The first popes and formation of papal authority.',
        imageUrl: '/images/learning-hub/early-papacy.jpg',
        url: '/learning-hub/popes/early-papacy'
      },
      {
        title: 'Medieval Popes',
        description: 'Papal history through the Middle Ages.',
        imageUrl: '/images/learning-hub/medieval-popes.jpg',
        url: '/learning-hub/popes/medieval'
      },
      {
        title: 'Modern Popes',
        description: 'Popes from the 19th century to present day.',
        imageUrl: '/images/learning-hub/modern-popes.jpg',
        url: '/learning-hub/popes/modern'
      }
    ]
  },
  {
    id: 'timeline',
    slug: 'church-history-timeline',
    title: 'Timelines of Church History',
    description: 'Chronological overview of Church history by century.',
    subcategories: [
      {
        title: 'Early Church (1st-5th Century)',
        description: 'The formation and early development of the Church.',
        imageUrl: '/images/learning-hub/early-church.jpg',
        url: '/learning-hub/church-history-timeline/early-church'
      },
      {
        title: 'Middle Ages (6th-15th Century)',
        description: 'The Church through the medieval period.',
        imageUrl: '/images/learning-hub/middle-ages.jpg',
        url: '/learning-hub/church-history-timeline/middle-ages'
      },
      {
        title: 'Modern Era (16th-21st Century)',
        description: 'Recent centuries of Church history.',
        imageUrl: '/images/learning-hub/modern-era.jpg',
        url: '/learning-hub/church-history-timeline/modern-era'
      }
    ]
  },
  {
    id: 'history',
    slug: 'church-history',
    title: 'History of the Catholic Church',
    description: 'Overview of the Catholic Church\'s history from its origins to modern times.',
    subcategories: [
      {
        title: 'Major Church Councils',
        description: 'Ecumenical councils and their impact on Church doctrine.',
        imageUrl: '/images/learning-hub/church-councils.jpg',
        url: '/learning-hub/church-history/councils'
      },
      {
        title: 'Religious Orders',
        description: 'History of major religious orders and their contributions.',
        imageUrl: '/images/learning-hub/religious-orders.jpg',
        url: '/learning-hub/church-history/religious-orders'
      },
      {
        title: 'Church Architecture',
        description: 'Evolution of Catholic church architecture and art.',
        imageUrl: '/images/learning-hub/church-architecture.jpg',
        url: '/learning-hub/church-history/architecture'
      }
    ]
  },
  {
    id: 'terms',
    slug: 'directory-of-terms',
    title: 'Directory of Terms',
    description: 'Glossary of Catholic terms, popes, and Church contacts.',
    subcategories: [
      {
        title: 'Liturgical Terms',
        description: 'Vocabulary related to Mass and other liturgical celebrations.',
        imageUrl: '/images/learning-hub/liturgical-terms.jpg',
        url: '/learning-hub/directory-of-terms/liturgical'
      },
      {
        title: 'Theological Terms',
        description: 'Important concepts in Catholic theology.',
        imageUrl: '/images/learning-hub/theological-terms.jpg',
        url: '/learning-hub/directory-of-terms/theological'
      },
      {
        title: 'Church Hierarchy',
        description: 'Understanding Church roles and organization.',
        imageUrl: '/images/learning-hub/church-hierarchy.jpg',
        url: '/learning-hub/directory-of-terms/hierarchy'
      }
    ]
  },
  {
    id: 'saints',
    slug: 'lives-of-saints',
    title: 'Lives of the Saints',
    description: 'Biographies of saints across Church history.',
    subcategories: [
      {
        title: 'Early Church Saints',
        description: 'Saints from the first centuries of Christianity.',
        imageUrl: '/images/learning-hub/early-saints.jpg',
        url: '/learning-hub/lives-of-saints/early-church'
      },
      {
        title: 'Medieval Saints',
        description: 'Saints from the Middle Ages.',
        imageUrl: '/images/learning-hub/medieval-saints.jpg',
        url: '/learning-hub/lives-of-saints/medieval'
      },
      {
        title: 'Modern Saints',
        description: 'Recently canonized and contemporary saints.',
        imageUrl: '/images/learning-hub/modern-saints.jpg',
        url: '/learning-hub/lives-of-saints/modern'
      }
    ]
  }
];

// Helper function to get subcategories for a main category
export function getCategoryBySlug(slug: string) {
  return mainCategories.find(cat => cat.slug === slug);
}

// Original learning categories array (kept for reference)
export const learningCategories: LearningCategory[] = [
  {
    id: 'faith-basics',
    slug: 'faith-basics',
    title: 'Faith Basics',
    description: 'Fundamental teachings of the Catholic faith for beginners and those seeking to deepen their understanding',
    icon: 'BookOpen',
    color: 'from-blue-600 to-blue-500',
    order: 1
  },
  {
    id: 'scripture-study',
    slug: 'scripture-study',
    title: 'Scripture Study',
    description: 'Explore the Word of God through guided Bible study and reflection',
    icon: 'Book',
    color: 'from-green-600 to-green-500',
    order: 2
  },
  {
    id: 'liturgy-sacraments',
    slug: 'liturgy-sacraments',
    title: 'Liturgy & Sacraments',
    description: 'Understanding the sacred liturgy and the seven sacraments of the Catholic Church',
    icon: 'Cross',
    color: 'from-purple-600 to-purple-500',
    order: 3
  },
  {
    id: 'saints-traditions',
    slug: 'saints-traditions',
    title: 'Saints & Traditions',
    description: 'Learn about the saints and the rich traditions of our Catholic heritage',
    icon: 'Star',
    color: 'from-yellow-600 to-yellow-500',
    order: 4
  },
  {
    id: 'spiritual-growth',
    slug: 'spiritual-growth',
    title: 'Spiritual Growth',
    description: 'Resources for deepening your relationship with God and growing in holiness',
    icon: 'Heart',
    color: 'from-red-600 to-red-500',
    order: 5
  },
  {
    id: 'apologetics',
    slug: 'apologetics',
    title: 'Apologetics',
    description: 'Understanding and defending the Catholic faith with reason and love',
    icon: 'Shield',
    color: 'from-indigo-600 to-indigo-500',
    order: 6
  }
];

// CMS DATA SOURCE: Sample Learning Hub Content
export const learningContent: LearningContent[] = [
  {
    id: 'what-is-catholic-faith',
    slug: 'what-is-catholic-faith',
    title: 'What is the Catholic Faith?',
    excerpt: 'A comprehensive introduction to the fundamental beliefs and practices of Catholicism.',
    description: 'Discover the core tenets of Catholic teaching and what it means to be Catholic in today\'s world.',
    content: `
      <h2>The Foundation of Catholic Faith</h2>
      <p>The Catholic faith is built upon the revelation of God through Jesus Christ, preserved and transmitted through Sacred Scripture and Sacred Tradition. At its heart, Catholicism teaches that God is Trinity - Father, Son, and Holy Spirit - and that Jesus Christ is both fully God and fully man.</p>
      
      <h3>Core Beliefs</h3>
      <p>Catholics believe in:</p>
      <ul>
        <li>The Trinity - One God in three persons</li>
        <li>The Incarnation - God became man in Jesus Christ</li>
        <li>The Redemption - Christ's death and resurrection saves us</li>
        <li>The Church - Founded by Christ and guided by the Holy Spirit</li>
        <li>The Sacraments - Seven channels of God's grace</li>
        <li>Eternal life - Life after death with God</li>
      </ul>
      
      <h3>Living the Faith</h3>
      <p>Catholic life involves regular participation in Mass, receiving the sacraments, prayer, works of charity, and following the moral teachings of the Church. The goal is to grow in holiness and help others do the same.</p>
      
      <p>Whether you're new to the faith or seeking to deepen your understanding, the Catholic Church welcomes all who seek truth, meaning, and relationship with God.</p>
    `,
    categoryId: 'faith-basics',
    author: 'Fr Krisz Katona',
    readingTime: 5,
    publishedDate: '2024-01-15',
    tags: ['fundamentals', 'beliefs', 'introduction'],
    difficulty: 'beginner',
    featured: true,
    featuredImage: {
      url: '/images/learning-hub/faith-basics.jpg',
      alt: 'Catholic faith basics - Cross and Bible'
    },
    seo: {
      metaTitle: 'What is the Catholic Faith? | Faith Basics',
      metaDescription: 'Learn about the fundamental beliefs and practices of the Catholic faith in this comprehensive introduction.',
      keywords: ['Catholic faith', 'Catholic beliefs', 'Christianity', 'Trinity', 'Jesus Christ']
    },
    status: 'published'
  },
  {
    id: 'understanding-mass',
    slug: 'understanding-mass',
    title: 'Understanding the Mass',
    excerpt: 'Explore the meaning and structure of the Catholic Mass, the center of our worship life.',
    description: 'A detailed guide to understanding the prayers, rituals, and significance of the Holy Mass.',
    content: `
      <h2>The Holy Sacrifice of the Mass</h2>
      <p>The Mass is the source and summit of Catholic life. It is both a sacrifice and a meal, making present Christ's sacrifice on Calvary and nourishing us with His Body and Blood.</p>
      
      <h3>Structure of the Mass</h3>
      <p>The Mass has four main parts:</p>
      <ol>
        <li><strong>Introductory Rites</strong> - We gather as a community</li>
        <li><strong>Liturgy of the Word</strong> - God speaks to us through Scripture</li>
        <li><strong>Liturgy of the Eucharist</strong> - The bread and wine become Christ's Body and Blood</li>
        <li><strong>Concluding Rites</strong> - We are sent forth to serve</li>
      </ol>
      
      <h3>Active Participation</h3>
      <p>We are called to participate actively in the Mass through our responses, singing, prayer, and interior disposition. Each part of the Mass has deep meaning and connects us to the universal Church.</p>
      
      <p>Understanding the Mass helps us appreciate this great gift and participate more fully in our Catholic faith.</p>
    `,
    categoryId: 'liturgy-sacraments',
    author: 'Fr Krisz Katona',
    readingTime: 7,
    publishedDate: '2024-01-20',
    tags: ['Mass', 'liturgy', 'Eucharist', 'worship'],
    difficulty: 'beginner',
    featured: true,
    featuredImage: {
      url: '/images/learning-hub/mass-basics.jpg',
      alt: 'Understanding the Catholic Mass - Altar and sanctuary'
    },
    status: 'published'
  },
  {
    id: 'reading-scripture',
    slug: 'reading-scripture',
    title: 'How to Read Scripture',
    excerpt: 'Practical guidance for approaching the Bible with understanding and faith.',
    description: 'Learn effective methods for reading and understanding Sacred Scripture in your daily life.',
    content: `
      <h2>Approaching Sacred Scripture</h2>
      <p>The Bible is God's word written for us. Reading Scripture regularly nourishes our faith and helps us know God better. But where do we start?</p>
      
      <h3>Getting Started</h3>
      <p>For beginners, consider starting with:</p>
      <ul>
        <li>The Gospel of Mark - shortest and most direct Gospel</li>
        <li>The Book of Psalms - prayers for every situation</li>
        <li>The Acts of the Apostles - the early Church's story</li>
      </ul>
      
      <h3>Methods of Reading</h3>
      <p><strong>Lectio Divina</strong> is a traditional Catholic way of reading Scripture:</p>
      <ol>
        <li><em>Lectio</em> (Reading) - Read the passage slowly</li>
        <li><em>Meditatio</em> (Meditation) - Reflect on the meaning</li>
        <li><em>Oratio</em> (Prayer) - Respond to God</li>
        <li><em>Contemplatio</em> (Contemplation) - Rest in God's presence</li>
      </ol>
      
      <h3>Tools for Understanding</h3>
      <p>Use a good Catholic Bible with notes, read the context, and don't hesitate to consult commentaries or ask questions. The Church's teaching helps us understand Scripture correctly.</p>
    `,
    categoryId: 'scripture-study',
    author: 'Parish Team',
    readingTime: 6,
    publishedDate: '2024-01-25',
    tags: ['Bible', 'Scripture', 'reading', 'Lectio Divina'],
    difficulty: 'beginner',
    featured: false,
    status: 'published'
  }
];

// Helper functions for Learning Hub CMS operations
export function getLearningCategories(): LearningCategory[] {
  return learningCategories.sort((a, b) => a.order - b.order);
}

export function getLearningContentByCategory(categoryId: string): LearningContent[] {
  return learningContent
    .filter(content => content.categoryId === categoryId && content.status === 'published')
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getLearningContentBySlug(slug: string): LearningContent | undefined {
  return learningContent.find(content => content.slug === slug && content.status === 'published');
}

export function getFeaturedLearningContent(): LearningContent[] {
  return learningContent
    .filter(content => content.featured && content.status === 'published')
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getLearningCategoryBySlug(slug: string): LearningCategory | undefined {
  return learningCategories.find(category => category.slug === slug);
}

export function searchLearningContent(query: string): LearningContent[] {
  const lowercaseQuery = query.toLowerCase();
  return learningContent.filter(content => 
    content.status === 'published' && (
      content.title.toLowerCase().includes(lowercaseQuery) ||
      content.description.toLowerCase().includes(lowercaseQuery) ||
      content.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      content.content.toLowerCase().includes(lowercaseQuery)
    )
  );
}