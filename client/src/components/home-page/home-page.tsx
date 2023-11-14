import {CustomButton} from "../custom_button/custom_button";
import {ModalWindow} from "../modal-window/modal-window";
import {useAppSelector} from "../../hooks/redux";
import {TodoForm} from "../todos-list/todo-form";
import {TodoList} from "../todos-list/todo-list";
import React, {useState} from "react";
import "./style.sass";
import { useGetTodosQuery } from "../../store/api/todos.api/todos.api";

export const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };


  const name = useAppSelector((state) => state.authPage.name);
  return (
    <div className="home_page_wrapper">
      <div className="welcome_inscription">Добро пожаловать, {name}!</div>
      <div className="add_todo_wrapper">
        <div className="top_bar_todo_list">
        <div>Todos</div>
        <CustomButton
          children={"Добавить дело"}
          type={"button"}
          onClick={handleOpenModal}
          disabled={false}
        />
        </div>
       
        <ModalWindow
          isActive={isOpenModal}
          children={<TodoForm onClose={handleOpenModal} />}
          onClose={handleOpenModal}
        />

        <TodoList />
      </div>
    </div>
  );
};
