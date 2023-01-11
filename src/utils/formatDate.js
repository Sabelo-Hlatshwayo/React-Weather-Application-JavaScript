import { daysList, monthsList } from "../constants/constants";

// This function returns a properly formatted dat string
export const formatDate = (dateString) => {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const day = dateObject.getDay();
  const month = dateObject.getMonth();
  const dayDate = dateObject.getDate();
  const minutes = dateObject.getHours();
  const getHours = dateObject.getMinutes();

  const minutesFormat = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const hoursFormat = `${getHours < 10 ? `0${getHours}` : getHours}`;
  const dayFormat = `${dayDate < 10 ? `0${dayDate}` : dayDate}`;

  return `${minutesFormat}:${hoursFormat} ${daysList[day]} ${dayFormat} ${monthsList[month]} ${year}`;
};

export default formatDate;
