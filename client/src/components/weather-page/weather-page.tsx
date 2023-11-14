import React from "react";
import {SearchForm} from "./search-form";
import {ForecastWeatherDay} from "./forecast-weather-day";
import {useForecastWeatherByIpQuery} from "../../store/api/weather.api/weather.api";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setWeatherForecast} from "../../store/slices/weather.slice";

export const WeatherPage = () => {
const weatherForecast = useAppSelector((state)=>state.weatherPage.forecast)
const forecastDay = weatherForecast?.forecast?.forecastday
console.log(forecastDay);

  // const toggleDegree = () => {
  //   dispatch(setTemperatureType())
  // }
  return (
    <div>
      <SearchForm />
      <div className="forecast_day_wrapper">
        {forecastDay?.map((elem)=>{
return <ForecastWeatherDay weather={weatherForecast} forecast={elem} key={elem.date_epoch}/>
})}
      </div>

      
    </div>
  );
};
