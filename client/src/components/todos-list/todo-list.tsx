import React from "react";
import {TodoItem} from "./todo-item";
import {useAppSelector} from "../../hooks/redux";
import {useGetTodosQuery} from "../../store/api/todos.api/todos.api";
import "./style.sass";

export const TodoList = () => {
  const {email} = useAppSelector((state) => state.authPage);
  const {data} = useGetTodosQuery(email);

  const filteredArray = data?.filter((item) => item.email === email);

  return (
    <div className="todo_list_wrapper">
      {filteredArray?.length > 0 ? (
        filteredArray.reverse().map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })
      ) : (
        <div>пока здесь пусто, но здесь будет ваш список дел</div>
      )}
    </div>
  );
};
