import SearchIcon from "../../assets/icons/SearchIcon";
import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Search location..."
        className="form__input"
      />
      <button type="submit" className="form__button">
        <SearchIcon className="form__icon" />
      </button>
    </form>
  );
}

export default Form;
