import {useNavigate} from "react-router-dom";
import {Path} from "../../constants/path";
import {AuthForm} from "./auth-form";
import React from "react";
import "./style.sass";

export const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="_page__wrapper">
      <div className="mini__link__wrapper">
        <span
          onClick={() => {
            navigate(Path.Registration);
          }}
          className="mini__link"
        >
          Зарегистрируйтесь
        </span>
        или <span className="mini__link">авторизуйтесь</span>
      </div>
      <AuthForm />
    </div>
  );
};
