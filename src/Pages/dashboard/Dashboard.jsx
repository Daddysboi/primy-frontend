import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useUser } from "../../contexts/userContext";
import AppButton from "../../components/Button";

import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import { FaPlus } from "react-icons/fa6";

const Container = styled.div`
  /* width: 100%; */
`;

const WelcomeTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const Subhead = styled.p`
  font-size: 0.7rem;
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
          icon={<FaPlus />}
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
