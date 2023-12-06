import {ForecastWeatherDay} from "./forecast-day/forecast-weather-day";
import {ForecastHourly} from "./forecast-hour/forecast-hour-card";
import {SearchForm} from "./search-form/search-form";
import {useAppSelector} from "../../hooks/redux";
import React, {useEffect, useRef} from "react";
import { getElementByTime } from "../../utils/weather-page-utils";
import "./style.sass";

export const WeatherPage = () => {
  const weatherForecast = useAppSelector((state) => state.weatherPage.forecast);
  const forecastDay = weatherForecast?.forecast?.forecastday;
  const hours = useAppSelector((state) => state.weatherPage.hours);
  const hourElemRef = useRef<HTMLDivElement | null>(null);

  // const toggleDegree = () => {
  //   dispatch(setTemperatureType())
  // }


  useEffect(() => {
    if (hourElemRef.current) {
      hourElemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [hourElemRef.current, hours]);

  return (
    <div>
      <SearchForm />
      <div className="forecast_day_wrapper">
        {forecastDay?.map((elem) => {
          return (
            <ForecastWeatherDay
              weather={weatherForecast}
              forecast={elem}
              key={elem.date_epoch}
            />
          );
        })}
      </div>
      {hours[0] ? (
        <div className="forecast_hour_wrapper">
          {hours?.map((hour, index) => {
            return (
              <ForecastHourly
                ref={getElementByTime(hour) ? hourElemRef : null}
                hour={hour}
                weather={weatherForecast}
                key={hour.time_epoch}
              />
            );
          })}
        </div>
      ) : (
        <div className="be_out_forecast_hour">
          Нажмите на любой день, чтобы увидеть почасовой прогноз
        </div>
      )}
    </div>
  );
};
