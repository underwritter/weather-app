import {setWeatherForecastHours} from "../../../store/slices/weather.slice";
import {getContainerColorByDay} from "../../../utils/weather-page-utils";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {days, getDegreeByType, months} from "../constants";
import {IForecastWeatherDayProps} from "../weather.types";
import React, {FC} from "react";
import "../style.sass";

export const ForecastWeatherDay: FC<IForecastWeatherDayProps> = ({
  weather,
  forecast,
  onClick,
}) => {
  const {avghumidity, maxwind_kph} = forecast?.day;
  const tempType = useAppSelector((state) => state.weatherPage.tempType);
  const date = new Date(forecast?.date);
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
  const wind = Math.round(maxwind_kph * 0.28);
  const dispatch = useAppDispatch();

  return (
    <div
      className="weather_day_wrapper"
      onClick={() => {
        onClick(), dispatch(setWeatherForecastHours(forecast?.hour));
      }}
      style={getContainerColorByDay(weather?.current?.is_day)}
    >
      <div className="header_weather_day">
        <div className="location">
          {weather?.location?.name}
          <div className="location_icon"></div>
        </div>
        <div>
          {month} {date.getDate()}, {day}
        </div>
        <div
          className="icon_weather"
          style={{backgroundImage: `url(${forecast?.day?.condition?.icon})`}}
        ></div>
      </div>

      <div className="temperature">
        <div className="temperature_icon"></div>
        {Math.round(forecast?.day?.[tempType.minTemp])}
        {getDegreeByType[tempType.minTemp]}—
        {Math.round(forecast?.day?.[tempType.maxTemp])}
        {getDegreeByType[tempType.maxTemp]}
      </div>

      <div className="parametrs_wrapper">
        <div className="params_descrip">
          <div className="wind"></div>
          <div className="params">{wind}м/с</div>
        </div>
        <div className="params_descrip">
          <div className="humidity"></div>
          <div className="params">{avghumidity}%</div>
        </div>
        <div className="params_descrip">
          <div className="sunrise"></div>
          <div className="params">{forecast?.astro?.sunrise}</div>
        </div>
        <div className="params_descrip">
          <div className="sunset"></div>
          <div className="params">{forecast?.astro?.sunset}</div>
        </div>
      </div>
    </div>
  );
};
