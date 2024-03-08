import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
