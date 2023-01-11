import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../context/features/AppContextProvider";
import ACTIONS from "../../context/actions";
import "./Locations.scss";

function Locations() {
  const { activeCity, activeCities, weather } = useAppContext().state;
  const { dispatch } = useAppContext();

  const handleCitySearch = (city) => {
    dispatch({ type: ACTIONS.SET_ERROR, payload: null });
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: true });
    dispatch({ type: ACTIONS.SET_ACTIVE_CITY, payload: city });
  };

  const activeCitiesList = activeCities.map((city) => {
    const isActive = city === activeCity;

    return (
      <li
        className={`locations__location ${
          isActive && "locations__location--active"
        }`}
        key={uuidv4()}
        onClick={() => handleCitySearch(city)}
      >
        {city}
      </li>
    );
  });

  return <ul className="locations">{activeCitiesList}</ul>;
}

export default Locations;
