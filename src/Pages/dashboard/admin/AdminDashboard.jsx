import { useState } from "react";
import styled from "styled-components";

import DetailCard from "../../../components/DetailCard";
import ChartCard from "../../../components/ChartCard";

import studentIcon from "../../../assets/images/36006.jpg";
import AppButton from "../../../components/Button";
import { primaryColors } from "../../../assets/Colors";

import DoughnutChart from "../../../components/DoughnutChart";
import LineChart from "../../../components/LineChart";
import MyCalendar from "../../../components/MyCalender";

// material-ui
import { Box, Button, Grid, Stack } from "@mui/material";

// project import
import IncomeAreaChart from "../../../components/IncomeAreaChart";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const Top = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const Mid = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 30rem;
`;

const EventList = styled.div`
  display: flex;
  gap: 1rem;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Date = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  width: 17.5%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-weight: 600;
  font-size: 1rem;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoText = styled.p`
  font-size: 0.6rem;
  line-height: 1rem;
  font-weight: 500;
  margin: 0;
`;

const DateText = styled.p`
  font-size: 0.6rem;
  font-weight: 600;
  margin: 0;
`;

const Bar = styled.div`
  height: 0.3rem;
  border-radius: 0.15rem;
  background: gray;
  width: 90%;
`;

const Line = styled.div`
  background: yellow;
  height: 0.3rem;
  width: 80%;
`;

const DaysLeft = styled.div`
  font-size: 0.45rem;
  opacity: 0.8;
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

const eventList = [
  {
    day: "3",
    weekday: "Wed",
    event: "School Live Concert Charity Event 2021",
    color: `${primaryColors.LightPurple}`,
  },
  {
    day: "8",
    weekday: "Fri",
    event: "Interhouse Sport",
    color: `${primaryColors.mintGreen}`,
  },
];

// doughnut chart
const data = [57, 43];

const LineChartdata = [
  { name: "Week 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Week 2", uv: 800, pv: 2600, amt: 2500 },
  { name: "Week 3", uv: 500, pv: 2300, amt: 2200 },
  { name: "Week 4", uv: 700, pv: 2100, amt: 2500 },
  { name: "Week 5", uv: 300, pv: 2800, amt: 2700 },
  { name: "Week 6", uv: 400, pv: 2800, amt: 2700 },
  { name: "Week 7", uv: 500, pv: 2800, amt: 2700 },
  { name: "Week 8", uv: 650, pv: 2800, amt: 2700 },
];

const AdminDashboard = () => {
  const [slot, setSlot] = useState("week");

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
          value="Total Students by Gender"
          width="28rem"
          height="14rem"
          subtext={`We have ${data[0]} boys and ${data[1]} girls`}
          h1="1rem"
          p="0.7rem"
        >
          <DoughnutChart data={data} labelA="Boys" labelB="Girls" />
        </DetailCard>
      </Top>
      <Mid>
        <ChartCard width="42rem" height="20rem">
          <ChartWrapper>
            <Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Text>School Peformance</Text>
                <Grid>
                  <Stack direction="row" alignItems="center" spacing={0}>
                    <Button
                      size="small"
                      onClick={() => setSlot("month")}
                      color={slot === "month" ? "primary" : "secondary"}
                      variant={slot === "month" ? "outlined" : "text"}
                    >
                      Month
                    </Button>
                    <Button
                      size="small"
                      onClick={() => setSlot("week")}
                      color={slot === "week" ? "primary" : "secondary"}
                      variant={slot === "week" ? "outlined" : "text"}
                    >
                      Week
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ pt: 1, pr: 2 }}>
                <IncomeAreaChart slot={slot} />
              </Box>
            </Grid>
          </ChartWrapper>
        </ChartCard>
        <DetailCard
          h1="1rem"
          value="Upcoming events"
          width="15rem"
          height="20rem"
          paddingTop="1rem"
        >
          <EventWrapper>
            {eventList.map(({ day, weekday, event, color }, i) => (
              <EventList key={i}>
                <Date color={color}>
                  <DateText>{day}</DateText>
                  <DateText>{weekday}</DateText>
                </Date>
                <Info>
                  <InfoText>{event}</InfoText>
                  <span>
                    <DaysLeft> 3days Left</DaysLeft>

                    <Bar>
                      <Line></Line>
                    </Bar>
                  </span>
                </Info>
              </EventList>
            ))}
          </EventWrapper>

          <AppButton text=" View more" />
        </DetailCard>
      </Mid>
      <Bottom>
        <DetailCard
          h1="1rem"
          value="School Calender"
          width="28rem"
          height="15rem"
        >
          <MyCalendar />
        </DetailCard>
        <DetailCard
          h1="1rem"
          value="School Finance"
          width="28rem"
          height="15rem"
        >
          <div>
            <LineChart data={LineChartdata} width={400} height={150} />
          </div>
        </DetailCard>
      </Bottom>
    </Container>
  );
};

export default AdminDashboard;
