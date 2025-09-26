'use client';

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const WhatIsEducativ = () => {
  return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#5941A9]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD166]/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
              data-aos="fade-up"
              className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              What is <span className="text-[#5941A9]">Educativ</span>?
            </h2>
            <div className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              EDUCATIV is a comprehensive platform that enables educators to create
              and manage online classes efficiently. It allows teachers to manage
              assignments, quizzes, and exams, monitor due dates, grade results, and
              provide feedback to students—all in one centralized location.
            </div>
          </div>

          <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              data-aos="fade-up"
              data-aos-delay="100"
          >
            {data.map(({ img, heading, link, className, dataAos }, index) => (
                <div
                    data-aos={dataAos}
                    className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl"
                    key={index}
                >
                  <img
                      src={img}
                      alt={heading}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end pb-8 px-4">
                    <h3 className="text-white uppercase text-2xl font-bold mb-4 text-center">
                      {heading}
                    </h3>
                    <Link
                        href="#"
                        className={twMerge(
                            "text-white border-2 border-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-[#5941A9]",
                            className.includes("bg-blue-500") && "bg-[#5941A9] border-[#5941A9] hover:bg-white hover:text-[#5941A9]"
                        )}
                    >
                      {link}
                    </Link>
                  </div>
                </div>
            ))}
          </div>

          {/* Additional info section */}
          <div
              className="mt-16 bg-white rounded-2xl shadow-md p-8 md:p-12"
              data-aos="fade-up"
              data-aos-delay="200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5941A9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#5941A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Comprehensive Learning</h4>
                <p className="text-gray-600">Access to all educational resources in one place</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5941A9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#5941A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Easy Assignment Management</h4>
                <p className="text-gray-600">Create, distribute, and grade assignments seamlessly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5941A9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#5941A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Collaborative Environment</h4>
                <p className="text-gray-600">Connect teachers, students, and parents effectively</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WhatIsEducativ;

const data = [
  {
    img: "/assets/images/What_is_educativ/for_teachers.png",
    heading: "For Teachers",
    link: "Start a class today",
    className: "",
    dataAos: "fade-right",
  },
  {
    img: "/assets/images/What_is_educativ/for_students.png",
    heading: "For Students",
    link: "Enter access code",
    className: "bg-blue-500",
    dataAos: "fade-left",
  },
];