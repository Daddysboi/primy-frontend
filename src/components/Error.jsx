import styled from "styled-components";

const Div = styled.div`
  color: red;
  font-size: 0.5rem;
  padding: 0;
  display: block;
`;
const ErrorRed = ({ children }) => {
  return <Div>{children}</Div>;
};

export default ErrorRed;
