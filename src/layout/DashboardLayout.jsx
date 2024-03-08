import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/loginSlice";
import { useUser } from "../contexts/userContext";
import {
  adminLinks,
  studentLinks,
  teacherLinks,
} from "../pages/dashboardComponents/Links";
import { checkInLocation } from "../utils/helpers";

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  color: ${({ active }) => (active ? "blue" : "black")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    background-color: lightgray;
  }
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
    <div>
      <aside>
        {links.map((sidebar, index) => (
          <Button
            onClick={() => clickHandler(sidebar.link, sidebar?.type)}
            key={index}
            active={checkInLocation(sidebar.link)}
            disabled={sidebar?.disabled}
          >
            {sidebar.title}
          </Button>
        ))}
      </aside>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
