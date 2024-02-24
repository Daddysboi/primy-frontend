import { Outlet } from "react-router-dom";

import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
