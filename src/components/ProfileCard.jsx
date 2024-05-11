import styled from "styled-components";

import { primaryColors } from "../assets/Colors";
import photo from "../assets/images/myphoto.jpeg";
import { FaPen, FaTrash } from "react-icons/fa";

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #727892;
  padding-top: 1rem;
  position: relative;
  width: 10rem;
  max-width: 100%;
  text-align: center;
  background: ${primaryColors.White};
`;

const Pro = styled.span`
  color: #231e39;
  background-color: #febb0b;
  border-radius: 3px;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0.2rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  border: 2px solid ${primaryColors.LightPurple};
  border-radius: 50%;
  padding: 3px;
  height: 4rem;
  width: 4rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0rem;
  margin: 0rem;
  position: absolute;
  font-size: 0.7rem;
  right: 1rem;
`;

const Name = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 0.5rem;
  font-weight: 500;
`;

const Skills = styled.div`
  background: ${(props) =>
    props.student ? primaryColors.mintGreen : primaryColors.LightPurple};
  text-align: left;
  padding: 1rem;
  margin-top: 1rem;
`;

const Lists = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  border: 1px solid #d8d4e7;
  border-radius: 2px;
  display: inline-block;
  font-size: 0.6rem;
  margin: 0 3px 3px 0;
  padding: 3px;
`;

const Edit = styled(FaPen)`
  &:hover {
    color: #a6aabc;
    padding-top: 0.1rem;
  }
`;

const Delete = styled(FaTrash)`
  &:hover {
    color: #a6aabc;
    padding-top: 0.1rem;
  }
`;

const ProfileCard = ({
  img = `${photo}`,
  header1,
  header2,
  options1,
  options2,
  student,
  role,
  name,
  onDelete,
  onEdit,
}) => {
  return (
    <Container>
      <Pro>{role}</Pro>
      <Top>
        <Img src={img} alt="user" />
      </Top>
      <Name>{name}</Name>
      <Buttons>
        <Edit onClick={onEdit} />
        <Delete onClick={onDelete} />
      </Buttons>
      <Skills student={student}>
        <Lists>
          <>
            <Text>{header1}</Text>
            {options1?.map((option, i) => (
              <List key={i}>{option}</List>
            ))}
          </>
          <>
            <Text>{header2}</Text>
            {options2?.map((option, i) => (
              <List key={i}>{option}</List>
            ))}
          </>
        </Lists>
      </Skills>
    </Container>
  );
};

export default ProfileCard;
