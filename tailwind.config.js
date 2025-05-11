/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin =require('tailwindcss/plugin');

module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem', 
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px', 
			},
		},
		extend: {
       fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        body: ['var(--font-nunito)', ...fontFamily.sans], 
        heading: ['var(--font-playfair-display)', ...fontFamily.serif], 
        'heading-alt': ['var(--font-georgia)', ...fontFamily.serif], // Example for classic serif
        signature: ['var(--font-signature)', 'cursive'], 
        telugu: ['var(--font-telugu)', ...fontFamily.sans],
        quote: ['var(--font-signature)', 'cursive'], 
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))', 
					foreground: 'hsl(var(--muted-foreground))', 
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))', 
					foreground: 'hsl(var(--accent-foreground))',
				},
        'warm-off-white': 'hsl(var(--warm-off-white))',
        'deep-green': 'hsl(var(--deep-green))',
        'subtle-grey': 'hsl(var(--subtle-grey))',
        'emotional-teal': 'hsl(var(--emotional-teal))', // existing soft-teal can be this
        cream: 'hsl(var(--cream))', // Keep for compatibility or merge
        'off-white': 'hsl(var(--off-white))', // Keep for compatibility or merge
        'soft-teal': 'hsl(var(--soft-teal))',
        'warm-grey': 'hsl(var(--warm-grey))',
        sand: 'hsl(var(--sand))',
        ivory: 'hsl(var(--ivory))',
        'teal-ink': 'hsl(var(--teal-ink))',
        'soft-charcoal': 'hsl(var(--soft-charcoal))',
        'dark-grey': '#222222',
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')",
        'worn-paper-texture': "url('https://www.transparenttextures.com/patterns/worn-dots.png')",
        'ink-smudge-texture': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')", // Placeholder
        'handwritten-texture': "url('https://www.transparenttextures.com/patterns/lined-paper.png')", 
        'subtle-noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'old-manuscript-texture': "url('https://www.transparenttextures.com/patterns/old-map.png')", // Placeholder
      },
      textShadow: {
        DEFAULT: '0 1px 3px hsla(var(--subtle-grey)/ 0.2)',
        sm: '0 1px 2px hsla(var(--subtle-grey)/ 0.15)',
        md: '0 2px 5px hsla(var(--subtle-grey)/ 0.2)',
        lg: '0 4px 10px hsla(var(--subtle-grey)/ 0.25)',
        xl: '0 6px 15px hsla(var(--subtle-grey)/ 0.25)',
        'soft-teal-glow': '0 0 8px hsl(var(--emotional-teal) / 0.7)',
        'subtitle-depth': '1px 1px 2px hsla(var(--subtle-grey) / 0.3)',
        none: 'none',
      },
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px hsl(var(--emotional-teal))' },
          '50%': { boxShadow: '0 0 20px hsl(var(--emotional-teal))' },
        },
        'manuscript-scroll-horizontal': {
          '0%': { transform: 'translateX(0%) rotate(-5deg) scale(1.2)' },
          '100%': { transform: 'translateX(-20%) rotate(-5deg) scale(1.2)' }, 
        },
        'slow-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'waveform': {
          '0%, 100%': { height: '2px', opacity: '0.7' },
          '50%': { height: '10px', opacity: '1' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'manuscript-scroll-horizontal': 'manuscript-scroll-horizontal 180s linear infinite alternate',
        'slow-bounce': 'slow-bounce 2s ease-in-out infinite',
        'waveform-bar1': 'waveform 1s ease-in-out infinite alternate 0s',
        'waveform-bar2': 'waveform 1s ease-in-out infinite alternate 0.2s',
        'waveform-bar3': 'waveform 1s ease-in-out infinite alternate 0.4s',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
            '--tw-prose-body': 'hsl(var(--warm-grey))',
            '--tw-prose-headings': 'hsl(var(--soft-charcoal))',
            '--tw-prose-lead': 'hsla(var(--warm-grey)/ 0.8)',
            '--tw-prose-links': 'hsl(var(--emotional-teal))',
            '--tw-prose-bold': 'hsl(var(--soft-charcoal))',
            '--tw-prose-counters': 'hsla(var(--warm-grey)/ 0.6)',
            '--tw-prose-bullets': 'hsl(var(--emotional-teal))',
            '--tw-prose-hr': 'hsl(var(--border))',
            '--tw-prose-quotes': 'hsl(var(--soft-charcoal))',
            '--tw-prose-quote-borders': 'hsl(var(--emotional-teal))',
            '--tw-prose-captions': 'hsla(var(--warm-grey)/ 0.7)',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-pre-code': 'hsl(var(--secondary-foreground))',
            '--tw-prose-pre-bg': 'hsl(var(--secondary))',
            '--tw-prose-th-borders': 'hsl(var(--border))',
            '--tw-prose-td-borders': 'hsl(var(--border))',
            h1: { fontFamily: theme('fontFamily.heading').join(','), color: 'hsl(var(--soft-charcoal))', fontWeight: '700', lineHeight: '1.3' },
            h2: { fontFamily: theme('fontFamily.heading').join(','), color: 'hsl(var(--soft-charcoal))', fontWeight: '700', lineHeight: '1.3' },
            h3: { fontFamily: theme('fontFamily.heading').join(','), color: 'hsl(var(--soft-charcoal))', fontWeight: '600', lineHeight: '1.4' },
            h4: { fontFamily: theme('fontFamily.heading').join(','), color: 'hsl(var(--soft-charcoal))', fontWeight: '600', lineHeight: '1.4' },
            p: { fontFamily: theme('fontFamily.body').join(','), lineHeight: '1.7' },
            a: {
               fontFamily: theme('fontFamily.body').join(','),
               color: 'hsl(var(--emotional-teal))',
               textDecoration: 'none',
              '&:hover': {
                color: 'hsl(var(--teal-ink))',
                textDecoration: 'underline',
                textDecorationColor: 'hsla(var(--emotional-teal) / 0.5)'
              },
            },
            blockquote: {
              fontFamily: theme('fontFamily.quote').join(','),
              lineHeight: '1.6',
            }
					},
				},
        poetic: {
          css: {
            p: { lineHeight: '1.8', fontFamily: theme('fontFamily.body').join(',') },
            h3: { fontFamily: theme('fontFamily.heading').join(','), lineHeight: '1.5' }
          }
        }
			}),
		},
	},
	plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities, theme, e }) {
      const textShadowUtilities = Object.entries(theme('textShadow')).map(([key, value]) => {
        const className = key === 'DEFAULT' ? '.text-shadow' : `.text-shadow-${e(key)}`;
        return {
          [className]: { textShadow: value }
        };
      });
      addUtilities(textShadowUtilities, ['responsive', 'hover', 'group-hover', 'focus']);
    }),
  ],
};