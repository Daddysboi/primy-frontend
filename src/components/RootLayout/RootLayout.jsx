import { Outlet } from "react-router-dom";

import Header from "../HomeComponents/layoutComponents/Header";
import Footer from "../HomeComponents/layoutComponents/Footer";

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
