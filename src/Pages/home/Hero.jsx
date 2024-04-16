import styled from "styled-components";

import { primaryColors } from "../../assets/Colors";
import Testimony from "../../components/Testimony";
import Button from "../../components/Button";

const Container = styled.section`
  padding-top: ${(props) => props.paddingTop || "6rem"};
  padding-bottom: ${(props) => props.paddingBottom || "6rem"};
  text-align: center;
  color: #0f0f0f;
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  font-size: ${(props) => props.fontSize || "5rem"};
  font-weight: ${(props) => props.fontWeight || "600"};
  line-height: ${(props) => props.lineHeight || "6rem"};
  margin-bottom: ${(props) => props.marginBottom || "2rem"};
`;

const SubHead = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: ${(props) => props.lineHeightSub || "1rem"};
`;
const Tagline = styled.span`
  color: ${primaryColors.Purple};
`;

const Testimonycard = styled.div`
  position: absolute;
  top: 20rem;
  right: 2rem;
  transform: translateX(10%);
`;

const CTA = styled.div`
  text-align: center;
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

const Hero = ({
  Header1 = " Management system",
  Header2 = "for",
  Header3 = "schools",
  topText = "We transform the way schools ",
  bottomText = "manage thier students, grow and receive payment",
  tagline = "modern ",
  fontSize,
  marginBottom,
  lineHeight,
  fontWeight,
  paddingTop,
  paddingBottom,
  midText = "",
  isHero,
  hasCTA,
  lineHeightSub,
  children,
}) => {
  return (
    <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <HeaderContainer>
        <Header
          fontSize={fontSize}
          marginBottom={marginBottom}
          lineHeight={lineHeight}
          fontWeight={fontWeight}
        >
          {Header1}
          <br /> {Header2}
          <Tagline> {tagline}</Tagline>
          {Header3}
        </Header>
        <SubHead lineHeightSub={lineHeightSub}>
          {topText}
          <br />
          {midText}

          <br />
          {bottomText}
        </SubHead>
      </HeaderContainer>
      {isHero && (
        <Testimonycard>
          <Testimony />
        </Testimonycard>
      )}
      {hasCTA && (
        <CTA>
          <Button
            height="2.5rem"
            fontSize="1rem"
            text="Talk to us"
            display="other"
            borderColor="transparent"
            small
          />
          <Button
            height="2.5rem"
            fontSize="1rem"
            display="grey"
            text="Start for free"
            borderColor="#EBEBEB"
            textColor="#0F0F0F"
            hoverBg="#dbdbdb"
            small
          />
        </CTA>
      )}
      {children}
    </Container>
  );
};

export default Hero;
