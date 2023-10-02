import * as yup from "yup";

export const authSchema = yup.object({
  email: yup
    .string()
    .email("Введите действующую почту")
    .required("Поле обязательно"),
  password: yup
    .string()
    .matches(/^\w+$/, "пробелы не допустимы")
    .required("Поле обязательно"),
});

//.oneOf([yup.ref('password')], 'Пароли не совпадают')
