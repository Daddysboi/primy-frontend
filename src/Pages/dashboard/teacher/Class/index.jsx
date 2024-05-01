import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getTeacherGrades } from "../../../../redux/features/gradeSlice";

import BackButton from "../../../../components/BackButton";
import Loading from "../../../../components/Loading";
import TeacherCourseCard from "../../../../components/newComponents/TeacherCourseCard";

const Index = () => {
  const dispatch = useAppDispatch();
  const { grades, isLoading } = useAppSelector((state) => state.grade);

  useEffect(() => {
    dispatch(getTeacherGrades());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="spacing-wrapper mb-2">
        <BackButton />
      </div>

      <div className="grid-wrapper">
        <div className="container">
          <div className="row">
            {grades ? (
              grades?.map((grade) => (
                <div key={grade?._id} className="col-md-4">
                  <TeacherCourseCard
                    courseName={grade?.courseTittle}
                    courseTitle={grade?.courseCode}
                    courseId={grade?._id}
                  />
                </div>
              ))
            ) : (
              <div className="center">
                <h3>No Assigned Class</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
