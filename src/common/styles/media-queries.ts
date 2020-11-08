// These use px instead of rem because of a weird quirk using rem
// with media queries being based on default font-size of the browser
// instead of what the html of the project is set to

export const mediaQuery = {
  phone: `@media screen and (min-width: 480px)`,
  tablet: `@media screen and (min-width: 768px)`,
  laptop: `@media screen and (min-width: 1200px)`,
  desktop: `@media screen and (min-width: 1400px)`,
  xl_desktop: `@media screen and (min-width: 2000px)`,
};
