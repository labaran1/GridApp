import React from "react";

export default function DisplayShapes({
  selectedShapeColors,
  selectedShapeName,
}: any) {
  return (
    <div className={"displayShapes"}>
      {selectedShapeName.map((sha: any) =>
        selectedShapeColors.map((col: any) => (
          <div className={"shapeBox"} key={sha + col}>
            <span
              data-testid={sha}
              className={sha}
              style={{
                background: sha !== "Triangle" ? col : "",
                borderBottom: sha === "Triangle" ? `100px solid ${col}` : "",
              }}
            ></span>
          </div>
        ))
      )}
    </div>
  );
}
