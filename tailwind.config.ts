import { lighten } from 'polished';

const primaryLightTeal = 'rgb(57, 153, 142)';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'theme-black': 'rgb(1, 38, 48)',
      'theme-white': 'rgb(255, 255, 255)',
      'theme-lgray': 'rgb(189, 189, 189)',
      'theme-dgray': 'rgb(54, 54, 54)',

      'theme-blue': 'rgb(16, 158, 201)',
      'theme-orange': 'rgb(230, 155, 28)',
      'theme-lteal': primaryLightTeal,
      'theme-lteal2': lighten(0.15, primaryLightTeal),
      'theme-dteal': 'rgb(43, 77, 89)',
    },
    fontFamily: {
      body: ['Quicksand', 'sans-serif'],
      accent: ['Poppins', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit-card': 'repeat(auto-fit, minmax(520px, 1fr))',
      },
      keyframes: {
        ripple: {
          to: { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        ripple: 'ripple 600ms linear',
      },
    },
  },
  variants: {},
  plugins: [],
};
