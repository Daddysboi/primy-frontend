import styled from "styled-components";

import DetailCard from "../../components/DetailCard";
import studentIcon from "../../assets/images/36006.jpg";
import AppButton from "../../components/Button";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const Top = styled.div`
  display: flex;
  gap: 2rem;
`;

const Mid = styled.div`
  display: flex;
  gap: 3rem;
`;

const Bottom = styled.div`
  display: flex;
  gap: 3rem;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 30rem;
`;

const details = [
  {
    value: "176",
    heading: "Total Students",
    rate: "+0.5%",
    subtext: "more than last year",
    img: `${studentIcon}`,
  },
  {
    value: "69",
    heading: "Total Teachers",
    rate: "-3%",
    subtext: "less than last year",
    img: `${studentIcon}`,
  },
  {
    value: "17",
    heading: "Events",
    rate: "6%",
    subtext: "more than last year",
    img: `${studentIcon}`,
  },
  {
    value: "82",
    heading: "Invoice Status",
    rate: "+2%",
    subtext: "more than last year",
    img: `${studentIcon}`,
  },
];

const AdminDashboard = () => {
  return (
    <Container>
      <Top>
        <CardWrapper>
          {details.map(({ value, heading, rate, subtext, img }, i) => (
            <div key={i}>
              <DetailCard
                value={value}
                heading={heading}
                rate={rate}
                subtext={subtext}
                image={img}
              />
            </div>
          ))}
        </CardWrapper>

        <DetailCard
          value="Increase your value by learning"
          width="24rem"
          height="14rem"
          subtext="We have new method to new learning process, Fater, secure and easy to use"
        >
          <AppButton text="Button" />
        </DetailCard>
      </Top>

      <Mid>
        <DetailCard width="39rem" height="14rem"></DetailCard>
        <DetailCard width="12rem" height="14rem"></DetailCard>
      </Mid>

      <Bottom>
        <DetailCard width="25.5rem" height="14rem"></DetailCard>
        <DetailCard width="25.5rem" height="14rem"></DetailCard>
      </Bottom>
    </Container>
  );
};

export default AdminDashboard;
