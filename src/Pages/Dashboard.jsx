import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

import { useUser } from "../contexts/userContext";

import { Button } from "../components/Button";

import TeacherDashboard from "./dashboardComponents/TeacherDashboard";
import StudentDashboard from "./dashboardComponents/StudentDashboard";
import AdminDashboard from "./dashboardComponents/AdminDashboard";

const Dashboard = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return user ? (
    <section className="dashboard">
      <div className="user_profile">
        <div>
          <h2>Hello, {user?.firstName ?? ""}</h2>
          <p>What will you do today? </p>
        </div>
        <Button
          text="Back"
          onClick={() => {
            navigate(-1);
          }}
          icon={<MdArrowBackIos />}
        />
      </div>
      {user.role === "student" ? (
        <StudentDashboard />
      ) : user.role === "teacher" ? (
        <TeacherDashboard />
      ) : (
        <AdminDashboard />
      )}
    </section>
  ) : (
    <></>
  );
};

export default Dashboard;
