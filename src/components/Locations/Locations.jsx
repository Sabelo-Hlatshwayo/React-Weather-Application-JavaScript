import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../context/features/AppContextProvider";
import "./Locations.scss";

function Locations() {
  const { activeCity, activeCities } = useAppContext().state;

  const activeCitiesList = activeCities.map((city) => {
    const isActive = city === activeCity;

    return (
      <li
        className={`locations__location ${
          isActive && "locations__location--active"
        }`}
        key={uuidv4()}
      >
        {city}
      </li>
    );
  });

  return <ul className="locations">{activeCitiesList}</ul>;
}

export default Locations;
