import { createStitches, createTheme, globalCss } from '@stitches/react';
import { lighten } from 'polished';

const globalStyles = globalCss({
  h1: {
    fontWeight: 400,
  },

  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
});

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
      icon: '$black',
      bg: '$dteal',
      links: '$black',

      // custom
      triangle: '$blue',
      logo: '$lgray',
      headerIcons: '$black',
      headerText: '$black',
      headerName: '$dteal',
      headerAboutMeButton: '$lteal2',
      headerProjectButton: '$lgray',
      footerIconHover: '$blue',
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
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
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
    icon: '$white',
    links: '$white',

    // custom
    triangle: 'rgb(0, 0, 0)',
    logo: '$white',
    headerIcons: '$white',
    headerText: '$white',
    headerName: '$lteal2',
    headerAboutMeButton: '$lteal',
    headerProjectButton: '$dgray',
    footerIconHover: '$orange',
    tabText: '$orange',
    tabBg: '$orange',
    tabBorder: '$orange',

    cardBg: '$black',
    cardHighlight: '$orange',
  },
});

const { theme, styled, getCssText } = stitches;

export { theme, styled, getCssText, darkTheme, globalStyles };
