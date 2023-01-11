// This function returns the app's background image based on the location's weather condition
export const setBackgroundImage = (isDay, code) => {
  let image;
  let linearGradient =
    "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))";

  if (isDay === 1) {
    switch (code) {
      // DAY AND SUNNY
      case 1000:
        image = "../src/assets/images/day/day-3.jpg";
        break;

      // DAY AND CLOUDY
      case 1003:
      case 1006:
      case 1009:
      case 1030:
      case 1069:
      case 1087:
      case 1135:
      case 1273:
      case 1276:
      case 1279:
      case 1282: {
        image = "../src/assets/images/day/day-4.jpg";
        break;
      }

      // DAY AND RAIN
      case 1063:
      case 1069:
      case 1072:
      case 1150:
      case 1153:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1204:
      case 1207:
      case 1240:
      case 1243:
      case 1246:
      case 1249:
      case 1252: {
        image = "../src/assets/images/day/day-2.jpg";
        break;
      }

      // DAY AND SWOW
      default: {
        image = "../src/assets/images/day/day-1.jpg";
        break;
      }
    }
  } else {
    switch (code) {
      // NIGHT AND CLEAR
      case 1000: {
        image = "../src/assets/images/night/night-4.jpg";
        break;
      }

      // NIGHT AND CLOUDY
      case 1003:
      case 1006:
      case 1009:
      case 1030:
      case 1069:
      case 1087:
      case 1135:
      case 1273:
      case 1276:
      case 1279:
      case 1282: {
        image = "../src/assets/images/night/night-3.jpg";
        break;
      }

      // NIGHT AND RAIN
      case 1063:
      case 1069:
      case 1072:
      case 1150:
      case 1153:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1204:
      case 1207:
      case 1240:
      case 1243:
      case 1246:
      case 1249:
      case 1252: {
        image = "../src/assets/images/night/night-2.jpg";
        break;
      }

      // DAY AND SWOW
      default: {
        image = "../src/assets/images/night/night-1.jpg";
        break;
      }
    }
  }

  return { backgroundImage: `${linearGradient}, url(${image})` };
};

export default setBackgroundImage;
