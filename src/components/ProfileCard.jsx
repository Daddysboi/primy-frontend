import styled from "styled-components";

import { primaryColors } from "../assets/Colors";
import photo from "../assets/images/myphoto.jpeg";
import { FaPen, FaTrash } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.07);
  padding-top: 0.5rem;
  width: 7.5rem;
  height: 10rem;
  background: ${primaryColors.White};
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 60%; */
`;

const Img = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 1.6rem;
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.05);
  padding: 0.3rem;
`;

const Text = styled.p`
  font-size: 0.55rem;
  margin: 0.02rem;
  font-weight: 500;
`;

const IconTab = styled.div`
  display: flex;
  justify-content: right;
  /* margin-top: -3rem; */
  /* margin: 0; */
`;

const TrashIcon = styled(FaTrash)`
  height: 0.5rem;
  color: #c30505;
  &:hover {
    color: #f88989;
  }
`;

const PenIcon = styled(FaPen)`
  height: 0.5rem;
  width: 0.5rem;

  &:hover {
    color: #4d4b4b;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 40%; */
  align-items: center;
  padding: 0.3rem 0 0.5rem 0;
`;

const ProfileCard = ({ img = photo, user, onDelete, onClick }) => {
  return (
    <Container>
      <IconTab>
        <PenIcon size={20} onClick={onClick} />
        <TrashIcon size={20} onDelete={onDelete} />
      </IconTab>
      <Top>
        <Img src={img} alt="userimage" />
      </Top>
      <Bottom>
        <Text>
          Name:
          {user?.firstName} {user?.lastName}
        </Text>
        <Text>Role: {user?.role}</Text>
        <Text> Type: {user?.type}</Text>
        <Text> Class(s): {user?.class}</Text>
        <Text>Subject: {user?.subject}</Text>
      </Bottom>
    </Container>
  );
};

export default ProfileCard;
