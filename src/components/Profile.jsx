import "../assets/styles.css";

const Profile = ({ img = "", user }) => {
  return (
    <div className="profile-card">
      <div className="user-image">
        <img src={img} alt="userimage" />
        <div className="profile-info">
          <>
            <center>
              <span className="profile-name">
                {user?.firstName} {user?.lastName}
              </span>
            </center>
            <center>
              <span>{`Faculty of management`}</span>
            </center>
            <center>
              <span> {`Department of accounting`}</span>
            </center>
          </>
        </div>
      </div>
      <div className="content">
        <table style={{ width: "100%", borderSpacing: "12px" }}>
          <tbody>
            <>
              <tr>
                <td align="left">First Name</td>
                <td align="right">{user?.firstName}</td>
              </tr>
              <tr>
                <td align="left">Middle Name</td>
                <td align="right">{user?.middleName}</td>
              </tr>
              <tr>
                <td align="left">Last Name</td>
                <td align="right">{user?.lastName}</td>
              </tr>
              <tr>
                <td align="left">Gender</td>
                <td align="right">{user?.gender}</td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
