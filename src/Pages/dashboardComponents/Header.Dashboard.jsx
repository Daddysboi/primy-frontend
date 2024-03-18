import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import { useUser } from "../../contexts/userContext";

import myphoto from "../../assets/images/myphoto.jpeg";
import { primaryColors } from "../../assets/Colors";
import SearchBar from "../../components/SearchBar";
import { IoNotifications, IoGift } from "react-icons/io5";
import { RiFolder5Fill } from "react-icons/ri";
import { MdOutlineCreditScore } from "react-icons/md";

const Container = styled.div`
  display: flex;
  height: 4rem;
  top: 0;
  left: 0;
  right: 0;
  /* position: fixed; */
  /* background-color: ${primaryColors.DashBoardBackground}; */
`;

const Left = styled.div`
  width: 20%;
`;

const Right = styled.div`
  background-color: ${primaryColors.White};
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  padding-top: 0.5rem;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColors.Gray};
  padding-left: 1rem;
  border-radius: 0.5rem;
`;

const Circles = styled.div`
  border-radius: 1rem;
  background: ${primaryColors.Gray};
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a7a7a7;
`;

const IconsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const UserTab = styled.div`
  width: 7rem;
  background: ${primaryColors.Gray};
  height: 2rem;
  border-radius: 1rem 0.75rem 0.75rem 1rem;
  display: flex;
  gap: 0.5rem;
  font-size: 0.6rem;
`;

const ProfilePix = styled.div`
  border-radius: 1rem;
  background: ${primaryColors.Purple};
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 1rem;
`;
const Header = () => {
  const { user } = useUser();

  const icons = [
    <IoNotifications />,
    <IoGift />,
    <MdOutlineCreditScore />,
    <RiFolder5Fill />,
  ];

  return (
    <Container>
      <Left></Left>
      <Right>
        <Search>
          <IoSearch className="search_icon" />
          <SearchBar />
        </Search>

        <IconsTab>
          {icons.map((icon, index) => (
            <Circles key={index}>{icon}</Circles>
          ))}
        </IconsTab>
        <UserTab>
          <ProfilePix>
            <Img src={myphoto} alt={user?.firstName} />
          </ProfilePix>
          {user?.firstName} {user?.lastName}
        </UserTab>
      </Right>
    </Container>
  );
};

export default Header;
