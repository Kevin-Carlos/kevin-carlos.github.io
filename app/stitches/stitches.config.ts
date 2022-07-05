import { createStitches, createTheme } from '@stitches/react';
import { lighten } from 'polished';

const primaryLightTeal = 'rgb(57, 153, 142)';

// https://rossmoody.com/writing/remix-stitches
// Ref for dark theme with stitches and SSR with remix
const stitches = createStitches({
  theme: {
    colors: {
      // neutrals
      black: 'rgb(1, 38, 48)',
      white: 'rgb(255, 255, 255)',
      lgray: 'rgb(189, 189, 189)',
      dgray: 'rgb(54, 54, 54)',

      blue: 'rgb(16, 158, 201)',
      orange: 'rgb(230, 155, 28)',
      lteal: primaryLightTeal,
      lteal2: lighten(0.15, primaryLightTeal),
      dteal: 'rgb(43, 77, 89)',

      // Aliases
      text: '$white',
      body: '$white',
      bg: '$dteal',

      // custom
      triangle: '$blue',
      logo: '$lgray',
      hamburger: '$white',
      tabText: '$lteal',
      tabBg: '$dteal',
      tabBorder: '$dteal',

      cardBg: '$lteal2',
      cardHighlight: '$black',
    },
    fonts: {
      body: 'Quicksand, sans-serif',
      accent: 'Poppins, sans-serif',
    },
    utils: {
      'grid-auto-fit': 'repeat(auto-fit, minmax(520px, 1fr))',
    },
  },
});

const darkTheme = createTheme('dark', {
  colors: {
    // neutrals
    black: 'rgb(1, 38, 48)',
    white: 'rgb(255, 255, 255)',
    lgray: 'rgb(189, 189, 189)',
    dgray: 'rgb(54, 54, 54)',

    blue: 'rgb(16, 158, 201)',
    orange: 'rgb(230, 155, 28)',
    lteal: primaryLightTeal,
    lteal2: lighten(0.15, primaryLightTeal),
    dteal: 'rgb(43, 77, 89)',

    // Aliases
    text: '$black',
    body: '$black',
    bg: '$orange',

    // custom
    triangle: 'rgb(0, 0, 0)',
    logo: '$white',
    hamburger: '$black',
    tabText: '$orange',
    tabBg: '$orange',
    tabBorder: '$orange',

    cardBg: '$black',
    cardHighlight: '$orange',
  },
});

const { theme, styled, getCssText } = stitches;

export { theme, styled, getCssText, darkTheme };
