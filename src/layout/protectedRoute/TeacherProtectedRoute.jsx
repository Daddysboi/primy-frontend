import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getPage } from "../../utils/helpers";
import { useAuth } from "../../Contexts/AuthContext";

const TeacherProtectedRoute = () => {
  const currentPage = getPage();
  const { authUser: user } = useAuth();

  if (user?.role === "teacher") {
    if (currentPage === "teacher") {
      return <Navigate to={"/dashboard"} />;
    }
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default TeacherProtectedRoute;
