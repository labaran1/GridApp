import { fireEvent, render, screen } from "@testing-library/react";
import DisplayShapes from "../Component/DisplayShapes";

test("Verify Shapes in the Document", () => {
  let selectedShapeName: string[] = ["Oval"];
  let selectedShapeColors: string[] = ["red"];
  render(
    <DisplayShapes
      selectedShapeName={selectedShapeName}
      selectedShapeColors={selectedShapeColors}
    />
  );
  selectedShapeName.forEach((res) => {
    expect(screen.getByTestId(res)).toBeInTheDocument;
  });
});
