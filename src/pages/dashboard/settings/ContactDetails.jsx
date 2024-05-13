import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { toast } from "react-toastify";

import AppInput from "../../../components/Input";
import Error from "../../../components/Error";
import { fileToDataUri } from "../../../components/FileUtils";
import { useFetchUserData } from "../../../Guard";
import { useAppDispatch } from "../../../redux/hooks";
import { updateUserContactDetails } from "../../../redux/features/userSlice";

const ImgViewer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const AddContact = ({
  user,
  Button,
  StyledForm,
  FileInputContainer,
  StyledLabel,
  UploadButton,
  FaCloudUploadAlt,
}) => {
  const initialValues = {
    homeAddress: user?.contactDetails?.homeAddress || "",
    landmark: user?.contactDetails?.nearestLandmark || "",
    proofOfAddress: "",
    postalCode: user?.contactDetails?.postalCode || "",
  };

  const [loading, setLoading] = useState(false);
  const [imgPlaceholder, setImgPlaceholder] = useState(true);

  const dispatch = useAppDispatch();
  const fetchUserData = useFetchUserData();

  const onSubmit = async (values, { resetForm }) => {
    if (values.proofOfAddress.size > 500 * 1024) {
      toast.error("File size exceeds the limit of 500KB");
      return;
    }

    setLoading(true);
    const uri = await fileToDataUri(values?.proofOfAddress);
    dispatch(
      updateUserContactDetails({
        userId: user?._id,
        homeAddress: values?.homeAddress,
        nearestLandmark: values?.landmark,
        postalCode: values?.postalCode,
        proofOfAddress: uri,
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
    homeAddress: Yup.string().required("Home Address is required"),
    landmark: Yup.string().required("Nearest landmark is required"),
    postalCode: Yup.string().required("postalCode is required"),
    proofOfAddress: Yup.mixed().required("Image is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, setFieldValue }) => (
        <StyledForm>
          <div>
            <Field
              label="Home Address"
              placeholder="Enter your home address"
              type="text"
              name="homeAddress"
              onChange={handleChange}
              component={AppInput}
              width="20rem"
              labelColor="gray"
              height="2rem"
            />
            <ErrorMessage name="homeAddress" component={Error} />
          </div>

          <div>
            <Field
              label="Nearest Landmark"
              placeholder="Enter closest landmark to you"
              type="text"
              name="landmark"
              onChange={handleChange}
              component={AppInput}
              width="20rem"
              labelColor="gray"
              height="2rem"
            />
            <ErrorMessage name="landmark" component={Error} />
          </div>

          <div>
            <Field
              label="Postal Code"
              placeholder="Enter your postal code"
              type="text"
              name="postalCode"
              onChange={handleChange}
              component={AppInput}
              width="20rem"
              labelColor="gray"
              height="2rem"
            />
            <ErrorMessage name="postalCode" component={Error} />
          </div>

          <section
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div onClick={() => setImgPlaceholder(false)}>
              <FileInputContainer>
                <StyledLabel htmlFor="proofOfAddress">
                  Proof of Address (Max 2MB)
                </StyledLabel>
                <div>
                  <UploadButton htmlFor="proofOfAddress">
                    <FaCloudUploadAlt />
                  </UploadButton>
                  <div
                    style={{
                      display: "none",
                    }}
                  >
                    <Field
                      type="file"
                      id="proofOfAddress"
                      name="proofOfAddress"
                      onChange={(event) => {
                        setFieldValue(
                          "proofOfAddress",
                          event.currentTarget.files[0]
                        );
                      }}
                      component={AppInput}
                      labelColor="gray"
                      accept="image/*"
                      border="none"
                    />
                  </div>
                </div>
                <ErrorMessage name="proofOfAddress" component={Error} />
                <span
                  style={{
                    opacity: "0.5",
                    fontSize: "0.6rem",
                  }}
                >
                  {values?.proofOfAddress && values?.proofOfAddress.name}
                </span>
              </FileInputContainer>
            </div>
            {user?.contactDetails?.proofOfAddress &&
              !values?.proofOfAddress &&
              imgPlaceholder && (
                <ImgViewer>
                  <Img
                    src={user?.contactDetails?.proofOfAddress}
                    alt="head-shot"
                  />
                </ImgViewer>
              )}
          </section>

          <Button
            type="submit"
            disabled={loading}
            text={loading ? "Adding..." : "Add Contact"}
          />
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddContact;
