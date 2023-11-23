import {RegistrationPage} from "../registration-page/registration-page";
import {WeatherPage} from "../weather-page/weather-page";
import {FunnyPage} from "../funny-page/funny-page";
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
  const isAuth = localStorage.getItem("isAuth");
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
        <Route path={Path.Home} element={<HomePage />} />
        <Route
          path="*"
          element={<div>Вы пытаетесь перейти на несуществующую страницу.</div>}
        />
        <Route path={Path.Funny} element={<FunnyPage />} />
        <Route path={Path.Weather} element={<WeatherPage />} />
      </Routes>
    </>
  ) : (
    <Routes>
      <Route path={Path.Registration} element={<RegistrationPage />} />
      <Route path={Path.Auth} element={<AuthPage />} />
    </Routes>
  );
};
