import PropTypes from "prop-types";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createEditCourse } from "../redux/features/courseSlice";

import Button from "./Button";
import AppInput from "./Input";
import AppSelectInput from "./SelectInput";
import ErrorRed from "./Error";
import Loading from "./Loading";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { primaryColors } from "../assets/Colors";

import classList from "../data/classList.json";

const Header = styled.h1`
  margin-bottom: 1rem;
`;

const Multiple = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Bottom = styled.div`
  margin-top: 1rem;
`;

const Trash = styled(FaTrash)`
  margin-top: 1rem;
  font-size: 0.7rem;
  color: red;
  &:hover {
    color: #a6aabc;
    padding-top: 0.1rem;
  }
`;

const CreateSubject = ({
  setIsCreating,
  editing = false,
  course = undefined,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.course);

  const initialValues = {
    subjectTitle: "",
    classes: [""],
  };

  if (course !== undefined) {
    initialValues.subjectTitle = course?.subjectTitle;
    initialValues.classes = course.classes || [""];
  }

  const validationSchema = Yup.object().shape({
    subjectTitle: Yup.string().required("Subject Title is required"),
    classes: Yup.array().min(1, "At least one class is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);

    let data = {
      subjectTitle: values.subjectTitle,
      classes: values.classes,
    };

    dispatch(createEditCourse(data, editing))
      .unwrap()
      .then((res) => {
        toast.success(res?.payload?.message || "Successfull " + course);
        resetForm();
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <Header> {editing ? "Update" : "Create"} Subject</Header>
          <>
            <Field
              as={AppInput}
              label="Subject Title"
              name="subjectTitle"
              placeholder="Subject Title"
              type="text"
              height="2.2rem"
            />
            <ErrorMessage name="subjectTitle" component={ErrorRed} />
          </>
          <FieldArray name="classes">
            {({ push, remove }) => (
              <>
                {values.classes.map((_, index) => (
                  <Multiple key={index}>
                    <Field
                      name={`classes.${index}`}
                      as={AppSelectInput}
                      label={index === 0 ? "Classes" : ""}
                      type="select"
                      options={classList}
                      required={true}
                      width="100%"
                    />
                    {index !== 0 && <Trash onClick={() => remove(index)} />}
                    <ErrorMessage
                      name={`classes.${index}`}
                      component={ErrorRed}
                    />
                  </Multiple>
                ))}

                <Bottom>
                  <Button
                    text="Select classes"
                    icon={<FaPlus />}
                    display="none"
                    textColor={`${primaryColors.Purple}`}
                    border={`1px solid ${primaryColors.Purple}`}
                    onClick={() => push("")}
                    hoverBg={primaryColors.LightPurple}
                  />
                </Bottom>
              </>
            )}
          </FieldArray>

          <Bottom>
            <Button disabled={Loading} text={`Save`} />
          </Bottom>
        </Form>
      )}
    </Formik>
  );
};

CreateSubject.propTypes = {
  setIsCreating: PropTypes.func,
  editing: PropTypes.bool,
  course: PropTypes.shape({
    _id: PropTypes.string,
    courseTittle: PropTypes.string,
    courseCode: PropTypes.string,
    courseStatus: PropTypes.string,
  }),
};

export default CreateSubject;
