
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITodosFields} from "../../../components/home-page/home-page.types";
enum MetodsApi {
  GET = "GET",
  POST = "POST",
  PUT= "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}


export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
  tagTypes: ["huy"],
  endpoints: (builder) => ({
    addTodo: builder.mutation<unknown, ITodosFields>({
      query: (body) => ({
        url: `/todos`,
        body,
        method: MetodsApi.POST,
      }),
      invalidatesTags: ["huy"],
    }),
    getTodos: builder.query<ITodosFields[], string>({
      query: () => ({
        url: `/todos`,
      }),
      providesTags: ["huy"],
    }),
    deliteTodo: builder.mutation<unknown, ITodosFields>({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: MetodsApi.DELETE,
        body,
      }),
      invalidatesTags: ["huy"],
    }),
    toggleIsDoneTodo: builder.mutation<ITodosFields, {id: number, isDone: boolean}>({
      query: ({ id, isDone}) => ({
        url: `todos/${id}`,
        method: MetodsApi.PATCH,
        body: { isDone },
      }),
      invalidatesTags: ["huy"],
    }),
  }),
  keepUnusedDataFor: 1,
});

// useLazy - из коробки для гет запросов вызывать функцию для получения данных в любом месте

export const {
  useAddTodoMutation,
  useGetTodosQuery,
  useDeliteTodoMutation,
  useToggleIsDoneTodoMutation,
} = todosApi;
