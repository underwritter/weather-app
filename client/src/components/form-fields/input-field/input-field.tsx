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
  className,
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

  if (type === "password") {
    return (
      <div className="custom_input_wrapper">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={isShowPassword ? (type = "text") : (type = "password")}
          className={className}/*"custom_input"*/
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
          className={className}
        />
        {spanErrMessage}
      </div>
    );
  }
};
