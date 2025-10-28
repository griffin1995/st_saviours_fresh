/**
 * Prayer Hub CMS - Catholic Prayer Content Management
 * 
 * Integrated with Learning Hub for comprehensive spiritual content
 * CMS DATA SOURCE: Catholic prayer content with theological accuracy
 */

import { 
  getPrayersByCategory,
  getFeaturedPrayers,
  getPrayerBySlug,
  getSeasonalPrayers,
  getPrayersForOccasion,
  searchPrayers,
  getRelatedPrayers,
  getPrayerCategories,
  getPrayerRequestCategories,
  getPrayerIntentions,
  getPrayerLearningConnections,
  getCurrentSeasonalPrayers,
  getPrayerCategoryImage,
  getPrayerHubPageImage,
  type Prayer,
  type PrayerCategory,
  type PrayerRequestCategory,
  type PrayerIntention
} from './cms-content';

// Advanced Prayer Content Structure
export interface PrayerCollection {
  id: string;
  slug: string;
  title: string;
  description: string;
  prayers: string[]; // Prayer IDs
  category: string;
  type: 'novena' | 'rosary' | 'stations' | 'litany' | 'themed';
  duration?: string;
  instructions?: string;
  image?: {
    src: string;
    alt: string;
  };
  learningConnections?: string[];
  featured: boolean;
}

// Prayer Session for guided prayer experiences
export interface PrayerSession {
  id: string;
  title: string;
  description: string;
  type: 'guided' | 'contemplative' | 'intercessory' | 'adoration';
  duration: number; // in minutes
  prayers: Array<{
    prayerId: string;
    order: number;
    instructions?: string;
    pause?: number; // seconds
  }>;
  audioGuide?: string;
  reflectionQuestions?: string[];
  scriptureReadings?: Array<{
    book: string;
    chapter: number;
    verses: string;
    text: string;
  }>;
  background?: {
    music?: string;
    ambiance?: string;
  };
}

// Liturgical Calendar Integration
export interface LiturgicalDay {
  date: string;
  season: 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';
  week: number;
  color: 'green' | 'purple' | 'white' | 'red' | 'rose' | 'gold';
  rank: 'weekday' | 'memorial' | 'feast' | 'solemnity';
  celebration?: string;
  recommendedPrayers: string[];
  massReadings?: {
    first: string;
    psalm: string;
    second?: string;
    gospel: string;
  };
}

// Community Prayer Features
export interface CommunityPrayerEvent {
  id: string;
  title: string;
  description: string;
  type: 'rosary' | 'adoration' | 'novena' | 'stations' | 'special';
  startDate: string;
  endDate?: string;
  schedule: Array<{
    day: string;
    time: string;
    prayers: string[];
  }>;
  participants: number;
  intentions: string[];
  leader?: string;
  virtual: boolean;
  physical: boolean;
}

// CMS DATA SOURCE: Prayer collections with Catholic devotional structure
export const prayerCollections: PrayerCollection[] = [
  {
    id: 'holy-rosary',
    slug: 'holy-rosary',
    title: 'The Holy Rosary',
    description: 'Complete guide to praying the Rosary with all mysteries',
    prayers: ['our-father', 'hail-mary', 'glory-be', 'fatima-prayer'],
    category: 'marian-prayers',
    type: 'rosary',
    duration: '20-30 minutes',
    instructions: 'Begin with the Sign of the Cross and Apostles\' Creed. Pray while meditating on the mysteries.',
    image: {
      src: '/images/prayers/rosary-collection.jpg',
      alt: 'Holy Rosary with prayer beads'
    },
    learningConnections: ['creed-explained'],
    featured: true
  },
  {
    id: 'stations-of-cross',
    slug: 'stations-of-cross',
    title: 'Stations of the Cross',
    description: 'Traditional Lenten devotion following Christ\'s passion',
    prayers: ['stations-opening', 'stations-conclusion'],
    category: 'seasonal-prayers',
    type: 'stations',
    duration: '30-45 minutes',
    instructions: 'Move from station to station, reading the meditation and prayer at each.',
    featured: true
  },
  {
    id: 'divine-mercy-novena',
    slug: 'divine-mercy-novena',
    title: 'Divine Mercy Novena',
    description: 'Nine-day prayer devotion to Divine Mercy',
    prayers: ['divine-mercy-chaplet'],
    category: 'devotional',
    type: 'novena',
    duration: '9 days',
    featured: false
  }
];

// CMS DATA SOURCE: Guided prayer sessions
export const prayerSessions: PrayerSession[] = [
  {
    id: 'morning-prayer-session',
    title: 'Morning Prayer & Reflection',
    description: 'Start your day with prayer and scripture reflection',
    type: 'guided',
    duration: 15,
    prayers: [
      {
        prayerId: 'morning-offering',
        order: 1,
        instructions: 'Pray slowly, offering your day to God'
      },
      {
        prayerId: 'our-father',
        order: 2,
        pause: 30
      }
    ],
    reflectionQuestions: [
      'How can I serve God today?',
      'What challenges might I face and how can prayer help?'
    ]
  },
  {
    id: 'eucharistic-adoration',
    title: 'Eucharistic Adoration Session',
    description: 'Contemplative prayer before the Blessed Sacrament',
    type: 'adoration',
    duration: 30,
    prayers: [
      {
        prayerId: 'tantum-ergo',
        order: 1
      }
    ],
    scriptureReadings: [
      {
        book: 'John',
        chapter: 6,
        verses: '51-58',
        text: 'I am the living bread that came down from heaven...'
      }
    ]
  }
];

// CMS DATA SOURCE: Liturgical calendar integration
export function getCurrentLiturgicalDay(): LiturgicalDay {
  const today = new Date();
  // This would integrate with a proper liturgical calendar API
  // For now, providing a simple example
  return {
    date: today.toISOString().split('T')[0] || today.toISOString().substring(0, 10),
    season: 'ordinary',
    week: 1,
    color: 'green',
    rank: 'weekday',
    recommendedPrayers: ['our-father', 'hail-mary']
  };
}

// Helper functions for Prayer Hub operations
export function getPrayerCollectionBySlug(slug: string): PrayerCollection | undefined {
  return prayerCollections.find(collection => collection.slug === slug);
}

export function getFeaturedCollections(): PrayerCollection[] {
  return prayerCollections.filter(collection => collection.featured);
}

export function getPrayerSessionById(id: string): PrayerSession | undefined {
  return prayerSessions.find(session => session.id === id);
}

export function getPrayersByDifficulty(difficulty: 'simple' | 'moderate' | 'advanced'): Prayer[] {
  // This would filter prayers by difficulty from the main CMS
  return getFeaturedPrayers().filter(prayer => 
    // Assuming difficulty is available on prayer object
    (prayer as any).difficulty === difficulty
  );
}

// Learning Hub Integration
export function getPrayerLearningPathways(prayerId: string): any[] {
  const connections = getPrayerLearningConnections(prayerId);
  // This would fetch related learning content
  return connections.map(connectionId => ({
    id: connectionId,
    title: `Learning about ${connectionId}`,
    type: 'article'
  }));
}

// Advanced Prayer Analytics (for future features)
export interface PrayerAnalytics {
  totalPrayers: number;
  categoryCounts: Record<string, number>;
  popularPrayers: string[];
  seasonalTrends: Record<string, number>;
  userEngagement: {
    favorites: number;
    shares: number;
    requests: number;
  };
}

export function getPrayerAnalytics(): PrayerAnalytics {
  const categories = getPrayerCategories();
  const prayers = getFeaturedPrayers();
  
  return {
    totalPrayers: prayers.length,
    categoryCounts: categories.reduce((acc, category) => {
      acc[category.id] = getPrayersByCategory(category.id).length;
      return acc;
    }, {} as Record<string, number>),
    popularPrayers: prayers.slice(0, 5).map(p => p.id),
    seasonalTrends: {
      'advent': getSeasonalPrayers('advent').length,
      'lent': getSeasonalPrayers('lent').length,
      'easter': getSeasonalPrayers('easter').length
    },
    userEngagement: {
      favorites: 0,
      shares: 0,
      requests: 0
    }
  };
}

// Prayer Request Integration with CMS
export interface ExtendedPrayerRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  submittedBy: string;
  isAnonymous: boolean;
  isPublic: boolean;
  status: 'pending' | 'approved' | 'praying' | 'completed';
  submittedDate: string;
  prayerCount: number;
  relatedPrayers?: string[];
  pastoralNotes?: string;
  massIntentionIncluded?: boolean;
}

// Multi-language Prayer Support
export function getPrayersByLanguage(language: 'en' | 'es' | 'la' | 'pl'): Prayer[] {
  return getFeaturedPrayers().filter(prayer => 
    (prayer as any).language === language
  );
}

// Liturgical Season Helper
export function getSeasonalPrayerRecommendations(): {
  season: string;
  prayers: Prayer[];
  description: string;
} {
  const currentPrayers = getCurrentSeasonalPrayers();
  const today = new Date();
  const month = today.getMonth() + 1;
  
  let season = 'Ordinary Time';
  let description = 'Prayers for growing in everyday holiness';
  
  if (month === 12 || month === 1) {
    season = 'Christmas Season';
    description = 'Prayers celebrating the Incarnation of our Lord';
  } else if (month >= 2 && month <= 4) {
    season = 'Lenten Season';
    description = 'Prayers for penance, fasting, and preparation';
  } else if (month >= 4 && month <= 6) {
    season = 'Easter Season';
    description = 'Prayers of joy and resurrection celebration';
  }
  
  return {
    season,
    prayers: currentPrayers,
    description
  };
}

// Export main CMS functions for Prayer Hub usage
export {
  // Prayer Content
  getPrayersByCategory,
  getFeaturedPrayers,
  getPrayerBySlug,
  getSeasonalPrayers,
  getPrayersForOccasion,
  searchPrayers,
  getRelatedPrayers,
  
  // Prayer Categories
  getPrayerCategories,
  getPrayerRequestCategories,
  getPrayerIntentions,
  
  // Integration
  getPrayerLearningConnections,
  getCurrentSeasonalPrayers,
  
  // Images
  getPrayerCategoryImage,
  getPrayerHubPageImage,
  
  // Types
  type Prayer,
  type PrayerCategory,
  type PrayerRequestCategory,
  type PrayerIntention
};