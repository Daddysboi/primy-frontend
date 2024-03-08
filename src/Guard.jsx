import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getUserById, setUser } from "./redux/features/userSlice";
import { useAppDispatch } from "./redux/hooks";
import { USER_ID } from "./redux/services/CONSTANTS";

//specifies users loged in access
export const useFetchUserData = () => {
  const userId = localStorage.getItem(USER_ID);
  const dispatch = useAppDispatch();

  const handleGetUser = async () => {
    try {
      const resp = await dispatch(getUserById(userId));
      const { data } = resp.payload;
      dispatch(setUser(data?.user));
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };

  return handleGetUser;
};

const Guard = ({ children }) => {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const fetchUserData = useFetchUserData();

  // //users are redirected to login when trying to access unauthorized routes like dashboard
  // const handleError = () => {
  //   navigate("/login");
  //   window.location.reload();
  // };

  // //pages that are exclused from protection
  // const getProfile = ![
  //   "/login",
  //   "/signup",
  //   "/otp",
  //   "/",
  //   "/reset-password/*",
  //   "/forgot-password",
  // ].includes(pathname);

  // useEffect(() => {
  //   if (getProfile && localStorage?.USER_ID) {
  //     fetchUserData();
  //   }
  // }, [getProfile, localStorage?.USER_TOKEN]);

  // useEffect(() => {
  //   if (!localStorage?.USER_ID && getProfile) {
  //     handleError();
  //   }
  // }, [localStorage?.USER_ID, pathname]);

  return children;
};

export default Guard;
