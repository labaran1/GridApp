import React, { useEffect, useState } from "react";
import DisplayShapes from "./DisplayShapes";
import SelectColors from "./SelectColors";
import SelectShape from "./SelectShape";

export default function FilterShape() {
  const shapeName: string[] = [];
  const colorName: string[] = [];
  const [selectedShapeName, setSelectedShapeName] = useState(shapeName);
  const [selectedShapeColors, setSelectedShapeColors] = useState(colorName);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (selectedShapeName.length === 5 && selectedShapeColors.length === 6) {
      setTitle("All Items");
    } else if (
      (selectedShapeColors.length === 6 && selectedShapeName.length > 1) ||
      (selectedShapeName.length === 5 && selectedShapeColors.length > 1)
    ) {
      setTitle("Multiple Items");
    } else if (
      selectedShapeName.length === 5 &&
      selectedShapeColors.length === 1
    ) {
      setTitle("All red items");
    } else if (
      selectedShapeColors.length === 6 &&
      selectedShapeName.length === 1
    ) {
      setTitle("All oval items");
    } else if (
      selectedShapeName.length > 1 &&
      selectedShapeColors.length === 1
    ) {
      setTitle("Multiple red items");
    } else if (
      selectedShapeColors.length > 1 &&
      selectedShapeName.length === 1
    ) {
      setTitle("Multiple oval items");
    } else if (
      selectedShapeColors.length === 1 &&
      selectedShapeName.length === 1
    ) {
      setTitle("Round Oval items");
    } else {
      setTitle("");
    }
  }, [selectedShapeName, selectedShapeColors]);

  const handleClick = (e: any) => {
    if (e.target.checked) {
      setSelectedShapeName((old: any) => [...old, e.target.value]);
    } else {
      setSelectedShapeName((old: any) =>
        old.filter((res: any) => res != e.target.value)
      );
    }
  };
  const handleChange = (e: any) => {
    if (e.target.checked) {
      setSelectedShapeColors((old: any) => [...old, e.target.value]);
    } else {
      setSelectedShapeColors((old: any) =>
        old.filter((res: any) => res !== e.target.value)
      );
    }
  };

  return (
    <div>
      <SelectShape handleClick={handleClick} />
      <SelectColors handleChange={handleChange} title={title} />
      <DisplayShapes
        selectedShapeColors={selectedShapeColors}
        selectedShapeName={selectedShapeName}
      />
    </div>
  );
}
