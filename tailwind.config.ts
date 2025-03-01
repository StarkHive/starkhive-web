import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: [
          'var(--font-dm-sans)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      animation: {
        'ping-slow': 'ping 2s infinite',
        search: 'search 6s ease-in-out infinite',
      },
      keyframes: {
        ping: {
          '50%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },

        search: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '10%': {
            transform: 'translate(50px, -30px)',
          },
          '20%': {
            transform: 'translate(-40px, 60px)',
          },
          '30%': {
            transform: 'translate(20px, 80px)',
          },
          '40%': {
            transform: 'translate(-60px, -50px)',
          },
          '50%': {
            transform: 'translate(30px, 30px)',
          },
          '60%': {
            transform: 'translate(-20px, 70px)',
          },
          '70%': {
            transform: 'translate(70px, -20px)',
          },
          '80%': {
            transform: 'translate(-30px, -60px)',
          },
          '90%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
