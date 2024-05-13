import { useState } from "react";
import styled from "styled-components";

import Pagination from "../../../components/Pagination";
import { primaryColors } from "../../../assets/Colors";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 90%;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 0.8rem;
  margin: 0;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 1rem;
  margin: -1rem;
`;

const Th = styled.th`
  background-color: ${primaryColors.Purple};
  border-radius: 0.5rem;
  width: 2rem;
  height: 2.5rem;
  color: white;
`;

const ThMonday = styled(Th)`
  background-color: ${primaryColors.Blue};
`;

const ThTuesday = styled(Th)`
  background-color: ${primaryColors.LightPurple};
`;

const ThWednesday = styled(Th)`
  background-color: ${primaryColors.Green};
`;

const ThThursday = styled(Th)`
  background-color: ${primaryColors.Yellow};
`;

const ThFriday = styled(Th)`
  background-color: ${primaryColors.Red};
`;

const Tbody = styled.tbody`
  text-transform: capitalize;
  text-align: center;
`;

const Td = styled.td`
  background-color: #e3f0f8;
  border-radius: 0.3rem;
  height: 2rem;
`;

const AllTimetable = () => {
  const [classLevel, setClassLevel] = useState("primary 1");

  const handleNext = () => {
    const currentIndex = classList.indexOf(classLevel);
    const nextIndex = (currentIndex + 1) % classList.length;
    setClassLevel(classList[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = classList.indexOf(classLevel);
    const prevIndex = (currentIndex - 1) % classList.length;
    setClassLevel(classList[prevIndex]);
  };
  return (
    <Container>
      <Header>
        <Title>{classLevel}</Title>
        <Pagination onNext={handleNext} onPrevious={handlePrevious} />
      </Header>

      <Table>
        <thead>
          <tr>
            <Th>Time</Th>
            <ThMonday>Monday</ThMonday>
            <ThTuesday>Tuesday</ThTuesday>
            <ThWednesday>Wednesday</ThWednesday>
            <ThThursday>Thursday</ThThursday>
            <ThFriday>Friday</ThFriday>
          </tr>
        </thead>

        <Tbody>
          {tableData[classLevel].map((data, i) => (
            <tr key={i}>
              <Td>{data.time}</Td>
              <Td>{data.monday}</Td>
              <Td>{data.tuesday}</Td>
              <Td>{data.wednesday}</Td>
              <Td>{data.thursday}</Td>
              <Td>{data.friday}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default AllTimetable;

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const classList = [
  "primary 1",
  "primary 2",
  "primary 3",
  "primary 4",
  "primary 5",
  "jss1",
];

const tableData = {
  "primary 1": [
    {
      time: "8:00-8:30",
      monday: "literature",
      tuesday: "english",
      wednesday: "french",
      thursday: "social studies",
      friday: "intergrated science",
    },
    {
      time: "8:30-9:00",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "9:00-9:30",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "9:30-10:00",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "10:00-10:30",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "10:30-12:00",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "12:00-12:30",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "12:30-1:00",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
    {
      time: "1:00-1:30",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },

    {
      time: "1:30-2:00",
      monday: "maths",
      tuesday: "english",
      wednesday: "hausa",
      thursday: "agric",
      friday: "biology",
    },
  ],

  "primary 2": [
    {
      time: "8:00-8:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "8:30-9:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "9:00-9:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "9:30-10:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "10:00-10:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "10:30-11:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "11:00-11:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "11:30-12:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "12:00-12:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "12:30-1:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "1:00-1:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "1:30-2:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
  ],
  "primary 3": [
    {
      time: "8:00-8:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "8:30-9:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "9:00-9:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "9:30-10:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "10:00-10:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "10:30-11:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "11:00-11:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "11:30-12:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "12:00-12:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "12:30-1:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
    {
      time: "1:00-1:30",
      monday: "Mathematics",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Geography",
      friday: "Art",
    },
    {
      time: "1:30-2:00",
      monday: "Literature",
      tuesday: "English",
      wednesday: "French",
      thursday: "Social Studies",
      friday: "Integrated Science",
    },
  ],
};
