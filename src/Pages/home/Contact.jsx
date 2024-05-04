import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import styled from "styled-components";
import Loading from "../../components/Loading";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { contactOurSupport } from "../../redux/features/utilitySlice";

import { contactFormSchema } from "../../schema/validationSchema";
import AppInput from "../../components/Input";
import Button from "../../components/Button";
import ErrorRed from "../../components/Error";
import { Input } from "../../components/third-party/input";
import { textArea } from "../../components/third-party/textArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  @media (min-width: 480px) {
    max-width: 400px;
  }
`;

const Contact = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.utility);

  const initialValues = { fullName: "", email: "", message: "" };

  const onSubmit = async (values, { resetForm }) => {
    let data = {
      fullName: values.fullName,
      email: values.email?.toLowerCase(),
      message: values.message,
    };
    dispatch(contactOurSupport(data))
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
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Wrapper>
            <div>
              <Field
                as={Input}
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>{" "}
            <ErrorMessage name="fullName" component={ErrorRed} />
            <div>
              <Field
                as={Input}
                label="Email"
                type="text"
                name="email"
                placeholder="Enter your e-mail"
              />
            </div>
            <ErrorMessage name="email" component={ErrorRed} />
            <div>
              <Field
                as={textArea}
                label="Message"
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
              />{" "}
              <ErrorMessage name="message" component={ErrorRed} />
            </div>
            {isLoading && <Loading />}
            <Button
              disabled={isLoading}
              display="other"
              width="100%"
              fontSize="1rem"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </Wrapper>
        </Form>
      </Formik>
    </Container>
  );
};

export default Contact;
