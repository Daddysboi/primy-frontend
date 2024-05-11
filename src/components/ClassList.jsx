import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Table } from "flowbite-react";

const Container = styled.div`
  width: 90%;
`;

const TableHead = styled(Table.Head)`
  text-align: left;
`;

const TableHeadCell = styled(Table.HeadCell)`
  padding: 0.5rem;
  background-color: transparent;
`;

const TableBody = styled(Table.Body)``;

const TableRow = styled(Table.Row)`
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

const TableCell = styled(Table.Cell)`
  white-space: nowrap;
  font-weight: 500;
  padding: 0.5rem;
  &:nth-child(1) &:nth-child(2) {
    width: 10rem;
  }
  &:nth-child(3) {
    width: 40rem;
  }
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

const ClassList = ({ onSelectClass }) => {
  const [selectedClass, setSelectedClass] = useState("");

  const handleClassSelect = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);
    onSelectClass(selectedClass);
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableHeadCell>Class</TableHeadCell>
          <TableHeadCell>Class Teacher</TableHeadCell>
          <TableHeadCell>Subject Teachers</TableHeadCell>
        </TableHead>
        <TableBody>
          {Object.entries(classLists)?.map(([category, classes]) => (
            <React.Fragment key={category}>
              {classes.map((className) => (
                <TableRow key={className} onClick={handleClassSelect}>
                  <TableCell>{className}</TableCell>
                  <TableCell>{className?.classTeacher || "class"}</TableCell>
                  <TableCell>
                    {className?.subjectTeacher || "subject"}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

ClassList.propTypes = {
  onSelectClass: PropTypes.func.isRequired,
};

export default ClassList;
