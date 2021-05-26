import "./App.css";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AppContext from "./Context/appContext/AppContext";
import Home from "./Component/Home";
import Login from "./Component/Login";

function App() {
  const appContext = useContext(AppContext);
  const { isAuthenticated } = appContext;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route exact path="/home">
          {isAuthenticated ? <Home /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
