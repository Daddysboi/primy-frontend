import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "./Button";
import AppInput from "./Input";
import AppSelectInput from "./SelectInput";
import ErrorRed from "./Error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "./Loading";
import classList from "../data/classList.json";

const CreateSubject = ({
  setIsCreating,
  editing = false,
  course = undefined,
}) => {
  if (course !== undefined) {
    var initialState = {
      courseId: course?._id,
      courseTittle: course?.courseTittle,
      courseCode: course?.courseCode,
      courseStatus: course?.courseStatus,
    };
  } else {
    initialState = {
      courseTittle: "",
      courseCode: "",
      courseStatus: "",
    };
  }

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => await createEditCourse(formData, editing),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
      setIsCreating(false);
      setFormData(initialState);
    },
  });

  const initialValues = {
    courseTittle: "",
    courseCode: "",
    courseStatus: "",
  };
  const validationSchema = Yup.object();
  const onSubmit = (e) => {};

  const options = [
    { value: "active", label: "Active" },
    { value: "inActive", label: "InActive" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h1>Create Subject</h1>
        <>
          <Field
            as={AppInput}
            label="Subject Title"
            name="subjectTitle"
            placeholder="Subject Title"
            type="text"
          />
          <ErrorMessage name="subjectTitle" component={ErrorRed} />
        </>
        <>
          <Field
            label="Class"
            name="class"
            type="select"
            as={AppSelectInput}
            options={classList}
            required={true}
          />
          <ErrorMessage name="Class" component={ErrorRed} />
        </>

        <>
          <Field
            as={AppSelectInput}
            label="Status"
            name="status"
            type="select"
            options={options}
          />
          <ErrorMessage name="status" component={ErrorRed} />
        </>

        <Button disabled={Loading} text={`Save`} />
      </Form>
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
