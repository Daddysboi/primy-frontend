import React from "react";
import Button from "../../components/Button";

import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import "../../assets/css/AdminHeader.css";

const AdminHeader = (props) => {
  return (
    <div className="admin_header">
      <div className="search_input_container">
        <div className="search_input">
          <IoSearch className="search_icon" />

          <input
            type="search"
            name="search_teacher"
            id="search_teacher"
            placeholder={`Search ${props.type}`}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </div>
      {props.btnText && (
        <div className="btn_container">
          <Button
            text={props.btnText}
            type="info"
            onClick={props.onClick}
            icon={<FaPlus />}
          />
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
