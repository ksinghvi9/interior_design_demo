/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F7F4EF',
          charcoal: '#1D1D1D',
          gold: '#C9A66B',
          beige: '#E7DDD0',
          graphite: '#2B2B2B',
          // Dark mode overrides
          darkIvory: '#FBF9F6',
          darkBg: '#121212',
          darkCard: '#1E1E1E',
          darkMuted: '#3A352E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
