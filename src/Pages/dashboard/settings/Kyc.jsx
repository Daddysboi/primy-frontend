import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Loading from "../../../components/Loading";
import AppInput from "../../../components/Input";
import AppSelectInput from "../../../components/SelectInput";
import Error from "../../../components/Error";
import { fileToDataUri } from "../../../components/FileUtils";
import WebcamCapture from "../../../components/WebcamCapture";
import { useAppDispatch } from "../../../redux/hooks";
import { useFetchUserData } from "../../../Guard";
import { updateUserKycDetails } from "../../../redux/features/userSlice";
import FileUpload from "../../../components/FileUpload";

const KYCContainer = styled.div`
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

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

const Title = styled.div`
  margin-bottom: 1.5rem;
`;

const options = [
  { value: "nationalID", label: "National ID" },
  { value: "driversLicense", label: "Drivers License" },
  { value: "votersCard", label: "Voters Card" },
];

const KYC = ({
  user,
  Button,
  FileInputContainer,
  StyledLabel,
  UploadButton,
  FaCloudUploadAlt,
}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const fetchUserData = useFetchUserData();
  const [imgPlaceholder, setImgPlaceholder] = useState(true);
  const [headshotPlaceholder, setHeadshotPlaceholder] = useState(true);

  const initialValues = {
    idType: user?.identificationDetails?.idType || "",
    idNumber: user?.identificationDetails?.idNumber || "",
    fullName: user?.nextOfKin?.fullName || "",
    relationship: user?.nextOfKin?.relationship || "",
    contactNumber: user?.nextOfKin?.contactNumber || "",
    bvn: user?.bvn || "",
    uploadPicture: user?.idCard || null,
  };

  const validationSchema = Yup.object().shape({
    idType: Yup.string().required("ID Type is required"),
    idNumber: Yup.string().required("ID Number is required"),
    fullName: Yup.string().required("Next of Kin is required"),
    relationship: Yup.string().required("Relationship is required"),
    contactNumber: Yup.string().required(
      "Contact Number of Next of Kin is required"
    ),
    bvn: Yup.string().required("BVN is required"),
    uploadPicture: Yup.mixed().required("Please upload a picture."),
  });

  const onSubmit = async (values, { resetForm }) => {
    if (!imageSrc) {
      toast.error("Please upload a picture");
      return;
    }
    const formData = { ...values, takePicture: imageSrc };

    if (formData.uploadPicture.size > 500 * 1024) {
      toast.error("File size exceeds the limit of 500KB");
      return;
    }

    setLoading(true);
    const uri = await fileToDataUri(formData.uploadPicture);
    dispatch(
      updateUserKycDetails({
        headShot: formData?.takePicture,
        idType: formData?.idType,
        idNumber: formData?.idNumber,
        idCard: uri,
        nextOfKinFullName: formData?.fullName,
        nextOfKinRelationship: formData?.relationship,
        nextOfKinContactNumber: formData?.contactNumber,
        bvn: formData?.bvn,
        userId: user?._id,
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
        setImageSrc("");
        setImgPlaceholder(true);
        setHeadshotPlaceholder(true);
        fetchUserData();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <KYCContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <section
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <span onClick={() => setHeadshotPlaceholder(false)}>
                <WebcamCapture imageSrc={imageSrc} setImageSrc={setImageSrc} />
              </span>
              {user?.headShot && !imageSrc && headshotPlaceholder && (
                <ImgViewer>
                  <Img src={user?.headShot} alt="head-shot" />
                </ImgViewer>
              )}
            </section>
            <Title>Identification</Title>
            <Section>
              <>
                <Field
                  name="idType"
                  onChange={handleChange}
                  component={AppSelectInput}
                  labelColor="gray"
                  label="Select Id"
                  type="select"
                  height="2rem"
                  width="20rem"
                  options={options}
                />

                <ErrorMessage name="idType" component={Error} />
              </>
              <>
                <Field
                  label="ID Number"
                  placeholder="Please enter a valid ID"
                  type="text"
                  name="idNumber"
                  onChange={handleChange}
                  component={AppInput}
                  width="20rem"
                  labelColor="gray"
                  height="2rem"
                />
                <ErrorMessage name="idNumber" component={Error} />
              </>

              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div onClick={() => setImgPlaceholder(false)}>
                  <FileInputContainer>
                    <StyledLabel htmlFor="uploadPicture">
                      Upload ID (Max 2MB)
                    </StyledLabel>
                    <div>
                      <UploadButton htmlFor="uploadPicture">
                        <FaCloudUploadAlt />
                      </UploadButton>
                      <div
                        style={{
                          display: "none",
                        }}
                      >
                        <Field
                          type="file"
                          id="uploadPicture"
                          name="uploadPicture"
                          onChange={(event) => {
                            setFieldValue(
                              "uploadPicture",
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
                    <ErrorMessage name="uploadPicture" component={Error} />
                    <span
                      style={{
                        opacity: "0.5",
                        fontSize: "0.6rem",
                      }}
                    >
                      {values?.uploadPicture && values?.uploadPicture.name}
                    </span>
                  </FileInputContainer>
                </div>
                {user?.kyc?.uploadPicture &&
                  !values?.uploadPicture &&
                  imgPlaceholder && (
                    <ImgViewer>
                      <Img src={user?.kyc?.uploadPicture} alt="ID" />
                    </ImgViewer>
                  )}
              </section>
            </Section>
            <Section>
              <Title>Next of Kin</Title>
              <>
                <Field
                  label="Full Name"
                  placeholder="Please enter Next of kin"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  component={AppInput}
                  width="20rem"
                  labelColor="gray"
                  height="2rem"
                />
                <ErrorMessage name="fullName" component={Error} />
              </>
              <>
                <Field
                  label="Relationship"
                  placeholder="Please enter relationship"
                  type="text"
                  name="relationship"
                  onChange={handleChange}
                  component={AppInput}
                  width="20rem"
                  labelColor="gray"
                  height="2rem"
                />
                <ErrorMessage name="relationship" component={Error} />
              </>
              <>
                <Field
                  label="Contact Number"
                  placeholder="Please enter contact number"
                  type="text"
                  name="contactNumber"
                  onChange={handleChange}
                  component={AppInput}
                  width="20rem"
                  labelColor="gray"
                  height="2rem"
                />
                <ErrorMessage name="contactNumber" component={Error} />
              </>
            </Section>
            <Section>
              <Title>Bank Verification Number (BVN)</Title>
              <>
                <Field
                  label="BVN"
                  placeholder="Please enter BVN"
                  type="text"
                  name="bvn"
                  onChange={handleChange}
                  component={AppInput}
                  width="20rem"
                  labelColor="gray"
                  height="2rem"
                />
                <ErrorMessage name="bvn" component={Error} />
              </>
            </Section>
            <Button type="submit" disabled={loading}>
              {loading ? <Loading /> : "Submit KYC"}
            </Button>
          </Form>
        )}
      </Formik>
    </KYCContainer>
  );
};

export default KYC;
