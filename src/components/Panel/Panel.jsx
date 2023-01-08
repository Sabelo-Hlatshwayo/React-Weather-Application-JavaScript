import Form from "../Form/Form";
import Locations from "../Locations/Locations";
import Details from "../Details/Details";
import "./Panel.scss";

function Panel() {
  return (
    <div className="panel">
      <div className="panel__container">
        <Form />
        <Locations />
        <Details />
      </div>
    </div>
  );
}

export default Panel;
