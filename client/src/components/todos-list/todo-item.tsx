import React, {FC, useState} from "react";
import {ModalWindow} from "../modal-window/modal-window";
import {CustomButton} from "../custom_button/custom_button";
import {
  useDeliteTodoMutation,
  useToggleIsDoneTodoMutation,
} from "../../store/api/todos.api/todos.api";
import {ITodosFields} from "../home-page/home-page.types";
import "./style.sass";

export interface ITodoItemProps {
  todo: {
    isDone?: boolean;
    description: string;
    id?: number;
  };
}

export const TodoItem: FC<ITodoItemProps> = ({todo}) => {

  const [isActive, setIsActive] = useState(false);
  const [deliteTodo] = useDeliteTodoMutation();
  const [toggleIsDone] = useToggleIsDoneTodoMutation();
  const onCloseModal = () => {
    setIsActive(!isActive);
  };

  const handleDeliteTodo = async (todo: ITodosFields) => {
    await deliteTodo(todo);
    onCloseModal();
  };

  const handleCheckboxChange = async (id: number, isDone: boolean) => {
    await toggleIsDone({id, isDone});
  };

  return (
      <div className="todo_wrapper">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => handleCheckboxChange(todo.id, !todo.isDone)}
          className="checkbox"
        />
        <span className={todo.isDone ? 'done_todo' : ''}>{todo.description}</span>
        <span onClick={onCloseModal} className="delete_btn"></span>
        <ModalWindow
          isActive={isActive}
          children={
            <div>
              уверенны?
              <CustomButton
                children="удалить"
                type="button"
                onClick={() => handleDeliteTodo(todo)}
              />
            </div>
          }
          onClose={onCloseModal}
        />
      </div>
  );
};
