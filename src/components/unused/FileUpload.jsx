import React from "react";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import AppInput from "../Input";
import ErrorRed from "../Error";

const Wrapper = styled.div`
  display: "flex";
  align-items: "center";
  gap: "30px";
`;

const ImgViewer = styled.div`
  border-radius: 50%;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Container = styled.div`
  margin-top: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  position: relative;
  opacity: 0.5;
`;

const UploadButton = styled.label`
  display: inline-block;
  color: green;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  height: 2rem;
`;

const FieldWrapper = styled.div`
  display: none;
`;

const FileName = styled.div`
  opacity: "0.5";
  font-size: "0.6rem";
`;

const FileUpload = ({
  name,
  values,
  setFieldValue,
  setImgPlaceholder,
  imgPlaceholder,
  user,
  label,
}) => {
  const handleChange = (e) => {
    setFieldValue(name, e.currentTarget.files[0]);
  };
  return (
    <Wrapper>
      <div onClick={() => setImgPlaceholder(false)}>
        <Container>
          <Label htmlFor="uploadPicture">{label}</Label>
          <div>
            <UploadButton htmlFor="uploadPicture">
              <FaCloudUploadAlt />
            </UploadButton>
            <FieldWrapper>
              <Field
                type="file"
                name={name}
                onChange={handleChange}
                component={AppInput}
                accept="image/*"
              />
            </FieldWrapper>
          </div>
          <ErrorMessage name={name} component={ErrorRed} />
          <FileName>
            {values?.uploadPicture && values?.uploadPicture.name}
          </FileName>
        </Container>
      </div>

      {user?.profilePicture && !values?.uploadPicture && imgPlaceholder && (
        <ImgViewer>
          <Img src={user?.profilePicture} alt="head-shot" />
        </ImgViewer>
      )}
    </Wrapper>
  );
};

export default FileUpload;
