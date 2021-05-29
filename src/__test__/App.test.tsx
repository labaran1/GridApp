/* eslint-disable @typescript-eslint/no-unused-expressions */
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useLocation, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../App";
import AppState from "../Context/appContext/AppState";

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-test-id="location-display">{location.pathname}</div>;
};

const TestComponent = () => {
  const history = createMemoryHistory();
  return (
    <div>
      <Router history={history}>
        <App />
        <LocationDisplay />
      </Router>
    </div>
  );
};

test("Full app Navigation", () => {
  render(
    <AppState>
      <TestComponent />
    </AppState>
  );
  expect(screen.getByText("Logout")).toBeInTheDocument;
  userEvent.click(screen.getByText("Logout"));

  expect(screen.getByText("login")).toBeInTheDocument;
  userEvent.click(screen.getByText("login"));

  expect(screen.getByText("Logout")).toBeInTheDocument;
});
