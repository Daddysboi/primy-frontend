import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { setUser, getUserById } from "./redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export const useFetchUserData = () => {
  const token = localStorage.getItem("jwt");
  const dispatch = useAppDispatch();

  const handleGetUser = async () => {
    try {
      const { userId } = jwtDecode(token);
      const resp = await dispatch(getUserById(userId));
      const { data } = resp.payload;
      dispatch(setUser(data?.user));
    } catch (error) {
      throw error;
    }
  };

  return handleGetUser;
};

const Guard = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const fetchUserData = useFetchUserData();
  const token = localStorage.getItem("jwt");
  const { user } = useAppSelector((state) => state.user);

  const handleError = () => {
    navigate("/login");
    window.location.reload();
  };

  const shouldGetProfile = ![
    "/login",
    "/signup",
    "/otp",
    "/",
    "/reset-password/*",
    "/forgot-password",
  ].includes(pathname);

  // useEffect(() => {
  //   if (shouldGetProfile && user?.id) {
  //     fetchUserData();
  //   }
  // }, [shouldGetProfile, user?.id]);

  // useEffect(() => {
  //   if (!user?.id && shouldGetProfile) {
  //     handleError();
  //   }
  // }, [shouldGetProfile, user?.id]);

  useEffect(() => {
    if (shouldGetProfile) {
      if (user) {
        const shouldGetRole = !["admin", "teacher", "student"].includes(
          user.role
        );

        if (shouldGetRole) {
          handleError();
        }
      } else {
        handleError();
      }
    }
  }, [shouldGetProfile, user]);

  return children;
};

export default Guard;
