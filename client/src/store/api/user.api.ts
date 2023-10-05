import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { AuthPageState } from "../slices/auth.slice";

interface UserRegisterApiProps {
  email: string;
  password: string;
  name: string
}

interface UserRegistrationApiResponse{
    message: string;
    success: boolean;
}

interface UserAuthorizationApiResponse{
    token: string;
    success: boolean;
}

interface UserAuthApiProps{
    email: string;
    password: string;

}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api/auth/"}),
  // tagTypes:['huy'],
  endpoints: (builder) => ({
    registration: builder.mutation<UserRegistrationApiResponse, UserRegisterApiProps>({
      query: (body) => ({url: `registration`, body, method: "POST",}),
      // invalidatesTags:['huy']
    }),
    authorization: builder.mutation<UserAuthorizationApiResponse, UserAuthApiProps>({
        query: (body) => ({url: `login`, body, method: "POST",}),        
      }),
      getUser: builder.query<AuthPageState, unknown >({
        query: () => ({url: 'get_user',headers:{Authorization: localStorage.getItem('isAuth')}, }),  
        // providesTags:['huy']      
      }),
  }),
  keepUnusedDataFor: 1
});

// useLazy - из коробки для гет запросов вызывать функцию для получения данных в любом месте

export const {useRegistrationMutation, useAuthorizationMutation, useGetUserQuery, useLazyGetUserQuery} = authApi;
