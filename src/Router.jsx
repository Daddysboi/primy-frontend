import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Otp from "./pages/Otp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
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

// import AdminProtectedRoutes from "./pages/protectedRoute/AdminProtectedRoutes.jsx";
// import AllTeacher from "./pages/allTeacher.jsx";
// import AllCourses from "./pages/allCourses.jsx";
// import CoursesPage from "./pages/course/index.jsx";

// Assesment
// import AssessmentPage from "./pages/assessment/index.jsx";
// import AssessmentCreate from "./pages/assessment/create.jsx";
// import AssessmentCoursePage from "./pages/assessment/course.jsx";
// import AddQuestions from "./pages/assessment/AddQuestions.jsx";
// import ViewQuestions from "./pages/assessment/ViewQuestions.jsx";
// import ResultPage from "./pages/results/resultPage";

// Students
// import Students from "./pages/students/index.jsx";
// import StudentAssessment from "./pages/students/StudentAssessment.jsx";
// import StudentTestPage from "./pages/students/StudentTestPage.jsx";
// import StudentGradePage from "./pages/students/StudentGradePage.jsx";
// import ShowResult from "./pages/results/ShowResult.jsx";
// import TeacherProtectedRoute from "./pages/protectedRoute/TeacherProtectedRoute.jsx";

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

          // Admin Dashboard
          {
            path: "admin",
            // element: <AdminProtectedRoutes />,
            children: [
              {
                path: "teachers",
                // element: <AllTeacher />,
              },
              {
                path: "courses",
                // element: <AllCourses />,
              },
              {
                path: "courses/assessment/:courseId",
                // element: <AssessmentCoursePage />,
              },
              {
                path: "courses/:assessmentId/add-questions",
                // element: <AddQuestions />,
              },
              {
                path: "courses/:assessmentId/view-questions",
                // element: <ViewQuestions />,
              },
              {
                path: "results",
                // element: <ResultPage />,
              },
              {
                path: "results/:assessmentId",
                // element: <ShowResult />,
              },
            ],
          },

          // Student Dashboard
          {
            path: "students",
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
            // element: <TeacherProtectedRoute />,
            children: [
              {
                path: "courses",
                // element: <CoursesPage />,
              },
              {
                path: "assessment",
                // element: <AssessmentPage />,
              },
              {
                path: "students",
                // element: <Students />,
              },
              {
                path: "results",
                // element: <ResultPage />,
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

const Router = () => {
  return <Router.Provider router={router} />;
};

export default Router;