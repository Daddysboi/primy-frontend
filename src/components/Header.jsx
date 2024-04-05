import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: #0f0f0f;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  return (
    <Container>
      <Logo color="#0F0F0F" />
      <Links>
        <StyledLink to="">About Us</StyledLink>
        <StyledLink to="">Contact Us</StyledLink>
        <StyledLink to="">Product</StyledLink>
        <StyledLink to="">Pricing</StyledLink>
        <StyledLink to="">FAQ</StyledLink>
      </Links>
      <Buttons>
        <Button
          height="2.5rem"
          fontSize="1rem"
          text="Sign in"
          display="none"
          borderColor="transparent"
          textColor="#0F0F0F"
        />
        <Button
          height="2.5rem"
          fontSize="1rem"
          display="other"
          text="Sign Up"
          borderColor="#0F0F0F"
        />
      </Buttons>
    </Container>
  );
};

export default Header;
