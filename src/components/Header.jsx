import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { useScroll } from "../App";

import Logo from "./Logo";
import Button from "./Button";
import { primaryColors } from "../assets/Colors";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(1rem);
  z-index: 2;
  position: fixed;
  padding: 0 3rem;
  height: 7rem;
  top: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 820px) {
    height: 4rem;
  }
`;

const PcLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media only screen and (max-width: 820px) {
    display: none;
  }
  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    gap: 0rem;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1024px) {
    gap: 1rem;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  gap: 1rem;
  /* text-decoration: none; */
  padding: 0.7rem 1rem;

  &:hover {
    background-color: #dbdbdb;
    border-radius: 0.5rem;
  }
  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 821px) and (max-width: 1024px) {
    gap: 0rem;
  }
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

const NavIcons = styled.span`
  z-index: 5;
  font-size: 1.5rem;
  color: #333;
  transition: 0.3s;
  cursor: pointer;
  display: none;
  @media only screen and (min-width: 320px) and (max-width: 820px) {
    display: block;
    font-size: 1rem;
  }
`;

const MobileLinks = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  gap: 2rem;
  transition: all 0.5s;
  background-color: ${primaryColors.DashBoardBackground};
  opacity: 0.95;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  padding-top: 6rem;
  overflow: hidden;
  @media only screen and (min-width: 320px) and (max-width: 821px) {
    display: flex;
  }
`;

const links = [
  { path: "/", page: "About", id: "about" },
  { path: "/", page: "Pricing", id: "pricing" },
  { path: "/", page: "Products", id: "product" },
  { path: "/", page: "Contact Us", id: "contact" },
  { path: "/", page: "FAQs" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { setAction } = useScroll();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const toggleSrc = open ? (
    <FaTimes onClick={handleToggle} />
  ) : (
    <FaBars onClick={handleToggle} />
  );

  return (
    <Container>
      <Logo color="#0F0F0F" />
      {open ? (
        <MobileLinks>
          {links?.map(({ path, page }, i) => (
            <StyledLink
              key={i}
              to={path}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {page}
            </StyledLink>
          ))}
          <div>
            <ScrollTo
              to="Login"
              onclick={() => {
                setAction("Login");
                setOpen(!open);
              }}
            >
              <Button
                height="2.5rem"
                fontSize="1rem"
                text="Sign in"
                display="none"
                borderColor="transparent"
                textColor="#0F0F0F"
                small
                onClick={() => {
                  // setOpen(!open);
                }}
              />
            </ScrollTo>

            <ScrollTo
              to="Sign Up"
              onclick={() => {
                setAction("Sign Up");
                setOpen(!open);
              }}
            >
              <Button
                height="2.5rem"
                fontSize="1rem"
                display="other"
                text="Start for free"
                borderColor="#0F0F0F"
                small
                onClick={() => {
                  // setOpen(!open);
                }}
              />
            </ScrollTo>
          </div>
        </MobileLinks>
      ) : (
        <PcLinks>
          {links?.map(({ path, page, id }, i) => (
            <ScrollTo to={id}>
              <StyledLink key={i} to={path}>
                {page}
              </StyledLink>
            </ScrollTo>
          ))}
        </PcLinks>
      )}
      <>
        <NavIcons>{toggleSrc}</NavIcons>
        <CTA>
          <ScrollTo
            to="Login"
            onclick={() => {
              setAction("Login");
            }}
          >
            <Button
              height="2.5rem"
              fontSize="1rem"
              text="Sign in"
              display="none"
              borderColor="transparent"
              textColor="#0F0F0F"
              hoverBg="#dbdbdb"
              small
            />
          </ScrollTo>
          <ScrollTo
            to="Sign Up"
            onclick={() => {
              setAction("Sign Up");
            }}
          >
            <Button
              height="2.5rem"
              fontSize="1rem"
              display="other"
              text="Start for free"
              borderColor="#0F0F0F"
              small
            />
          </ScrollTo>
        </CTA>
      </>
    </Container>
  );
};

export default Header;

export const ScrollTo = ({ children, to, onclick }) => {
  return (
    <Link
      to={to}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-150}
      duration={2000}
      onClick={onclick}
    >
      {children}
    </Link>
  );
};
