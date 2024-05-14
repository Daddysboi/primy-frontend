import styled from "styled-components";

import { SignupForm } from "../../components/third-party/Form";
import femaleStudent from "../../assets/images/friends.jpg";

const Container = styled.section`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* position: relative; */
  /* flex-direction: column; */
  /* border-radius: 1.5rem; */
  border-radius: 1.5rem;
  min-height: 45rem;
  width: 100%;
  background: url(${femaleStudent});
  background-size: cover;
  border-radius: 1.5rem;
  padding-top: 4rem;
  @media only screen and (min-width: 320px) and (max-width: 700px) {
    padding-top: 0rem;
    min-height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const Form = styled.div`
  right: 8rem;
  width: 28rem;

  @media only screen and (min-width: 701px) {
    position: absolute;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <Form>
        <SignupForm />
      </Form>
    </Container>
  );
};

export default SignUp;
