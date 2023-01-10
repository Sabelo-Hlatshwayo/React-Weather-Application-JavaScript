import { popularCities } from "../constants/constants";

//  This function generates a random number between lowerBound and upperbound, inclusive.
const generateRandomNumber = (lowerBound, upperBound) => {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
};

// This function returns a random city from the popularCities array
export const generateRandomCity = () => {
  const randomIndex = generateRandomNumber(0, popularCities.length - 1);
  return popularCities[randomIndex];
};

// This function returns an array of random cities of length 4
export const generateRandomCities = () => {
  const randomCities = [];

  while (randomCities.length < 4) {
    const randomIndex = generateRandomNumber(0, popularCities.length - 1);
    const randomCity = popularCities[randomIndex];

    if (!randomCities.includes(randomCity)) {
      randomCities.push(randomCity);
    }
  }

  return randomCities;
};
