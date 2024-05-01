import React from "react";

import "../../assets/css/StudentDashBoard.css";

import testBaord from "../../assets/images/testboard.png";
import gradeBook from "../../assets/images/grade_book.png";
import library from "../../assets/images/library_book.png";
import Quiz from "../../assets/images/quiz_mark.png";

import TaskTab from "../../components/TaskTab";
import ProgressBar from "../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Profile";
import CourseList from "../../components/CourseList";
import ExamList from "../../components/ExamList";
import DashboardCalendar from "../../components/Calendar";
import { useStoreContext } from "../../Contexts/StoreContext";

const taskTab = [
  {
    pre: "take an",
    task: "Assessment",
    image: testBaord,
    colour: "yellow",
    link: "/dashboard/students/assessment",
  },
  {
    pre: "check your",
    task: "Grades",
    image: gradeBook,
    colour: "lemon",
    link: "/dashboard/students/grade",
  },
  {
    pre: "Visit the library",
    task: "Library",
    image: library,
    colour: "pink",
    link: ".",
  },
  {
    pre: "Take a",
    task: "Quiz",
    image: Quiz,
    colour: "teal",
    link: ".",
  },
];

const StudentDashBoard = () => {
  const navigate = useNavigate();
  const {
    state: { user_info },
  } = useStoreContext();

  const pageNavigator = (page) => {
    navigate(`${page}`);
  };

  return (
    <>
      <div className="student_dashboard">
        <div className="tasks_section">
          <div className="tasks">
            {taskTab.map((task) => (
              <TaskTab
                style={{ maxWidth: "10rem" }}
                key={task.task}
                prefix={task.pre}
                task={task.task}
                image={task.image}
                colour={task.colour}
                onClick={() => pageNavigator(task?.link)}
              />
            ))}
          </div>
          <div className="analytics">
            <div className="chart_container">
              <h3>Chart</h3>
            </div>
            <div className="status_container">
              <div>
                <ProgressBar percentage={32} type="Average" />
                <h3>Performance</h3>
              </div>
              <div>
                <ProgressBar percentage={78} type="Project" />
                <h3>Status</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_section">
          <Profile img="https://i.pravatar.cc/200" user={user_info} />
        </div>
      </div>

      <div className="student_btm_content">
        <div>
          <ExamList />
        </div>

        <div>
          <DashboardCalendar />
        </div>
      </div>
    </>
  );
};

export default StudentDashBoard;
