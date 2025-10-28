// Mass Timings - Admin configurable data structure
export const massTimings = {
  // Sunday Masses
  sunday: [
    { time: '8:30 AM', type: 'Sunday Mass', description: 'Morning worship' },
    { time: '10:00 AM', type: 'Sunday Mass', description: 'Family Mass' },
    { time: '11:30 AM', type: 'Sunday Mass', description: 'Main celebration' },
    { time: '2:00 PM', type: 'Spanish Mass', description: '1st and 3rd Sundays only' },
    { time: '5:30 PM', type: 'Sunday Mass', description: 'Evening service' },
  ],

  // Saturday (includes Saturday vigil)
  saturday: [
    { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
    { time: '12:00 PM', type: 'Pilgrim Mass', description: 'Special intention Mass' },
    { time: '5:30 PM', type: 'Saturday Vigil', description: 'Sunday obligation Mass' },
    { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' },
  ],

  // Monday
  monday: [
    { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
    { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' },
  ],

  // Tuesday (includes Pilgrim Mass)
  tuesday: [
    { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
    { time: '6:30 PM', type: 'Pilgrim Mass', description: 'Special intention Mass' },
  ],

  // Wednesday
  wednesday: [
    { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
    { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' },
  ],

  // Thursday
  thursday: [
    { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
    { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' },
  ],

  // Friday
  friday: [
    { time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
    { time: '6:30 PM', type: 'Weekday Mass', description: 'Evening Mass' },
  ],
};

// Confession times in array format for easy display
export const confessionTimes = [
  { day: 'Tuesday', time: '6:00-6:20 PM', note: 'Before evening Mass' },
  { day: 'Wednesday', time: '6:00-6:20 PM', note: 'Before evening Mass' },
  { day: 'Thursday', time: '7:00-7:20 PM', note: 'After evening Mass' },
  { day: 'Friday', time: '6:00-6:20 PM', note: 'Before evening Mass' },
  { day: 'Saturday', time: '11:00 AM-12:00 PM', note: 'Before Pilgrim Mass' },
];

// Adoration times in array format for easy display
export const adorationTimes = [
  { day: 'Thursday', time: '10:30 AM-12:00 PM', description: 'Morning Adoration' },
  {
    day: 'Thursday',
    time: '7:00-7:30 PM',
    description: 'Evening Adoration (ends with Benediction)',
  },
  { day: 'Saturday', time: '10:30 AM-12:00 PM', description: 'Morning Adoration' },
];

// Helper function to get today's services
export const getTodaysServices = () => {
  const today = new Date();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayName = dayNames[today.getDay()] as keyof typeof massTimings;

  return massTimings[todayName] || [];
};

// Legacy export for backwards compatibility (can be removed later)
export const todaysServices = getTodaysServices();

// Navigation Menu Structure - Primary site navigation
export const navigationMenu = [
  {
    name: 'About',
    href: '/about-us',
    dropdown: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Find Us', href: '/find-us' },
      { name: 'Our History', href: '/about-us#history' },
      { name: 'Parish Priest', href: '/about-us#leadership' },
    ],
  },
  {
    name: 'Prayer & The Sacraments',
    href: '/mass',
    dropdown: [
      { name: 'Mass Times', href: '/mass' },
      { name: 'The Sacraments', href: '/the-sacraments' },
      { name: 'Baptism', href: '/the-sacraments/baptism' },
      { name: 'Confirmation', href: '/the-sacraments/confirmation' },
      { name: 'The Eucharist', href: '/the-sacraments/the-eucharist' },
      { name: 'Confession', href: '/the-sacraments/confession' },
      { name: 'Marriage', href: '/the-sacraments/matrimony' },
      { name: 'Holy Orders', href: '/the-sacraments/holy-orders' },
      { name: 'Anointing of the Sick', href: '/the-sacraments/anointing-of-the-sick' },
    ],
  },
  {
    name: 'Community',
    href: '/news',
    dropdown: [
      { name: 'Parish News', href: '/news' },
      { name: 'Community News', href: '/community-news' },
      { name: 'Parish Groups', href: '/parish-groups' },
      { name: 'Weekly Newsletter', href: '/weekly-newsletter' },
      { name: "St Saviour's Talks", href: '/st-saviours-talks' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Streaming', href: '/streaming' },
      { name: 'Podcasts', href: '/podcasts' },
    ],
  },
  {
    name: 'The Knowledge Hub',
    href: '/learning-hub',
    dropdown: [
      { name: 'The Prayer Hub', href: '/learning-hub' },
      { name: 'The Learning Hub', href: '/learning-hub#mystics' },
      
    ],
  },
  {
    name: "St Saviour's School",
    href: '/st-saviours-primary-school',
    dropdown: [
      { name: 'About Our School', href: '/st-saviours-primary-school' },
      { name: 'Admissions', href: '/st-saviours-primary-school#admissions' },
      { name: 'School Tours', href: '/st-saviours-primary-school#visit' },
      { name: 'School Values', href: '/st-saviours-primary-school#values' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact-us',
    dropdown: [
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'Venue Hire', href: '/venue-hire' },
      { name: 'Emergency Contact', href: '/contact-us#emergency' },
      { name: 'Safeguarding', href: '/safeguarding' },
    ],
  },
];