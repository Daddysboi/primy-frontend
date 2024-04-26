import { RxDashboard } from "react-icons/rx";
import {
  PiChalkboardTeacherBold,
  PiStudentBold,
  PiExamBold,
} from "react-icons/pi";
import { FaBookOpen, FaHandHoldingUsd } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";

// STUDENT LINKS
export const studentLinks = [
  {
    title: "My Dashboard",
    link: "dashboard",
    type: "link",
    icon: <RxDashboard />,
  },
  {
    title: "Assessments",
    link: "student/assessment",
    type: "link",
  },
  {
    title: "Grades",
    link: "student/grade",
    type: "link",
  },
  {
    title: "Timetable",
    link: "student/timetable",
    type: "link",
  },
  {
    title: "Events",
    link: "events",
    type: "link",
  },
  {
    title: "Log out",
    type: "button",
  },
];

// TEACHERS LINKS
export const teacherLinks = [
  {
    title: "Dashboard",
    link: "dashboard",
    type: "link",
  },
  {
    title: "Clases",
    link: "teacher/classes",
    type: "link",
  },
  {
    title: "Assessments",
    link: "teacher/assessments",
    type: "link",
  },
  {
    title: "Exams",
    link: "teacher/exams",
    type: "link",
  },
  {
    title: "Students",
    link: "teacher/students",
    type: "link",
  },

  {
    title: "Timetable",
    link: "teacher/timetable",
    type: "link",
  },
  {
    title: "Events",
    link: "events",
    type: "link",
  },
  {
    title: "Settings",
    link: "settings",
    // disabled: true,
    type: "link",
  },
  {
    title: "Log out",
    type: "button",
  },
];

// ADMIN LINKS
export const adminLinks = [
  {
    title: "Dashboard",
    link: "dashboard",
    type: "link",
    icon: <RxDashboard />,
  },
  {
    title: "Teachers",
    link: "admin/teachers",
    type: "link",
    icon: <PiChalkboardTeacherBold />,
  },
  {
    title: "Students",
    link: "admin/students",
    type: "link",
    icon: <PiStudentBold />,
  },
  {
    title: "Classes",
    link: "admin/classes",
    type: "link",
    icon: <FaBookOpen />,
  },
  {
    title: "Timetable",
    link: "admin/timetable",
    type: "link",
    icon: <FaBookOpen />,
  },
  {
    title: "Results",
    icon: <PiExamBold />,
    type: "sublinks",
    sublinks: [
      {
        title: "Exam",
        link: "teacher/results/exams/",
        type: "link",
        icon: <PiExamBold />,
      },
      {
        title: "Assessment",
        link: "teacher/results/assessments/",
        type: "link",
        icon: <PiExamBold />,
      },
    ],
  },
  {
    title: "Events",
    link: "events",
    type: "link",
    icon: <MdEventAvailable />,
  },
  {
    title: "Finance",
    link: "finance",
    type: "link",
    icon: <FaHandHoldingUsd />,
  },
  {
    title: "Settings",
    link: "settings",
    type: "link",
    icon: <IoMdSettings />,
  },
  {
    title: "Log out",
    type: "button",
    icon: <IoIosLogOut />,
  },
];
