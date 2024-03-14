import { FaTrash } from "react-icons/fa";
import "../assets/styles.css";
import PropTypes from "prop-types";

const TeacherCard = ({
  img = "https://picsum.photos/200",
  teacher,
  onClick,
}) => {
  return (
    <div className="profile-card">
      <div className="menu" onClick={onClick}>
        <FaTrash size={20} />
      </div>
      <div className="user-image">
        <img src={img} alt="userimage" />
        <div className="profile-info">
          <center>
            <span className="profile-name">{`${teacher.firstName}  ${teacher.lastName}`}</span>
          </center>
          <center>
            <span>{`Faculty of Management`}</span>
          </center>
          <center>
            <span> {`Department of Accounting`}</span>
          </center>
        </div>
      </div>
      <div className="content">
        <table style={{ width: "100%", borderSpacing: "12px" }}>
          <tr>
            <td align="left">FirstName</td>
            <td align="right">{teacher?.firstName}</td>
          </tr>
          <tr>
            <td align="left">MiddleName</td>
            <td align="right">{teacher?.middleName}</td>
          </tr>
          <tr>
            <td align="left">LastName</td>
            <td align="right">{teacher?.lastName}</td>
          </tr>
          <tr>
            <td align="left">Gender</td>
            <td align="right">{teacher?.gender}</td>
          </tr>
          <tr>
            <td align="left">Status</td>
            <td align="right">{teacher?.teacherStatus}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

TeacherCard.propTypes = {
  img: PropTypes.string,
  teacher: PropTypes.shape({
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    teacherStatus: PropTypes.string,
  }),
};
export default TeacherCard;
