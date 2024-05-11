import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  deleteSubject,
  getAllGrades,
} from "../../../redux/features/gradeSlice";

import CreateSubject from "../../../components/CreateSubject";
import RoleHeader from "../../../components/RoleHeader";
import Loading from "../../../components/Loading";
import SideBar from "../../../components/SideBar";
import ClassList from "../../../components/ClassList";
import AssignTeacherSubject from "../../../components/AssignTeacherSubject";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
`;
const AllClasses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [editing, setEditing] = useState(false);
  const [creatingSubject, setCreatingSubject] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { grades, isLoading } = useAppSelector((state) => state.grade);

  if (isLoading) {
    // return <Loading />;
  }

  const handleEdit = (subjectId) => {
    setCreatingSubject(true);
    setEditing(true);
  };

  const handleDelete = (subjectId) => {
    dispatch(deleteSubject(subjectId))
      .unwrap()
      .then((resp) => {
        toast.success(resp?.payload?.message || "Successfully deleted");
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {
        dispatch(getAllGrades());
      });
  };

  return (
    <Container>
      <Header>
        <AssignTeacherSubject />
        <RoleHeader
          text="Add Subject"
          type="subjects"
          value={searchValue}
          onClick={() => {
            setCreatingSubject(true);
            setEditing(false);
          }}
          onChange={(e) => setSearchValue(e.target?.value)}
          edit="Edit"
          onEdit={() => handleEdit()}
          onDelete={() => handleDelete()}
          canDelete="Delete"
        />
        {/* Todo: HandleEdit and HandleDelete */}
      </Header>
      <ClassList />

      <SideBar
        isOpen={creatingSubject}
        hasCloseBtn
        onClose={() => setCreatingSubject(false)}
      >
        <CreateSubject
          editing={editing}
          user={user}
          setIsCreating={setCreatingSubject}
        />
      </SideBar>
    </Container>
  );
};

export default AllClasses;
