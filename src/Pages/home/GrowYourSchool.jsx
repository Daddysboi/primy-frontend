import styled from "styled-components";

import Hero from "./Hero";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";

const Text = styled.div`
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;

const Links = styled.span`
  text-decoration: underline;
`;

const GrowYourSchool = () => {
  return (
    <>
      <Divider />
      <Hero
        Header1="Grow your"
        Header2="school with us"
        topText="Everything you need to manage your school. "
        bottomText="Integrate Primy in minutes. Get up and running fast."
        tagline=""
        Header3=""
        fontSize="3rem"
        marginBottom="1rem"
        lineHeight="3rem"
        fontWeight="500"
        hasCTA
      />
      <Text>
        <p>
          1. Terms and conditions apply.{" "}
          <Links>See offer page for more details.</Links>
        </p>
        <p>
          2. Auth0 pricing based on public pricing from{" "}
          <Links>auth0.com/pricing.</Links> Actual pricing may differ.
        </p>
      </Text>
    </>
  );
};

export default GrowYourSchool;
