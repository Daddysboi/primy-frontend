'use client';

import React, { useState, FC } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import MaxWidth from "../layout/MaxWidth";

const Testimonial: FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] =
    useState<number>(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === TestimonialList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedTestimonial = TestimonialList[currentTestimonialIndex];

  return (
    <MaxWidth className="w-11/12 mr-60 mb-28 overflow-hidden">
      <div className="block md:flex justify-around items-start gap-0 my-20 mb-64">
        <div
          className="w-96 mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <div className="flex justify-center items-center">
            <div className="flex-grow flex justify-center">
              <div className="bg-[#525596] w-full h-[0.15rem] border-[0.75px]"></div>
            </div>
            <h1 className="mx-10 text-[#525596] font-sans font-[400] text-sm md:text-md tracking-[0.15rem] line-clamp-6">
              TESTIMONIAL
            </h1>
            <div className="flex-grow flex justify-center">
              <div className="bg-[#525596] w-full h-[0.15rem] border-[0.75px]"></div>
            </div>
          </div>

          <div className="items-center text-center md:text-start">
            <h1 className="text-4xl md:text-5xl text-edu-blue font-[400] my-6">
              What They Say?
            </h1>
            <p className="text-[#696984] leading-6">
              Educativ has received over 100,000 positive ratings from our users
              worldwide.
              <br />
              <br />
              Some of the students and teachers were greatly helped by Educativ.
              <br />
              <br />
              Are you too? Please give your assessment
            </p>
            <br />
            <div className="mx-auto mb-10 md:mx-0 border-[1px]  border-edu-yellow w-[20rem] rounded-[2.5rem] hover:border-amber-400 ">
              <Link href="#" className=" hover:no-underline">
                <h3 className="p-4 text-edu-yellow inline  hover:text-amber-400">
                  Write your assessment
                </h3>
                <FaArrowRight
                  className="ml-7 inline-block 
                  bg-white text-edu-yellow border-[1px] 
               border-edu-yellow h-14 w-20 p-4 rounded-[2.5rem] animate-bounce-x "
                />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-offset="200" className="relative ">
          <img
            src={selectedTestimonial.image1}
            className=" w-80 md:w-60 lg:80 mx-4 sm:mx-auto md:mx-0"
            alt="Testimonial"
          />
          <button onClick={handleNext}>
            <img
              src="/assets/images/Group 51.png"
              alt="buttonImage"
              className="absolute top-[32%] left-[80%] w-32"
            />
          </button>
          <div
            className="border-l-[8px] border-l-[#F67766] bg-[#FFFFFF]
                text-[#5F5F7E] rounded-md w-[100%] lg:w-[120%] shadow-2xl
                top-[71%] left-2
                md:top-[71%] md:left-[15%] p-4 absolute z-40"
          >
            <div className="flex justify-between">
              <div className="m-4">
                <p className="text-sm border-l-[2px] border-l-[#BDBDD1] pl-4 mb-4">
                  {selectedTestimonial.comment}
                </p>
                <div className="flex justify-between">
                  <p className="text-[#5F5F7E]">{selectedTestimonial.author}</p>
                  <p className="text-edu-yellow">
                    {selectedTestimonial.rating}
                  </p>
                </div>
                <p className="text-xs">{selectedTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Testimonial;

interface TestimonialItem {
  id: number;
  image1: string;
  comment: string;
  author: string;
  rating: string;
  role: string;
}

const TestimonialList: TestimonialItem[] = [
  {
    id: 1,
    image1: "/assets/images/Mask Group.png",
    comment:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Educativ is exactly what our school has been lacking.",
    author: "Micheal Oloyede",
    rating: "★ ★ ★ ★ ★",
    role: "Student",
  },
  {
    id: 2,
    image1: "/assets/images/herogirl.png",
    comment:
      "Your assistance has been invaluable. It's exactly what I needed. You won't regret it. It saves me so much time and effort. Educativ is the perfect solution for our school.'",
    author: "Gabriel Kayode",
    rating: "★ ★ ★ ★ ",
    role: "Teacher",
  },
];
