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
import Modal from "../../../components/Modal";
import Loading from "../../../components/Loading";

import ProfileCard from "../../../components/ProfileCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AllTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [user, setUser] = useState(false);

  const dispatch = useAppDispatch();
  const { users: teachers } = useAppSelector((state) => state.user);
  const searchValue = useAppSelector((state) => state.query);

  useEffect(() => {
    setLoading(true);
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
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, teachers]);

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    dispatch(deleteTeacher(id));
  };

  const handleEdit = (teacher) => {
    setEditMode(true);
    setUser(teacher);
    setCreateModal(true);
  };

  return (
    <Container>
      <RoleHeader
        text="Add Teacher"
        onClick={() => {
          setCreateModal(true);
        }}
      />

      <>
        {teachers
          ?.filter((val) => {
            let searchVal = searchValue?.toLowerCase();
            if (
              val.firstName.toLowerCase().startsWith(searchVal) ||
              val.middleName.toLowerCase().startsWith(searchVal) ||
              val.gender.toLowerCase().startsWith(searchVal) ||
              val.teacherStatus.toLowerCase().startsWith(searchVal) ||
              val.lastName.toLowerCase().startsWith(searchVal)
            ) {
              return val;
            }
          })
          ?.map((teacher, index) => (
            <ProfileCard
              key={index}
              user={teacher}
              onClick={() => handleEdit(teacher)}
              onDelete={() => handleDelete(teacher?._id)}
            />
          ))}
      </>

      <div>
        <ProfileCard />
      </div>
      <Modal
        isOpen={createModal}
        onClose={() => {
          setCreateModal(false);
          setEditMode(false);
        }}
        hasCloseBtn={true}
      >
        <CreateUser role="teacher" user={user} setIsCreating={setCreateModal} />
      </Modal>
    </Container>
  );
};

export default AllTeacher;
