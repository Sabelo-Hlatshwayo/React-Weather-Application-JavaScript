import { useState } from "react";
import { useAppContext } from "../../context/features/AppContextProvider";
import ACTIONS from "../../context/actions";
import "./Form.scss";

function Form() {
  const [query, setQuery] = useState("");
  const { dispatch } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.children.search.value;
    dispatch({ type: ACTIONS.SET_ERROR, payload: null });
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: true });
    dispatch({ type: ACTIONS.SET_ACTIVE_CITY, payload: city });
  };

  return (
    <form className="form" onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        placeholder="Search location..."
        className="form__input"
        id="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit" className="form__button">
        <img
          src="../src/assets/icons/search.svg"
          alt="Search icon"
          className="form__icon"
        />
      </button>
    </form>
  );
}

export default Form;
