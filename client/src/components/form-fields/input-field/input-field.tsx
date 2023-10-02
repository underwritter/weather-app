import React, {useState} from "react";
import {FieldProps} from "../types";
import "./style.sass";

export const InputField = <T extends object>({
  onChange,
  value,
  errors,
  name,
  type,
  placeholder,
}: FieldProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleClass = () => {
    type = "text";
    setIsShowPassword(!isShowPassword);
  };

  if (type === "password") {
    return (
      <div className="custom_input_wrapper">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={isShowPassword ? (type = "text") : (type = "password")}
          className="custom_input"
        />
        <div
          className={isShowPassword ? "hide_password" : "show_password"}
          onClick={toggleClass}
        ></div>
        <span className="span_error_message">
          {(errors[name]?.message as string) ?? ""}
        </span>
      </div>
    );
  } else {
    return (
      <div className="custom_input_wrapper">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          className="custom_input"
        />
        <span className="span_error_message">
          {(errors[name]?.message as string) ?? ""}
        </span>
      </div>
    );
  }
};
