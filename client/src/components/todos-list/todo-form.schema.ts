import {errValidMessage} from "../../constants/validation-message";
import * as yup from "yup";

const {errRequired} = errValidMessage;

export const todosSchema = yup.object({
  description: yup.string().required(errRequired),
  
});