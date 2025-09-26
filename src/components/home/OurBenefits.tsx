'use client';

import useMobile from "@/utils/useMobile";
import MaxWidth from "../layout/MaxWidth";
import {cn} from "@/utils/utils";

const OurBenefits: React.FC<{}> = () => {
    const isMobile = useMobile();

    return (
        <section data-aos="fade-up">
            <MaxWidth className="flex flex-col justify-start items-center my-24">
                <h2 className="text-2xl md:text-3xl text-edu-blue font-bold tracking-wider">
                    Our <span className="text-edu-yellow">Benefits</span>
                </h2>
                <div className="text-[#696984] py-6 text-md md:text-lg max-w-[80%] lg:leading-10 text-center">
                    This very extraordinary feature can make learning activities more
                    efficient
                </div>
                {data.map(({img, heading, info}, index) => (
                    <article
                        className={cn(
                            "flex flex-col max-w-[80%] gap-4 justify-center items-center mb-8 p-4 lg:shadow-none md:flex-row lg:p-0",
                            {"md:flex-row-reverse": index % 2 === 0}
                        )}
                        key={index}
                    >
                        <img
                            src={img}
                            alt=""
                            data-aos={
                                index % 2 === 0 && !isMobile ? "fade-left" : "fade-right"
                            }
                            className="w-full md:w-1/2 2xl:w-auto"
                        />
                        <div
                            data-aos={
                                index % 2 === 0 && !isMobile ? "fade-right" : "fade-left"
                            }
                            className="md:w-1/2 xl:w-auto"
                        >
                            <h3 className="text-md md:text-xl text-edu-blue font-semibold md:mb-4 lg:mb-8">
                                {heading}
                            </h3>
                            <p className="text-xs md:text-sm">{info}</p>
                        </div>
                    </article>
                ))}
            </MaxWidth>
        </section>
    );
};

export default OurBenefits;

const data: { img: string; heading: string; info: string }[] = [
    {
        img: "/assets/images/our-benefits/img 1.png",
        heading: "Offline Functionality",
        info: `Many educational platforms require a constant internet connection to function properly, which can be a limitation. Educativ offers offline capabilities for essential tasks such as grading, conducting assessments, and documenting activities. This means teachers and administrators can continue their work without interruption even if the internet is down or unavailable. Once back online, any updates made offline can be synced with the system.`,
    },
    {
        img: "/assets/images/our-benefits/img 2.png",
        heading: "Simple, Modern User Interface",
        info: `The user interface (UI) of Educativ is designed with simplicity and modernity in mind. This makes it easy for users, regardless of their technical proficiency, to navigate and use the platform. It supports the management of various types of educational institutions, whether it be a single school or a network of schools, by providing a cohesive and intuitive experience.`,
    },
    {
        img: "/assets/images/our-benefits/img 3.png",
        heading: "Simplified Payment Process",
        info: `Financial transactions can be cumbersome and time-consuming. Educativ incorporates an in-app payment system that simplifies the process. This can automate various financial tasks such as tuition payments, fee collection, and other monetary transactions, making them faster and more secure.`,
    },
    {
        img: "/assets/images/our-benefits/img 4.png",
        heading: "Robust Class Management Tools",
        info: `Managing a class involves numerous tasks like maintaining rosters, tracking attendance, and organizing lesson plans. Educativ integrates these functions into a single platform, providing tools for every aspect of class management. This all-in-one solution enhances efficiency and organization for teachers and administrators.`,
    },
    {
        img: "/assets/images/our-benefits/img 5.png",
        heading: "Real-Time Collaboration and Communication Tools",
        info: `Effective communication and collaboration are crucial in educational settings. Educativ provides real-time tools for messaging, file sharing, and collaborative projects. This ensures that students, teachers, and administrators can interact and collaborate instantly, improving responsiveness and teamwork.`,
    }
];
