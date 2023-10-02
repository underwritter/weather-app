import {RegistrationPage} from "../registration-page/registration-page";
import {WeatherPage} from "../weather-page/weather-page";
import {TodoPage} from "../todos-page/todo-page";
import {AuthPage} from "../auth-page/auth-page";
import {HomePage} from "../home-page/home-page";
import {Path} from "../../constants/path";
import {Header} from "../header/header";
import React, {useEffect} from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

export const AppRouter = () => {
  const isAuth = localStorage.getItem("success");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuth && location.pathname === Path.Auth) {
      navigate(Path.Home);
    }
  }, []);

  return isAuth ? (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={<div> Not Found or You do not have permission.</div>}
        />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </>
  ) : (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
