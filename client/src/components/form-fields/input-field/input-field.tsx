import React, {useState} from "react";
import {IFieldProps} from "../types";
import "./style.sass";

export const InputField = <T extends object>({
  onChange,
  value,
  errors,
  name,
  type,
  placeholder,
}: IFieldProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const spanErrMessage = (
    <span className="span_error_message">
      {(errors[name]?.message as string) ?? ""}
    </span>
  );

  const toggleClass = () => {
    type = "text";
    setIsShowPassword(!isShowPassword);
  };
  const inputTypeByProps = isShowPassword ? (type = "text") : (type = "password")

  if (type === "password") {
    return (
      <div className="custom_input_wrapper">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={inputTypeByProps}
          className="custom_input"
        />
        <div
          className={isShowPassword ? "hide_password" : "show_password"}
          onClick={toggleClass}
        ></div>
        {spanErrMessage}
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
        {spanErrMessage}
      </div>
    );
  }
};
