/**
 * Tailwind CSS v4 Configuration for St Saviour's Catholic Church
 * Adapted from my_private_tutor_online with church-specific branding
 */

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/lib/**/*.{js,ts,jsx,tsx,mdx}',
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// Church Brand Colors - Gold & Navy Scheme
				primary: {
					50: '#f8f9fc',
					100: '#f1f3f8',
					200: '#e3e7f0',
					300: '#c6d0e8',
					400: '#8fa2d4',
					500: '#5b6bb3',
					600: '#4a5a97',
					700: '#3f4a7e', // Navy blue
					800: '#2f3960',
					900: '#252a4d',
					950: '#1a1e3a',
				},
				// Gold accent colors
				gold: {
					50: '#fefcf7',
					100: '#fdf8eb',
					200: '#faf0d2',
					300: '#f5e4a9',
					400: '#eed480',
					500: '#e5c457',
					600: '#ca9e5b', // Primary gold
					700: '#a67234',
					800: '#8a5e2a',
					900: '#6d4a21',
					950: '#4a3318',
				},
				// Accent alias for gold
				accent: {
					50: '#fefcf7',
					100: '#fdf8eb',
					200: '#faf0d2',
					300: '#f5e4a9',
					400: '#eed480',
					500: '#e5c457',
					600: '#ca9e5b',
					700: '#a67234',
					800: '#8a5e2a',
					900: '#6d4a21',
					950: '#4a3318',
				},
				// Semantic colors for dark sections
				'dark-section': '#1e293b',
				'darker-section': '#0f172a',
				// Text colors for dark backgrounds
				'text-on-dark': '#e5e7eb',
				'text-on-dark-muted': '#d1d5db',
				'text-on-dark-subtle': '#9ca3af',
			},

			fontFamily: {
				heading: ['var(--font-noto-serif)', 'Georgia', 'serif'],
				body: ['var(--font-source-serif-4)', 'Georgia', 'serif'],
				technical: ['var(--font-jetbrains-mono)', 'Consolas', 'monospace'],
			},

			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'fade-in-up': 'fadeInUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'slide-in-left': 'slideInLeft 0.4s ease-out',
				'slide-in-right': 'slideInRight 0.4s ease-out',
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
		},
	},

	plugins: [],
};

export default config;
