import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "react-toastify";
import { deleteStudent, getAllStudents } from "../../redux/features/userSlice";

import AdminHeader from "../../components/AdminHeader";
import CreateUser from "../../components/CreateUser";
import Modal from "../../components/Modal";
import StudentCard from "../../components/StudentCard";
import Loading from "../../components/Loading";

import Profile from "../../components/Profile";

const AllStudents = () => {
  const [loading, setLoading] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [user, setUser] = useState(false);

  const dispatch = useAppDispatch();
  const { users: students } = useAppSelector((state) => state.user);
  const searchValue = useAppSelector((state) => state.query);

  useEffect(() => {
    setLoading(true);
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
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, students]);

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <AdminHeader
        text="Add Student"
        type="students"
        onClick={() => {
          setCreateModal(true);
        }}
      />

      <div>
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
            <StudentCard
              key={index}
              student={student}
              onClick={() => handleEdit(student)}
              onDelete={() => handleDelete(student?._id)}
            />
          ))}
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
    </div>
  );
};

export default AllStudents;
