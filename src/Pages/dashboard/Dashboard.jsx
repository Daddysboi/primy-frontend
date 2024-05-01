import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppButton from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCreateModal } from "../../redux/features/modalSlice";

import TeacherDashboard from "./teacher/TeacherDashboard";
import StudentDashboard from "./student/StudentDashboard";
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
  text-transform: capitalize;
`;

const Top = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 30rem;
`;

const Mid = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const handleAdmission = () => {
    navigate("/dashboard/admin/students").then(() => {
      dispatch(setCreateModal(true));
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const displayName = `${user?.lastName} ${user?.firstName}`;

  const data = [57, 43];

  const action = {
    admin: { text: "New Admission", func: handleAdmission },
  };

  const DashboardComponent =
    user?.role === "student"
      ? AdminDashboard
      : user?.role === "teacher"
      ? TeacherDashboard
      : StudentDashboard;

  return user ? (
    <Container>
      <WelcomeTab>
        <div>
          <Heading>Hey, {displayName ?? ""}</Heading>
          <Subhead>{user?.role}</Subhead>
        </div>
        {action[user?.role]?.text && (
          <AppButton
            text={action[user?.role].text}
            onClick={action[user?.role].func}
            small
            icon={<FaPlus />}
          />
        )}
      </WelcomeTab>
      <DashboardComponent
        Top={Top}
        CardWrapper={CardWrapper}
        Mid={Mid}
        Bottom={Bottom}
        data={data}
      />
    </Container>
  ) : (
    <></>
  );
};

export default Dashboard;
