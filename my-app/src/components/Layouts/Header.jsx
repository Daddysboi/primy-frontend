import { Link } from "react-router-dom";
import styled from "styled-components";

//Sample stylins.. play around
const StyledLinks = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <>
      <StyledLinks to="/">Home</StyledLinks>
      <StyledLinks to="/about">About</StyledLinks>
      <StyledLinks to="/contact">Contact</StyledLinks>
    </>
  );
};

export default Header;
