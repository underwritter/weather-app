import {CustomButton} from "../custom_button/custom_button";
import {useLocation, useNavigate} from "react-router-dom";
import {ModalWindow} from "../modal-window/modal-window";
import {useAuth} from "../auth-page/auth.hooks";
import React, {FC, useState} from "react";
import {Path} from "../../constants/path";
import {ICustomLinkProps} from "./types";
import {linkStyle} from "./constants";

export const CustomLink: FC<ICustomLinkProps> = ({
  className = "",
  title = "",
  path,
  linkObj,
  setLinkObj,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {logout} = useAuth();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleClassPath = (path: Path) => {
    if (location.pathname === path) return;

    setLinkObj((prev) => {
      const prevPath = {[location.pathname]: 0};
      //возвращаем новый state где  prev- ПРЕДЫДУЩЕЕ СОСТОЯНИЕ prevPath- У ПРЕДЫДУЩЕГО СОСТОЯНИЯ ОБНУЛЯЕМ ЗНАЧЕНИЯ (1 НА 0) path- У ВЫБРАННОГО СТАВИМ 1
      return {...prev, ...prevPath, [path]: 1};
    });
    navigate(path);
  };

  const handleLinkClick = () => {
    if (title === "Выйти") {
      setIsOpenModal(!isOpenModal);
    } else toggleClassPath(path);
  };

  const onCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const classLink = className ? className : linkStyle[linkObj[path]];
  return (
    <div className={classLink} onClick={handleLinkClick}>
      {title}
      <ModalWindow
        active={isOpenModal}
        onClose={onCloseModal}
        children={
          <div>
            <div>Уверены что хотите выйти?</div>
            <CustomButton
              children="Выйти"
              type="button"
              disabled={true}
              onClick={logout}
            />
            <CustomButton
              children="Остаться"
              type="button"
              disabled={true}
              onClick={onCloseModal}
            />
          </div>
        }
      />
    </div>
  );
};
