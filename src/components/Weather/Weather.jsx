import SunnyIcon from "../../assets/icons/SunnyIcon";
import "./Weather.scss";

function Weather() {
  return (
    <div className="weather">
      <div className="weather__container">
        <h1 className="weather__heading">the weather app</h1>
        <div className="weather__content">
          <span className="weather__temperature">18&#176;</span>
          <h2 className="weather__location">
            <span className="weather__location--main">Cape Town</span>
            <span className="weather__location--sub">
              13:09 - Thursday 22 Aug 2024
            </span>
          </h2>
          <div className="weather__condition">
            <SunnyIcon className="weather__icon" />
            <span className="weather__type">Sunny</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
