import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";

import { useUser } from "../contexts/userContext";
import AppButton from "../components/Button";

import TeacherDashboard from "./dashboardComponents/TeacherDashboard";
import StudentDashboard from "./dashboardComponents/StudentDashboard";
import AdminDashboard from "./dashboardComponents/admin/AdminDashboard";

const Container = styled.div`
  /* width: 100%; */
  /* position: relative; */
`;

const WelcomeTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Right = styled.div`
  display: flex;
  gap: 1rem;
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
        <Right>
          <AppButton
            text="New Admission"
            onClick={() => {}}
            small
            icon={<MdArrowBackIos />}
          />
        </Right>
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
