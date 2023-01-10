import { useReducer, useEffect, createContext, useContext, act } from "react";
import appReducer from "../reducers/appReducer";
import ACTIONS from "../actions";
import { generateRandomCity } from "../../utils/utils";
import { generateRandomCities } from "../../utils/utils";

const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const initialState = {
    initialize: function () {
      this.activeCities = generateRandomCities();
      this.activeCity = generateRandomCity(this.activeCities);
      delete this.initialize;
      return this;
    },
  }.initialize();

  const [state, dispatch] = useReducer(appReducer, initialState);

  // console.log(state);

  // useEffect(() => {

  // }, []);

  const value = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
