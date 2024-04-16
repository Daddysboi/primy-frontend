import styled from "styled-components";
import { primaryColors } from "../assets/Colors";
import { FaStar } from "react-icons/fa";

const Wrapper = styled.div`
  padding: 0 1.5rem 2rem 1.5rem;
  height: 10rem;
  position: relative;
  margin: 2rem;

  @media (max-width: 1027px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 467px) {
    padding-bottom: 4rem;
  }
`;

const Testifier = styled.div`
  display: flex;
  height: 4rem;
  /* width: 15rem; */
  position: absolute;
  top: -2rem;
  left: -0.5rem;
`;

const Image = styled.img`
  border-radius: 0.5rem;
`;

const Deatils = styled.p`
  font-size: 0.6rem;
  text-align: left;
  padding-left: 1rem;
  background-color: ${primaryColors.LightPurple};
  margin: 0.6rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  color: #8a8a8a;
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* flex-direction: column; */
`;
const Text = styled.div``;

const SubText = styled.p`
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1.313rem;
  padding: 2.5rem 0.5rem 0.5rem 1rem;
  text-align: left;
  background-color: ${primaryColors.White};
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.05);
`;

const Stars = styled.span`
  display: inline-flex;
`;

const TestimonyCard = ({ img, review, testifier, role, rating }) => {
  const renderStars = (rating) => {
    const starCount = Math.round(rating);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push(<FaStar key={i} />);
    }

    return stars;
  };
  return (
    <Wrapper>
      <Testifier>
        <Image src={img} alt="Testifier" />
        <span>
          <Deatils>
            <Text>
              <p>{testifier}</p>
              <p>{role}</p>
            </Text>
            <Stars>{renderStars(rating)}</Stars>
          </Deatils>
        </span>
      </Testifier>

      <SubText>{review}</SubText>
    </Wrapper>
  );
};

export default TestimonyCard;
