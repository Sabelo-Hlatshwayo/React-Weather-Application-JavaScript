import { useAppContext } from "../../context/features/AppContextProvider";
import formatDate from "../../utils/formatDate";
import "./Weather.scss";

function Weather() {
  const { weather } = useAppContext().state;

  return (
    <div className="weather">
      <div className="weather__container">
        <h1 className="weather__heading">the weather app</h1>
        <div className="weather__content">
          <span className="weather__temperature">
            {weather?.current.temp_c}&#176;
            <span>C</span>
          </span>
          <h2 className="weather__location">
            <span className="weather__location--main">
              {weather?.location.name}
            </span>
            <span className="weather__location--sub">
              {formatDate(weather?.location.localtime)}
            </span>
          </h2>
          <div className="weather__condition">
            <img
              src={`${weather?.current.condition.icon}`}
              alt={`${weather?.current.condition.text} weather icon`}
            />
            <span className="weather__type">
              {weather?.current.condition.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
