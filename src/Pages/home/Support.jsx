import styled from "styled-components";
import GetInTouch from "../../assets/images/GetInTouch.png";
import Students from "../../assets/images/students.jpg";

import Hero from "./Hero";

const HeroChild = styled.div`
  display: flex;
  gap: 3rem;
  margin-inline: 7rem;
`;

const Left = styled.div`
  width: 50%;
`;

const InLeft = styled.div`
  height: 37rem;
  border-radius: 0 2rem 0 0;
  padding: 10rem 6rem 0 0;
  background-color: #f6f6f6;
`;

const Inner = styled.div`
  background-color: #101010;
  width: 100%;
  height: 100%;
  border-radius: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5rem 2rem 0 0.1rem;
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.8);
`;

const Img = styled.img`
  width: 15rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

const Description = styled.span``;

const Text = styled.p`
  color: #62666b;
  text-align: left;
  font-size: 0.8rem;
`;

const Right = styled.div`
  width: 50%;
`;

const Image = styled.img`
  border-radius: 2rem;
  height: 37rem;
`;

const H = styled.h1`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
`;

const P = styled.p`
  text-align: left;
  margin-top: 1rem;
`;

const details = [
  {
    info: "Our engineers work with your team to help you move",
    title: "Onboarding engineer service",
    discription:
      "Built-in migration tools to smooth your move to Kinde – making it easy to transfer data between platforms.Enterprise customers can save valuable engineering time with fully supported migration. Our onboarding engineers work with your team as you move your business onto Kinde.",
  },
  {
    info: "Add newsletter sign up forms to your website",
    title: "Legendary support",
    discription:
      " Our team is here to help you succeed no matter what your stage. With email and chat support included with every plan, as well as full access to our growing community of developers who love Kinde. As you grow, Pro and Enterprise both include priority support. Our dedicated team will work with you to make sure you are fully supported and can scale with confidence. Keeping your business running smoothly is our highest priority. Enterprise comes with custom SLAs for the most high volume and demanding businesses.",
  },
];
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
          <InLeft>
            <Inner>
              <Img src={Students} alt="Students" />
              <Text>
                Enterprise customers can save valuable engineering time with
                fully supported migration. Our onboarding engineers work with
                your team as you move your business onto Kinde.
              </Text>
            </Inner>
          </InLeft>
          <Description>
            <P>{details[0].info}</P>
            <H>{details[0].title}</H>
            <P>{details[0].discription}</P>
          </Description>
        </Left>
        <Right>
          <Image src={GetInTouch} alt="get in touch" />
          <Description>
            <P>{details[1].info}</P>
            <H>{details[1].title}</H>
            <P>{details[1].discription}</P>
          </Description>
        </Right>
      </HeroChild>
    </div>
  );
};

export default Support;
