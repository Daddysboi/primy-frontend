import styled from "styled-components";

import Divider from "./Divider";
import Logo from "../assets/Logo/primy-logo.png";

const Card = styled.div`
  border-radius: 5px;
  padding: ${(props) => props.padding || `1rem 0 0 2rem`};

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 1rem 2rem 0 2rem;
  }
  @media only screen and (max-width: 1100px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

const Details = styled.div`
  min-height: ${(props) => props.minHeight || "15rem"};
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 320px) and (max-width: 699px) {
    min-height: 0;
  }
`;

const Left = styled.span`
  flex: 5;
`;
const Right = styled.span`
  flex: 1;
`;

const CardHead = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CardSubHead = styled.p`
  font-size: ${(props) => props.p || "1.2rem"};
  font-weight: 400;
  margin: 0;
  opacity: 0.7;
  padding-top: 1rem;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    font-size: 0.9rem;
  }
`;

const SimpleCard = ({
  heading,
  subtext,
  width,
  minHeight,
  padding,
  backgroundColor,
  hasDivider,
  hasLogo,
}) => {
  return (
    <Card width={width} padding={padding} backgroundColor={backgroundColor}>
      <Details minHeight={minHeight}>
        <Left>
          <CardHead>{heading}</CardHead>
          <CardSubHead>{subtext}</CardSubHead>
        </Left>
        {hasLogo && (
          <Right>
            <img src={Logo} alt="" />
          </Right>
        )}
      </Details>
      {hasDivider && <Divider marginRight="3rem" />}
    </Card>
  );
};

export default SimpleCard;
