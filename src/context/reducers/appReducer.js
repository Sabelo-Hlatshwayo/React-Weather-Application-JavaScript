import ACTIONS from "../actions";

function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_WEATHER: {
      return { ...state, weather: action.payload };
    }

    case ACTIONS.SET_ACTIVE_CITY: {
      return { ...state, activeCity: action.payload };
    }

    case ACTIONS.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case ACTIONS.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default: {
      throw new Error(`Error: unknown action '${action.type}'`);
    }
  }
}

export default appReducer;
