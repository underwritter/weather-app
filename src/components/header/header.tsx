import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./style.sass";
import {Path} from "../../constants/path";
import {CustomLink} from "../custom-link/custom-link";
import {ActiveLink} from "../custom-link/types";
import {INITIAL_STATE} from "../custom-link/constants";
import {HEADER_PAGE_ITEMS} from "./constants";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<ActiveLink>(INITIAL_STATE);

  return (
    <div className="wrapper-header">
      {HEADER_PAGE_ITEMS.map((item, idx) => {
        //TODO: Временно
        const isAuth = true;
        const linkTitle = Path.Auth === item.path && !isAuth ? 'Войти' : item.title
        return (
          <CustomLink
            key={idx}
            path={item.path}
            className={item.className}
            title={linkTitle}
            linkObj={activeLink}
            setLinkObj={setActiveLink}
          />
        );
      })}
      
      {/* <CustomLink
        linkObj={activeLink}
        setLinkObj={setActiveLink}
        path={Path.Auth}
        title="войти"
      /> */}
    </div>
  );
};
