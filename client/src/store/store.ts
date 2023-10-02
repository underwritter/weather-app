import {authPageSlice} from "./slices/auth.slice";
import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./api/user.api";

export const store = configureStore({
  reducer: {
    authPage: authPageSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;