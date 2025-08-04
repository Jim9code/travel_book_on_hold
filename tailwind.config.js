/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'booking-green': {
          light: '#4CAF50',
          DEFAULT: '#45a049',
          dark: '#2E7D32',
          darker: '#1B5E20'
        },
        'booking-red': '#ff4444',
        'booking-pink': {
          light: '#ff6b9d',
          DEFAULT: '#c44569'
        }
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(320px, 1fr))'
      },
      width: {
        'calc-full-minus-80': 'calc(100% - 80px)',
        'calc-full-minus-40': 'calc(100% - 40px)'
      },
      height: {
        '15': '3.75rem',
        '18': '4.5rem',
        '30': '7.5rem'
      },
      minWidth: {
        '72': '18rem'
      }
    },
  },
  plugins: [],
} 