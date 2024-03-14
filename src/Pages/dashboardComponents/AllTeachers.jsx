import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "react-toastify";

import AdminHeader from "../../components/AdminHeader";
import "../../assets/AllTeacher.css";
import { useEffect, useState } from "react";
import CreateUser from "../../components/CreateUser";
import Modal from "../../components/Modal";
import { deleteTeacher, getAllTeachers } from "../../redux/features/userSlice";
import TeacherCard from "../../components/TeacherCard";
import Loading from "../../components/Loading";

import Profile from "../../components/Profile";
import StudentCard from "../../components/StudentCard";

// import teachers from "../../data/teachers.json";

const AllTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [createModal, setCreateModal] = useState(false);

  const dispatch = useAppDispatch();
  const { users: teachers } = useAppSelector((state) => state.user);

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
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    dispatch(deleteTeacher(id));
  };

  return (
    <div className="admin_teacher">
      <AdminHeader
        btnText="Add Teacher"
        type="teachers"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target?.value)}
        onClick={() => setCreateModal(true)}
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
              onClick={() => handleDelete(teacher?._id)}
            />
          ))}
      </div>
      {!teachers && (
        <div className="center">
          <h3>No Assigned Course</h3>
        </div>
      )}

      <Modal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        hasCloseBtn={true}
      >
        <CreateUser role="teacher" setIsCreating={setCreateModal} />
      </Modal>
    </div>
  );
};

export default AllTeacher;
