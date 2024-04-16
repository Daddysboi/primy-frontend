import React, { useState } from "react";
import styled from "styled-components";

import Hero from "./Hero";
import SimpleCard from "../../components/SimpleCard";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #dbdbdb;
  display: flex;
  padding: 4rem;
  border-radius: 1.5rem;
  margin-bottom: 3rem;
`;

const Left = styled.div`
  flex: 2;
`;

const Type = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 2rem;
  color: ${(props) => (props.isActive ? "black " : "#a3a0a0")};
  &:hover {
    color: #8a4bf2;
  }
`;

const Right = styled.div`
  gap: 1rem;
  flex: 5;
`;

const InRight = styled.div`
  display: flex;
  padding-bottom: 2rem;
  gap: 7rem;
`;

const Mid = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: right;
  text-align: right;
  /* margin-right: 7rem; */
`;

const PriceWrapper = styled.span`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  margin: 10px 0;
  width: "100%";
  height: 1rem;
  background-color: #dbdbdb;
  background-color: #000;
  border-radius: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  color: #000;
`;

const HeroChild = styled.div`
  display: flex;
  gap: 3rem;
  margin-inline: 7rem;
`;
const Text = styled.span`
  flex: 1.5;
  font-size: 1.5rem;
`;

const CTA = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const CTALink = styled(Link)`
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const details = [
  {
    heading: "Sigle School",
    subtext:
      "Tailor your enterprise connections as you need – with support for multiple connections and organization discovery.",
  },
  {
    heading: "Sigle School",
    subtext:
      "Choose the region where Kinde stores your customer and business information. Meet data-compliance wherever you are – whether it’s the United States, Europe, Australia, or the UK.",
  },
  {
    heading: "Sigle School",
    subtext:
      "Tailor your enterprise connections as you need – with support for multiple connections and organization discovery.",
  },
];
const types = [
  {
    name: "Single Schools",
    plans: [
      { schools: 3, states: 5, name: "Pro", price: 30000 },
      { schools: 9, states: 7, name: "Standard", price: 20000 },
      { schools: 19, states: 12, name: "Starter", price: 10000 },
    ],
  },
  {
    name: "Network of schools",
    plans: [
      { schools: 2, states: 7, name: "Pro", price: 40000 },
      { schools: 4, states: 5, name: "Standard", price: 30000 },
      { schools: 7, states: 7, name: "Starter", price: 20000 },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(0);
  const [state, setState] = useState("Single Schools");

  const handleClick = (i) => {
    setPlan(i);
    setState(types[i].name);
  };

  return (
    <>
      <Hero
        Header1="Pricing designed "
        Header2="for your scale"
        topText="When it comes to what you pay, we believe that software pricing should be transparent and based"
        midText="around scalable value. On our Enterprise plan you pay less per unit as you grow – not more. Let our"
        bottomText="team tailor a plan that works for your needs."
        tagline=""
        Header3=""
        fontSize="4rem"
        marginBottom="2rem"
        lineHeight="4rem"
        lineHeightSub="2rem"
        fontWeight="400"
        paddingBottom="0"
      />
      <Container>
        <Left>
          {types.map((type, index) => (
            <Type
              key={index}
              onClick={() => handleClick(index)}
              isActive={state === type.name}
            >
              {type.name}
            </Type>
          ))}
        </Left>
        <Right>
          {plan !== null &&
            types[plan].plans.map((plan, index) => (
              <InRight key={index}>
                <Mid>
                  <span>{plan.schools} Schools</span>
                  <span>{plan.states} states covered</span>
                </Mid>
                <PriceWrapper>
                  <ProgressBar />
                  <Price>
                    <span>{plan.name} </span>
                    <span>N{plan.price}/month</span>
                  </Price>
                </PriceWrapper>
              </InRight>
            ))}
        </Right>
      </Container>
      <Grid>
        {details.map(({ heading, subtext }, i) => (
          <div>
            <SimpleCard key={i} heading={heading} subtext={subtext} />
          </div>
        ))}
      </Grid>
      <Hero
        Header1="Get the right plan for your business"
        Header2=""
        Header3=""
        topText=""
        bottomText=""
        tagline=""
        fontSize="3.5rem"
        lineHeight="1.5rem"
      >
        <HeroChild>
          <Text>
            Tell us what you need and we'll build you a custom pricing plan
            based around your enterprise needs
          </Text>
          <CTA>
            <Button
              borderColor="transparent"
              fontSize="1.4rem"
              height="3rem"
              text="Talk to us about discounts"
              display="other"
            />
            <CTALink to="/"> Calculate pricing for your school</CTALink>
          </CTA>
        </HeroChild>
      </Hero>
    </>
  );
};

export default Pricing;
