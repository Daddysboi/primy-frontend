import styled from "styled-components";

import Hero from "./Hero";
import SignUp from "./SignUp";
import Pricing from "./Pricing";
import GrowYourSchool from "./GrowYourSchool";
import About from "./About";
import Loved from "./Loved";
import Backed from "./Backed";
import Support from "./Support";
import Compliance from "./Compliance";

const Container = styled.section`
  padding: 0 3rem;
  font-family: "Inter", sans-serif;
  @media only screen and (max-width: 769px) {
    padding: 0;
  }
`;
const Homepage = () => {
  return (
    <>
      <Hero isHero hasCTA paddingTop="8rem" />
      <Container>
        <SignUp />
        <About />
        <Pricing />
        <Support />
        <Compliance />
        <Loved />
        <Backed />
        <GrowYourSchool />
      </Container>
    </>
  );
};

export default Homepage;
