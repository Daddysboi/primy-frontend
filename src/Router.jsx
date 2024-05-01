import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/home/Homepage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Otp from "./pages/Otp.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Error404 from "./pages/Error404.jsx";

// Layouts
import RootLayout from "./layout/RootLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import GuardLayout from "./layout/GuardLayout.jsx";

// User Protected Routes
import AdminProtectedRoutes from "./layout/protectedRoute/AdminProtectedRoutes.jsx";
import TeacherProtectedRoutes from "./layout/protectedRoute/TeacherProtectedRoutes.jsx";
import StudentProtectedRoutes from "./layout/protectedRoute/StudentProtectedRoutes.jsx";

// Admin Routes
import AllTeacher from "./pages/dashboard/admin/AllTeachers.jsx";
import AllClasses from "./pages/dashboard/admin/AllClasses.jsx";
import AllStudents from "./pages/dashboard/admin/AllStudents.jsx";
import Events from "./pages/dashboard/admin/Events.jsx";
import Finance from "./pages/dashboard/admin/Finance.jsx";
import Settings from "./pages/dashboard/settings/Settings.jsx";
import AllTimetable from "./pages/dashboard/admin/AllTimetable.jsx";
import Assessment from "./pages/dashboard/admin/results/Assessment.jsx";
import Exams from "./pages/dashboard/admin/results/Exams.jsx";

// Teacher Routes
import MyAssessments from "./pages/dashboard/teacher/MyAssessments.jsx";
import MyTimetables from "./pages/dashboard/teacher/MyTimetables.jsx";
import MyExams from "./pages/dashboard/teacher/MyExams.jsx";
import CoursesPage from "./pages/dashboard/teacher/Class/index.jsx";
import AssessmentPage from "./pages/dashboard/teacher/Assessment/index.jsx";
import AssessmentCreate from "./pages/dashboard/teacher/Assessment/create.jsx";
import AssessmentCoursePage from "./pages/dashboard/teacher/Assessment/course.jsx";
import Students from "./pages/dashboard/teacher/Students/index.jsx";
import ResultPage from "./pages/dashboard/teacher/Results/ResultPage";
import ShowResult from "./pages/dashboard/teacher/Results/ShowResult.jsx";
import AddQuestions from "./pages/dashboard/teacher/Assessment/AddQuestions.jsx";
import ViewQuestions from "./pages/dashboard/teacher/Assessment/ViewQuestions.jsx";

// Student Routes
// import Students from "./pages/students/index.jsx";
// import StudentAssessment from "./pages/students/StudentAssessment.jsx";
// import StudentTestPage from "./pages/students/StudentTestPage.jsx";
// import StudentGradePage from "./pages/students/StudentGradePage.jsx";
// import ShowResult from "./pages/results/ShowResult.jsx";

export const router = createBrowserRouter([
  {
    element: <GuardLayout />,
    children: [
      {
        // Main
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "/terms-and-conditions",
            element: <TermsAndConditions />,
          },
        ],
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "*",
        element: <Error404 />,
      },

      // Auth
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/reset-password/:userId/:resetString",
            element: <ForgotPassword />,
          },
          {
            path: "/forgot-password",
            element: <ResetPassword />,
          },
        ],
      },

      //Dashboard
      {
        element: <DashboardLayout />,
        path: "/dashboard",
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "Events",
            element: <Events />,
          },
          {
            path: "Finance",
            element: <Finance />,
          },
          {
            path: "settings",
            element: <Settings />,
          },

          // Admin Dashboard
          {
            path: "admin",
            element: <AdminProtectedRoutes />,
            children: [
              {
                path: "students",
                element: <AllStudents />,
              },
              {
                path: "teachers",
                element: <AllTeacher />,
              },
              {
                path: "classes",
                element: <AllClasses />,
              },
              {
                path: "timetable",
                element: <AllTimetable />,
              },
              {
                path: "results",
                children: [
                  {
                    exact: true,
                    path: "exams",
                    element: <Exams />,
                  },
                  {
                    exact: true,
                    path: "assessments",
                    element: <Assessment />,
                  },
                ],
              },
            ],
          },

          // Student Dashboard
          {
            path: "student",
            element: <StudentProtectedRoutes />,
            children: [
              {
                path: "grade",
                // element: <StudentGradePage />,
              },
              {
                path: "assessment",
                // element: <StudentAssessment />,
              },
              {
                path: "assessment/:assId",
                // element: <StudentTestPage />,
              },
            ],
          },

          // Teacher Dashboard
          {
            path: "teacher",
            element: <TeacherProtectedRoutes />,
            children: [
              {
                path: "timetable",
                element: <MyTimetables />,
              },
              {
                path: "exams",
                element: <MyExams />,
              },
              {
                path: "assessments",
                element: <MyAssessments />,
              },

              {
                path: "classes",
                element: <CoursesPage />,
              },
              {
                path: "students",
                element: <Students />,
              },
              {
                path: "results/assessment",
                element: <AssessmentPage />,
              },
              {
                path: "results/exams",
                element: <ShowResult />,
              },
              {
                path: "results/:assessmentId",
                element: <ResultPage />,
              },
              {
                path: "assessment/create",
                element: <AssessmentCreate />,
              },
              {
                path: "assessment/:courseId",
                element: <AssessmentCoursePage />,
              },
              {
                path: "assessment/:assessmentId/add-questions",
                element: <AddQuestions />,
              },
              {
                path: "assessment/:assessmentId/view-questions",
                element: <ViewQuestions />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
