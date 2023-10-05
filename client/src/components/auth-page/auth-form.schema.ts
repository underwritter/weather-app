import {errValidMessage} from "../../constants/validation-message";
import * as yup from "yup";

const {errEmail, errRequired, errValidSpace} = errValidMessage;

export const authSchema = yup.object({
  email: yup.string().email(errEmail).required(errRequired),
  password: yup.string().matches(/^\w+$/, errValidSpace).required(errRequired),
});

//.oneOf([yup.ref('password')], 'Пароли не совпадают')
