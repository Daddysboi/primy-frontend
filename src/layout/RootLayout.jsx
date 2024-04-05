import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 0 3rem;
  font-family: "Inter", sans-serif;
`;

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default RootLayout;
