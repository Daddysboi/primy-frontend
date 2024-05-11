import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "../../assets/CourseCard.css";

const TeacherCourseCard = ({ courseName, courseTitle, courseId }) => {
  return (
    <div className="course-card">
      <h3>{courseName}</h3>
      <p>{courseTitle}</p>
      <NavLink
        className="btn btn-info"
        to={`/dashboard/teacher/assessment/${courseId}`}
      >
        View Assessments
      </NavLink>
    </div>
  );
};

TeacherCourseCard.propTypes = {
  courseName: PropTypes.string,
  courseTitle: PropTypes.string,
  courseId: PropTypes.string,
};

export default TeacherCourseCard;
