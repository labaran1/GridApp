import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectShape from "../Component/SelectShape";
import data from "../data.json";
import AppState from "../Context/appContext/AppState";

test("Verify All element Present in Component", () => {
  const TestComponent = () => {
    const handleClick = jest.fn();
    return (
      <div>
        <SelectShape handleClick={handleClick} />
      </div>
    );
  };
  render(
    <AppState>
      <TestComponent />
    </AppState>
  );
  expect(screen.getByText("Filters")).toBeInTheDocument;
  expect(screen.getByText("Shapes")).toBeInTheDocument;
  data.forEach((currentData) => {
    expect(screen.getByText(currentData.shape)).toBeInTheDocument;
  });
});

test("Verify shape Being Selected", () => {
  const TestComponent = () => {
    const handleClick = jest.fn();
    return (
      <div>
        <SelectShape handleClick={handleClick} />
      </div>
    );
  };
  render(
    <AppState>
      <TestComponent />
    </AppState>
  );

  userEvent.click(screen.getByText("Oval"));
  userEvent.click(screen.getByText("Round"));
  userEvent.click(screen.getByText("Triangle"));
  userEvent.click(screen.getByText("Square"));
  userEvent.click(screen.getByText("Rectangle"));

  expect(screen.getByLabelText("Oval")).toBeChecked;
  expect(screen.getByLabelText("Round")).toBeChecked;
  expect(screen.getByLabelText("Triangle")).toBeChecked;
  expect(screen.getByLabelText("Square")).toBeChecked;
  expect(screen.getByLabelText("Rectangle")).toBeChecked;
});
