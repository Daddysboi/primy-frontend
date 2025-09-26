'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Button from "../Button";
import MaxWidth from "./MaxWidth";

import Image from "next/image";

type HeaderLinkTypes = {
  name: string;
  link: string;
};

const HEADERLINKS: HeaderLinkTypes[] = [
  {
    name: "Pricing",
    link: "#",
  },
  {
    name: "Benefits",
    link: "#",
  },
  {
    name: "FAQs",
    link: "#",
  },
  {
    name: "Contact us",
    link: "/contact-us",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    showMenu
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [showMenu]);

  const handleClick = async () => {
    if (pathname !== "/") {
      await router.push("/");
      scrollToFAQs();
    }
  };

  return (
    <header className="sticky top-0 z-[200]">
      <nav className="bg-[#F9F8FC] py-4 relative z-[200]">
        <MaxWidth className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:no-underline">
            <Image src="/assets/logo/logo.png" alt="logo" width={40} height={40} />
            <span className="font-bold text-2xl">ducativ</span>
          </Link>

          <button
            className="md:hidden block"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose size={35} /> : <IoMdMenu size={35} />}
          </button>
          <ul
            className={twMerge(
              "absolute right-0  -top-[100vh] bg-zinc-100 md:bg-transparent py-10 px-5 md:p-0 flex flex-col md:flex-row gap-x-3 lg:gap-x-5 gap-y-4 md:static  md:items-center w-full z-[50] md:w-auto  transition-all duration-1000 ease-linear",
              showMenu && "top-[100%] transition-all duration-1000"
            )}
          >
            {HEADERLINKS.map((link: HeaderLinkTypes, index) => (
              <div key={index}>
                {link.name === "FAQs" ? (
                  <ScrollLink
                    to="FAQs"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={1000}
                    className="cursor-pointer"
                    key={link.name}
                    onClick={handleClick}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="px-2 py-2 inline-flex w-full"
                    >
                      {link.name}
                    </a>
                  </li>
                )}
              </div>
            ))}
            <Button variant="white" onClick={() => router.push("/login")}>
              Log in
            </Button>
            <Button variant="blue" onClick={() => router.push("/signup")}>
              Sign up
            </Button>
          </ul>
        </MaxWidth>
      </nav>
      <div
        onClick={() => setShowMenu(false)}
        className={twMerge(
          "md:hidden bg-black opacity-70 fixed inset-0 w-full h-full z-[30]",
          showMenu ? "block" : "hidden"
        )}
      />
    </header>
  );
};

export default Header;

export const scrollToFAQs = () => {
  scroll.scrollTo(2000, {
    spy: true,
    smooth: true,
    offset: -250,
    duration: 1000,
  });
};