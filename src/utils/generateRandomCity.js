import generateRandomNumber from "./generateRandomNumber ";

// This function returns a random city from an array of cities
export const generateRandomCity = (cities) => {
  const randomIndex = generateRandomNumber(0, cities.length - 1);
  return cities[randomIndex];
};

export default generateRandomCity;
