
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
			padding: '1rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				'xs': '475px',
				'3xl': '1600px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'ai-purple': '#8B5FBF',
				'ai-blue': '#4F46E5',
				'ai-cyan': '#06B6D4',
				'divine-gold': '#FFD700',
				'divine-white': '#FFFFFF',
				'divine-cyan': '#00FFFF',
				'divine-magenta': '#FF00FF',
				'divine-silver': '#C0C0C0',
				'celestial-blue': '#4169E1',
				'holy-purple': '#9370DB'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
					'50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.9)' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(15px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'divine-shimmer': {
					'0%': { 
						backgroundPosition: '-200% 0',
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.02)',
					},
					'100%': { 
						backgroundPosition: '200% 0',
						transform: 'scale(1)',
					}
				},
				'celestial-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 255, 255, 0.6), 0 0 120px rgba(0, 255, 255, 0.4)',
						transform: 'scale(1.02)'
					},
				},
				'holy-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'glow': 'glow 4s ease-in-out infinite alternate',
				'fade-in': 'fade-in 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'divine-shimmer': 'divine-shimmer 3s ease-in-out infinite',
				'celestial-pulse': 'celestial-pulse 5s ease-in-out infinite',
				'holy-rotate': 'holy-rotate 20s linear infinite',
			},
			backgroundImage: {
				'divine-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFFFFF 25%, #00FFFF 50%, #FF00FF 75%, #FFD700 100%)',
				'celestial-gradient': 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
				'holy-shimmer': 'linear-gradient(45deg, transparent 25%, rgba(255,215,0,0.3) 40%, rgba(255,255,255,0.4) 50%, rgba(0,255,255,0.3) 60%, transparent 75%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
