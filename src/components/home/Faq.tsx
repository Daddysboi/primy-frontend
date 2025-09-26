'use client';

import React, { useState, FC } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import MaxWidth from "../layout/MaxWidth";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQLists: FAQ[] = [
  {
    id: 1,
    question: "What is Educativ and who can use it?",
    answer:
      "Educativ is a platform designed to help teachers, students, and parents collaborate in lifelong learning. It provides tools and resources to enhance the educational experience.",
  },
  {
    id: 2,
    question: "What key features does Educativ offer?",
    answer:
      "Educativ offers features such as interactive lessons, progress tracking, personalized learning paths, and collaboration tools to support effective learning and teaching.",
  },
  {
    id: 3,
    question: "Can Educativ be used offline?",
    answer:
      "Educativ provides offline capabilities allowing users to download lessons and materials. This ensures that learning can continue without an active internet connection.",
  },
  {
    id: 4,
    question: "How secure is the data on Educativ?",
    answer:
      "Educativ prioritizes data security with robust encryption, regular security audits, and strict access controls to ensure that user data is protected.",
  },
  {
    id: 5,
    question: "How to get started with Educativ?",
    answer:
      "To get started with Educativ, sign up on our website, set up your profile, and explore the available courses and resources. Our user-friendly interface will guide you through the process.",
  },
];

const Faq: FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div
      id="FAQs"
      data-aos="fade-up"
      data-aos-offset="200"
      className="my-24 flex justify-center items-center text-center cursor-pointer"
    >
      <MaxWidth className="md:w-7/12">
        <h1 className="text-edu-blue font-bold text-2xl md:text-3xl mb-2">
          FAQs
        </h1>
        <h4 className="text-sm text-[#696984] font-light mt-6 mb-14">
          Got Questions? We've got answers
        </h4>

        <div>
          {FAQLists.map((faq) => {
            const isActive = activeFaq === faq.id;
            return (
              <div key={faq.id} className="mb-8">
                <div
                  onClick={() => handleClick(faq.id)}
                  className="flex justify-between gap-5 items-center
                   text-gray-100 bg-edu-blue p-4 md:p-6 cursor-pointer"
                >
                  <h1 className="text-sm md:text-xl">{faq.question}</h1>
                  <span>{isActive ? <SlArrowUp /> : <SlArrowDown />}</span>
                </div>
                <div
                  className={`overflow-hidden transition-max-height  duration-500 ease-in-out ${
                    isActive ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="bg-blue-50 p-6 text-start text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </div>
  );
};

export default Faq;
