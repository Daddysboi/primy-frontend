import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";

import { useUser } from "../contexts/userContext";
import AppButton from "../components/Button";

import TeacherDashboard from "./dashboardComponents/TeacherDashboard";
import StudentDashboard from "./dashboardComponents/StudentDashboard";
import AdminDashboard from "./dashboardComponents/AdminDashboard";
import AppSelectInput from "../components/SelectInput";

const Container = styled.div`
  /* width: 100%; */
  /* margin-right: 5rem; */
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
const options = [
  { value: "2021/2022", label: "2021 / 2022" },
  { value: "2022/2023", label: "2022 / 2023" },
  { value: "2023/2024", label: "2023 / 2024" },
  { value: "2024/2025", label: "2024 / 2025" },
];

const Dashboard = () => {
  const [option, setOption] = useState("");
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const handleSelect = (e) => {
    setOption(e.target.value);
  };

  const displayName = `${user?.lastName} ${user?.firstName}`;
  return user ? (
    <Container>
      <WelcomeTab>
        <div>
          <Heading>Hey, {displayName ?? ""}</Heading>
          <Subhead>Welcome to your dashboard</Subhead>
        </div>

        <Right>
          <AppSelectInput
            options={options}
            height="32px"
            onChange={handleSelect}
          />
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
