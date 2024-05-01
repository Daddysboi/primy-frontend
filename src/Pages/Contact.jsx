import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import AppInput from "../reuseableComponent/AppInput";
import Button from "../reuseableComponent/Button";

import { contactOurSupport } from "../features/utilitySlice";
import ErrorRed from "../reuseableComponent/ErrorRed";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding: 20px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 480px) {
    max-width: 400px;
  }
`;

const Header = styled.h1`
  color: #183153;
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Contact = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.support);

  const initialValues = { fullName: "", email: "", message: "" };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    let request = {
      fullName: values.fullName,
      email: values.email?.toLowerCase(),
      message: values.message,
    };
    dispatch(contactOurSupport(request))
      .unwrap()
      .then((resp) => {
        toast.success(resp?.payload?.message || "Message Sent Successfully");
        resetForm();
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      });
  };

  return (
    <Container id="contact">
      <Header>Contact Our Support</Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Wrapper>
            <div>
              <Field
                as={AppInput}
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>{" "}
            <ErrorMessage name="fullName" component={ErrorRed} />
            <div>
              <Field
                as={AppInput}
                label="Email"
                type="text"
                name="email"
                placeholder="Enter your e-mail"
              />
            </div>
            <ErrorMessage name="email" component={ErrorRed} />
            <div>
              <Field
                as={AppInput}
                label="Message"
                type="textarea"
                name="message"
                placeholder="Message"
              />{" "}
              <ErrorMessage name="message" component={ErrorRed} />
            </div>
            <Button disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </Wrapper>
        </Form>
      </Formik>
    </Container>
  );
};

export default Contact;
