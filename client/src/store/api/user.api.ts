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
  endpoints: (builder) => ({
    registration: builder.mutation<UserRegistrationApiResponse, UserRegisterApiProps>({
      query: (body) => ({url: `registration`, body, method: "POST",}),
    }),
    authorization: builder.mutation<UserAuthorizationApiResponse, UserAuthApiProps>({
        query: (body) => ({url: `login`, body, method: "POST",}),        
      }),
      getUser: builder.query<AuthPageState, unknown >({
        query: () => ({url: 'get_user',headers:{Authorization: localStorage.getItem('success')},}),        
      }),
  }),
});

export const {useRegistrationMutation, useAuthorizationMutation, useGetUserQuery} = authApi;
