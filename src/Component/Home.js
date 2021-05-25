import React from "react";
import AppContext from "../Context/appContext/AppContext";
import { useContext } from "react";
// import data from "../data.json";

export default function Home() {
  const appContext = useContext(AppContext);
  const { isAuthenticated, logout } = appContext;

  return (
    <div>
      Home
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}
