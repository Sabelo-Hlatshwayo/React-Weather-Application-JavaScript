//  This function generates a random number between lowerBound and upperbound, inclusive.
export const generateRandomNumber = (lowerBound, upperBound) => {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
};
