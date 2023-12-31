import {InputField} from "../form-fields/input-field/input-field";
import {useRegistrationMutation} from "../../store/api/user.api/user.api";
import {registrationSchema} from "./registration-form.schema";
import {IRegistrationFields} from "./registration-form.types";
import {CustomButton} from "../custom_button/custom_button";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
import {Path} from "../../constants/path";
import React, {FormEvent} from "react";
import {toast} from "react-toastify";
import "./style.sass";

export const RegistrationForm = () => {
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
  } = useForm<IRegistrationFields>({
    resolver: yupResolver(registrationSchema),
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      name: "",
      repeatPassword: "",
    },
  });
  const navigate = useNavigate();

  const onRegistration = async (
    data: IRegistrationFields,
    e: FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    try {
      const {success} = await registration(data).unwrap();
      if (success) {
        toast.success("Пользователь успешно создан");
        navigate(Path.Auth);
      }
    } catch (err) {
      toast.error(err.data.message);
    }
  };

  const [registration] = useRegistrationMutation();

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(onRegistration)} className="form_">
        <div className="_title">Зарегистрируйтесь чтобы войти</div>
        <Controller
          name="name"
          control={control}
          render={({field: {value, onChange}}) => (
            <InputField
              name="name"
              value={value}
              onChange={onChange}
              errors={errors}
              type="text"
              placeholder="Ваше имя"
              className={"input_variant_M"}
            />
          )}
        />
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
        <Controller
          name="repeatPassword"
          control={control}
          render={({field: {value, onChange}}) => (
            <InputField
              name="repeatPassword"
              value={value}
              onChange={onChange}
              errors={errors}
              type="password"
              placeholder="Повторите пароль"
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
