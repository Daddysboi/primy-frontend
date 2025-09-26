'use client';

import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-[#5941A9]/5 via-white to-[#E4E0FB] py-4 md:py-6 lg:py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div
                        data-aos="fade-right"
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <div className="mb-2">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#5941A9] bg-[#5941A9]/10 rounded-full">
                                INNOVATIVE SCHOOL MANAGEMENT
                            </span>
                        </div>

                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                            <span className="text-[#5941A9]">Transform</span> Your
                            <br className="hidden md:block" /> School Experience
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                            Streamline administration, enhance learning, and connect teachers, students, and parents in one comprehensive platform designed for modern education.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                            <button
                                onClick={() => router.push("/login")}
                                className="bg-[#5941A9] hover:bg-[#4A3688] text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                Get Started Free
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => router.push("/demo")}
                                className="border border-[#5941A9] text-[#5941A9] hover:bg-[#5941A9] hover:text-white font-medium py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Setup in minutes</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="300"
                        className="md:w-1/2 relative"
                    >
                        <div className="relative mx-auto md:mr-0" style={{ maxWidth: '500px' }}>
                            {/* Decorative images */}
                            <img
                                src="/assets/images/header-pic/topleft.png"
                                alt="Decoration"
                                className="md:w-40 w-28 absolute top-20 -left-2 md:-left-10 z-10 animate-float"
                            />
                            <img
                                src="/assets/images/header-pic/topright.png"
                                alt="Decoration"
                                className="md:w-28 w-20 absolute top-10 -right-4 md:-right-8 z-10 animate-float-reverse"
                            />
                            <img
                                src="/assets/images/header-pic/bottomleft.png"
                                alt="Decoration"
                                className="md:w-48 w-32 absolute -bottom-8 -left-10 md:-left-16 z-10 animate-float-slow"
                            />
                            <img
                                src="/assets/images/header-pic/bottomright.png"
                                alt="Decoration"
                                className="md:w-40 w-28 absolute bottom-16 -right-6 md:-right-12 z-10 animate-float-slow-reverse"
                            />

                            {/* Main image */}
                            <div className="relative z-0">
                                <img
                                    src="/assets/images/herogirl.png"
                                    alt="Happy student"
                                    className="w-full max-w-md mx-auto md:max-w-full drop-shadow-2xl"
                                />

                                {/* Floating stats element */}
                                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-4 animate-pulse-slow">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                                        <span className="text-xs font-semibold text-gray-700">2,500+ Active Users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes float-reverse {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(10px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes float-slow {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes float-slow-reverse {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(8px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes pulse-slow {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: float-reverse 5s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 7s ease-in-out infinite;
                }
                .animate-float-slow-reverse {
                    animation: float-slow-reverse 8s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;