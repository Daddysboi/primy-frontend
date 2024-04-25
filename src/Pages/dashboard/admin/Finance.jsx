import { useState } from "react";
import styled from "styled-components";

import { primaryColors } from "../../../assets/Colors";
import DeatailCard from "../../../components/DetailCard";
import TransactionCard from "../../../components/TransactionCard";
import LineChart from "../../../components/LineChart";
import DoughnutChart from "../../../components/DoughnutChart";
import Sort from "../../../components/Sort";

const Container = styled.div`
  width: calc(100% - 25%);
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 2rem;
`;

const Left = styled.div`
  background-color: ${primaryColors.White};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`;

const Top = styled.div`
  display: flex;
  gap: 1rem;
`;

const Bottom = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Text = styled.h1`
  font-size: 1rem;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Right = styled.div`
  width: 27rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

const Upper = styled.div`
  background-color: ${primaryColors.White};
  border-radius: 1rem;
  padding: 1rem 0;
  height: 15rem;
`;

const Lower = styled.div`
  background-color: ${primaryColors.White};
  border-radius: 1rem;
  height: 18rem;
  padding: 1rem 0;
`;

const LineChartdata = [
  { name: "Kindergerten", uv: 400, pv: 2400, amt: 2400 },
  { name: "Pre Nur", uv: 400, pv: 2400, amt: 2400 },
  { name: "Nur 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Nur 2", uv: 400, pv: 2400, amt: 2400 },
  { name: "Pri 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Pri 2", uv: 800, pv: 2600, amt: 2500 },
  { name: "Pri 3", uv: 500, pv: 2300, amt: 2200 },
  { name: "Pri 4", uv: 700, pv: 2100, amt: 2500 },
  { name: "Pri 5", uv: 300, pv: 2800, amt: 2700 },
  { name: "Js 1", uv: 400, pv: 2800, amt: 2700 },
  { name: "Js 2", uv: 400, pv: 2800, amt: 2700 },
  { name: "Js 3", uv: 650, pv: 2800, amt: 2700 },
  { name: "SS 1", uv: 650, pv: 2800, amt: 2700 },
  { name: "SS 2", uv: 650, pv: 2800, amt: 2700 },
  { name: "SS 3", uv: 650, pv: 2800, amt: 2700 },
];

// doughnut chart
const data = [57, 43];

const options = [
  { value: "date", label: "Date" },
  { value: "class", label: "Class" },
];

const Finance = () => {
  const [users, setUsers] = useState([]);

  const sortUsers = (options) => {
    if (!users) return;

    const sortedUsers = [...users].sort((a, b) => {
      switch (options.value) {
        case "class":
          return a.class.localeCompare(b.class);
        case "date":
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });
    setUsers(sortedUsers);
  };

  return (
    <Container>
      <Left>
        <Top>
          <DeatailCard
            width="10rem"
            value="N 217,000"
            heading="Income"
            rate="+3%"
            subtext="more than last year"
            padding="0.5rem 0 0 1rem"
            backgroundColor={primaryColors.LightPurple}
          />

          <DeatailCard
            width="10rem"
            value="N 4,177,000"
            heading="Teachers Salary"
            rate="+3%"
            subtext="more than last year"
            padding="0.5rem 0 0 1rem"
            backgroundColor={primaryColors.mintGreen}
          />

          <DeatailCard
            width="10rem"
            value="N 7,177,000"
            heading="Unpaid Fees"
            rate="+3%"
            subtext="more than last year"
            padding="0.5rem 0 0 1rem"
            backgroundColor={primaryColors.Gray}
          />
        </Top>
        <Bottom>
          <Header>
            <Text>School Fees</Text>
            <Sort options={options} onSort={sortUsers} />
          </Header>
          <Cards>
            <TransactionCard
              name="Mary Chinonso"
              date="April 3rd 2024"
              studentClass="Primary 2"
              amount="N250,000"
              status="Paid"
            />
            <TransactionCard
              name="Cyhthia Andrew"
              date="April 2nd 2024"
              studentClass="Primary 1"
              amount="N250,000"
              status="Unpaid"
            />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </Cards>
        </Bottom>
      </Left>
      <Right>
        <Upper>
          <center>
            <Text>Payment by class</Text>
          </center>
          <LineChart data={LineChartdata} width={420} height={200} />
        </Upper>

        <Lower>
          <center>
            <Text>Ratio of Paid to Unpaid</Text>
          </center>
          <DoughnutChart data={data} labelA="Paid" labelB="Unpiad" />
        </Lower>
      </Right>
    </Container>
  );
};

export default Finance;
