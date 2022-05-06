/**
 * @param {Record<string, number>} odds an object whose values determine the odds of the loot crate
 * @returns the key of the best-matched odd
 */
export const openBox = <T extends Record<string, number>>(
  odds: T
): Extract<keyof T, string> | undefined => {
  let sum = 0;

  const randomNumber = Math.random();

  for (const odd in odds) {
    const weight = odds[odd];

    const normalizedWeight = weight / 100;

    sum += normalizedWeight;

    if (randomNumber <= sum) {
      return odd;
    }
  }
};
