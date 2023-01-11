import { useAppContext } from "../../context/features/AppContextProvider";
import "./Details.scss";

function Details() {
  const { weather } = useAppContext().state;

  return (
    <div className="details">
      <h3 className="details__heading">weather details</h3>
      <ul className="details__list">
        <li className="details__item">
          <span>Cloud cover</span>
          <span>{weather?.current.cloud}%</span>
        </li>
        <li className="details__item">
          <span>Humidity</span>
          <span>{weather?.current.humidity}%</span>
        </li>
        <li className="details__item">
          <span>Wind speed</span>
          <span>{weather?.current.wind_kph}km/h</span>
        </li>
      </ul>
    </div>
  );
}

export default Details;
