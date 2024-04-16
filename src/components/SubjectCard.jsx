import { useState } from "react";
import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";

import "../assets/CourseCard.css";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import Createsubject from "./CreateSubject.jsx";
import ClickOutside from "./ClickOutside.jsx";
import AssignTeacherSubject from "./AssignTeacherSubject.jsx";

const subjectCard = ({ subject, onClick, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <div>
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
        <h3>{subject?.subjectTittle}</h3>
        <p>{subject?.subjectCode}</p>
        <Button text="View Assessments" onClick={onClick} />
      </div>
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        hasCloseBtn={true}
      >
        <Createsubject
          editing={true}
          setIsCreating={setIsEditing}
          subject={subject}
        />
      </Modal>
      <Modal
        isOpen={isAssigning}
        onClose={() => setIsAssigning(false)}
        hasCloseBtn={true}
      >
        <AssignTeacherSubject
          subjectId={subject?._id}
          setIsAssigning={setIsAssigning}
          subjectName={subject?.subjectTittle}
        />
      </Modal>
    </>
  );
};

subjectCard.propTypes = {
  subject: PropTypes.shape({
    _id: PropTypes.string,
    subjectTittle: PropTypes.string,
    subjectCode: PropTypes.string,
    subjectStatus: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

export default subjectCard;
