import styled from "styled-components";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa6";

import { useAppDispatch } from "../redux/hooks";
import { setUsers } from "../redux/features/userSlice";

import Sort from "./Sort";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-end;
  width: 70vw;
  gap: 1rem;
`;

const options = [
  { value: "class", label: "Class" },
  { value: "type", label: "Type" },
  { value: "subject", label: "Subject" },
  { value: "name", label: "Name" },
  // text === "students" && { value: "grade", label: "Grade" }, //check this
];
const RoleHeader = ({
  text,
  onClick,
  users,
  sort,
  edit,
  canDelete,
  onEdit,
  onDelete,
}) => {
  const dispatch = useAppDispatch();

  const sortUsers = (options) => {
    if (!users) return;

    // TODO: just testing.... not fully implemented
    const sortedUsers = [...users].sort((a, b) => {
      switch (options) {
        case "class":
          return a.class.localeCompare(b.class);
        case "type":
          return a.first_name.localeCompare(b.first_name);
        case "subject":
          return a.last_name.localeCompare(b.last_name);
        case "name":
          return a.name.localeCompare(b.name);
        case "grade":
          return a.grade - b.grade;
        default:
          return 0;
      }
    });
    dispatch(setUsers(sortedUsers));
  };

  return (
    <Container>
      {text && <Button text={text} onClick={onClick} icon={<FaPlus />} />}

      {edit && <Button text={edit} onClick={onEdit} icon={<FaPen />} />}

      {canDelete && (
        <Button text={canDelete} onClick={onDelete} icon={<FaTrash />} />
      )}

      {sort && <Sort options={options} onSort={sortUsers} />}
    </Container>
  );
};

export default RoleHeader;
