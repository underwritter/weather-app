import {useGetUserQuery, useLazyGetUserQuery} from "../../store/api/user.api";
import {setUserInfo} from "../../store/slices/auth.slice";
import {INITIAL_STATE} from "../custom-link/constants";
import {CustomLink} from "../custom-link/custom-link";
import {useAppDispatch} from "../../hooks/redux";
import React, {useEffect, useState} from "react";
import {ActiveLink} from "../custom-link/types";
import {HEADER_PAGE_ITEMS} from "./constants";
import {useLocation} from "react-router-dom";
import "./style.sass";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<ActiveLink>(INITIAL_STATE);
  const location = useLocation();
  const [count, setCount] = useState(0);
  const isAuth = localStorage.getItem("isAuth");
  const {data} = useGetUserQuery(undefined, {skip: !isAuth});
  // const [getUser] = useLazyGetUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?._id) {
      dispatch(setUserInfo(data));
    }

  }, [data]);

  useEffect(() => {
    setCount((p) => p + 1);
  }, [location.pathname]);

  return (
    <>
      
      <div className="wrapper-header">
        {/* <button onClick={()=> getUser(undefined)}>button</button> */}
        {HEADER_PAGE_ITEMS.map((item, idx) => {
          return (
            <CustomLink
              key={idx}
              path={item.path}
              className={item.className}
              title={item.title}
              linkObj={activeLink}
              setLinkObj={setActiveLink}
            />
          );
        })}
      </div>
    </>
  );
};
