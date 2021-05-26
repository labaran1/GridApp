import React, { Fragment, useContext } from "react";
import AppContext from "../Context/appContext/AppContext";

export default function SelectColors({ title, handleChange }: any) {
  const appContext = useContext(AppContext);
  const { defaultColors } = appContext;
  return (
    <div className={"colorToSelectContainer"}>
      <div className={"colorToSelect"}>
        {defaultColors.map((res: any) => (
          //   <span key={res}>{res}</span>
          <Fragment key={res}>
            <input
              type="checkbox"
              name={res}
              id={res}
              value={res}
              data-testid={res}
              onChange={handleChange}
            />
            <label htmlFor={res} style={{ background: res }}>
              {" "}
            </label>{" "}
            <br />
          </Fragment>
        ))}
      </div>
      <h3 className={"selectedTitle"}>{title}</h3>
    </div>
  );
}
