import React, {BaseSyntheticEvent, useEffect, useRef, useState} from "react";
import {ForecastWeatherDay} from "./forecast-day/forecast-weather-day";
import {setTemperatureType} from "../../store/slices/weather.slice";
import {Hour} from "../../store/api/weather.api/weather.api.types";
import {ForecastHourly} from "./forecast-hour/forecast-hour-card";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getElementByTime} from "../../utils/weather-page-utils";
import {ToggleDegree} from "./toggle-degree/toggle-degree";
import {SearchForm} from "./search-form/search-form";
import "./style.sass";

export const WeatherPage = () => {
  const hours = useAppSelector((state) => state.weatherPage.hours);
  const weatherForecast = useAppSelector((state) => state.weatherPage.forecast);
  const forecastDay = weatherForecast?.forecast?.forecastday;

  const dispatch = useAppDispatch();

  const [currerntDayTab, setCurrentDayTab] = useState<number>(0);

  const firstHourRef = useRef<HTMLDivElement | null>(null);
  const hourElemRef = useRef<HTMLDivElement | null>(null);

  const scrollIntoView = (el: HTMLDivElement) =>
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  const toggleDegree = (e: BaseSyntheticEvent) => {
    const temperatureType = e.target.checked ? "f" : "c";

    dispatch(
      setTemperatureType({
        tempDay: `temp_${temperatureType}`,
        maxTemp: `maxtemp_${temperatureType}`,
        minTemp: `mintemp_${temperatureType}`,
      })
    );
  };

  const getRefForHourElement = (hour: Hour, index: number) => {
    if (currerntDayTab === 0 && getElementByTime(hour, currerntDayTab)) {
      return hourElemRef;
    } else if (index === 0) {
      return firstHourRef;
    }
  };

  useEffect(() => {
    hourElemRef.current && scrollIntoView(hourElemRef.current);
    firstHourRef.current && scrollIntoView(firstHourRef.current);
  }, [hourElemRef.current, firstHourRef.current, hours, currerntDayTab]);

  return (
    <div>
      <ToggleDegree onChange={toggleDegree} />
      <SearchForm />
      <div className="forecast_day_wrapper">
        {forecastDay?.map((elem, index) => (
          <ForecastWeatherDay
            onClick={() => {
              setCurrentDayTab(index);
            }}
            weather={weatherForecast}
            forecast={elem}
            key={elem.date_epoch}
          />
        ))}
      </div>
      {hours[0] ? (
        <div className="forecast_hour_wrapper">
          {hours?.map((hour, index) => (
            <ForecastHourly
              ref={getRefForHourElement(hour, index)}
              hour={hour}
              weather={weatherForecast}
              key={hour.time_epoch}
            />
          ))}
        </div>
      ) : (
        <div className="be_out_forecast_hour">
          Нажмите на любой день, чтобы увидеть почасовой прогноз
        </div>
      )}
    </div>
  );
};
