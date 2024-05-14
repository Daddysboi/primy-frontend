import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";

import {
  getAllGrades,
  getTeacherAssessmentByGrade,
  getTeacherGrades,
} from "../../../../redux/features/gradeSlice";
import { setAssessmentTitle } from "../../../../redux/features/assessmentSlice";

import Loading from "../../../../components/Loading";
import BackButton from "../../../../components/BackButton";
import AssessmentCard from "../../../../components/newComponents/AssessmentCard";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

const ResultPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const {
    isSuccess,
    isLoading: isAssessmentLoading,
    Grades,
  } = useAppSelector((state) => state.Grade);
  const {
    isSuccess: assessmentSuccess,
    isLoading: assessmentLoading,
    assessments,
  } = useAppSelector((state) => state.assessment);

  useEffect(() => {
    if (!isLoading) {
      if (user.role === "admin") {
        dispatch(getAllGrades());
      } else {
        dispatch(getTeacherGrades());
      }
    }
  }, [user, isLoading, dispatch]);

  useEffect(() => {
    if (selectedCourse !== "" && user.role !== "admin") {
      dispatch(getTeacherAssessmentByGrade(selectedCourse));
    }
  }, [selectedCourse, user]);

  if (isLoading) {
    return <Loading />;
  }

  const navigationHandler = (link, title) => {
    dispatch(setAssessmentTitle(title));
    navigate(link);
  };

  return (
    <div className="container">
      <div className="center">
        <h2>Assessment Results</h2>
      </div>
      <div className="grid-wrapper">
        <div className="container">
          <div className="d-flex">
            <BackButton />

            {user.role === "teacher" && (
              <NavLink
                to={"/dashboard/teacher/assessment/create"}
                className="btn btn-info"
              >
                <FaPlusSquare />
                Add
              </NavLink>
            )}
          </div>

          <div className="form-wrapper">
            <h4>Select a course to view assessment</h4>

            <div>
              <label htmlFor="courseId">Course:</label>
              <select
                id="courseId"
                name="courseId"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                {Grades ? (
                  Grades.map((Grade, i) => (
                    <option
                      key={i}
                      value={
                        user.role === "admin" ? Grade?._id : Grade?.Grade?._id
                      }
                    >
                      {`${
                        Grade?.GradeTittle
                          ? Grade?.GradeTittle
                          : Grade?.Grade?.GradeTittle
                      } (${
                        Grade?.GradeCode
                          ? Grade?.GradeCode
                          : Grade?.Grade?.GradeCode
                      })`}
                    </option>
                  ))
                ) : (
                  <option value="">Select a course</option>
                )}
              </select>
            </div>
          </div>
          <div>
            {isAssessmentLoading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loading />
              </div>
            ) : (
              <div className="row">
                {isSuccess && assessments
                  ? assessments.map((assessment) => (
                      <div key={assessment?._id} className="col-md-4">
                        <AssessmentCard
                          assessment={assessment}
                          isResult={true}
                          onResults={() =>
                            navigationHandler(
                              `/dashboard/${user.role}/results/${assessment?._id}`,
                              assessment?.assessmentTittle
                            )
                          }
                          onView={() =>
                            navigationHandler(
                              `/dashboard/teacher/assessment/${assessment?._id}/view-questions`,
                              assessment?.assessmentTittle
                            )
                          }
                          onAdd={() =>
                            navigationHandler(
                              `/dashboard/teacher/assessment/${assessment?._id}/add-questions`,
                              assessment?.assessmentTittle
                            )
                          }
                        />
                      </div>
                    ))
                  : selectedCourse && (
                      <div className="center">
                        <h2>No assessement found for the selected course</h2>
                      </div>
                    )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
