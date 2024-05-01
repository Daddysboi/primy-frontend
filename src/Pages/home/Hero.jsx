import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import { primaryColors } from "../../assets/Colors";
import Testimony from "../../components/Testimony";
import Button from "../../components/Button";
import { Sparkles } from "../../components/ui/sparkles";
import { Link } from "react-scroll";

import AwardImg from "../../assets/images/award.png";

const Container = styled.section`
  padding-top: ${(props) => props.paddingTop || "3rem"};
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
  margin: 0;
`;

const Header = styled.div`
  font-size: ${(props) => props.fontSize || "5rem"};
  font-weight: ${(props) => props.fontWeight || "600"};
  line-height: ${(props) => props.lineHeight || "6rem"};
  margin-bottom: ${(props) => props.marginBottom || ""};
  padding: 3rem 0 1rem 0;
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

const ImageContainer = styled.div`
  display: inline-flex;
  margin: 0;
`;

const Image = styled.img`
  padding: 1rem;
  width: 15rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 1px 1px 1px 1px rgba(0.1, 0.1, 0.1, 0.05);
`;

const Hero = ({
  Header1 = "Management system",
  Header2 = "for",
  Header3 = "schools",
  topText = "We transform the way schools ",
  tagline = "modern ",
  midText = "",
  bottomText = "manage thier students, grow and receive payment",
  fontSize,
  marginBottom,
  lineHeight,
  fontWeight,
  paddingTop,
  paddingBottom,
  isHero,
  hasCTA,
  lineHeightSub,
  children,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-offset="400"
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      className={
        isHero && " relative dark:bg-grid-white/[0.2] bg-grid-black/[0.025]"
      }
    >
      {isHero && (
        <>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <Sparkles className="absolute" />
        </>
      )}
      <HeaderContainer>
        <Header
          fontSize={fontSize}
          marginBottom={marginBottom}
          lineHeight={lineHeight}
          fontWeight={fontWeight}
          className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
        >
          {isHero && <Tagline>AI </Tagline>}
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

          <Link
            to="Sign Up"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={2000}
            onClick={() => {}}
          >
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
          </Link>
        </CTA>
      )}
      {children}

      {isHero && (
        <ImageContainer>
          <Image src={AwardImg} alt="AwardImg" />
        </ImageContainer>
      )}
    </Container>
  );
};

export default Hero;
