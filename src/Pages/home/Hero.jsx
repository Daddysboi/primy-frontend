import styled from "styled-components";
import { primaryColors } from "../../assets/Colors";

const Container = styled.div`
  padding: 5rem;
  text-align: center;
  color: #0f0f0f;
  line-height: 5rem;
`;

const Header = styled.div`
  font-size: 4rem;
  font-weight: 600;
`;

const SubHead = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
`;

const Tagline = styled.span`
  color: ${primaryColors.Purple};
`;

const Hero = () => {
  return (
    <Container>
      <Header>
        Management system
        <br /> for
        <Tagline> modern </Tagline>
        schools.
      </Header>
      <SubHead>
        we transform the way schools of all sizes manage thier students, grow
        and receive payment
      </SubHead>
    </Container>
  );
};

export default Hero;
