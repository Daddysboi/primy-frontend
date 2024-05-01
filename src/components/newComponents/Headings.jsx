import React from "react";
import "../../assets/css/heading.css";

const Headings = ({ head, subhead }) => {
  return (
    <div className="heading_comp">
      <h1 className="heading_title">{head}</h1>
      {subhead && <h5 className="heading_subtitle">{subhead}</h5>}
    </div>
  );
};

export default Headings;
