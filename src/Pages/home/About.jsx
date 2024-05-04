import styled from "styled-components";

import Hero from "./Hero";
import SimpleCard from "../../components/SimpleCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  color: #000;
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
      "Tailor your enterprise connections as you need – with support for multiple connections and organization discovery",
  },
];
const About = () => {
  return (
    <div id="about">
      <Hero
        Header1="Nigeria's most robust "
        Header2="school management system"
        topText="Everything you need to scale"
        bottomText=""
        tagline=""
        Header3=""
        fontSize="4rem"
        marginBottom="2rem"
        lineHeight="4rem"
        fontWeight="400"
        paddingBottom="0"
      />
      <Grid>
        {details.map(({ heading, subtext }, i) => (
          <div>
            <SimpleCard
              hasDivider
              key={i}
              heading={heading}
              subtext={subtext}
            />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default About;
