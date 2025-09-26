import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import WhatIsEducativ from "../components/home/WhatIsEducativ";
import OurBenefits from "../components/home/OurBenefits";
import Faq from "../components/home/Faq";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhatIsEducativ />
      <OurBenefits />
      <Faq />
      <Testimonial />
    </>
  );
}