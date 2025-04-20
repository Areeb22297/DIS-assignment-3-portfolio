
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'rgba(255, 255, 255, 0.1)',
				input: '#2a1e2e',
				ring: '#fe547b',
				background: '#1A1016',
				foreground: '#F8FAFC',
				sidebar: '#271A2B', 
				'card-bg': '#231920',
				'card-pink': '#fe547b',
				'card-purple': '#8152e4',
				'card-blue': '#3f82fb',
				primary: {
					DEFAULT: '#fe547b',
					foreground: '#0F0F0F'
				},
				secondary: {
					DEFAULT: '#8152e4',
					foreground: '#F8FAFC'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#271A2B',
					foreground: '#94A3B8'
				},
				accent: {
					DEFAULT: '#3f82fb',
					foreground: '#F8FAFC'
				},
				popover: {
					DEFAULT: '#231920',
					foreground: '#F8FAFC'
				},
				card: {
					DEFAULT: '#231920',
					foreground: '#F8FAFC'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'scale-in': 'scaleIn 0.3s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
