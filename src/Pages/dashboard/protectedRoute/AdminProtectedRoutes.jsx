import { Navigate, Outlet } from "react-router-dom";

import { getPage } from "../../../utils/helpers";
import { useUser } from "../../../contexts/userContext";

const AdminProtectedRoutes = () => {
  const currentPage = getPage();
  const { user } = useUser();

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
