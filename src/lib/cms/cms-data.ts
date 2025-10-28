// CMS Data structure for file-based content management
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Generic file operations
export function readJsonFile(filename: string) {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}

export function writeJsonFile(filename: string, data: any) {
  try {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
}

// News Articles
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  published: boolean;
  slug: string;
}

export function getNewsArticles(): NewsArticle[] {
  const articles = readJsonFile('news.json');
  return articles || [];
}

export function saveNewsArticles(articles: NewsArticle[]) {
  return writeJsonFile('news.json', articles);
}

// Events
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  category: string;
  image?: string;
  contactPerson?: string;
  contactEmail?: string;
  maxAttendees?: number;
  registrationRequired: boolean;
  published: boolean;
}

export function getEvents(): Event[] {
  const events = readJsonFile('events.json');
  return events || [];
}

export function saveEvents(events: Event[]) {
  return writeJsonFile('events.json', events);
}

// Mass Times
export interface MassTime {
  day: string;
  services: {
    time: string;
    type: string;
    description: string;
    language?: string;
    celebrant?: string;
  }[];
}

export function getMassTimes(): MassTime[] {
  const massTimes = readJsonFile('mass-times.json');
  return massTimes || [];
}

export function saveMassTimes(massTimes: MassTime[]) {
  return writeJsonFile('mass-times.json', massTimes);
}

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

export function getWebsiteSettings(): WebsiteSettings {
  const settings = readJsonFile('settings.json');
  return settings || getDefaultSettings();
}

export function saveWebsiteSettings(settings: WebsiteSettings) {
  return writeJsonFile('settings.json', settings);
}

function getDefaultSettings(): WebsiteSettings {
  return {
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
      charityNumber: "1234567",
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
      announcements: [],
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
}

// Parish Groups
export interface ParishGroup {
  id: string;
  name: string;
  description: string;
  category: string;
  meetingTime: string;
  location: string;
  contact: string;
  contactPhone?: string;
  email?: string;
  active: boolean;
  newMembersWelcome: boolean;
  ageRange?: string;
  note?: string;
}

export function getParishGroups(): ParishGroup[] {
  const groups = readJsonFile('parish-groups.json');
  return groups || [];
}

export function saveParishGroups(groups: ParishGroup[]) {
  return writeJsonFile('parish-groups.json', groups);
}

// Gallery Albums
export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  alt: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  images: GalleryImage[];
  featured: boolean;
  published: boolean;
}

export function getGalleryAlbums(): GalleryAlbum[] {
  const albums = readJsonFile('gallery.json');
  return albums || [];
}

export function saveGalleryAlbums(albums: GalleryAlbum[]) {
  return writeJsonFile('gallery.json', albums);
}

// Utility functions
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// **BLOG SYSTEM DATA MODELS**
// Comprehensive blog structure for St Saviour's Catholic Church

// Blog Category with hierarchical support
export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  parentId?: string;
  color: string;
  icon?: string;
  seoTitle?: string;
  seoDescription?: string;
  displayOrder: number;
  postCount: number;
  isActive: boolean;
  pastoralContext?: 'liturgical' | 'pastoral' | 'community' | 'educational' | 'social';
}

// Blog Tag for content classification
export interface BlogTag {
  id: string;
  slug: string;
  name: string;
  description?: string;
  color?: string;
  postCount: number;
  isActive: boolean;
}

// Blog Author (priests, deacons, parish staff)
export interface BlogAuthor {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  email?: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
  isActive: boolean;
  postCount: number;
  isPrimaryAuthor: boolean;
}

// Blog Post with comprehensive metadata
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  
  // Authoring
  authorId: string;
  coAuthors?: string[];
  
  // Categorization
  categoryId: string;
  tags: string[];
  
  // Media
  featuredImage?: {
    url: string;
    alt: string;
    caption?: string;
    credits?: string;
  };
  gallery?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  
  // Publishing
  status: 'draft' | 'review' | 'scheduled' | 'published' | 'archived';
  publishedAt?: string;
  scheduledFor?: string;
  lastModified: string;
  version: number;
  
  // SEO & Social
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalUrl?: string;
    noIndex?: boolean;
  };
  socialMedia?: {
    title?: string;
    description?: string;
    image?: string;
  };
  
  // Content Metadata
  readTime: number;
  wordCount: number;
  language: 'en' | 'es' | 'pl' | 'la';
  
  // Pastoral Context
  liturgicalSeason?: 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';
  feastDay?: string;
  scriptureReferences?: Array<{
    book: string;
    chapter: number;
    verses: string;
    translation?: string;
  }>;
  
  // Engagement
  isSticky: boolean;
  isFeatured: boolean;
  allowComments: boolean;
  commentCount: number;
  viewCount: number;
  
  // Content Relationships
  relatedPosts?: string[];
  seriesId?: string;
  seriesOrder?: number;
  
  // Parish-specific
  massReading?: boolean;
  homily?: boolean;
  announcementLevel?: 'parish' | 'diocese' | 'universal';
}

// Blog Series for multi-part content
export interface BlogSeries {
  id: string;
  slug: string;
  title: string;
  description: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  authorId: string;
  categoryId: string;
  postIds: string[];
  isComplete: boolean;
  publishedAt: string;
  seo: {
    title?: string;
    description?: string;
  };
}

// Blog Comment system
export interface BlogComment {
  id: string;
  postId: string;
  parentId?: string;
  author: {
    name: string;
    email: string;
    website?: string;
  };
  content: string;
  status: 'pending' | 'approved' | 'spam' | 'rejected';
  submittedAt: string;
  approvedAt?: string;
  moderatedBy?: string;
  ipAddress?: string;
}

// Blog Settings
export interface BlogSettings {
  general: {
    title: string;
    tagline: string;
    postsPerPage: number;
    defaultCategory: string;
    defaultAuthor: string;
    allowComments: boolean;
    moderateComments: boolean;
    requireApproval: boolean;
  };
  seo: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    defaultImage: string;
    twitterHandle?: string;
    facebookAppId?: string;
  };
  social: {
    enableSharing: boolean;
    platforms: Array<'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'email'>;
  };
  rss: {
    enabled: boolean;
    includeFullContent: boolean;
    maxItems: number;
  };
}

// ===========================
// SACRAMENT TEMPLATE SYSTEM
// ===========================

// Individual sacrament identifiers - matches our 7 sacrament pages
export type SacramentType =
  | 'baptism'
  | 'confirmation'
  | 'eucharist'
  | 'confession'
  | 'matrimony'
  | 'holy-orders'
  | 'anointing-of-the-sick';

// Block content types for different sections
export type ContentBlockType =
  | 'hero'
  | 'description'
  | 'requirements'
  | 'preparation'
  | 'scripture'
  | 'contact'
  | 'schedule'
  | 'faq'
  | 'preparation-checklist'
  | 'effects'
  | 'symbols';

// Icon mapping for content blocks - using Heroicons
export type IconType =
  | 'heart'
  | 'calendar'
  | 'phone'
  | 'users'
  | 'book-open'
  | 'check-circle'
  | 'droplets'
  | 'sparkles'
  | 'church'
  | 'academic-cap'
  | 'clock'
  | 'document'
  | 'lightbulb'
  | 'currency-pound'
  | 'info-circle';

// Content block interface - flexible system for different types of content
export interface SacramentContentBlock {
  id: string;
  type: ContentBlockType;
  title: string;
  subtitle?: string;
  content: string; // HTML content for flexibility
  icon?: IconType;
  bgColor?: 'white' | 'gray' | 'gold' | 'navy';
  order: number; // For custom ordering of blocks
  visible: boolean;

  // Optional fields for specific block types
  scripture?: {
    verse: string;
    reference: string;
    commentary?: string;
  };

  checklist?: Array<{
    id: string;
    item: string;
    required: boolean;
    note?: string;
  }>;

  schedule?: Array<{
    day: string;
    time: string;
    type: string;
    location?: string;
    contact?: string;
  }>;

  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

// Main sacrament page data structure
export interface SacramentPage {
  // Core identification
  sacrament: SacramentType;
  slug: string; // URL slug (e.g., 'baptism', 'the-eucharist')

  // SEO and Meta Data
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl?: string;
    ogImage?: string;
  };

  // Hero Section Data
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    primaryCTA: {
      text: string;
      href: string;
      ariaLabel: string;
    };
    secondaryCTA?: {
      text: string;
      href: string;
      ariaLabel: string;
    };
  };

  // Flexible content blocks system
  contentBlocks: SacramentContentBlock[];

  // Contact and preparation info
  contact: {
    preparationRequired: boolean;
    preparationDuration?: string; // e.g., "6 weeks", "3 months"
    contactPerson?: string;
    contactPhone?: string;
    contactEmail?: string;
    bookingRequired: boolean;
    bookingUrl?: string;
    minimumNotice?: string; // e.g., "6 months", "2 weeks"
  };

  // Related content
  relatedSacraments?: SacramentType[];
  relatedArticles?: string[]; // Blog post IDs

  // Page metadata
  lastUpdated: string;
  version: number;
  status: 'draft' | 'published' | 'archived';
}

// Collection of all sacrament pages
export interface SacramentCollection {
  pages: SacramentPage[];
  navigation: {
    title: string;
    description: string;
    order: SacramentType[];
  };
  sharedContent: {
    generalContact: {
      phone: string;
      email: string;
      officeHours: string;
    };
    commonFaqs: Array<{
      question: string;
      answer: string;
      applicableTo: SacramentType[];
    }>;
  };
}

// Template configuration for generating pages
export interface SacramentTemplateConfig {
  useSharedHero: boolean;
  defaultBlocks: ContentBlockType[];
  requiredBlocks: ContentBlockType[];
  blockDefaults: {
    [K in ContentBlockType]?: Partial<SacramentContentBlock>;
  };
  validation: {
    requireDescription: boolean;
    requireContact: boolean;
    minBlocks: number;
    maxBlocks: number;
  };
}

// CMS Functions for Blog Management
export function getBlogPosts(): BlogPost[] {
  const posts = readJsonFile('blog-posts.json');
  return posts || [];
}

export function saveBlogPosts(posts: BlogPost[]) {
  return writeJsonFile('blog-posts.json', posts);
}

export function getBlogCategories(): BlogCategory[] {
  const categories = readJsonFile('blog-categories.json');
  return categories || [];
}

export function saveBlogCategories(categories: BlogCategory[]) {
  return writeJsonFile('blog-categories.json', categories);
}

export function getBlogTags(): BlogTag[] {
  const tags = readJsonFile('blog-tags.json');
  return tags || [];
}

export function saveBlogTags(tags: BlogTag[]) {
  return writeJsonFile('blog-tags.json', tags);
}

export function getBlogAuthors(): BlogAuthor[] {
  const authors = readJsonFile('blog-authors.json');
  return authors || [];
}

export function saveBlogAuthors(authors: BlogAuthor[]) {
  return writeJsonFile('blog-authors.json', authors);
}

export function getBlogSeries(): BlogSeries[] {
  const series = readJsonFile('blog-series.json');
  return series || [];
}

export function saveBlogSeries(series: BlogSeries[]) {
  return writeJsonFile('blog-series.json', series);
}

export function getBlogComments(): BlogComment[] {
  const comments = readJsonFile('blog-comments.json');
  return comments || [];
}

export function saveBlogComments(comments: BlogComment[]) {
  return writeJsonFile('blog-comments.json', comments);
}

export function getBlogSettings(): BlogSettings {
  const settings = readJsonFile('blog-settings.json');
  return settings || getDefaultBlogSettings();
}

export function saveBlogSettings(settings: BlogSettings) {
  return writeJsonFile('blog-settings.json', settings);
}

function getDefaultBlogSettings(): BlogSettings {
  return {
    general: {
      title: "St Saviour's Parish Blog",
      tagline: "Faith, Community, and Spiritual Growth",
      postsPerPage: 10,
      defaultCategory: "parish-life",
      defaultAuthor: "fr-krisz-katona",
      allowComments: true,
      moderateComments: true,
      requireApproval: true
    },
    seo: {
      siteName: "St Saviour's Catholic Church",
      defaultTitle: "Parish Blog | St Saviour's Catholic Church",
      defaultDescription: "Latest news, reflections, and updates from St Saviour's Catholic Church in Lewisham",
      defaultImage: "/images/blog/default-share-image.jpg",
      twitterHandle: "@stsaviourslewisham"
      // facebookAppId omitted as it's optional and undefined
    },
    social: {
      enableSharing: true,
      platforms: ['facebook', 'twitter', 'email', 'whatsapp']
    },
    rss: {
      enabled: true,
      includeFullContent: false,
      maxItems: 20
    }
  };
}

// Initialize default data if files don't exist
export function initializeDefaultData() {
  ensureDataDir();
  
  // Initialize news if doesn't exist
  if (!readJsonFile('news.json')) {
    const defaultNews: NewsArticle[] = [
      {
        id: generateId(),
        title: "Welcome to Our New Website",
        excerpt: "We're excited to launch our new parish website with enhanced features for our community.",
        content: "We're delighted to introduce our new parish website, designed to better serve our community and provide easy access to information about our services, events, and parish life. The new site features improved accessibility, mobile responsiveness, and user-friendly navigation.",
        image: "/images/news/new-website.jpg",
        category: "Announcement",
        date: new Date().toISOString().split('T')[0] || new Date().toISOString().substring(0, 10),
        readTime: 2,
        author: "Parish Office",
        published: true,
        slug: "welcome-to-our-new-website"
      }
    ];
    saveNewsArticles(defaultNews);
  }

  // Initialize events if doesn't exist
  if (!readJsonFile('events.json')) {
    const defaultEvents: Event[] = [
      {
        id: generateId(),
        title: "Sunday Mass",
        description: "Join us for our regular Sunday Mass",
        date: "2025-07-06",
        time: "10:00 AM",
        duration: "1 hour",
        location: "Main Church",
        category: "Mass",
        registrationRequired: false,
        published: true
      }
    ];
    saveEvents(defaultEvents);
  }

  // Initialize blog system if doesn't exist
  initializeBlogDefaults();

  // Initialize settings if doesn't exist
  if (!readJsonFile('settings.json')) {
    saveWebsiteSettings(getDefaultSettings());
  }

  // Initialize sacrament data if doesn't exist
  initializeSacramentData();
}

// Initialize default sacrament data
function initializeSacramentData() {
  // Initialize sacrament collection if doesn't exist
  if (!readJsonFile('sacraments.json')) {
    const defaultCollection = getDefaultSacramentCollection();

    // Create default pages for all 7 sacraments
    const sacramentTypes: SacramentType[] = [
      'baptism', 'confirmation', 'eucharist', 'confession',
      'matrimony', 'holy-orders', 'anointing-of-the-sick'
    ];

    defaultCollection.pages = sacramentTypes.map(sacrament =>
      createSacramentPageTemplate(sacrament)
    );

    saveSacramentCollection(defaultCollection);
  }

  // Initialize template config if doesn't exist
  if (!readJsonFile('sacrament-template-config.json')) {
    saveSacramentTemplateConfig(getDefaultTemplateConfig());
  }
}

// ===========================
// SACRAMENT CMS FUNCTIONS
// ===========================

// Get all sacrament pages
export function getSacramentCollection(): SacramentCollection {
  const data = readJsonFile('sacraments.json');
  return data || getDefaultSacramentCollection();
}

// Save sacrament collection
export function saveSacramentCollection(collection: SacramentCollection) {
  return writeJsonFile('sacraments.json', collection);
}

// Get individual sacrament page by type
export function getSacramentPage(sacrament: SacramentType): SacramentPage | null {
  const collection = getSacramentCollection();
  return collection.pages.find(page => page.sacrament === sacrament) || null;
}

// Save individual sacrament page
export function saveSacramentPage(page: SacramentPage) {
  const collection = getSacramentCollection();
  const index = collection.pages.findIndex(p => p.sacrament === page.sacrament);

  if (index >= 0) {
    collection.pages[index] = page;
  } else {
    collection.pages.push(page);
  }

  return saveSacramentCollection(collection);
}

// Get sacrament template configuration
export function getSacramentTemplateConfig(): SacramentTemplateConfig {
  const config = readJsonFile('sacrament-template-config.json');
  return config || getDefaultTemplateConfig();
}

// Save sacrament template configuration
export function saveSacramentTemplateConfig(config: SacramentTemplateConfig) {
  return writeJsonFile('sacrament-template-config.json', config);
}

// Helper function to generate default sacrament collection
function getDefaultSacramentCollection(): SacramentCollection {
  return {
    pages: [], // Will be populated with individual sacrament pages
    navigation: {
      title: "The Seven Sacraments",
      description: "Discover the sacred mysteries through which God imparts his grace",
      order: ['baptism', 'confirmation', 'eucharist', 'confession', 'matrimony', 'holy-orders', 'anointing-of-the-sick']
    },
    sharedContent: {
      generalContact: {
        phone: "020 8852 7411",
        email: "parish@saintsaviours.org.uk",
        officeHours: "Monday - Friday: 9:00 AM - 5:00 PM"
      },
      commonFaqs: [
        {
          question: "Do I need to book an appointment?",
          answer: "Yes, please contact the parish office to schedule your preparation meetings and the sacrament itself.",
          applicableTo: ['baptism', 'confirmation', 'matrimony', 'holy-orders']
        },
        {
          question: "Is there preparation required?",
          answer: "Most sacraments require some form of preparation. Please contact us to learn about the specific requirements.",
          applicableTo: ['baptism', 'confirmation', 'matrimony', 'holy-orders']
        }
      ]
    }
  };
}

// Helper function to generate default template configuration
function getDefaultTemplateConfig(): SacramentTemplateConfig {
  return {
    useSharedHero: false,
    defaultBlocks: ['description', 'requirements', 'preparation', 'contact'],
    requiredBlocks: ['description', 'contact'],
    blockDefaults: {
      description: {
        bgColor: 'white',
        order: 1,
        visible: true
      },
      requirements: {
        bgColor: 'gray',
        order: 2,
        visible: true,
        icon: 'check-circle'
      },
      preparation: {
        bgColor: 'white',
        order: 3,
        visible: true,
        icon: 'academic-cap'
      },
      contact: {
        bgColor: 'gold',
        order: 10,
        visible: true,
        icon: 'phone'
      }
    },
    validation: {
      requireDescription: true,
      requireContact: true,
      minBlocks: 2,
      maxBlocks: 10
    }
  };
}

// Helper function to generate a blank sacrament page template
export function createSacramentPageTemplate(sacrament: SacramentType): SacramentPage {
  const slugMap: Record<SacramentType, string> = {
    'baptism': 'baptism',
    'confirmation': 'confirmation',
    'eucharist': 'the-eucharist',
    'confession': 'confession',
    'matrimony': 'matrimony',
    'holy-orders': 'holy-orders',
    'anointing-of-the-sick': 'anointing-of-the-sick'
  };

  const titleMap: Record<SacramentType, string> = {
    'baptism': 'Baptism',
    'confirmation': 'Confirmation',
    'eucharist': 'The Eucharist',
    'confession': 'Confession',
    'matrimony': 'Matrimony',
    'holy-orders': 'Holy Orders',
    'anointing-of-the-sick': 'Anointing of the Sick'
  };

  return {
    sacrament,
    slug: slugMap[sacrament],
    seo: {
      title: `${titleMap[sacrament]} - St Saviour's Catholic Church`,
      description: `Learn about the sacrament of ${titleMap[sacrament]} at St Saviour's Catholic Church in Lewisham.`,
      keywords: [titleMap[sacrament].toLowerCase(), 'catholic', 'sacrament', 'church', 'lewisham'],
    },
    hero: {
      title: titleMap[sacrament],
      subtitle: "A Sacred Mystery",
      description: `Discover the grace and meaning of ${titleMap[sacrament]} in our faith community.`,
      backgroundImage: `/images/sacraments/${slugMap[sacrament]}.jpg`,
      primaryCTA: {
        text: "Learn More",
        href: `#${sacrament}-info`,
        ariaLabel: `Learn more about ${titleMap[sacrament]}`
      }
    },
    contentBlocks: [
      {
        id: `${sacrament}-description`,
        type: 'description',
        title: `What is ${titleMap[sacrament]}?`,
        content: `<p>Add description of ${titleMap[sacrament]} here.</p>`,
        order: 1,
        visible: true,
        bgColor: 'white'
      },
      {
        id: `${sacrament}-contact`,
        type: 'contact',
        title: "Contact Us",
        content: "<p>To learn more or to schedule preparation, please contact the parish office.</p>",
        order: 10,
        visible: true,
        bgColor: 'gold',
        icon: 'phone'
      }
    ],
    contact: {
      preparationRequired: true,
      bookingRequired: true,
      contactPhone: "020 8852 7411",
      contactEmail: "parish@saintsaviours.org.uk"
    },
    lastUpdated: new Date().toISOString(),
    version: 1,
    status: 'draft'
  };
}

// Initialize default blog data
function initializeBlogDefaults() {
  // Initialize blog categories
  if (!readJsonFile('blog-categories.json')) {
    const defaultCategories: BlogCategory[] = [
      {
        id: 'parish-life',
        slug: 'parish-life',
        name: 'Parish Life',
        description: 'Updates and news from our parish community',
        color: '#3B82F6',
        seoTitle: 'Parish Life | St Saviour\'s Blog',
        seoDescription: 'Latest updates and news from St Saviour\'s parish community',
        displayOrder: 1,
        postCount: 0,
        isActive: true,
        pastoralContext: 'community'
      },
      {
        id: 'spiritual-reflections',
        slug: 'spiritual-reflections',
        name: 'Spiritual Reflections',
        description: 'Homilies, meditations, and spiritual insights',
        color: '#7C3AED',
        seoTitle: 'Spiritual Reflections | St Saviour\'s Blog',
        seoDescription: 'Homilies, meditations, and spiritual insights from our parish clergy',
        displayOrder: 2,
        postCount: 0,
        isActive: true,
        pastoralContext: 'pastoral'
      },
      {
        id: 'liturgical-seasons',
        slug: 'liturgical-seasons',
        name: 'Liturgical Seasons',
        description: 'Reflections on Advent, Christmas, Lent, Easter, and Ordinary Time',
        color: '#059669',
        seoTitle: 'Liturgical Seasons | St Saviour\'s Blog',
        seoDescription: 'Reflections and insights for the liturgical seasons of the Church',
        displayOrder: 3,
        postCount: 0,
        isActive: true,
        pastoralContext: 'liturgical'
      },
      {
        id: 'faith-formation',
        slug: 'faith-formation',
        name: 'Faith Formation',
        description: 'Educational content about Catholic faith and teaching',
        color: '#DC2626',
        seoTitle: 'Faith Formation | St Saviour\'s Blog',
        seoDescription: 'Educational content about Catholic faith, doctrine, and teaching',
        displayOrder: 4,
        postCount: 0,
        isActive: true,
        pastoralContext: 'educational'
      },
      {
        id: 'social-justice',
        slug: 'social-justice',
        name: 'Social Justice',
        description: 'Catholic social teaching and community outreach',
        color: '#EA580C',
        seoTitle: 'Social Justice | St Saviour\'s Blog',
        seoDescription: 'Catholic social teaching and our community outreach efforts',
        displayOrder: 5,
        postCount: 0,
        isActive: true,
        pastoralContext: 'social'
      }
    ];
    saveBlogCategories(defaultCategories);
  }

  // Initialize blog authors
  if (!readJsonFile('blog-authors.json')) {
    const defaultAuthors: BlogAuthor[] = [
      {
        id: 'fr-krisz-katona',
        slug: 'fr-krisz-katona',
        name: 'Fr Krisz Katona',
        title: 'Parish Priest',
        bio: 'Father Krisz is the Parish Priest of St Saviour\'s Catholic Church, bringing pastoral care and spiritual guidance to our community.',
        avatar: '/images/authors/fr-krisz.jpg',
        isActive: true,
        postCount: 0,
        isPrimaryAuthor: true
      },
      {
        id: 'revd-carlos-lozano',
        slug: 'revd-carlos-lozano',
        name: 'Revd Carlos Lozano',
        title: 'Assistant Priest',
        bio: 'Revd Carlos serves as Assistant Priest, supporting the pastoral ministry and spiritual life of our parish.',
        avatar: '/images/authors/revd-carlos.jpg',
        isActive: true,
        postCount: 0,
        isPrimaryAuthor: false
      },
      {
        id: 'parish-office',
        slug: 'parish-office',
        name: 'Parish Office',
        title: 'Parish Administration',
        bio: 'Updates and announcements from the St Saviour\'s Parish Office team.',
        avatar: '/images/authors/parish-office.jpg',
        isActive: true,
        postCount: 0,
        isPrimaryAuthor: false
      }
    ];
    saveBlogAuthors(defaultAuthors);
  }

  // Initialize blog settings
  if (!readJsonFile('blog-settings.json')) {
    saveBlogSettings(getDefaultBlogSettings());
  }

  // Initialize empty arrays for other blog data
  if (!readJsonFile('blog-posts.json')) {
    saveBlogPosts([]);
  }
  if (!readJsonFile('blog-tags.json')) {
    saveBlogTags([]);
  }
  if (!readJsonFile('blog-series.json')) {
    saveBlogSeries([]);
  }
  if (!readJsonFile('blog-comments.json')) {
    saveBlogComments([]);
  }
}