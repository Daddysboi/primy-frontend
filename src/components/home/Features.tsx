'use client';

import React from "react";
import { GiBrain } from "react-icons/gi";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineEditNote } from "react-icons/md";
import {
  FaCalendarCheck,
  FaChartLine,
  FaFileInvoice,
  FaRegCalendarDays,
} from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const FeaturesData = [
  {
    bg: "bg-[#5941A9]",
    icon: <FaFileInvoice size={30} className="text-white" />,
    heading: "Flexible Communication System",
    subheading:
        "Use of chat boxes and notifications to facilitate easy communication between administrators and staff for better management.",
  },
  {
    bg: "bg-[#FFD166]",
    icon: <FaRegCalendarDays size={30} className="text-white" />,
    heading: "Online School Management",
    subheading:
        "Transparency in all school management activities, enabling efficient and effective operations.",
  },
  {
    bg: "bg-[#4ECDC4]",
    icon: <TbMapPin2 size={30} className="text-white" />,
    heading: "Improve Admission/Enrollment Processes",
    subheading:
        "Streamlined processes to simplify student admissions and enrollment.",
  },
  {
    bg: "bg-[#6B52C1]",
    icon: <MdOutlineEditNote size={30} className="text-white" />,
    heading: "Automated Assessment Grading",
    subheading:
        "Automated grading systems and analytical tools to evaluate both student and teacher performance.",
  },
  {
    bg: "bg-[#FF6B6B]",
    icon: <GiBrain size={30} className="text-white" />,
    heading: "AI-Powered Features",
    subheading:
        "AI-assisted tools for creating assessments, notes, and timetables.",
  },
  {
    bg: "bg-[#45B7D1]",
    icon: <FaChartLine size={30} className="text-white" />,
    heading: "Finance Management Solution",
    subheading: "Comprehensive tools for managing school finances efficiently.",
  },
  {
    bg: "bg-[#9D6DE9]",
    icon: <FaCalendarCheck size={30} className="text-white" />,
    heading: "Event Management",
    subheading:
        "Tools for creating, editing, and receiving prompt reminders about school events.",
  },
];

const FeaturesCard = ({
                        icon,
                        bgColor,
                        heading,
                        subheading,
                      }: {
  icon: React.ReactNode;
  bgColor: string;
  heading: string;
  subheading: string;
}) => {
  return (
      <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 pt-14 relative overflow-hidden group">
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div
            className={twMerge(
                "absolute left-6 -top-6 rounded-full w-16 h-16 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300",
                bgColor
            )}
        >
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4 relative z-10">{heading}</h4>
        <p className="text-gray-600 leading-relaxed relative z-10">{subheading}</p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5941A9] to-[#6B52C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </article>
  );
};

const Features = () => {
  return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#5941A9]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD166]/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
              data-aos="fade-up"
              data-aos-offset="100"
              className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Powerful <span className="text-[#5941A9]">Features</span> for Modern Education
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EDUCATIV is a comprehensive online software suite that integrates all the necessary tools to successfully manage an educational institution
            </p>
          </div>

          <div
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="100"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FeaturesData.map((feature, index) => (
                <FeaturesCard
                    key={index}
                    bgColor={feature.bg}
                    icon={feature.icon}
                    heading={feature.heading}
                    subheading={feature.subheading}
                />
            ))}
          </div>

          {/* Call to action */}
          <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">Ready to transform your school management?</p>
            <button className="bg-[#5941A9] hover:bg-[#4A3688] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
  );
};

export default Features;