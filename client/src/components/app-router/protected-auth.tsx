import React, {ReactNode, FC} from "react";
import {Navigate} from "react-router-dom";

export const ProtectedAuth: FC<{children: ReactNode}> = ({children}) => {
  const isAuth = localStorage.getItem("success");

  if (!isAuth) {
    return <Navigate to="/auth" />;
  } else return <>{children}</>;
};
