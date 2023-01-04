import SearchIcon from "../../assets/icons/SearchIcon";
import "./Panel.scss";

function Panel() {
  return (
    <div className="panel">
      <form className="form">
        <input
          type="text"
          placeholder="Search location..."
          className="form__input"
        />
        <button type="submit" className="form__button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Panel;
