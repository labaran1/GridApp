import React, { useContext } from "react";
import AppContext from "../Context/appContext/AppContext";

export default function Nav() {
  const appContext = useContext(AppContext);
  const { logout } = appContext;

  return (
    <nav>
      <h1>SHAPES</h1>
      <span onClick={() => logout()}>Logout</span>
    </nav>
  );
}
