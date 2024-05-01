import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  getTeacherAssessmentByGrade,
  getTeacherGrades,
} from "../../../../redux/features/gradeSlice";
import {
  getTeacherDetails,
  getStudentDetails,
} from "../../../../redux/features/assessmentSlice";
import { setAssessmentTitle } from "../../../../redux/features/assessmentSlice";
import { addUser } from "../../../../redux/features/assessmentSlice";

import Loading from "../../../../components/Loading";
import BackButton from "../../../../components/BackButton";
import AssessmentCard from "../../../../components/newComponents/AssessmentCard";

const Index = () => {
  const [selectedSubject, setSelectedGrade] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const { grades, isLoading, isSuccess } = useAppSelector(
    (state) => state.grade
  );

  const fetchData = async () => {
    try {
      await dispatch(getTeacherGrades());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedSubject !== "") {
      fetchData(selectedSubject);
    }
  }, [selectedSubject]);

  const fetchAssessments = async () => {
    if (selectedSubject !== "") {
      try {
        await dispatch(getTeacherAssessmentByGrade(selectedSubject));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, [selectedSubject]);

  useEffect(() => {
    if (user) {
      if (user.role === "student") {
        dispatch(getStudentDetails()).then((resp) => {
          const data = resp.payload;
          dispatch(addUser(data));
        });
      } else if (user.role === "teacher") {
        dispatch(getTeacherDetails()).then((resp) => {
          const data = resp.payload;
          dispatch(addUser(data));
        });
      }
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  const navigationHandler = (link, title) => {
    dispatch(setAssessmentTitle(title));
    navigate(link);
  };

  return (
    <div className="grid-wrapper">
      <div className="container">
        <div className="d-flex">
          <BackButton />
          <NavLink
            to={"/dashboard/teacher/assessment/create"}
            className="btn btn-info"
          >
            <FaPlusSquare />
            Add
          </NavLink>
        </div>

        <div className="form-wrapper">
          <h4>Select a course to view assessment</h4>

          <div>
            <label htmlFor="courseId">Course:</label>
            <select
              id="courseId"
              name="courseId"
              value={selectedSubject}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">Select a course</option>
              {grades ? (
                grades.map((grade, i) => (
                  <option key={i} value={grade?._id}>
                    {`${grade?.subjectTittle} (${grade?.courseCode})`}
                  </option>
                ))
              ) : (
                <option value="">Select a course</option>
              )}
            </select>
          </div>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              {isSuccess && assessments
                ? assessments?.map((assessment) => (
                    <div key={assessment?._id} className="col-md-4">
                      <AssessmentCard
                        assessment={assessment}
                        isResult={false}
                        onView={() =>
                          navigationHandler(
                            `/dashboard/teacher/assessment/${assessment?._id}/view-questions`,
                            assessment.assessmentTittle
                          )
                        }
                        onAdd={() =>
                          navigationHandler(
                            `/dashboard/teacher/assessment/${assessment?._id}/add-questions`,
                            assessment.assessmentTittle
                          )
                        }
                      />
                    </div>
                  ))
                : selectedSubject && (
                    <div className="center">
                      <h2>No assessement found for the selected course</h2>
                    </div>
                  )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
