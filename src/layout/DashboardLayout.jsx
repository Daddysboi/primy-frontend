import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/loginSlice";
import { useUser } from "../contexts/userContext";

import {
  adminLinks,
  studentLinks,
  teacherLinks,
} from "../pages/dashboardComponents/Links";
import { checkInLocation } from "../utils/helpers";
import DashboardHeader from "../pages/dashboardComponents/Header.Dashboard";
import { primaryColors } from "../assets/Colors";

import Img from "../assets/Logo/primy-logo.png";
import library from "../assets/images/library.png";

const Wrapper = styled.div`
  background-color: ${primaryColors.DashBoardBackground};
  height: 100%;
  /* margin-top: 4rem; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryColors.Gray};
`;

const Image = styled.img`
  height: 2.5rem;
`;
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 12rem;
  padding-left: 2rem;
  background-color: ${primaryColors.Purple};
  gap: 0.5rem;
  border-radius: 0 1.5rem 0 0;
  min-height: calc(100vh - 4rem);
`;

const Button = styled.button`
  display: flex;
  gap: 0.3rem;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  border: ${({ active }) =>
    active ? `1px solid ${primaryColors.LightPurple}` : "transparent"};
  width: 7rem;
  transition: background-color 0.2s ease;
  background-color: ${({ active }) =>
    active ? `${primaryColors.LightPurple}` : "transparent"};
  color: ${({ active }) =>
    active ? `${primaryColors.Purple}` : `${primaryColors.LightPurple}`};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    border: 1px solid ${primaryColors.LightPurple};
  }
`;

const SideBarImg = styled.img`
  height: 8rem;
`;

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useUser();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  const clickHandler = (url, type) => {
    if (type === "button") {
      dispatch(logout());
      navigate("/");

      return;
    }
    if (url === "dashboard") {
      navigate("/dashboard");
      return;
    }

    navigate(url);
  };

  let links;

  switch (user?.role) {
    case "student":
      links = studentLinks;
      break;
    case "teacher":
      links = teacherLinks;
      break;
    case "admin":
      links = adminLinks;
      break;
    default:
      links = [];
  }

  return (
    <Wrapper>
      <DashboardHeader />

      <Container>
        <Aside>
          <Logo>
            <Image src={Img} alt="Logo" />
            <h1>Primy</h1>
          </Logo>
          <div>
            {links.map((sidebar, index) => (
              <Button
                onClick={() => clickHandler(sidebar.link, sidebar?.type)}
                key={index}
                active={checkInLocation(sidebar.link)}
                disabled={sidebar?.disabled}
              >
                {sidebar.icon}
                {sidebar.title}
              </Button>
            ))}
          </div>
          <div>
            <SideBarImg src={library} alt="library" />
          </div>
        </Aside>

        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default DashBoardLayout;
