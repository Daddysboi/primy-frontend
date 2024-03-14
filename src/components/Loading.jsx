import { TailSpin as Loader } from "react-loader-spinner";
import { primaryColors } from "../assets/Colors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* align-items: center; */
`;

const Loading = () => {
  return (
    <Container>
      <Loader
        type="TailSpin"
        color={primaryColors.Purple}
        height={20}
        width={20}
        style={{ margin: "auto" }}
      />
    </Container>
  );
};
export default Loading;
