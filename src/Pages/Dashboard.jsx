import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";

import { useUser } from "../contexts/userContext";

import AppButton from "../components/Button";

import TeacherDashboard from "./dashboardComponents/TeacherDashboard";
import StudentDashboard from "./dashboardComponents/StudentDashboard";
import AdminDashboard from "./dashboardComponents/AdminDashboard";

const Container = styled.div`
  margin-left: 3rem;
  width: 100%;
  margin-right: 5rem;
`;

const WelcomeTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Heading = styled.h1`
  margin-bottom: 0;
  font-size: 1.5rem;
`;

const Subhead = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const Dashboard = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const displayName = `${user?.lastName} ${user?.firstName}`;
  return user ? (
    <Container>
      <WelcomeTab>
        <div>
          <Heading>Hey, {displayName ?? ""}</Heading>
          <Subhead>Welcome to your dashboard</Subhead>
        </div>
        <AppButton
          text="New Admission"
          onClick={() => {}}
          small
          icon={<MdArrowBackIos />}
        />
      </WelcomeTab>
      {user.role === "student" ? (
        <StudentDashboard />
      ) : user.role === "teacher" ? (
        <TeacherDashboard />
      ) : (
        <AdminDashboard />
      )}
    </Container>
  ) : (
    <></>
  );
};

export default Dashboard;
