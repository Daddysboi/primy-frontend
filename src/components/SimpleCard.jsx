import styled from "styled-components";

import Divider from "./Divider";
import Logo from "../assets/Logo/primy-logo.png";

const Card = styled.div`
  border-radius: 5px;
  padding: ${(props) => props.padding || `1rem 0 0 2rem`};

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 5rem;
    padding-bottom: 0.5rem;
  }
`;

const Details = styled.div`
  min-height: ${(props) => props.minHeight || "15rem"};
  display: flex;
  gap: 2rem;
`;

const CardHead = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`;

const CardSubHead = styled.p`
  font-size: ${(props) => props.p || "1.2rem"};
  font-weight: 400;
  margin: 0;
  opacity: 0.7;
  padding-top: 1rem;
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
    <Card
      minHeight={minHeight}
      width={width}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      <Details>
        <span>
          <CardHead>{heading}</CardHead>
          <CardSubHead>{subtext}</CardSubHead>
        </span>
        {hasLogo && (
          <span>
            <img src={Logo} alt="" />
          </span>
        )}
      </Details>
      {hasDivider && <Divider marginRight="3rem" />}
    </Card>
  );
};

export default SimpleCard;
