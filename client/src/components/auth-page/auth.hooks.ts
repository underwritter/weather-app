import {setInitialUserData} from "../../store/slices/auth.slice";
import {useAuthorizationMutation} from "../../store/api/user.api/user.api";
import {useAppDispatch} from "../../hooks/redux";
import {IAuthFields} from "./auth-form.types";
import {useNavigate} from "react-router-dom";
import {Path} from "../../constants/path";
import {toast} from "react-toastify";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [authorization] = useAuthorizationMutation();

  const login = async (data: IAuthFields) => {
    try {
      const response = await authorization(data).unwrap();
      if (response.success) {
        localStorage.setItem("isAuth", response.token);
        toast.info("Добро пожаловать!");
        navigate(Path.Home);
      }

      const errorResponse = (response as unknown) as {data: {message: string}};
      if (errorResponse?.data?.message) {
        throw new Error(errorResponse?.data.message);
      }
    } catch (err) {
      toast.error(err.data.message);
    }
  };

  const logout = () => {
    localStorage.setItem("isAuth", "");
    dispatch(setInitialUserData());
    toast.info("До скорой встречи!)");
    navigate(Path.Auth);
  };

  return {login, logout};
};
