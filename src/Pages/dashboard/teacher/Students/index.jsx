import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getTeacherGrades } from "../../../../redux/features/gradeSlice";
import { getStudentsByGrade } from "../../../../redux/features/userSlice";

import RoleHeader from "../../../../components/RoleHeader";
import Modal from "../../../../components/Modal";
import CreateUser from "../../../../components/CreateUser";
import Loading from "../../../../components/Loading";
import StudentCard from "../../../../components/StudentCard";

const Students = () => {
  const [createModal, setCreateModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const dispatch = useAppDispatch();
  const { isLoading, isError, grades } = useAppSelector((state) => state.grade);
  const { isLoading: isStudentsLoading, users: students } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getTeacherGrades());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCourse !== "") {
        dispatch(getStudentsByGrade(selectedCourse));
      }
    };
    fetchData();
  }, [selectedCourse]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="center">
        <h2>No course assigned to this teacher</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="grid-wrapper">
        <div className="">
          <RoleHeader
            btnText="Add Student"
            type="students"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target?.value)}
            onClick={() => setCreateModal(true)}
          />

          <div className="form-wrapper">
            <h4>Select a course to view students</h4>

            <div>
              <label htmlFor="courseId">Course:</label>
              <select
                id="courseId"
                name="courseId"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                {grades ? (
                  grades.map((grade, i) => (
                    <option key={i} value={grade?.grade?._id}>
                      {`${grade?.grade?.gradeTittle} (${grade?.grade?.gradeCode})`}
                    </option>
                  ))
                ) : (
                  <option value="">Select a course</option>
                )}
              </select>
            </div>
          </div>
          <div>
            {isStudentsLoading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loading />
              </div>
            ) : (
              <div className="row">
                {students ? (
                  students
                    .filter((val) => {
                      let searchVal = searchValue.toLowerCase();
                      if (
                        val.firstName.toLowerCase().startsWith(searchVal) ||
                        val.middleName.toLowerCase().startsWith(searchVal) ||
                        val.user.email.toLowerCase().startsWith(searchVal) ||
                        val.gender.toLowerCase().startsWith(searchVal) ||
                        val.studentStatus.toLowerCase().startsWith(searchVal) ||
                        val.lastName.toLowerCase().startsWith(searchVal)
                      ) {
                        return val;
                      }
                    })
                    .map((student) => (
                      <div key={student?._id} className="col-md-4">
                        <StudentCard
                          student={student}
                          refetchStudents={fetchData}
                        />
                      </div>
                    ))
                ) : (
                  <p>{selectedCourse && "No Students Registered"}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <Modal
          isOpen={createModal}
          onClose={() => setCreateModal(false)}
          hasCloseBtn={true}
        >
          <CreateUser
            role="student"
            setIsCreating={setCreateModal}
            refetch={fetchData}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Students;
