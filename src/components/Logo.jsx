import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "../assets/Logo/primy-logo.png";
import { primaryColors } from "../assets/Colors";

const LinkTag = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || primaryColors.Gray};
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
  gap: 0.3rem;
`;

const Image = styled.img`
  height: 2.5rem;
`;

const Logo = ({ color }) => {
  return (
    <LinkTag color={color} to="/">
      <Image src={Img} alt="Logo" />
      <h1>Primy</h1>
    </LinkTag>
  );
};

export default Logo;
