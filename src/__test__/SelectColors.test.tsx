import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SelectColors from "../Component/SelectColors";
import data from "../data.json";
import AppState from "../Context/appContext/AppState";

test("Verify All Element in Component", () => {
  const TestComponent = () => {
    const handleChange = jest.fn();
    return (
      <div>
        <SelectColors handleChange={handleChange} />
      </div>
    );
  };

  render(
    <AppState>
      <SelectColors />
    </AppState>
  );
  const defaultColors: String[] = [
    "red",
    "blue",
    "green",
    "yellow",
    "violet",
    "pink",
  ];

  defaultColors.forEach((res) => {
    expect(screen.getByTestId(`${res}`)).toBeInTheDocument;
  });
});

test("Verify Colors being Selected", () => {
  const TestComponent = () => {
    const handleChange = jest.fn();
    return (
      <div>
        <SelectColors handleChange={handleChange} />
      </div>
    );
  };

  render(
    <AppState>
      <SelectColors />
    </AppState>
  );

  userEvent.click(screen.getByTestId("red"));
  userEvent.click(screen.getByTestId("blue"));
  userEvent.click(screen.getByTestId("green"));
  userEvent.click(screen.getByTestId("yellow"));
  userEvent.click(screen.getByTestId("violet"));
  userEvent.click(screen.getByTestId("pink"));

  expect(screen.getByTestId("red")).toBeChecked;
  expect(screen.getByTestId("blue")).toBeChecked;
  expect(screen.getByTestId("green")).toBeChecked;
  expect(screen.getByTestId("yellow")).toBeChecked;
  expect(screen.getByTestId("violet")).toBeChecked;
  expect(screen.getByTestId("pink")).toBeChecked;
});
