import React, { useContext } from "react";
import AppContext from "../Context/appContext/AppContext";

export default function SelechShape({ handleClick }: any) {
  const appContext = useContext(AppContext);
  const { shapes } = appContext;

  return (
    <div className={"ShapeContainer"}>
      <h1>Filters</h1>
      <a href="#" style={{ marginBottom: "10px" }}>
        Shapes
      </a>
      <div>
        {shapes.map((res: any) => (
          <span key={res.shape}>
            <input
              type="checkbox"
              name={res.shape}
              id={res.shape}
              value={res.shape}
              onChange={handleClick}
            />
            <label htmlFor={res.shape}> {res.shape}</label> <br />
          </span>
        ))}
      </div>
    </div>
  );
}
