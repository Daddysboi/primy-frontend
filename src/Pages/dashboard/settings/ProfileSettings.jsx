import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { toast } from "react-toastify";

import AppInput from "../../../components/Input";
import Error from "../../../components/Error";
import { updateUserProfile } from "../../../redux/features/userSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useFetchUserData } from "../../../Guard";
import FileUpload from "../../../components/FileUpload";
import { fileToDataUri } from "../../../components/FileUtils";

const NameInput = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0;
  justify-content: space-between;
`;

const ProfileSettings = ({ user, PropsContainer, Button, StyledForm }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    uploadPicture: "",
  };
  const [loading, setLoading] = useState(false);
  const [imgPlaceholder, setImgPlaceholder] = useState(true);

  const dispatch = useAppDispatch();
  const fetchUserData = useFetchUserData();

  const onSubmit = async (values, { resetForm }) => {
    if (values.uploadPicture.size > 500 * 1024) {
      toast.error("File size exceeds the limit of 500KB");
      return;
    }

    const profilePictureUri = await fileToDataUri(values.uploadPicture);

    setLoading(true);
    dispatch(
      updateUserProfile({
        firstName: values?.firstName,
        lastName: values?.lastName,
        phoneNumber: values?.phoneNumber,
        profilePicture: profilePictureUri,
      })
    )
      .then((resp) => {
        if (resp?.payload?.status !== 200) {
          toast.error(resp?.payload?.message || "Something went wrong");
          setLoading(false);
          return;
        }
        toast.success(resp?.payload?.message || "Successfully logged in");
        resetForm();
        fetchUserData();
        setImgPlaceholder(true);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
        setLoading(false);
      });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),
    uploadPicture: Yup.mixed().required("Required"),
  });

  return (
    <PropsContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, setFieldValue }) => (
          <StyledForm>
            <>
              <FileUpload
                user={user}
                setImgPlaceholder={setImgPlaceholder}
                setFieldValue={setFieldValue}
                imgPlaceholder={imgPlaceholder}
                name="uploadPicture"
                values={values}
                label="Upload Picture"
              />

              <NameInput>
                <Field
                  label="First Name"
                  placeholder="Enter your first name"
                  type="text"
                  width="100%"
                  name="firstName"
                  onChange={handleChange}
                  component={AppInput}
                  height="2.5rem"
                  labelColor="gray"
                />
                <ErrorMessage name="firstName" component={Error} />

                <Field
                  label="Last Name"
                  type="text"
                  width="100%"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={handleChange}
                  component={AppInput}
                  labelColor="gray"
                  height="2.5rem"
                />
                <ErrorMessage name="lastName" component={Error} />
              </NameInput>

              <>
                <Field
                  label="E-Mail"
                  placeholder="Enter email address"
                  type="email"
                  name="email"
                  component={AppInput}
                  width="100%"
                  labelColor="gray"
                  height="2.5rem"
                  color="gray"
                />
                <ErrorMessage name="email" component={Error} />
              </>

              <>
                <Field
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  type="tel"
                  name="phoneNumber"
                  onChange={handleChange}
                  component={AppInput}
                  width="100%"
                  labelColor="gray"
                  height="2.5rem"
                />
                <ErrorMessage name="phoneNumber" component={Error} />
              </>

              <Button disabled={loading} type="submit">
                {loading ? "Updating..." : "Save Changes"}
              </Button>
            </>
          </StyledForm>
        )}
      </Formik>
    </PropsContainer>
  );
};

export default ProfileSettings;
