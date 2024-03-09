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
    link: "students/assessment",
    type: "link",
  },
  {
    title: "Grades",
    link: "students/grade",
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
    title: "My Dashboard",
    link: "dashboard",
    type: "link",
  },
  {
    title: "My Courses",
    link: "teacher/courses",
    type: "link",
  },
  {
    title: "My Assessments",
    link: "teacher/assessment",
    type: "link",
  },
  {
    title: "My Students",
    link: "teacher/students",
    type: "link",
  },
  {
    title: "Results",
    link: "teacher/results",
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
    title: "Courses",
    link: "admin/courses",
    type: "link",
    icon: <FaBookOpen />,
  },
  {
    title: "Results",
    link: "admin/results",
    type: "link",
    icon: <PiExamBold />,
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