import {} from "../types";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { useReducer } from "react";

const AppState = (props) => {
  const initialState = {
    name: "labaran",
    age: 123,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        name: state.name,
        age: state.age,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
