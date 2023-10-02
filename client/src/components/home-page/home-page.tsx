import {useAppSelector} from "../../hooks/redux";
import React from "react";
import "./style.sass";

export const HomePage = () => {
  const name = useAppSelector((state) => state.authPage.name);
  return <div className="home_page_wrapper">Добро пожаловать, {name}!</div>;
};
