import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import "../../assets/css/AdminDashBoard.css";

import TaskTab from "../../components/TaskTab";

import { getAllCourses } from "../../service/courseService";
import { useStoreContext } from "../../Contexts/StoreContext";
import { getAllStudents, getAllTeachers } from "../../service/userService";

import CreateUser from "../../components/CreateUser";
import CreateCourse from "../../components/CreateCourse";
import Modal from "../../components/Modal";

import boardWoman from "../../assets/images/board_woman.png";
import femaleStudent from "../../assets/images/female_student.png";
import sleepGirl from "../../assets/images/sleep_girl.png";
import AdminDisplayCard from "../../components/AdminDisplayCard";
import DashboardCalendar from "../../components/Calendar";
import Profile from "../../components/Profile";

const AdminDashBoard = () => {
  const {
    state: { user_info },
  } = useStoreContext();

  const { data: teachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getAllTeachers(),
  });
  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
  });
  const { data: students } = useQuery({
    queryKey: ["students"],
    queryFn: () => getAllStudents(),
  });

  const navigate = useNavigate();

  const [creatingCourse, setCreatingCourse] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const overview = [
    {
      pre: "Teachers",
      task: `${teachers?.length ?? ""}`,
      image: boardWoman,
      colour: "yellow",
      link: "admin/teachers",
    },
    {
      pre: "Students",
      task: `${students?.length ?? ""}`,
      image: femaleStudent,
      colour: "yellow",
      link: "#",
    },
    {
      pre: "Courses",
      task: `${courses?.length ?? ""}`,
      image: sleepGirl,
      colour: "yellow",
      link: "admin/courses",
    },
  ];

  return (
    <>
      <div className="admin_dashboard">
        <section className="admin_left_container">
          <div className="admin_top_container">
            {overview.map((item, index) => (
              <TaskTab
                key={index}
                prefix={item.pre}
                task={item.task}
                image={item.image}
                colour={item.colour}
                onClick={() => navigate(item?.link)}
              />
            ))}
          </div>
          <div className="admin_middle_container">
            <AdminDisplayCard
              name="Teacher"
              onManage="admin/teachers"
              onCreate={() => setCreateModal(true)}
            />
            <AdminDisplayCard
              name="Course"
              onManage="admin/courses"
              onCreate={() => setCreatingCourse(true)}
            />
          </div>
        </section>
        <section className="admin_right_container">
          <DashboardCalendar />
        </section>
      </div>

      <Modal
        isOpen={creatingCourse}
        hasCloseBtn
        onClose={() => setCreatingCourse(false)}
      >
        <CreateCourse setIsCreating={setCreatingCourse} />
      </Modal>

      <Modal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        hasCloseBtn={true}
      >
        <CreateUser role="teacher" setIsCreating={setCreateModal} />
      </Modal>
    </>
  );
};

export default AdminDashBoard;
