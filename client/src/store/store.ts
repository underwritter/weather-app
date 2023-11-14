import { weatherPageSlice } from './slices/weather.slice';
import {authPageSlice} from "./slices/auth.slice";
import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./api/user.api/user.api";
import {todosApi} from "./api/todos.api/todos.api";
import { weatherApi } from "./api/weather.api/weather.api";

export const store = configureStore({
  reducer: {
    authPage: authPageSlice.reducer,
    weatherPage: weatherPageSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(todosApi.middleware)
      .concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
