import "./Details.scss";

function Details() {
  return (
    <div className="details">
      <h3 className="details__heading">weather details</h3>
      <ul className="details__list">
        <li className="details__item">
          <span>Precipitation</span>
          <span>0%</span>
        </li>
        <li className="details__item">
          <span>Humidity</span>
          <span>39%</span>
        </li>
        <li className="details__item">
          <span>Wind</span>
          <span>8km/h</span>
        </li>
      </ul>
    </div>
  );
}

export default Details;
