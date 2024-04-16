import { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toast } from "react-toastify";
import {
  deleteStudent,
  getAllStudents,
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

const AllStudents = () => {
  const [createModal, setCreateModal] = useState(false);
  const [user, setUser] = useState(false);

  const dispatch = useAppDispatch();
  const { users: students, isLoading: loading } = useAppSelector(
    (state) => state.user
  );
  const searchValue = useAppSelector((state) => state.query);

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
      });
  }, [dispatch, students]);

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <Container>
      <RoleHeader
        text="Add Student"
        onClick={() => {
          setCreateModal(true);
        }}
      />

      <>
        {students
          ?.filter((val) => {
            let searchVal = searchValue?.toLowerCase();
            if (
              val.firstName.toLowerCase().startsWith(searchVal) ||
              val.middleName.toLowerCase().startsWith(searchVal) ||
              val.gender.toLowerCase().startsWith(searchVal) ||
              val.studentStatus.toLowerCase().startsWith(searchVal) ||
              val.lastName.toLowerCase().startsWith(searchVal)
            ) {
              return val;
            }
          })
          ?.map((student, index) => (
            <ProfileCard
              key={index}
              student={student}
              onClick={() => handleEdit(student)}
              onDelete={() => handleDelete(student?._id)}
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
        }}
        hasCloseBtn={true}
      >
        <CreateUser role="student" user={user} setIsCreating={setCreateModal} />
      </Modal>
    </Container>
  );
};

export default AllStudents;
