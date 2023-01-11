const { VITE_WEATHER_API_KEY, VITE_WEATHER_BASE_URL } = import.meta.env;
const url = `${VITE_WEATHER_BASE_URL}?key=${VITE_WEATHER_API_KEY}&q=`;

const getWeather = async (city) => {
  const query = `${url}${city}`;
  const response = await fetch(query);
  const weatherData = await response.json();
  if (response.status >= 400) {
    throw new Error(weatherData.error.message);
  }
  return weatherData;
};

export default getWeather;
