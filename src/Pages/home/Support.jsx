import styled from "styled-components";

import Contact from "./Contact";
import GetInTouch from "../../assets/images/GetInTouch.png";
import Hero from "./Hero";

const HeroChild = styled.div`
  display: flex;
  gap: 3rem;
  margin-inline: 7rem;
  /* align-items: flex-start; */
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  border-radius: 2rem;
  height: 37rem;
`;

const Header = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 1rem;
`;
const Support = () => {
  return (
    <div>
      <Hero
        Header1="High touch support"
        Header2="at every stage"
        Header3=""
        topText=""
        bottomText=""
        tagline=""
        fontSize="5rem"
        paddingBottom="0"
        lineHeight="5rem"
      />
      <HeroChild>
        <Left>
          <Image src={GetInTouch} alt="get in touch" />
        </Left>
        <Right>
          <Header>Leave a message</Header>
          <Contact />
        </Right>
      </HeroChild>
    </div>
  );
};

export default Support;
