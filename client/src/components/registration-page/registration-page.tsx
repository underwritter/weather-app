import {RegistrationForm} from "./registration-form";
import {useNavigate} from "react-router-dom";
import {Path} from "../../constants/path";
import React from "react";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="_page__wrapper">
      <div className="mini__link__wrapper">
        <span className="mini__link">Зарегистрируйтесь</span>
        или{" "}
        <span
          onClick={() => {
            navigate(Path.Auth);
          }}
          className="mini__link"
        >
          авторизуйтесь
        </span>
      </div>
      <RegistrationForm />
    </div>
  );
};
