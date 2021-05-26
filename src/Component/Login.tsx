import React, { useContext } from "react";
import AppContext from "../Context/appContext/AppContext";

export default function Login() {
  const appContext = useContext(AppContext);
  const { login } = appContext;

  return (
    <div className={"loginContainer"}>
      <h1>Welcome</h1>
      <button onClick={() => login()}>login</button>
    </div>
  );
}
