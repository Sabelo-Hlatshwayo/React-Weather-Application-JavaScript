import SunnyIcon from "../../assets/icons/SunnyIcon";
import "./Weather.scss";

function Weather() {
  return (
    <div className="weather">
      <h1 className="weather__heading">the weather app</h1>
      <div className="weather__content">
        <span className="weather__temperature">21&#176;</span>
        <h2 className="weather__location">
          <span className="weather__location--main">Cape Town</span>
          <span className="weather__location--sub">
            23:22 - Monday Jan 2023
          </span>
        </h2>
        <div className="weather__condition">
          <SunnyIcon />
          <span className="weather__type">Sunny</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
