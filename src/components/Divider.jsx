import styled from "styled-components";

const StyledDivider = styled.div`
  border: 1px solid #ebebeb;
  margin: 10px 0;
  width: "100%";
  margin-right: ${(props) => props.marginRight || ""};
`;
const Divider = ({ marginRight }) => {
  return <StyledDivider marginRight={marginRight} />;
};

export default Divider;
