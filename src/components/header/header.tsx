import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import cn from "classnames";
import "./style.sass";
import { Path } from "../../constants/path";
import { linkStyle } from "../../constants/links";


export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation()

  console.log(location.pathname)
  const [activeLink, setActiveLink] = useState<Record<string,number>>({
    "/":0,
    "/weather": 0,
    "/todo": 0,
    "/auth": 0
  });



  const toggleClassPath = (path: Path) => {
    setActiveLink(prev => {
const prevPath = {[location.pathname]: 0}
//возвращаем новый state где  prev- ПРЕДЫДУЩЕЕ СОСТОЯНИЕ prevPath- У ПРЕДЫДУЩЕГО СОСТОЯНИЯ ОБНУЛЯЕМ ЗНАЧЕНИЯ (1 НА 0) path- У ВЫБРАННОГО СТАВИМ 1
      return {...prev, ...prevPath, [path]:1}
    });
    navigate(path);
  };

  return (
    <div className="wrapper-header">
      <div className="titular flowtext" onClick={() => toggleClassPath(Path.Home)}>WeatherYou</div>
      {/* из linkStyle динамическимм ключем вытаскиваем класс и меняем ???? */}
    
      <div className={linkStyle[activeLink[Path.Weather]]} onClick={() => toggleClassPath(Path.Weather)}>
        Погода
      </div>
      <div className={linkStyle[activeLink[Path.Todo]]} onClick={() => toggleClassPath(Path.Todo)}>
        Список дел
      </div>
      <div className={linkStyle[activeLink[Path.Auth]]} onClick={() => toggleClassPath(Path.Auth)}>
        Выйти
      </div>
    </div>
  );
};
