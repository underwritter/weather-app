import {FieldErrors} from "react-hook-form";

export interface FieldProps<T> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name: keyof T;
  type?: React.HTMLInputTypeAttribute;
  errors: FieldErrors<T>;
  placeholder?: string;
}
