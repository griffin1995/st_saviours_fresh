// Mass Timings - Admin configurable data structure
export const massTimings = {
	// Sunday Masses
	sunday: [
		{ time: '8:30 AM', type: 'Sunday Mass', description: 'Morning worship' },
		{ time: '10:00 AM', type: 'Sunday Mass', description: 'Family Mass' },
		{ time: '11:30 AM', type: 'Sunday Mass', description: 'Main celebration' },
		{
			time: '2:00 PM',
			type: 'Spanish Mass',
			description: '1st and 3rd Sundays only',
		},
		{ time: '5:30 PM', type: 'Sunday Mass', description: 'Evening service' },
	],

	// Saturday (includes Saturday vigil)
	saturday: [
		{ time: '10:00 AM', type: 'Weekday Mass', description: 'Morning Mass' },
		{
			time: '12:00 PM',
			type: 'Pilgrim Mass',
			description: 'Special intention Mass',
		},
		{
			time: '5:30 PM',
			type: 'Saturday Vigil',
			description: 'Sunday obligation Mass',
		},
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
		{
			time: '6:30 PM',
			type: 'Pilgrim Mass',
			description: 'Special intention Mass',
		},
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

// Navigation Menu Structure - Primary site navigation
export const navigationMenu = [
	{ name: 'Mass', href: '/mass' },
	{
		name: 'About',
		href: '#',
		dropdown: [
			{ name: 'About Us', href: '/about-us' },
			{ name: 'Find Us', href: '/find-us' },
			{ name: 'Our History', href: '/about-us#history' },
			{ name: 'Parish Priest', href: '/about-us#leadership' },
		],
	},
	{
		name: 'The Sacraments',
		href: '#',
		dropdown: [
			{ name: 'Baptism', href: '/the-sacraments/baptism' },
			{ name: 'Confirmation', href: '/the-sacraments/confirmation' },
			{ name: 'The Eucharist', href: '/the-sacraments/the-eucharist' },
			{ name: 'Confession', href: '/the-sacraments/confession' },
			{ name: 'Marriage', href: '/the-sacraments/matrimony' },
			{ name: 'Holy Orders', href: '/the-sacraments/holy-orders' },
			{
				name: 'Anointing of the Sick',
				href: '/the-sacraments/anointing-of-the-sick',
			},
		],
	},
	{
		name: 'Community',
		href: '#',
		dropdown: [
			{ name: 'Parish News', href: '/news' },
			{ name: 'Parish Groups', href: '/parish-groups' },
			{ name: 'Weekly Newsletter', href: '/weekly-newsletter' },
			{ name: "St Saviour's Talks", href: '/st-saviours-talks' },
			{ name: 'Podcasts', href: '/podcasts' },
		],
	},
	{
		name: 'Prayer Hub',
		href: '/prayer-hub',
	},
	{
		name: 'Learning Hub',
		href: '/learning-hub',
	},
	{
		name: 'Contact',
		href: '/contact-us',
		dropdown: [
			{ name: 'Contact Us', href: '/contact-us' },
			{ name: 'Safeguarding', href: '/safeguarding' },
		],
	},
];
