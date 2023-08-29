import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "../header/header";
import {TodoPage} from "../todos-page/todo-page";
import {AuthPage} from "../auth-page/auth-page";
import {WeatherPage} from "../weather-page/weather-page";
import {HomePage} from "../home-page/home-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div> Not Found or You do not have permission.</div>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
};
