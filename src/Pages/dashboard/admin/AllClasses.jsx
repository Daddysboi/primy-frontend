import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Loading from "../../../components/Loading";
import RoleHeader from "../../../components/RoleHeader";
import CourseCard from "../../../components/SubjectCard";
import Modal from "../../../components/Modal";
import CreateSubject from "../../../components/CreateSubject";

import ClassList from "../../../components/ClassList";
import AssignTeacherSubject from "../../../components/AssignTeacherSubject";

import { deleteCourse, getAllCourses } from "../../../services/courseService";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const AllClasses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [creatingCourse, setCreatingCourse] = useState(false);

  const navigate = useNavigate();

  const {
    data: subject,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
  });

  if (isLoading) {
    // return <Loading />;
  }

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
        />
      </Header>
      <ClassList />

      <>
        {subject
          ?.filter((val) => {
            let searchVal = searchValue.toLowerCase();
            if (val.subject.toLowerCase().startsWith(searchVal)) {
              return val;
            }
          })
          ?.map((subject, index) => (
            <CourseCard
              key={index}
              subject={subject}
              onClick={() => navigate(`assessment/classes/${subject}`)}
              onDelete={() => {}}
            />
          ))}
      </>
      <Modal
        isOpen={creatingCourse}
        hasCloseBtn
        onClose={() => setCreatingCourse(false)}
      >
        <CreateSubject setIsCreating={setCreatingCourse} />
      </Modal>
    </Container>
  );
};

export default AllClasses;
