import Form from "../Form/Form";
import Locations from "../Locations/Locations";
import "./Panel.scss";

function Panel() {
  return (
    <div className="panel">
      <Form />
      <Locations />
    </div>
  );
}

export default Panel;
