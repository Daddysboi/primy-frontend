import PropTypes from "prop-types";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../redux/hooks";

import CreateUser from "./CreateUser";
import Modal from "./Modal";
import ClickOutside from "./ClickOutside";
import { deleteStudent } from "../redux/features/userSlice";

import "../assets/styles.css";

const StudentCard = ({
  img = "https://picsum.photos/200",
  student,
  onClick,
  onDelete,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    const res = await dispatch(deleteStudent(student?._id));
    student = res?.payload;
    console.log("dats:", student);
    // Todo: Remember to get the student out of the response shape, get the user and store as student
  };

  return (
    <>
      <div>
        <div>
          <BsThreeDotsVertical size={24} onClick={() => handleMenuClick()} />
        </div>
        <ClickOutside
          show={isMenuOpen}
          onClickOutside={() => setIsMenuOpen(false)}
        >
          <ul className="menu-list">
            {/* Add your menu items here */}
            <li className="menu-item" onClick={() => setIsEditing(true)}>
              Edit
            </li>
            <li className="menu-item" onClick={handleDelete}>
              Delete
            </li>
          </ul>
        </ClickOutside>
        <div className="user-image" onClick={() => setIsMenuOpen(false)}>
          <img src={img} alt="userimage" />
          <div className="profile-info">
            <center>
              <span className="profile-name">{`${student?.firstName}  ${student?.lastName}`}</span>
            </center>
            <center>
              <span>{`Faculty of Management`}</span>
            </center>
            <center>
              <span> {`Department of Accounting`}</span>
            </center>
          </div>
        </div>
        <div className="content" onClick={() => setIsMenuOpen(false)}>
          <table style={{ width: "100%", borderSpacing: "12px" }}>
            <tr>
              <td align="left">FirstName</td>
              <td align="right">{student?.firstName}</td>
            </tr>
            <tr>
              <td align="left">MiddleName</td>
              <td align="right">{student?.middleName}</td>
            </tr>
            <tr>
              <td align="left">LastName</td>
              <td align="right">{student?.lastName}</td>
            </tr>
            <tr>
              <td align="left">Email</td>
              <td align="right">{student?.user.email}</td>
            </tr>
            <tr>
              <td align="left">Gender</td>
              <td align="right">{student?.gender}</td>
            </tr>
            <tr>
              <td align="left">Status</td>
              <td align="right">{student?.studentStatus}</td>
            </tr>
          </table>
        </div>
      </div>
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        hasCloseBtn={true}
      >
        <CreateUser
          editing={true}
          role="student"
          setIsCreating={setIsEditing}
          user={student}
          refetch={() => refetchStudents}
        />
      </Modal>
    </>
  );
};

StudentCard.propTypes = {
  img: PropTypes.string,
  student: PropTypes.shape({
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    studentStatus: PropTypes.string,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
  refetchStudents: PropTypes.func,
};
export default StudentCard;
