import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import TaskTab from "../../components/TaskTab";
import { useUser } from "../../contexts/userContext";
import CreateUser from "../../components/CreateUser";
import CreateCourse from "../../components/CreateCourse";
import Modal from "../../components/Modal";
import AdminDisplayCard from "../../components/AdminDisplayCard";
import DashboardCalendar from "../../components/Calendar";

const AdminDashboard = () => {
  const { user } = useUser();

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
  const [createTeacher, setCreateTeacher] = useState(false);

  const overview = [
    {
      pre: "Teachers",
      task: `${teachers?.length ?? ""}`,
      image: "",
      colour: "yellow",
      link: "admin/teachers",
    },
    {
      pre: "Students",
      task: `${students?.length ?? ""}`,
      image: "",
      colour: "yellow",
      link: "#",
    },
    {
      pre: "Courses",
      task: `${courses?.length ?? ""}`,
      image: "",
      colour: "yellow",
      link: "admin/courses",
    },
  ];

  return (
    <>
      <div>
        <section>
          <div>
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
          <div>
            <AdminDisplayCard
              name="Teacher"
              onManage="admin/teachers"
              onCreate={() => setCreateTeacher(true)}
            />
            <AdminDisplayCard
              name="Course"
              onManage="admin/courses"
              onCreate={() => setCreatingCourse(true)}
            />
          </div>
        </section>
        <section>
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
        isOpen={createTeacher}
        onClose={() => setCreateTeacher(false)}
        hasCloseBtn={true}
      >
        <CreateUser role="teacher" setIsCreating={setCreateTeacher} />
      </Modal>
    </>
  );
};

export default AdminDashboard;
