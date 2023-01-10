import { useReducer, useEffect, createContext, useContext } from "react";
import appReducer from "../reducers/appReducer";
import ACTIONS from "../actions";
import { generateRandomCity } from "../../utils/utils";
import { generateRandomCities } from "../../utils/utils";

const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const initialState = {
    activeCity: null,
    activeCities: generateRandomCities(),
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

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
