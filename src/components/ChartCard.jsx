import styled from "styled-components";

import { primaryColors } from "../assets/Colors";

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.03);
  width: ${(props) => props.width || "14rem"};
  height: ${(props) => props.height || "6.5rem"};
  padding: ${(props) => props.padding || `1rem 0 0 2rem`};
  background-color: ${(props) => props.backgroundColor || primaryColors.White};
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 5rem;
    padding-bottom: 0.5rem;
  }
`;

const Wrapper = styled.h5`
  display: flex;
  flex-direction: column;
  width: 98%;
`;

const ChartCard = ({ width, height, children, padding, backgroundColor }) => {
  return (
    <Card
      height={height}
      width={width}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      <Wrapper>{children}</Wrapper>
    </Card>
  );
};

export default ChartCard;
