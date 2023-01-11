import { useReducer, useEffect, createContext, useContext } from "react";
import appReducer from "../reducers/appReducer";
import ACTIONS from "../actions";
import generateRandomCities from "../../utils/generateRandomCities";
import generateRandomCity from "../../utils/generateRandomCity";
import getWeather from "../../http/getWeather";

const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const initialState = {
    initialize: function () {
      this.activeCities = generateRandomCities();
      this.activeCity = generateRandomCity(this.activeCities);
      this.weather = null;
      this.error = null;
      this.isLoading = true;
      delete this.initialize;
      return this;
    },
  }.initialize();

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const weatherData = await getWeather(city);

        dispatch({ type: ACTIONS.SET_WEATHER, payload: weatherData });
        dispatch({ type: ACTIONS.SET_ERROR, payload: null });
      } catch (err) {
        dispatch({ type: ACTIONS.SET_WEATHER, payload: null });
        dispatch({ type: ACTIONS.SET_ERROR, payload: err });
        console.error(err);
      } finally {
        dispatch({ type: ACTIONS.SET_IS_LOADING, payload: false });
      }
    };

    fetchWeather(state.activeCity);
  }, [state.activeCity]);

  const value = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
