import Button from "../../../../educativ/educativ-frontend/src/components/Button.jsx";
import PropTypes from "prop-types";
import "../assets/css/CourseCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Modal from "../../../../educativ/educativ-frontend/src/components/Modal.jsx";
import CreateCourse from "./CreateCourse.jsx";
import ClickOutside from "../../../../educativ/educativ-frontend/src/components/ClickOutside.jsx";
import AssignTeacherCourse from "../../../../educativ/educativ-frontend/src/components/AssignTeacherCourse.jsx";

const CourseCard = ({ course, onClick, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="course-card">
        <div className="menu">
          <BsThreeDotsVertical size={20} onClick={() => handleMenuClick()} />
        </div>

        <ClickOutside
          show={isMenuOpen}
          onClickOutside={() => setIsMenuOpen(false)}
        >
          <ul className="menu-list">
            {/* Add your menu items here */}
            <li className="menu-item" onClick={() => setIsAssigning(true)}>
              Assign Teacher
            </li>
            <li className="menu-item" onClick={() => setIsEditing(true)}>
              Edit
            </li>
            <li className="menu-item" onClick={onDelete}>
              Delete
            </li>
          </ul>
        </ClickOutside>
        <h3>{course?.courseTittle}</h3>
        <p>{course?.courseCode}</p>
        <Button text="View Assessments" onClick={onClick} />
      </div>
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        hasCloseBtn={true}
      >
        <CreateCourse
          editing={true}
          setIsCreating={setIsEditing}
          course={course}
        />
      </Modal>
      <Modal
        isOpen={isAssigning}
        onClose={() => setIsAssigning(false)}
        hasCloseBtn={true}
      >
        <AssignTeacherCourse
          courseId={course?._id}
          setIsAssigning={setIsAssigning}
          courseName={course?.courseTittle}
        />
      </Modal>
    </>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string,
    courseTittle: PropTypes.string,
    courseCode: PropTypes.string,
    courseStatus: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CourseCard;
