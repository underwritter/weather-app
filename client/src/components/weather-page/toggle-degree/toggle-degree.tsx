import { IToggleDegreeProps } from "../weather.types";
import React, {FC} from "react";
import "../style.sass";



export const ToggleDegree: FC<IToggleDegreeProps> = ({onChange}) => {
  return (
    <div className="toggle_wrapper">
      <span className="lable">°C</span>
      <label className="switch">
        <input
          type="checkbox"
          className="input"
          onChange={(e) => {
            onChange(e);
          }}
        />
        <span className="slider round"></span>
      </label>
      <span className="lable">°F</span>
    </div>
  );
};
