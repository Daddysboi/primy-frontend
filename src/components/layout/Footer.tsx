'use client';

// import React from "react";
import Link from "next/link";

import MaxWidth from "./MaxWidth";
import Button from "../Button";

const FooterLinks = [
  { page: "Careers", link: "/careers" },
  { page: "Privacy Policy", link: "/privacy-policy" },
  { page: "Terms & Conditions", link: "/terms-and-conditions" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2F327D] py-16 text-white/50 text-center mt-20">
      <MaxWidth className="max-w-[30rem]">
        {/*SUB:  TOP */}
        <div className="flex items-center justify-center md:gap-10 gap-5">
          <Link
            href="/"
            className="flex items-center bg-white rounded-full px-3 hover:no-underline"
          >
            <img src="/assets/logo/logo.png" alt="logo" className="w-8 h-8" />
            <span className="font-bold text-xl">ducativ</span>
          </Link>

          <div className="w-[1px] h-10 bg-white/35" />
          <p className="text-white font-semibold text-left">
            SIMPLIFY <br /> MANAGEMENT
          </p>
        </div>
        {/*SUB:  MIDDLE */}
        <div className="md:my-20 my-10">
          <p className="font-semibold mb-4">Subscribe to get our Newsletter</p>
          <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
            <input
              type="text"
              placeholder="Your Email"
              name="newNewsletter"
              className="flex-1 px-4 border border-white/50 rounded-md bg-transparent text-white outline-none min-h-12"
            />
            <Button variant="blue" className="inline-flex ">
              Sign up
            </Button>
          </div>
        </div>

        {/*SUB: BOTTOM */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {FooterLinks.map(({ page, link }) => (
              <Link
                key={page}
                href={link}
                className="border-r md:px-4 px-2  text-white/50  border-white/20 last:border-none last:pr-0"
              >
                {page}
              </Link>
            ))}
          </div>
          <p>&copy;{new Date().getFullYear()} educativ Technologies Inc.</p>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;