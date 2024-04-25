import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Loading from "../../../components/Loading";
import RoleHeader from "../../../components/RoleHeader";
import SideBar from "../../../components/SideBar";
import CreateSubject from "../../../components/CreateSubject";
import {
  deleteCourse,
  getAllCourses,
} from "../../../redux/features/courseSlice";

import ClassList from "../../../components/ClassList";
import AssignTeacherSubject from "../../../components/AssignTeacherSubject";
import AppButton from "../../../components/Button";

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
  const [creatingCourse, setCreatingCourse] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { courses, isLoading } = useAppSelector((state) => state.course);

  if (isLoading) {
    // return <Loading />;
  }

  const handleEdit = (course) => {
    setCreatingCourse(true);
    setEditing(true);
  };

  const handleDelete = (course) => {
    dispatch(deleteCourse(course))
      .unwrap()
      .then((resp) => {
        toast.success(resp?.payload?.message || "Successfully deleted");
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {
        dispatch(getAllCourses());
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
          onClick={() => setCreatingCourse(true)}
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
        isOpen={creatingCourse}
        hasCloseBtn
        onClose={() => setCreatingCourse(false)}
      >
        <CreateSubject editing={editing} setIsCreating={setCreatingCourse} />
      </SideBar>
    </Container>
  );
};

export default AllClasses;
