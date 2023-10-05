import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IAuthPageState } from "../slices/auth.slice";

interface IUserRegisterApiProps {
  email: string;
  password: string;
  name: string
}

interface IUserRegistrationApiResponse{
    message: string;
    success: boolean;
}

interface IUserAuthorizationApiResponse{
    token: string;
    success: boolean;
}

interface IUserAuthApiProps{
    email: string;
    password: string;

}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api/auth/"}),
  // tagTypes:['huy'],
  endpoints: (builder) => ({
    registration: builder.mutation<IUserRegistrationApiResponse, IUserRegisterApiProps>({
      query: (body) => ({url: `registration`, body, method: "POST",}),
      // invalidatesTags:['huy']
    }),
    authorization: builder.mutation<IUserAuthorizationApiResponse, IUserAuthApiProps>({
        query: (body) => ({url: `login`, body, method: "POST",}),        
      }),
      getUser: builder.query<IAuthPageState, unknown >({
        query: () => ({url: 'get_user',headers:{Authorization: localStorage.getItem('isAuth')}, }),  
        // providesTags:['huy']      
      }),
  }),
  keepUnusedDataFor: 1
});

// useLazy - из коробки для гет запросов вызывать функцию для получения данных в любом месте

export const {useRegistrationMutation, useAuthorizationMutation, useGetUserQuery, useLazyGetUserQuery} = authApi;
