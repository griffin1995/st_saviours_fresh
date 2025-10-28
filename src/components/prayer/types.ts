// CMS DATA SOURCE: Prayer Hub component TypeScript interfaces
// Following project patterns for type safety and component architecture

// Common props for all Prayer components
interface BaseProps {
  reducedMotion?: boolean;
  className?: string;
}

// Prayer Hub main page props
export interface PrayerHubProps extends BaseProps {
  showWelcome?: boolean;
}

// Prayer Category page props
export interface PrayerCategoryPageProps extends BaseProps {
  categorySlug: string;
}

// Prayer Detail page props
export interface PrayerDetailPageProps extends BaseProps {
  prayerSlug: string;
}

// Prayer Request form props
export interface PrayerRequestFormProps extends BaseProps {
  onSubmit?: (data: PrayerRequestFormData) => void;
}

// Liturgical Calendar widget props
export interface LiturgicalCalendarWidgetProps extends BaseProps {
  showUpcoming?: boolean;
  maxEvents?: number;
}

// Form data interfaces for Prayer Requests
export interface PrayerRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  isUrgent: boolean;
  isPrivate: boolean;
  prayerRequest: string;
  specificIntentions: string;
  contactPermission: boolean;
  publicSharing: boolean;
}

export interface PrayerRequestFormErrors {
  [key: string]: string;
}

// Liturgical Calendar interfaces
export interface LiturgicalEvent {
  date: Date;
  title: string;
  type: 'season' | 'feast' | 'memorial' | 'holy-day' | 'ordinary';
  color: 'white' | 'red' | 'green' | 'purple' | 'rose' | 'gold';
  rank: number; // 1-10 priority
  description?: string;
  prayers?: string[];
  season: string;
}

export interface LiturgicalCalendarState {
  currentSeason: string;
  upcomingEvents: LiturgicalEvent[];
  todaysEvent: LiturgicalEvent | null;
}

// Search and filter interfaces
export interface PrayerSearchOptions {
  query?: string;
  category?: string;
  difficulty?: 'simple' | 'moderate' | 'advanced';
  liturgicalSeason?: string;
  tags?: string[];
}

export interface PrayerSortOptions {
  sortBy: 'title' | 'difficulty' | 'time' | 'relevance';
  order: 'asc' | 'desc';
}

// Component state interfaces
export interface PrayerComponentState {
  mounted: boolean;
  loading: boolean;
  error: string | null;
}

// Accessibility props
export interface AccessibilityProps {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  tabIndex?: number;
}