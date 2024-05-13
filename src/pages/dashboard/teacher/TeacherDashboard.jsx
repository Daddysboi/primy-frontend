import { useState } from "react";
import styled from "styled-components";

import DetailCard from "../../../components/DetailCard";
import ChartCard from "../../../components/ChartCard";
import AppButton from "../../../components/Button";
import DoughnutChart from "../../../components/DoughnutChart";
import MyCalendar from "../../../components/MyCalender";
import AreaChart from "../../../components/AreaChart";

import studentIcon from "../../../assets/images/36006.jpg";
import { primaryColors } from "../../../assets/Colors";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  padding-bottom: 3rem;
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
    heading: "My Students",
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
    heading: "...",
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

const TeacherDashboard = ({ Top, CardWrapper, Mid, Bottom, data }) => {
  const [slot, setSlot] = useState("week");

  return (
    <Container>
      {/* Top */}
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
          value="My Students by Gender"
          width="28rem"
          height="14rem"
          subtext={`We have ${data[0]} boys and ${data[1]} girls`}
          h1="1rem"
          p="0.7rem"
        >
          <DoughnutChart data={data} labelA="Boys" labelB="Girls" />
        </DetailCard>
      </Top>

      {/* Mid */}
      <Mid>
        <ChartCard width="42rem" height="20rem">
          <AreaChart
            Heading="My Students Peformance"
            slot={slot}
            setSlot={setSlot}
          />
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

      {/* Bottom */}
      <Bottom>
        <DetailCard h1="1rem" value="Calender" width="28rem" height="20rem">
          <MyCalendar />
        </DetailCard>
        <ChartCard width="28rem" height="20rem">
          <AreaChart Heading="Finance" slot={slot} setSlot={setSlot} />
        </ChartCard>
      </Bottom>
    </Container>
  );
};

export default TeacherDashboard;
