import {errValidMessage} from "../../constants/validation-message";
import * as yup from "yup";

const {errWeatherSearch} = errValidMessage;

export const searchSchema = yup.object({
  nameByCity: yup.string().required(errWeatherSearch),
  
});