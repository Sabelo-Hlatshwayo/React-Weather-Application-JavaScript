import Form from "../Form/Form";
import Locations from "../Locations/Locations";
import Details from "../Details/Details";
import "./Panel.scss";

function Panel() {
  return (
    <div className="panel">
      <Form />
      <Locations />
      <Details/>
    </div>
  );
}

export default Panel;
