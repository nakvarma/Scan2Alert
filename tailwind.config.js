/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCE8EB',
          100: '#F8D0D7',
          200: '#F1A1AF',
          300: '#EA7387',
          400: '#E34460',
          500: '#DC1638',
          600: '#B0122D',
          700: '#850D22',
          800: '#590916',
          900: '#2C040B',
          950: '#160206',
        },
        secondary: {
          50: '#E8ECF2',
          100: '#D1D9E5',
          200: '#A3B3CB',
          300: '#758DB1',
          400: '#476897',
          500: '#21395F',
          600: '#1A2E4C',
          700: '#142239',
          800: '#0D1726',
          900: '#070B13',
          950: '#030609',
        },
        accent: {
          50: '#FEF6F8',
          100: '#FDEDF2',
          200: '#FBDBE5',
          300: '#F9C9D8',
          400: '#F7B6CA',
          500: '#F4B8C5',
          600: '#C3939E',
          700: '#926E76',
          800: '#62494F',
          900: '#312527',
          950: '#180C0E',
        },
        success: {
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'envelope-open': 'envelope-open 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.3s ease-out forwards',
      },
      keyframes: {
        'envelope-open': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

