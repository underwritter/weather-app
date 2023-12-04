import React, {CSSProperties, FC, LegacyRef, forwardRef} from "react";
import {IForecastHourlyProps} from "../weather.types";
import "../style.sass";
import {getDegreeByType} from "../constants";
import {useAppSelector} from "../../../hooks/redux";

export const ForecastHourly = forwardRef(
  ({hour, weather}: IForecastHourlyProps, ref: LegacyRef<HTMLDivElement>) => {
    const date = new Date(hour.time);
    const hours = date.getHours();
    const tempType = useAppSelector((state) => state.weatherPage.tempType);

    const forecastConteinerGradient =
      weather?.current?.is_day === 1
        ? {
            background:
              "linear-gradient(320deg, rgba(0,232,255,1) 0%, rgba(255,102,0,1) 100%)",
          }
        : {
            background:
              " linear-gradient(320deg, rgba(2,0,36,1) 44%, rgba(76,23,166,1) 100%)",
          };

    return (
      <div
        ref={ref}
        className="forecast_hour"
        style={{...forecastConteinerGradient}}
      >
        <div>{hours}:00</div>
        <div
          className="icon_hour"
          style={{backgroundImage: `url(${hour?.condition?.icon})`}}
        ></div>
        <div>
          {Math.round(hour[tempType.tempDay])}
          {getDegreeByType[tempType.tempDay]}
        </div>
      </div>
    );
  }
);

ForecastHourly.displayName === "ForecastHourly";
