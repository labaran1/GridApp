import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AppState from "../Context/appContext/AppState";

import Nav from "../Component/Nav";

const TestComponent = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

test("Verify all element", () => {
  render(
    <AppState>
      <TestComponent />
    </AppState>
  );

  expect(screen.getByText("SHAPES").textContent).toEqual("SHAPES");
  expect(screen.getByText("Logout").textContent).toEqual("Logout");
});
