import {ResponseWeather} from "../api/weather.api/weather.api.types";
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
}

export const initialWeatherState: IinitialWeatherState = {
  tempType: {
    tempDay: "temp_c",
    maxTemp: "maxtemp_c",
    minTemp: "mintemp_c",
  },
  forecast: null,
};

export const weatherPageSlice = createSlice({
  name: "weatherPage",
  initialState: initialWeatherState,
  reducers: {
    setTemperatureType(state, action: PayloadAction<ITempType>) {
      state.tempType = action.payload;
    },
    setWeatherForecast(state, action: PayloadAction<ResponseWeather>) {
      state.forecast = action.payload;
    },
  },
});

export const {
  setTemperatureType,
  setWeatherForecast,
} = weatherPageSlice.actions;
