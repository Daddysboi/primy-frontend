import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getPage } from "../../utils/helpers";
import { useAuth } from "../../Contexts/AuthContext";

const AdminProtectedRoutes = () => {
  const currentPage = getPage();
  const { authUser: user } = useAuth();

  if (user?.role === "admin") {
    if (currentPage === "admin") {
      return <Navigate to={"/dashboard"} />;
    }
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default AdminProtectedRoutes;
