'use client';

// import React from "react";
import { twMerge } from "tailwind-merge";
import { FaRegCalendarDays } from "react-icons/fa6";

type FeaturesCardTypes = {
  icon: React.ReactNode;
  bgColor: string;
  heading: string;
  subheading: string;
};

const FeaturesCard = ({
  icon,
  bgColor,
  heading,
  subheading,
}: FeaturesCardTypes) => {
  return (
    <article className="bg-white shadow-lg rounded-lg px-5  pt-12 pb-10 w-80 relative">
      <div
        className={twMerge(
          "absolute left-1/2 -translate-x-1/2 -top-[12%] rounded-full w-16 h-16 flex items-center justify-center",
          bgColor
        )}
      >
        {icon}
      </div>
      <h4 className="mb-5 text-blue-800 text-2xl">{heading}</h4>
      <p className="font-light text-gray-500 leading-7">{subheading}</p>
    </article>
  );
};

export default FeaturesCard;