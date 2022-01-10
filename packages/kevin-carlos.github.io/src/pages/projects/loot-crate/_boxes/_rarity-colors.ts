import { colors } from 'sublimity-ui';

export const getRarityColor = (value: number) => {
  if (value >= 50) {
    return colors.dark_teal;
  } else if (value >= 15) {
    return colors.gray;
  } else if (value >= 5) {
    return colors.blue;
  } else if (value >= 1) {
    return colors.light_teal;
  } else {
    return colors.orange;
  }
};
