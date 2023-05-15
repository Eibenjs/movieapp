import { useContext, createContext, useReducer } from "react";
import PropTypes from "prop-types";

const MovieContext = createContext();

const defaultStates = {
  movies: [],
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_MOVIE") {
    return {
      ...state
    };
  }
  if(action.type === "SET_MOVIES") {
    return {
      ...state,
      movies: action.payload
    }
  }
  return defaultStates;
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultStates);
  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node,
};

const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return context;
};

export { MovieProvider, useMovie };
