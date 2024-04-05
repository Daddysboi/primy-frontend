import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { primaryColors } from "../assets/Colors";

const Table = styled.table`
  width: 100%;
  text-align: left;
`;

const Tr = styled.tr`
  display: flex;
  justify-content: start;
`;

const Th = styled.th`
  flex: 1;
  text-align: left;
`;

const Th2 = styled.th`
  flex: 3;
  text-align: left;
`;

const Td = styled.td`
  border-bottom: 1px solid #ccc;
`;

const Header = styled.h1`
  font-size: 1rem;
`;

const Optgroup = styled.optgroup`
  font-size: 0.5rem;
  color: #ccc;
  margin-top: 1rem;
`;

const Li = styled.li`
  font-size: 0.8rem;
  color: #000;
  padding-top: 0.3rem;
  height: 1.5rem;
`;

export const classLists = {
  "pre nursery": ["Kindergarten", "Pre Nursery", "Nursery 1", "Nursery 2"],
  primary: [
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
  ],
  "Junior secondary": ["JSS1", "JSS2", "JSS3"],
  "Senior secondary": ["SS1", "SS2", "SS3"],
};

const ClassSelection = ({ onSelectClass }) => {
  const [selectedClass, setSelectedClass] = useState("");

  const handleClassSelect = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);
    onSelectClass(selectedClass);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Class Teacher</th>
            <th>Subject Teachers</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(classLists)?.map(([category, classes]) => (
            <React.Fragment key={category}>
              {classes.map((className) => (
                <tr key={className} onClick={handleClassSelect}>
                  <td>{className}</td>
                  <td>{className?.classTeacher || "class"}</td>
                  <td>{className?.subjectTeacher || "subject"}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

ClassSelection.propTypes = {
  onSelectClass: PropTypes.func.isRequired,
};

export default ClassSelection;
