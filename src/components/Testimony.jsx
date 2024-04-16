import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonyCard from "./TestimonyCard";
import TestifierM1 from "../assets/images/TestifierM1.png";
import TestifierM2 from "../assets/images/TestifierM2.png";
import TestifierM3 from "../assets/images/TestifierM3.png";
import TestifierF1 from "../assets/images/TestifierF1.png";
import TestifierF2 from "../assets/images/TestifierF2.png";
import TestifierF3 from "../assets/images/TestifierF3.png";

const Container = styled.section`
  margin-inline: auto;
  padding-inline: 2rem 3rem 3rem 3rem;
  width: 20rem;
`;

const testimonies = [
  {
    img: TestifierF1,
    testifier: "Maryam Danjuma",
    role: "Proprietress",
    rating: 5,
    review:
      "Thorough and rigid verification process to keep our users safe from any potential cyber scam. Your safety is our top priority. Rest easy knowing that every houseworker on our platform........ ",
  },
  {
    img: TestifierF2,
    testifier: "Ruth Smith",
    role: "Head Teacher",
    rating: 5,
    review:
      "Thorough and rigid verification process to keep our users safe from any potential cyber scam. Your safety is our top priority. Rest easy knowing that every houseworker on our platform........ ",
  },
  {
    img: TestifierM1,
    role: "Teacher",
    testifier: "Ronald Kendrick",
    rating: 4,
    review:
      "Thorough and rigid verification process to keep our users safe from any potential cyber scam. Your safety is our top priority. Rest easy knowing that every houseworker on our platform........ ",
  },
  {
    img: TestifierM2,
    testifier: "Elliot Steve",
    role: "Proprietress",
    rating: 4,
    review:
      "Say goodbye to complex booking processes! Our user-friendly interface allows you to schedule and manage services effortlessly, saving you time and streamlining your home management.............",
  },
  {
    img: TestifierM3,
    testifier: "David Saleh",
    role: "Proprietor",
    rating: 4,
    review:
      "Make informed decisions with confidence! Access real reviews and ratings from our community, providing valuable insights into the skills and ..........",
  },
  {
    img: TestifierF3,
    testifier: "Aisha Usman",
    role: "School Owner",
    rating: 5,
    review:
      "Make informed decisions with confidence! Access real reviews and ratings from our community, providing valuable insights into the skills and ..........",
  },
];

const Testimony = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonies?.map(({ img, testifier, review, role, rating }, i) => {
          return (
            <SwiperSlide key={i}>
              <TestimonyCard
                img={img}
                testifier={testifier}
                role={role}
                review={review}
                rating={rating}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Testimony;
