import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { assignTeacher } from "../redux/features/gradeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteTeacher, getAllTeachers } from "../redux/features/userSlice";

import Button from "./Button";
import AppSelectInput from "./SelectInput";
import courseList from "../data/courseList.json";
import classList from "../data/classList.json";
import Loading from "./Loading";
import { primaryColors } from "../assets/Colors";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
`;

const Heading = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const Subhead = styled.p`
  font-size: 0.7rem;
  margin-bottom: 1rem;
`;

const FieldSelect = styled(Field)`
  width: ${(props) => props.width || "100%"};
  min-height: 35px;
  min-width: 5rem;
  height: ${(props) => props.height || "35px"};
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.borderColor || primaryColors.LightPurple};
  outline: none;
  background: transparent;
  font-size: 0.8rem;

  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const Option = styled.option`
  font-size: 13px;
  opacity: 0.5;
`;

const AssignTeacherSubject = () => {
  const initialState = {
    subject: "",
    class: "",
    teacherId: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [selectedClass, setSelectedClass] = useState("");

  const dispatch = useAppDispatch();
  const { users: teachers } = useAppSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "class") {
      setSelectedClass(value);
      setFormData((prevData) => ({ ...prevData, subject: "" }));
    }
  };
  let options =
    selectedClass && courseList[selectedClass] !== "Select"
      ? courseList[selectedClass]
      : [];

  const isJSSorSSClass = (className) => {
    return className.startsWith("JSS") || className.startsWith("SS");
  };

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
  const initialValues = {
    courseTittle: "",
    courseCode: "",
    courseStatus: "",
  };
  const validationSchema = Yup.object();
  const onSubmit = (e) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <Subhead>Please Assign Teachers to Classes and Subjects</Subhead>
        </div>

        <Container>
          <Field
            select="Class..."
            name="class"
            as={AppSelectInput}
            options={classList}
            required={true}
            onChange={handleChange}
          />

          {selectedClass && isJSSorSSClass(selectedClass) && (
            <Field
              select="Subject"
              name="subject"
              value={formData.subject}
              options={options}
              as={AppSelectInput}
              required={true}
              onChange={handleChange}
            />
          )}

          <div>
            <FieldSelect
              name="teacherId"
              as="select"
              required
              onChange={handleChange}
            >
              <Option value={formData.teacherId}>Teacher...</Option>
              {teachers &&
                teachers.map((teacher) => (
                  <Option key={teacher?._id} value={teacher?._id}>
                    {`${teacher?.firstName} ${teacher?.middleName} ${teacher?.lastName}`}
                  </Option>
                ))}
            </FieldSelect>
          </div>

          <Button disabled={loading} text={`Assign`} />
        </Container>
      </Form>
    </Formik>
  );
};

AssignTeacherSubject.propTypes = {
  setIsAssigning: PropTypes.func,
};

export default AssignTeacherSubject;
