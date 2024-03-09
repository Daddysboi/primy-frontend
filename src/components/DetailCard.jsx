import styled from "styled-components";

import { primaryColors } from "../assets/Colors";
import { Children } from "react";

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.03);
  width: ${(props) => props.width || "12rem"};
  height: ${(props) => props.height || "6rem"};
  padding: 1rem 0 0 2rem;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 5rem;
    padding-bottom: 0.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Right = styled.div`
  align-self: cemorenter;
`;

const CardTxt = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;

const CardHead = styled.h5`
  font-size: 0.7rem;
  font-weight: 600;
  margin: 0;
`;

const CardSubHead = styled.p`
  font-size: 0.5rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.7;
`;

const Span = styled.span`
  color: ${primaryColors.Green};
`;

const StudentImg = styled.img`
  height: 2rem;
`;

const Child = styled.div`
  /* align-self: flex-end; */
`;
const DeatailCard = ({
  value,
  heading,
  rate,
  subtext,
  image,
  width,
  height,
  children,
}) => {
  return (
    <Card height={height} width={width}>
      <Left>
        <div>
          <CardTxt>{value}</CardTxt>
          <CardHead>{heading}</CardHead>
          <CardSubHead>
            <Span>{rate}</Span>
            {subtext}
          </CardSubHead>
        </div>
        <Child>{children}</Child>
      </Left>
      <Right>
        <StudentImg src={image} alt="" />
      </Right>
    </Card>
  );
};

export default DeatailCard;
