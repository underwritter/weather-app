import * as yup from "yup";

export const registrationSchema = yup.object({
  name: yup.string().required("Поле обязательно"),
  email: yup.string().email("Введите почту").required("Поле обязательно"),
  password: yup
    .string()
    .matches(/^\w+$/, "пробелы не допустимы")
    .required("Поле обязательно"),
  repeatPassword: yup
    .string()
    .matches(/^\w+$/, "пробелы не допустимы")
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Поле обязательно"),
});

//.oneOf([yup.ref('password')], 'Пароли не совпадают')
