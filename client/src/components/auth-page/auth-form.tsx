import {InputField} from "../form-fields/input-field/input-field";
import {CustomButton} from "../custom_button/custom_button";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import {authSchema} from "./auth-form.schema";
import {IAuthFields} from "./auth-form.types";
import React, {FormEvent} from "react";
import {useAuth} from "./auth.hooks";
import "./style.sass";


export const AuthForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid}, //объект с состоянием формы
    getValues, //получить весь объект формы
    setValue, //сетит в определенное поле значение
    watch, //на  onChange показывает состояние определенного поля
    clearErrors, //при вызове чистит все ошибки формы
    setError, //устанавливает ошибку определенному полю
    setFocus, //фокус на определенном поле
  } = useForm<IAuthFields>({
    resolver: yupResolver(authSchema),
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {login} = useAuth();

  const onLogin = async (data: IAuthFields, e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    login(data);
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(onLogin)} className="form_">
        <div className="_title">Войдите используя почту и пароль</div>
        <Controller
          name="email"
          control={control}
          render={({field: {value, onChange}}) => (
            <InputField
              name="email"
              value={value}
              onChange={onChange}
              errors={errors}
              type="email"
              placeholder="Email"
              className={"input_variant_M"}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field: {value, onChange}}) => (
            <InputField
              name="password"
              value={value}
              onChange={onChange}
              errors={errors}
              type="password"
              placeholder="Пароль"
              className={"input_variant_M"}
            />
          )}
        />
        <CustomButton
          children={"Отправить"}
          type={"submit"}
          disabled={!isValid}
        />
      </form>
    </div>
  );
};
