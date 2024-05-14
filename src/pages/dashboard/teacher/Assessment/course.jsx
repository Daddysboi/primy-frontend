import { useNavigate, useParams } from "react-router-dom";

import {
  getAssessmentByGrade,
  getTeacherAssessmentByGrade,
} from "../../../../redux/features/gradeSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import Loading from "../../../../components/Loading";
import AssessmentCard from "../../../../components/newComponents/AssessmentCard";
import BackButton from "../../../../components/BackButton";

const Course = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const {
    grades: assessments,
    isLoading,
    isSuccess,
  } = useAppSelector((state) => state.grade);

  let { courseId } = useParams();

  if (user) {
    if (user.role === "teacher") {
      dispatch(getTeacherAssessmentByGrade(subjectId));
    }

    if (user.role === "admin") {
      dispatch(getAssessmentByGrade(subjectId));
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  const navigationHandler = (link, title) => {
    dispatch(assessmentTittle(title));
    navigate(link);
  };

  if (isSuccess) {
    return (
      <div className="container">
        <BackButton />

        <div className="grid-wrapper">
          <div className="container">
            <div className="row">
              {assessments ? (
                assessments?.map((assessment) => (
                  <div key={assessment?._id} className="col-md-4">
                    <AssessmentCard
                      assessment={assessment}
                      isResult={false}
                      onView={() =>
                        user && user.role === "admin"
                          ? navigationHandler(
                              `/dashboard/admin/courses/${assessment?._id}/view-questions`,
                              assessment.assessmentTittle
                            )
                          : navigationHandler(
                              `/dashboard/teacher/assessment/${assessment?._id}/view-questions`,
                              assessment.assessmentTittle
                            )
                      }
                      onAdd={() =>
                        user && user.role === "admin"
                          ? navigationHandler(
                              `/dashboard/admin/courses/${assessment?._id}/add-questions`,
                              assessment.assessmentTittle
                            )
                          : navigationHandler(
                              `/dashboard/teacher/assessment/${assessment?._id}/add-questions`,
                              assessment.assessmentTittle
                            )
                      }
                    />
                  </div>
                ))
              ) : (
                <p>No Assigned Course</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <BackButton />

        <div className="center">
          <h3>No assessment for the selected course</h3>
        </div>
      </div>
    );
  }
};

export default Course;
