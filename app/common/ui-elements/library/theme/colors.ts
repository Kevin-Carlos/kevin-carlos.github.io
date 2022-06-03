export const colors = {
  // rgb(16, 158, 201)
  blue: `rgb(16, 158, 201)`,
  // rgb(1, 38, 48)
  black: `rgb(1, 38, 48)`,
  // rgb(255, 255, 255)
  white: `rgb(255, 255, 255)`,
  // rgb(189, 189, 189)
  light_gray: `rgb(189, 189, 189)`,
  // rgb(54, 54, 54)
  gray: `rgb(54, 54, 54)`,
  // rgb(230, 155, 28)
  orange: `rgb(230, 155, 28)`,
  // rgb(57, 153, 142)
  light_teal: `rgb(57, 153, 142)`,
  // rgb(43, 77, 89)
  dark_teal: `rgb(43, 77, 89)`,
} as const;

export type ColorNames = keyof typeof colors;
