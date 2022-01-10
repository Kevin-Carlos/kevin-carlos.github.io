/**
 *
 * @param odds
 * @returns
 */
export const openBox = (odds: Record<string, number>) => {
  let sum = 0;

  const randomNumber = Math.random();

  // console.log("random number", randomNumber);

  for (const odd in odds) {
    const weight = odds[odd];

    const normWeight = weight / 100;

    sum += normWeight;

    if (randomNumber <= sum) {
      return odd;
    }
  }
};
