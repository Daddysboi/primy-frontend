import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "react-toastify";
import { deleteTeacher, getAllTeachers } from "../../redux/features/userSlice";

import AdminHeader from "../../components/AdminHeader";
import CreateUser from "../../components/CreateUser";
import Modal from "../../components/Modal";
import TeacherCard from "../../components/TeacherCard";
import Loading from "../../components/Loading";

import Profile from "../../components/Profile";

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
    <div className="admin_teacher">
      <AdminHeader
        text="Add Teacher"
        type="teachers"
        onClick={() => {
          setCreateModal(true);
        }}
      />

      <div className="teachers_grid">
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
            <TeacherCard
              key={index}
              teacher={teacher}
              onClick={() => handleEdit(teacher)}
              onDelete={() => handleDelete(teacher?._id)}
            />
          ))}
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
    </div>
  );
};

export default AllTeacher;
