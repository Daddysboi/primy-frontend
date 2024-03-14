import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";
import AdminHeader from "../../components/AdminHeader";
import { deleteCourse, getAllCourses } from "../../services/courseService";
import CourseCard from "../../components/CourseCard";
import Modal from "../../components/Modal";
import CreateCourse from "../../components/CreateCourse";
import "../../assets/AllCourses.css";

import ClassList from "../../components/ClassList";
import AssignTeacherCourse from "../../components/AssignTeacherCourse";

const AllClasses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [creatingCourse, setCreatingCourse] = useState(false);

  const navigate = useNavigate();

  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
  });

  // if (isLoading) {
  //   return <Loading />;
  // }

  const deleteCourseById = async (id) => {
    await deleteCourse(id);
    refetch();
  };

  return (
    <div className="admin_courses">
      <ClassList />
      <AssignTeacherCourse />
      <AdminHeader
        btnText="Add Course"
        type="courses"
        value={searchValue}
        onClick={() => setCreatingCourse(true)}
        onChange={(e) => setSearchValue(e.target?.value)}
      />

      <div className="courses_grid">
        {courses
          ?.filter((val) => {
            let searchVal = searchValue.toLowerCase();
            if (
              val.courseTittle.toLowerCase().startsWith(searchVal) ||
              val.courseCode.toLowerCase().startsWith(searchVal)
            ) {
              return val;
            }
          })
          ?.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onClick={() => navigate(`assessment/${course?._id}`)}
              onDelete={() => deleteCourseById(course?._id)}
            />
          ))}
      </div>
      <Modal
        isOpen={creatingCourse}
        hasCloseBtn
        onClose={() => setCreatingCourse(false)}
      >
        <CreateCourse setIsCreating={setCreatingCourse} />
      </Modal>
    </div>
  );
};

export default AllClasses;
