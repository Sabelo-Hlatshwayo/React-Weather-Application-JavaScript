import generateRandomNumber from "./generateRandomNumber ";
import { popularCities } from "../constants/constants";

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

export default generateRandomCities;
