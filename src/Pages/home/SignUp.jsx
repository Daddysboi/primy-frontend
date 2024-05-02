import styled from "styled-components";

import { SignupForm } from "../../components/third-party/Form";
import femaleStudent from "../../assets/images/friends.jpg";

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 1.5rem;
  position: relative;
`;

const Img = styled.img`
  border-radius: 1.5rem;
`;

const Form = styled.div`
  position: absolute;
  top: 2rem;
  right: 10rem;
  width: 28rem;
`;

const SignUp = () => {
  return (
    <Container>
      <Img src={femaleStudent} alt="student" />
      <Form>
        <SignupForm />
      </Form>
    </Container>
  );
};

export default SignUp;
