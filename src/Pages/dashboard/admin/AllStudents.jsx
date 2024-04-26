import { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toast } from "react-toastify";
import {
  deleteStudent,
  getAllStudents,
} from "../../../redux/features/userSlice";
import { setCreateModal } from "../../../redux/features/modalSlice";

import RoleHeader from "../../../components/RoleHeader";
import CreateUser from "../../../components/CreateUser";
import SideBar from "../../../components/SideBar";
import Loading from "../../../components/Loading";
import ProfileCard from "../../../components/ProfileCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const subjects = ["Sciences"];
const classes = ["Jss1"];

const AllStudents = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(false);

  const dispatch = useAppDispatch();
  const { users: students, isLoading: loading } = useAppSelector(
    (state) => state.user
  );
  const searchValue = useAppSelector((state) => state.query);
  const { createModal } = useAppSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getAllStudents())
      .unwrap()
      .then((resp) => {
        toast.success(
          resp?.payload?.message || "Successfully fetched students"
        );
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {});
  }, [dispatch, students]);

  if (loading) {
    return <Loading />;
  }

  const handleEdit = (teacher) => {
    dispatch(setCreateModal(true));
    setEditing(true);
    setUser(teacher);
  };

  const handleDelete = (id) => {
    dispatch(deleteTeacher(id))
      .unwrap()
      .then((resp) => {
        toast.success(resp?.payload?.message || "Successfully deleted");
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {
        dispatch(getAllTeachers());
      });
  };

  return (
    <Container>
      <RoleHeader
        text="Add Student"
        users={students}
        sort
        onClick={() => {
          dispatch(setCreateModal(true));
        }}
      />

      <>
        {students
          ?.filter((val) => {
            let searchVal = searchValue?.toLowerCase();
            if (!searchVal) return true;
            return (
              val.firstName.toLowerCase().startsWith(searchVal) ||
              val.middleName.toLowerCase().startsWith(searchVal) ||
              val.gender.toLowerCase().startsWith(searchVal) ||
              val.studentStatus.toLowerCase().startsWith(searchVal) ||
              val.lastName.toLowerCase().startsWith(searchVal)
            );
          })
          ?.map((student, index) => (
            <ProfileCard
              student
              role="Student"
              header1="SUBJECTS"
              header2="CLASS"
              options1={subjects}
              options2={classes}
              name={student.name}
              key={index}
              user={student}
              onEdit={() => handleEdit(student)}
              onDelete={() => handleDelete(student?._id)}
            />
          ))}
      </>

      {/* sample profilecard: to be removed*/}
      <>
        <ProfileCard
          options1={subjects}
          options2={classes}
          name="Musa Haruna"
          student
          role="Student"
          header1="SUBJECTS"
          header2="CLASSES"
          users=""
          onEdit={() => handleEdit()}
          onDelete={() => handleDelete(id)}
        />
      </>

      <SideBar
        isOpen={createModal}
        onClose={() => {
          dispatch(setCreateModal(false));
          setEditModal(false);
        }}
        hasCloseBtn={true}
      >
        <CreateUser
          editing={editing}
          role="student"
          user={user}
          setIsCreating={createModal}
        />
      </SideBar>
    </Container>
  );
};

export default AllStudents;
