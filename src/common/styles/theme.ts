import { colors } from "./colors";
import { mediaQuery } from "./media-queries";
import { zIndices } from "./z-index";

export const theme = {
  colors,
  fontLink:
    "https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap",
  fonts: ["Roboto Condensed", "sans-serif", "Roboto"],
  fontSizes: {
    small: "1.2rem",
    large: "2rem",
    xl: "3rem",
  },
  mediaQuery,
  zIndices,
};
