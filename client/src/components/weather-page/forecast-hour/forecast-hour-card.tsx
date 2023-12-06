import { getContainerColorByDay } from "../../../utils/weather-page-utils";
import React, {CSSProperties, FC, LegacyRef, forwardRef} from "react";
import {IForecastHourlyProps} from "../weather.types";
import {useAppSelector} from "../../../hooks/redux";
import {getDegreeByType} from "../constants";
import "../style.sass";

export const ForecastHourly = forwardRef(
  ({hour, weather}: IForecastHourlyProps, ref: LegacyRef<HTMLDivElement>) => {
    const date = new Date(hour.time);
    const tempType = useAppSelector((state) => state.weatherPage.tempType);
    const icon = hour?.condition?.icon;

  

    return (
      <div
        ref={ref}
        className="forecast_hour"
        style={getContainerColorByDay(weather?.current?.is_day)}
      >
        <div>{date.getHours()}:00</div>
        <div
          className="icon_hour"
          style={
            icon
              ? {backgroundImage: `url(${icon})`}
              : {backgroundImage: `url(../icon/weather.png)`}
          }
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
