import { SET_AUTHENTICATED, SET_SHAPES } from "../types";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { useReducer, useEffect } from "react";
import data from "../../data.json";

const AppState = (props) => {
  const initialState = {
    isAuthenticated: false,
    shapes: [],
    defaultColors: ["red", "blue", "green", "yellow", "violet", "pink"],
  };

  useEffect(() => {
    setShapes(data);
  }, []);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const login = () => {
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };
  const setAuthenticated = (value) => {
    dispatch({
      type: SET_AUTHENTICATED,
      payload: {
        val: value,
      },
    });
  };

  const setShapes = (value) => {
    dispatch({
      type: SET_SHAPES,
      payload: {
        val: value,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        shapes: state.shapes,
        defaultColors: state.defaultColors,
        login,
        logout,
        setShapes,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
