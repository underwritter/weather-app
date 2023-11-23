import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
  API_KEY,
  BASE_URL_WEATHER,
  weatherApiMetods,
  weatherApiQueryParams,
} from "./constants";
import { ResponseWeather } from "./weather.api.types";
enum MetodsApi {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

const {IPLookup, current, forecast, future} = weatherApiMetods;
const {locationName, quantityDays, language} = weatherApiQueryParams;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL_WEATHER}),
  endpoints: (builder) => ({
    searchByCityName: builder.mutation<ResponseWeather, string>({
      query: (body) => ({
        url: `${forecast}?key=${API_KEY}&${locationName}${body}&days=4`,
        body,
        method: MetodsApi.POST,
      }),
    }),

    forecastWeatherByIp: builder.query<ResponseWeather, string>({
        query: () => ({
          url: `${forecast}?key=${API_KEY}&${locationName}auto:ip&days=4`,
        }),
      }),
  }),
  keepUnusedDataFor: 1,
});

// useLazy - из коробки для гет запросов вызывать функцию для получения данных в любом месте

export const {useSearchByCityNameMutation, useForecastWeatherByIpQuery} = weatherApi;
