import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/loginSlice";
import { useAppSelector } from "../redux/hooks";

import {
  adminLinks,
  studentLinks,
  teacherLinks,
} from "../pages/dashboard/Links";
import { checkInLocation } from "../utils/helpers";
import DashboardHeader from "../pages/dashboard/Header.Dashboard";
import { primaryColors } from "../assets/Colors";
import { BottomGradient } from "../components/third-party/Form";

import library from "../assets/images/library.png";
import Logo from "../components/Logo";

const Wrapper = styled.div`
  background-color: ${primaryColors.DashBoardBackground};
  padding: 5rem 0 3rem 20%;
  min-height: 100vh;
  min-width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 1rem;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 13rem;
  padding-top: 1rem;
  padding-left: 2rem;
  background-color: ${primaryColors.Purple};
  /* background-color: #000; */
  border-radius: 0 1.5rem 0 0;
  min-height: calc(100vh - 4rem);
  margin-top: -1rem;
  position: fixed;
  top: 5rem;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding-bottom: 1rem;
`;

const Button = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 8px;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  cursor: pointer;
  margin-left: ${({ active }) => (active ? "0.5rem" : "")};
  transition: background-color 0.2s ease;
  background-color: ${({ active }) =>
    active ? `${primaryColors.LightPurple}` : "transparent"};
  color: ${({ active }) =>
    active ? `${primaryColors.Purple}` : `${primaryColors.LightPurple}`};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  width: 7rem;
  &:hover {
    background-color: #925aed;
    color: ${primaryColors.LightPurple};
    width: 7rem;
  }
`;

const SubButton = styled(Button)`
  margin: 0 0 0 1.2rem;
`;

const SideBarImg = styled.img`
  height: 8rem;
`;

const DashBoardLayout = () => {
  const [showSublinks, setShowSublinks] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);

  const clickHandler = (url, type) => {
    if (type === "button") {
      dispatch(logout())
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert("Logout failed. Please try again.");
        });
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
          <Logo />
          <Links>
            {links.map((sidebar, index) => (
              <div key={index}>
                <Button
                  className={"relative group/btn "}
                  onClick={() => clickHandler(sidebar.link, sidebar.type)}
                  active={checkInLocation(sidebar.link)}
                  disabled={sidebar?.disabled}
                >
                  {sidebar.icon}
                  {sidebar.title}
                  <span>
                    {sidebar.sublinks ? (
                      <FontAwesomeIcon
                        icon={showSublinks ? faChevronRight : faChevronDown}
                      />
                    ) : null}
                  </span>
                  <BottomGradient />
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
