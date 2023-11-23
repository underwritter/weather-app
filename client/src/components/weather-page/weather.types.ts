import {Forecastday, ResponseWeather } from "../../store/api/weather.api/weather.api.types";

export type TemperatureType = "temp_c" | "temp_f" ;
export type MaxTemperatureType =  "maxtemp_c" | "maxtemp_f";
export type MinTemperatureType =  "mintemp_c" | "mintemp_f";



export interface IForecastWeatherDayProps {
  weather?: ResponseWeather;
  forecast?: Forecastday;
}