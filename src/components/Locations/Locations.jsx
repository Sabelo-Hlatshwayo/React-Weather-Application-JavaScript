import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../context/features/AppContextProvider";
import "./Locations.scss";

function Locations() {
  const { activeCities } = useAppContext().state;

  console.log(activeCities);

  const activeCitiesList = activeCities.map((activeCity) => {
    return (
      <li className="locations__location" key={uuidv4()}>
        {activeCity}
      </li>
    );
  });

  return <ul className="locations">{activeCitiesList}</ul>;
}

export default Locations;
