import { SET_AUTHENTICATED } from "../types";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { useReducer, useEffect } from "react";
import { Redirect } from "react-router-dom";
import data from "../../data.json";

const AppState = (props) => {
  const initialState = {
    isAuthenticated: false,
  };

  useEffect(() => {
    console.log(data[0]);
  }, []);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const login = () => {
    setAuthenticated(true);
    // localStorage.setItem("isAuthenticated", true);
  };
  const logout = () => {
    setAuthenticated(false);
    // localStorage.setItem("isAuthenticated", false);
  };
  const setAuthenticated = (value) => {
    dispatch({
      type: SET_AUTHENTICATED,
      payload: {
        val: value,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
