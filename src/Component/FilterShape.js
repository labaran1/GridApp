import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/appContext/AppContext";

export default function FilterShape() {
  const appContext = useContext(AppContext);
  const { shapes, defaultColors } = appContext;
  const [selectedShapeName, setSelectedShapeName] = useState([]);
  const [selectedShapeColors, setSelectedShapeColors] = useState([]);
  const [initialShapeChecked, setInitialShapeChecked] = useState(true);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (selectedShapeName.length == 5 && selectedShapeColors.length == 6) {
      setTitle("All Items");
    } else if (
      (selectedShapeColors.length == 6 && selectedShapeName.length > 1) ||
      (selectedShapeName.length == 5 && selectedShapeColors.length > 1)
    ) {
      setTitle("Mutitple Items");
    } else if (
      selectedShapeName.length == 5 &&
      selectedShapeColors.length == 1
    ) {
      setTitle("All red items");
    } else if (
      selectedShapeColors.length == 6 &&
      selectedShapeName.length == 1
    ) {
      setTitle("All oval items");
    } else if (
      selectedShapeName.length > 1 &&
      selectedShapeColors.length == 1
    ) {
      setTitle("Mutiple red items");
    } else if (
      selectedShapeColors.length > 1 &&
      selectedShapeName.length == 1
    ) {
      setTitle("Multiple oval items");
    } else if (
      selectedShapeColors.length == 1 &&
      selectedShapeName.length == 1
    ) {
      setTitle("Round Oval items");
    } else {
      setTitle("");
    }
  }, [selectedShapeName, selectedShapeColors]);

  const handleClick = (e) => {
    // console.log(e.target.textContent);
    // setSelectedShapeName(e.target.textContent);
    if (e.target.checked) {
      setSelectedShapeName((old) => [...old, e.target.value]);
    } else {
      setSelectedShapeName((old) => old.filter((res) => res != e.target.value));
    }
  };
  const handleChange = (e) => {
    if (e.target.checked) {
      setSelectedShapeColors((old) => [...old, e.target.value]);
    } else {
      setSelectedShapeColors((old) =>
        old.filter((res) => res != e.target.value)
      );
    }
  };

  return (
    <div>
      <div className={"ShapeContainer"}>
        <h1>Filters</h1>
        <a href="#">Shapes</a>
        <div>
          {shapes.map((res) => (
            <>
              <input
                type="checkbox"
                name={res.shape}
                id={res.shape}
                value={res.shape}
                onChange={handleClick}
              />
              <label htmlFor={res.shape}> {res.shape}</label> <br />
            </>
          ))}
        </div>
      </div>
      <div className={"colorToSelectContainer"}>
        <div className={"colorToSelect"}>
          {defaultColors.map((res) => (
            //   <span key={res}>{res}</span>
            <>
              <input
                type="checkbox"
                name={res}
                id={res}
                value={res}
                //   checked="checked"
                onChange={handleChange}
              />
              <label htmlFor={res} style={{ background: res }}>
                {" "}
                {/* {res} */}
              </label>{" "}
              <br />
            </>
          ))}
        </div>
        <h3 className={"selectedTitle"}>{title}</h3>
      </div>

      {/* <div>color shape</div> */}
      <div className={"displayShapes"}>
        {selectedShapeName.map((sha) =>
          selectedShapeColors.map((col) => (
            <div className={"shapeBox"}>
              <span
                className={sha}
                style={{
                  background: sha != "Triangle" ? col : "",
                  borderBottom: sha == "Triangle" ? `100px solid ${col}` : "",
                }}
              >
                {/* {sha}
                {col} */}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
