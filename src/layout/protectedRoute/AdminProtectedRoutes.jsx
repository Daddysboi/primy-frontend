import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";
import { getPage } from "../../utils/helpers";

const AdminProtectedRoutes = () => {
  const currentPage = getPage();
  const { user } = useAppSelector((state) => state.user);

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
