import React, {FC} from "react";
import {ITodosFields} from "../home-page/home-page.types";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {todosSchema} from "./todo-form.schema";
import {InputField} from "../form-fields/input-field/input-field";
import {CustomButton} from "../custom_button/custom_button";
import {useAppSelector} from "../../hooks/redux";
import {useAddTodoMutation} from "../../store/api/todos.api/todos.api";

interface ITodoFormProps {
  onClose: () => void;
}

export const TodoForm: FC<ITodoFormProps> = ({onClose}) => {
  const INITIAL_STATE_TODO_FORM = {
    description: "",
    isDone: false,
    id: Math.random(),
  };
  const email = useAppSelector((state) => state.authPage.email);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<ITodosFields>({
    resolver: yupResolver(todosSchema),
    reValidateMode: "onChange",
    defaultValues: INITIAL_STATE_TODO_FORM,
  });

  const [setTodosApi] = useAddTodoMutation();

  const onCreateTodo = async (body: ITodosFields) => {
    console.log(body);
    try {
      const response = await setTodosApi({...body, email}).unwrap();
      if (response) {
        onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onCreateTodo)} className="todo_form">
      <Controller
        name="description"
        control={control}
        render={({field: {value, onChange}}) => (
          <InputField
            name="description"
            value={value}
            onChange={onChange}
            errors={errors}
            type="text"
            placeholder="Опишите дело"
            className={"input_variant_S"}
          />
        )}
      />
      <div>
        <CustomButton
          children={"Добавить"}
          type={"submit"}
          disabled={!isValid}
        />
        <CustomButton
          children={"Закрыть"}
          type={"button"}
          onClick={onClose}
          disabled={false}
        />
      </div>
    </form>
  );
};
