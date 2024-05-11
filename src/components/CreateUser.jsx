import PropTypes from "prop-types";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createUser } from "../redux/features/userSlice";

import AppInput from "./Input";
import AppSelectInput from "./SelectInput";
import Loading from "./Loading";
import Error from "./Error";
import AppButton from "./Button";
import { getDateValue } from "../utils/helpers";

import { classLists } from "./ClassList";

const Header = styled.h1`
  font-size: 1rem;
  padding-bottom: 1rem;
`;

const Button = styled(AppButton)`
  margin-top: 1rem;
`;
const options = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const CreateUser = ({
  role,
  setIsCreating,
  user = undefined,
  editing = false,
  refetch = null,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  // const editing = !user; // user is defined, editing

  const initialValues = {
    email: "",
    role: role,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    password: "",
    className: role === "student" ? "" : undefined,
    phoneNumber: role === "teacher" ? undefined : "",
  };

  if (user !== undefined) {
    initialValues.email = user?.email;
    initialValues.firstName = user?.firstName;
    initialValues.middleName = user?.middleName;
    initialValues.lastName = user?.lastName;
    initialValues.gender = user?.gender;
    initialValues.studentId = role === "student" ? user?._id : undefined;
    initialValues.teacherId = role === "teacher" ? user?._id : undefined;
    initialValues.className = role === "student" ? user?.className : undefined;
    // initialValues.dateOfBirth = getDateValue(user?.dateOfBirth);
    //Todo
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    middleName: Yup.string(),
    role: Yup.string().required("Required"),
    // className: Yup.string().when("role", {
    //   is: "student",
    //   then: Yup.string().required("Required"),
    //   otherwise: Yup.string(),
    // }),
    gender: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    let data = {
      role: values.role,
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      email: values.email || "",
      password:
        role === "teacher"
          ? import.meta.VITE_TEACHER_PASSWORD
          : import.meta.VITE_STUDENT_PASSWORD,
      gender: values.gender,
      phoneNumber: values.role === "student" ? "" : values.phoneNumber,
      className: values.role === "teacher" ? "" : values.className,
      dateOfBirth: values.dateOfBirth,
    };

    dispatch(createUser(data, editing))
      .unwrap()
      .then((res) => {
        toast.success(res?.payload?.message || "Successfully fetched " + role);
        resetForm();
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      })
      .finally(() => {
        setIsCreating(false);
      });
    refetch;
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Header>
          {editing ? "Update" : "Create"} {role}
        </Header>

        <>
          <Field
            as={AppInput}
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Enter First Name"
            height="2rem"
            width="90%"
          />
          <ErrorMessage name="firstName" component={Error} />
        </>

        <Field
          as={AppInput}
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
          height="2rem"
          width="90%"
        />
        <ErrorMessage name="lastName" component={Error} />

        <>
          <Field
            as={AppInput}
            type="text"
            name="middleName"
            label="Middle Name"
            placeholder="Enter Middle Name"
            height="2rem"
            width="90%"
          />
        </>

        {role === "teacher" && (
          <>
            <Field
              as={AppInput}
              type="text"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter Phone Number"
              height="2rem"
              width="90%"
            />
            <ErrorMessage name="phoneNumber" component={Error} />
          </>
        )}

        {editing == false && (
          <>
            <Field
              as={AppInput}
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Email"
              height="2rem"
              width="90%"
            />
            <ErrorMessage name="email" component={Error} />
          </>
        )}

        <Field
          as={AppSelectInput}
          name="gender"
          label="Gender"
          placeholder="Enter Gender"
          height="2rem"
          width="90%"
          options={options}
        />
        <ErrorMessage name="gender" component={Error} />

        <Field
          as={AppInput}
          type="text"
          name="dateOfBirth"
          label="Date of Birth"
          placeholder="Date of Birth"
          height="2rem"
          width="90%"
        />
        <ErrorMessage name="dateOfBirth" component={Error} />

        {role === "student" && (
          <>
            {classLists && (
              <Field
                as={AppSelectInput}
                selectType="category"
                name="className"
                label="Select Class"
                width="90%"
                optionList={classLists}
              />
            )}
          </>
        )}
        <Button loading={isLoading} text={`Save`} type="submit" />
      </Form>
    </Formik>
  );
};

CreateUser.propTypes = {
  role: PropTypes.oneOf(["student", "teacher"]),
  setIsCreating: PropTypes.func,
  editing: PropTypes.bool,
  user: PropTypes.any,
  refetch: PropTypes.func,
};

export default CreateUser;
