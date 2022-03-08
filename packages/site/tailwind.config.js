/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { lighten } = require('polished');

const primaryLightTeal = 'rgb(57, 153, 142)';

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
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
