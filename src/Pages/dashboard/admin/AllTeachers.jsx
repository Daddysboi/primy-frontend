import { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toast } from "react-toastify";
import {
  deleteTeacher,
  getAllTeachers,
} from "../../../redux/features/userSlice";

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

const subjects = ["Mathematics", "Biology"];
const classes = ["Jss 1", "Jss 2"];

const AllTeacher = () => {
  const [createModal, setCreateModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(false);

  const dispatch = useAppDispatch();
  const { users: teachers, isLoading } = useAppSelector((state) => state.user);
  const searchValue = useAppSelector((state) => state.query);

  useEffect(() => {
    dispatch(getAllTeachers())
      .unwrap()
      .then((resp) => {
        toast.success(
          resp?.payload?.message || "Successfully fetched teachers"
        );
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {});
  }, [dispatch, teachers]);

  if (isLoading) {
    return <Loading />;
  }

  const handleEdit = (teacher) => {
    setCreateModal(true);
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
        text="Add Teacher"
        users={teachers}
        sort
        onClick={() => {
          setCreateModal(true);
        }}
      />
      <>
        {teachers
          ?.filter((val) => {
            let searchVal = searchValue?.toLowerCase();
            if (!searchVal) return true;
            return (
              val.firstName.toLowerCase().startsWith(searchVal) ||
              val.middleName.toLowerCase().startsWith(searchVal) ||
              val.gender.toLowerCase().startsWith(searchVal) ||
              val.teacherStatus.toLowerCase().startsWith(searchVal) ||
              val.lastName.toLowerCase().startsWith(searchVal)
            );
          })
          ?.map((teacher, index) => (
            <ProfileCard
              role="Teacher"
              header1="SUBJECTS"
              header2="CLASSES"
              options1={subjects}
              options2={classes}
              name={teacher.name}
              key={index}
              user={teacher}
              onEdit={() => handleEdit(teacher)}
              onDelete={() => handleDelete(teacher?._id)}
            />
          ))}
      </>

      {/* sample profilecard: to be remover */}
      <>
        <ProfileCard
          role="Teacher"
          header1="SUBJECTS"
          header2="CLASSES"
          options1={subjects}
          options2={classes}
          name="Magdalene Linus"
          users=""
          onEdit={() => handleEdit()}
          onDelete={() => handleDelete(id)}
        />
      </>
      <SideBar
        isOpen={createModal}
        onClose={() => {
          setCreateModal(false);
          setEditing(false);
        }}
        hasCloseBtn={true}
      >
        <CreateUser
          editing={editing}
          role="teacher"
          user={user}
          setIsCreating={setCreateModal}
        />
      </SideBar>
    </Container>
  );
};

export default AllTeacher;
