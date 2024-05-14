import styled from "styled-components";

import SimpleCard from "../../components/SimpleCard";
import Hero from "./Hero";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  @media only screen and (min-width: 320px) and (max-width: 699px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 0rem;
    padding-left: 2rem;
  }
`;

const P = styled.p`
  font-size: 0.8rem;
  margin: 2rem 2rem 0 2rem;
`;

const details = [
  {
    heading: "ISO 27001",
    subtext:
      "Tailor your enterprise connections as you need – with support for multiple connections and organization discovery.",
  },
  {
    heading: "SOC 2",
    subtext: "Choose the region where Kinde stores your cK.",
  },
  {
    heading: "HIPAA",
    subtext:
      "Tailor your enterprise connections as you need – with support for multiple connections and organization discovery.",
  },
  {
    heading: "GDPR",
    subtext:
      "Tailor your enterprise connections as you need – with support for multiple connections and organization discovery.",
  },
];
const Compliance = () => {
  return (
    <>
      <Hero
        Header1="The highest levels of compliance"
        Header2=""
        topText="We take data security incredibly seriously. We want you to trust us and our systems, which is why we’ve"
        bottomText="sought external certification to ensure our technology infrastructure and your data is kept secure."
        tagline=""
        Header3=""
        fontSize="4rem"
        marginBottom="2rem"
        lineHeight="4rem"
        fontWeight="500"
        paddingBottom="0"
      />
      <Grid>
        {details.map(({ heading, subtext }, i) => (
          <div>
            <SimpleCard
              hasLogo
              key={i}
              heading={heading}
              subtext={subtext}
              minHeight="8rem"
            />
          </div>
        ))}
      </Grid>
      <P>
        The Health Insurance Portability and Accountability Act of 1996 (HIPAA)
        is a US federal law on how to protect sensitive health information,
        known as Protected Health Information (PHI), which led to the creation
        of the Privacy Rule and Security Rule. It has since been updated with
        additional rules and supplemented by the Health Information Technology
        for Economic and Clinical Health (HITECH) Act in 2009.
      </P>
    </>
  );
};

export default Compliance;
