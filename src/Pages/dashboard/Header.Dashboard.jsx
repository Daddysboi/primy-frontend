import { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import { useUser } from "../../contexts/userContext";
import AppSelectInput from "../../components/SelectInput";

import myphoto from "../../assets/images/myphoto.jpeg";
import { primaryColors } from "../../assets/Colors";
import SearchBar from "../../components/SearchBar";
import { IoNotifications, IoGift } from "react-icons/io5";
import { RiFolder5Fill } from "react-icons/ri";
import { MdOutlineCreditScore } from "react-icons/md";

const Container = styled.div`
  display: flex;
  height: 4rem;
  margin-bottom: 1rem;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 2;
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
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.03);
`;

const Search = styled.span`
  display: flex;
  align-items: center;
  margin: 1rem 2rem 1rem 1rem;
  border-radius: 0.3rem;
  padding-left: 1rem;
  flex: 1;
  min-width: 4rem;
  background: ${primaryColors.Gray};
`;

const SearchIcon = styled(IoSearch)`
  min-width: 25px;
`;
const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
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
  gap: 1rem;
`;

const UserTab = styled.div`
  width: 7rem;
  background: ${primaryColors.Gray};
  height: 2rem;
  border-radius: 1rem 0.5rem 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;
  font-size: 0.6rem;
`;

const SessionTab = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
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

const session = [
  { value: "2021/2022", label: "2021 / 2022" },
  { value: "2022/2023", label: "2022 / 2023" },
  { value: "2023/2024", label: "2023 / 2024" },
  { value: "2024/2025", label: "2024 / 2025" },
];

const term = [
  { value: "1", label: "1st" },
  { value: "2", label: "2nd" },
  { value: "3", label: "3rd" },
];

const initialState = {
  session: "",
  term: "",
};

const Header = () => {
  const [formData, setFormData] = useState(initialState);
  const [selectedsession, setSelectedsession] = useState("");

  const { user } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "session") {
      setSelectedsession(value);
    }
  };

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
          <SearchIcon className="search_icon" />
          <SearchBar />
        </Search>
        <Tabs>
          <IconsTab>
            {icons.map((icon, index) => (
              <Circles key={index}>{icon}</Circles>
            ))}
          </IconsTab>
          <SessionTab>
            <AppSelectInput
              options={session}
              name="session"
              value={formData.session}
              height="32px"
              onChange={handleChange}
            />

            {selectedsession && (
              <AppSelectInput
                options={term}
                value={formData.term}
                name="term"
                height="32px"
                onChange={handleChange}
              />
            )}
          </SessionTab>
          <UserTab>
            <ProfilePix>
              <Img src={myphoto} alt={user?.firstName} />
            </ProfilePix>
            {user?.firstName} {user?.lastName}
          </UserTab>
        </Tabs>
      </Right>
    </Container>
  );
};

export default Header;