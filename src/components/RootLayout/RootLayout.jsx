import { Outlet } from "react-router-dom";

import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";

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
