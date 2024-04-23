import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

import Sort from "./Sort";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 70vw;
`;

const RoleHeader = ({ text, onClick, Users }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (Users) {
      setUsers(Users);
    }
  }, [Users]);

  const sortUsers = (options) => {
    if (!users) return;

    const sortedUsers = [...users].sort((a, b) => {
      switch (options.value) {
        case "class":
          return a.class.localeCompare(b.class);
        case "type":
          return a.type.localeCompare(b.type);
        case "subject":
          return a.subject.localeCompare(b.subject);
        case "name":
          return a.name.localeCompare(b.name);
        case "grade":
          return a.grade - b.grade;
        default:
          return 0;
      }
    });
    setUsers(sortedUsers);
  };

  const options = [
    { value: "class", label: "Class" },
    { value: "type", label: "Type" },
    { value: "subject", label: "Subject" },
    { value: "name", label: "Name" },
    text === "students" && { value: "grade", label: "Grade" }, //check this
  ];

  return (
    <Container>
      {text && (
        <>
          <Button text={text} onClick={onClick} icon={<FaPlus />} />
          <Sort options={options} onSort={sortUsers} />
        </>
      )}
    </Container>
  );
};

export default RoleHeader;
