import React, {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Path} from "../../constants/path";
import {linkStyle} from "./constants";
import {ActiveLink} from "./types";

export interface CustomLinkProps {
  title: string;
  path: Path;
  linkObj: ActiveLink;
  setLinkObj: React.Dispatch<React.SetStateAction<ActiveLink>>;
  className?: string;
}

export const CustomLink: FC<CustomLinkProps> = ({
  className = "",
  title = "",
  path,
  linkObj,
  setLinkObj,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleClassPath = (path: Path) => {
    setLinkObj((prev) => {
      const prevPath = {[location.pathname]: 0};
      //возвращаем новый state где  prev- ПРЕДЫДУЩЕЕ СОСТОЯНИЕ prevPath- У ПРЕДЫДУЩЕГО СОСТОЯНИЯ ОБНУЛЯЕМ ЗНАЧЕНИЯ (1 НА 0) path- У ВЫБРАННОГО СТАВИМ 1
      return {...prev, ...prevPath, [path]: 1};
    });
    navigate(path);
  };

  const classLink = className ? className : linkStyle[linkObj[path]];
  return (
    <div className={classLink} onClick={() => toggleClassPath(path)}>
      {title}
    </div>
  );
};
