import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/loginSlice";
import { useUser } from "../contexts/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

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
  margin-bottom: 2rem;
`;

const Image = styled.img`
  height: 2.5rem;
`;
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
  margin-right: 3rem;
  padding-left: 2rem;
  background-color: ${primaryColors.Purple};
  border-radius: 0 1.5rem 0 0;
  min-height: calc(100vh - 4rem);
`;

const Button = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 8px;
  margin-left: ${({ active }) => (active ? "0.5rem" : "")};
  border-radius: 0.5rem;
  cursor: pointer;
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
    background-color: ${primaryColors.mintGreen};
    color: ${primaryColors.Purple};
  }
`;

const SubButton = styled(Button)`
  margin: 0 0 0 1.2rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const SideBarImg = styled.img`
  height: 8rem;
  margin-top: 4rem;
`;

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const [showSublinks, setShowSublinks] = useState(false);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  const clickHandler = (url, type) => {
    if (type === "button") {
      dispatch(logout());
      navigate("/");
    } else if (url === "dashboard") {
      navigate("/dashboard");
      return;
    } else if (type === "sublinks") {
      setShowSublinks(!showSublinks);
    } else {
      navigate(url);
    }
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
          <Links>
            {links.map((sidebar, index) => (
              <div key={index}>
                <Button
                  onClick={() => clickHandler(sidebar.link, sidebar.type)}
                  active={checkInLocation(sidebar.link)}
                  disabled={sidebar?.disabled}
                >
                  {sidebar.icon}
                  {sidebar.title}
                  <div>
                    {sidebar.sublinks ? (
                      <FontAwesomeIcon
                        icon={showSublinks ? faChevronUp : faChevronDown}
                      />
                    ) : null}
                  </div>
                </Button>
                {sidebar.sublinks && showSublinks && (
                  <>
                    {sidebar.sublinks.map((item, subIndex) => (
                      <SubButton
                        onClick={() => navigate(item.link)}
                        key={subIndex}
                      >
                        {item.icon}
                        {item.title}
                      </SubButton>
                    ))}
                  </>
                )}
              </div>
            ))}
          </Links>
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
