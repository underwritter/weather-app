import {errValidMessage} from "../../constants/validation-message";
import * as yup from "yup";

const {
  errDoblePassword,
  errEmail,
  errRequired,
  errValidSpace,
} = errValidMessage;

export const registrationSchema = yup.object({
  name: yup.string().required(errRequired),
  email: yup.string().email(errEmail).required(errRequired),
  password: yup.string().matches(/^\w+$/, errValidSpace).required(errRequired),
  repeatPassword: yup
    .string()
    .matches(/^\w+$/, errValidSpace)
    .oneOf([yup.ref("password")], errDoblePassword)
    .required(errRequired),
});

//.oneOf([yup.ref('password')], 'Пароли не совпадают')
