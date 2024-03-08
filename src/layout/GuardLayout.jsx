import { Outlet } from "react-router-dom";
import Guard from "../Guard";

//This protects your application from unecessary access to unauthorised routes
const GuardLayout = () => {
  return (
    <Guard>
      <Outlet />
    </Guard>
  );
};

export default GuardLayout;
