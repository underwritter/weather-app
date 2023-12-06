import {Hour, ResponseWeather} from "../api/weather.api/weather.api.types";
import {MaxTemperatureType, MinTemperatureType, TemperatureType} from "./../../components/weather-page/weather.types";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface ITempType {
  tempDay?: TemperatureType;
  maxTemp?: MaxTemperatureType;
  minTemp?: MinTemperatureType;
}

interface IinitialWeatherState {
  tempType: ITempType;
  forecast: ResponseWeather | null;
  hours: Hour[] | []
}

export const initialWeatherState: IinitialWeatherState = {
  tempType: {
    tempDay: "temp_c",
    maxTemp: "maxtemp_c",
    minTemp: "mintemp_c",
  },
  forecast: null,
  hours: []

};

export const weatherPageSlice = createSlice({
  name: "weatherPage",
  initialState: initialWeatherState,
  reducers: {
    setTemperatureType(state, action: PayloadAction<ITempType>) {
      state.tempType = action.payload;
    },
    setWeatherForecastDay(state, action: PayloadAction<ResponseWeather>) {
      state.forecast = action.payload;
    },
    setWeatherForecastHours(state, action: PayloadAction<Hour[]>) {
      state.hours = action.payload;
    },
  },
});

export const {
  setTemperatureType,
  setWeatherForecastDay,
  setWeatherForecastHours
} = weatherPageSlice.actions;
