import {FieldErrors} from "react-hook-form";

export interface IFieldProps<T> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name: keyof T;
  type?: React.HTMLInputTypeAttribute;
  errors: FieldErrors<T>;
  placeholder?: string;
}
