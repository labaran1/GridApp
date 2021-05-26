import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterShape from "../Component/FilterShape";
import AppState from "../Context/appContext/AppState";
const TestComponent = () => {
  return (
    <div>
      <FilterShape />
    </div>
  );
};
test("Testing All items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );
  userEvent.click(screen.getByText("Oval"));
  userEvent.click(screen.getByText("Round"));
  userEvent.click(screen.getByText("Triangle"));
  userEvent.click(screen.getByText("Square"));
  userEvent.click(screen.getByText("Rectangle"));
  //
  userEvent.click(screen.getByTestId("blue"));
  userEvent.click(screen.getByTestId("red"));
  userEvent.click(screen.getByTestId("green"));
  userEvent.click(screen.getByTestId("yellow"));
  userEvent.click(screen.getByTestId("violet"));
  userEvent.click(screen.getByTestId("pink"));

  const title = screen.getByTestId("shapeTitle");
  expect(title.textContent).toEqual("All Items");
});

test("Testing Mutitple Items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );

  userEvent.click(screen.getByText("Oval"));
  userEvent.click(screen.getByText("Round"));
  userEvent.click(screen.getByText("Triangle"));
  userEvent.click(screen.getByText("Square"));
  userEvent.click(screen.getByText("Rectangle"));
  userEvent.click(screen.getByTestId("blue"));
  userEvent.click(screen.getByTestId("red"));
  const title = screen.getByTestId("shapeTitle");
  expect(title.textContent).toEqual("Multiple Items");
});
test("Testing Multiple red items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );
  userEvent.click(screen.getByText("Oval"));
  userEvent.click(screen.getByText("Round"));
  userEvent.click(screen.getByTestId("red"));
  const title = screen.getByTestId("shapeTitle");
  expect(title.textContent).toEqual("Multiple red items");
});
test("Testing Multiple oval items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );
  userEvent.click(screen.getByTestId("blue"));
  userEvent.click(screen.getByTestId("red"));
  userEvent.click(screen.getByText("Oval"));
  const title = screen.getByTestId("shapeTitle");
  expect(title.textContent).toEqual("Multiple oval items");
});
test("Testing Round Oval items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );
  userEvent.click(screen.getByTestId("red"));
  userEvent.click(screen.getByText("Oval"));
  const title = screen.getByTestId("shapeTitle");
  expect(title.textContent).toEqual("Round Oval items");
});
test("Testing All oval items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );
  userEvent.click(screen.getByTestId("blue"));
  userEvent.click(screen.getByTestId("red"));
  userEvent.click(screen.getByTestId("green"));
  userEvent.click(screen.getByTestId("yellow"));
  userEvent.click(screen.getByTestId("violet"));
  userEvent.click(screen.getByTestId("pink"));

  userEvent.click(screen.getByText("Oval"));
  const title = screen.getByTestId("shapeTitle");
  expect(title.textContent).toEqual("All oval items");
});

test("Testing All red items title", () => {
  render(
    <AppState>
      <FilterShape />
    </AppState>
  );

  userEvent.click(screen.getByText("Oval"));
  userEvent.click(screen.getByText("Round"));
  userEvent.click(screen.getByText("Triangle"));
  userEvent.click(screen.getByText("Square"));
  userEvent.click(screen.getByText("Rectangle"));
  userEvent.click(screen.getByTestId("blue"));
  const title = screen.getByTestId("shapeTitle");
  //   screen.debug(title);
  expect(title.textContent).toEqual("All red items");
});

//   expect(screen.getByText("Round Oval items")).toBeInTheDocument;

//   userEvent.click(screen.getByText("Oval"));
//   userEvent.click(screen.getByText("Round"));
//   userEvent.click(screen.getByText("Triangle"));
//   userEvent.click(screen.getByText("Square"));
//   userEvent.click(screen.getByText("Rectangle"));
// ll

// userEvent.click(screen.getByTestId("blue"));
//   userEvent.click(screen.getByTestId("red"));
// userEvent.click(screen.getByTestId("green"));
// userEvent.click(screen.getByTestId("yellow"));
// userEvent.click(screen.getByTestId("violet"));
// userEvent.click(screen.getByTestId("pink"));
//   screen.debug();
// });
