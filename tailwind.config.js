/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 3s linear infinite',
        'border-x': 'border-x 2s ease infinite',
        'border-y': 'border-y 2s ease infinite',
      },
      keyframes: {
        shine: {
          '100%': { transform: 'translateX(100%)' },
        },
        'border-x': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'border-y': {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      colors: {
        'dark-blue': '#1B2028',
      },
    },
  },
  plugins: [],
};