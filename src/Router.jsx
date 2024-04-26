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

//Layouts
import RootLayout from "./layout/RootLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import GuardLayout from "./layout/GuardLayout.jsx";

//Protected Routes
import AdminProtectedRoutes from "./layout/protectedRoute/AdminProtectedRoutes.jsx";
import TeacherProtectedRoutes from "./layout/protectedRoute/TeacherProtectedRoutes.jsx";
import StudentProtectedRoutes from "./layout/protectedRoute/StudentProtectedRoutes.jsx";

// Admin routes
import AllTeacher from "./pages/dashboard/admin/AllTeachers.jsx";
import AllClasses from "./pages/dashboard/admin/AllClasses.jsx";
import AllStudents from "./pages/dashboard/admin/AllStudents.jsx";
import Events from "./pages/dashboard/admin/Events.jsx";
import Finance from "./pages/dashboard/admin/Finance.jsx";
import Settings from "./pages/dashboard/settings/Settings.jsx";
import AllTimetable from "./pages/dashboard/admin/AllTimetable.jsx";
import Assessment from "./pages/dashboard/admin/results/Assessment.jsx";
import Exams from "./pages/dashboard/admin/results/Exams.jsx";

//Teacher Routes
import MyClass from "./pages/dashboard/teacher/MyClasses.jsx";
import MyAssessments from "./pages/dashboard/teacher/MyAssessments.jsx";
import MyStudents from "./pages/dashboard/teacher/MyStudents.jsx";
import MyTimetables from "./pages/dashboard/teacher/MyTimetables.jsx";
import MyExams from "./pages/dashboard/teacher/MyExams.jsx";

// import CoursesPage from "./pages/course/index.jsx";

// Assesment
// import AssessmentPage from "./pages/assessment/index.jsx";
// import AssessmentCreate from "./pages/assessment/create.jsx";
// import AssessmentCoursePage from "./pages/assessment/course.jsx";
// import AddQuestions from "./pages/assessment/AddQuestions.jsx";
// import ViewQuestions from "./pages/assessment/ViewQuestions.jsx";

// Students
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
                path: "classes",
                element: <MyClass />,
              },

              {
                path: "students",
                element: <MyStudents />,
              },
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
                path: "results/:assessmentId",
                // element: <ShowResult />,
              },
              {
                path: "assessment/create",
                // element: <AssessmentCreate />,
              },
              {
                path: "assessment/:courseId",
                // element: <AssessmentCoursePage />,
              },
              {
                path: "assessment/:assessmentId/add-questions",
                // element: <AddQuestions />,
              },
              {
                path: "assessment/:assessmentId/view-questions",
                // element: <ViewQuestions />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
