import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AdminDisplayCard = ({ onCreate, onManage, name }) => {
  return (
    <article className="admin_d_card">
      <h1>{name}</h1>

      <ul className="manage_section">
        <li>
          <p onClick={onCreate}>Create New {name}</p>
        </li>
        <li>
          <Link to={onManage}>Manage {name} Record</Link>
        </li>
      </ul>
    </article>
  );
};

AdminDisplayCard.propTypes = {
  onCreate: PropTypes.func,
  onManage: PropTypes.string,
  name: PropTypes.string,
};

export default AdminDisplayCard;
