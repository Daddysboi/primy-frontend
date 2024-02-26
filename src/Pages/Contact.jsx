import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import styled from "styled-components";

import AppInput from "../reuseableComponent/AppInput";
import { useAppDispatch } from "../redux/hooks";
import AppButton from "../reuseableComponent/AppButton";

import { contactOurSupport } from "../features/utilitySlice";
import ErrorRed from "../reuseableComponent/ErrorRed";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding: 20px;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 480px) {
    max-width: 400px;
  }
`;

const StyledHeader = styled.h1`
  color: #183153;
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const initialValues = { fullName: "", email: "", message: "" };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    let request = {
      fullName: values.fullName,
      email: values.email?.toLowerCase(),
      message: values.message,
    };
    dispatch(contactOurSupport(request))
      .then((resp) => {
        if (resp?.payload?.status !== 201) {
          toast.error(resp?.payload?.message || "Something went wrong");
          setLoading(false);
          return;
        }
        toast.success(resp?.payload?.message || "Successfully subscribed");
        resetForm();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <StyledContainer id="contact">
      <StyledHeader data-aos="fade-up">Contact Our Support</StyledHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <StyledWrapper>
            <div>
              <Field
                as={AppInput}
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>{" "}
            <ErrorMessage name="idNumber" component={ErrorRed} />
            <div>
              <Field
                as={AppInput}
                label="Email"
                type="text"
                name="email"
                placeholder="Enter your e-mail"
              />
            </div>
            <ErrorMessage name="idNumber" component={ErrorRed} />
            <div>
              <Field
                as={AppInput}
                label="Message"
                type="textarea"
                name="message"
                placeholder="Message"
              />{" "}
              <ErrorMessage name="idNumber" component={ErrorRed} />
            </div>
            <AppButton disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </AppButton>
          </StyledWrapper>
        </Form>
      </Formik>
    </StyledContainer>
  );
};

export default Contact;
