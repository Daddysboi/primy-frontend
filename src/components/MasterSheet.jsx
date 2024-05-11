import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Table } from "flowbite-react";

import Pagination from "./Pagination";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
`;

const Buttons = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1rem;
`;

const Container = styled.div`
  width: 90%;
`;

const TableHead = styled(Table.Head)`
  text-align: left;
`;

const TableHeadCell = styled(Table.HeadCell)`
  padding: 0.5rem;
  background-color: transparent;
`;

const TableBody = styled(Table.Body)``;

const TableRow = styled(Table.Row)`
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

const TableCell = styled(Table.Cell)`
  /* white-space: nowrap; */
  font-weight: 500;
  padding: 0.5rem;
`;

const Span = styled.span`
  display: block;
  font-size: 0.6rem;
  font-weight: 400;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  display: flex;
`;

const Mastersheet = ({ resultTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  //table
  const [currentTable, setCurrentTable] = useState(0);

  const itemsPerTable = 10;
  const startIndex = currentTable * itemsPerTable;
  const endIndex = Math.min(startIndex + itemsPerTable, results.length);

  const nextTable = () => {
    setCurrentTable((prevTable) => prevTable + 1);
  };

  const prevTable = () => {
    setCurrentTable((prevTable) => Math.max(prevTable - 1, 0));
  };

  //classes
  const [classLevel, setClassLevel] = useState("primary 1");

  const currentIndex = classList.indexOf(classLevel);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % classList.length;
    setClassLevel(classList[nextIndex]);
  };
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1) % classList.length;
    setClassLevel(classList[prevIndex]);
  };
  //
  const getGrade = (score) => {
    const grade = gradeSystem.find(
      (grade) => score >= grade.start && score <= grade.end
    );
    return grade
      ? { value: grade.value, color: grade.color }
      : { value: "", color: "" };
  };

  const currentClassStudents = results[classLevel] || [];

  const calculateAverages = () => {
    const averages = {};

    currentClassStudents.forEach((student) => {
      Object.entries(student.scores).forEach(([subject, score]) => {
        if (
          subject !== "Student" &&
          subject !== "Average" &&
          subject !== "Position"
        ) {
          if (!averages[subject]) {
            averages[subject] = {
              total: score,
              count: 1,
            };
          } else {
            averages[subject].total += score;
            averages[subject].count++;
          }
        }
      });
    });

    Object.entries(averages).forEach(([subject, data]) => {
      averages[subject] = data.total / data.count;
    });

    return averages;
  };

  const averageScores = calculateAverages();
  const subjects = Object.keys(averageScores);

  return (
    <Wrapper>
      <Header>
        <Title>
          {classLevel} /{resultTitle}/Mastersheet
        </Title>
        <Buttons>
          <FontAwesome
            onClick={handleDropDown}
            icon={isOpen ? faChevronUp : faChevronDown}
          />
          <Pagination onNext={handleNext} onPrevious={handlePrevious} />
        </Buttons>
      </Header>

      <Container>
        <Table>
          <TableHead>
            <TableHeadCell>name</TableHeadCell>
            {subjects.map((subject, i) => (
              <TableHeadCell key={i} score={averageScores[subject]}>
                {subject}
                <Span>{averageScores[subject]}</Span>
              </TableHeadCell>
            ))}
            <TableHeadCell>Average</TableHeadCell>
            <TableHeadCell>Position</TableHeadCell>
          </TableHead>
          <TableBody>
            {currentClassStudents.map((student, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell>{student.name}</TableCell>
                  {Object.values(student.scores).map((score, j) => (
                    <TableCell key={j}>{score}</TableCell>
                  ))}
                </TableRow>
                {isOpen && student.scores && (
                  <TableRow>
                    <TableCell></TableCell>
                    {Object.values(student.scores).map((score, k) => {
                      const { value: gradeValue, color } = getGrade(
                        Number(score)
                      );
                      return (
                        <TableCell key={k} style={{ color: color }}>
                          {gradeValue}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default Mastersheet;

const classList = [
  "primary 1",
  "primary 2",
  "primary 3",
  "primary 4",
  "primary 5",
  "jss1",
  "jss2",
  "jss3",
  "ss1",
  "ss2",
  "ss3",
];

const gradeSystem = [
  { start: 70, end: 100, value: "A", color: "green" },
  { start: 60, end: 69, value: "B", color: "blue" },
  { start: 55, end: 59, value: "C", color: "orange" },
  { start: 45, end: 54, value: "D", color: "yellow" },
  { start: 35, end: 44, value: "E", color: "purple" },
  { start: 0, end: 34, value: "F", color: "red" },
];

const results = {
  "primary 1": [
    {
      name: "John",
      scores: {
        english: 40,
        biology: 65,
        geography: 72,
        "social studies": 68,
        french: 30,
        maths: 45,
        chemistry: 70,
        physics: 55,
        history: 60,
        "computer science": 75,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Emily",
      scores: {
        english: 85,
        biology: 35,
        geography: 78,
        "social studies": 80,
        french: 75,
        maths: 30,
        chemistry: 68,
        physics: 82,
        history: 23,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Michael",
      scores: {
        english: 70,
        biology: 65,
        geography: 75,
        "social studies": 72,
        french: 80,
        maths: 92,
        chemistry: 78,
        physics: 88,
        history: 62,
        "computer science": 80,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Sophia",
      scores: {
        english: 88,
        biology: 50,
        geography: 75,
        "social studies": 70,
        french: 85,
        maths: 33,
        chemistry: 82,
        physics: 85,
        history: 68,
        "computer science": 92,
      },
      Average: "",
      Position: "",
    },
    {
      name: "William",
      scores: {
        english: 75,
        biology: 68,
        geography: 80,
        "social studies": 85,
        french: 90,
        maths: 85,
        chemistry: 70,
        physics: 78,
        history: 72,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Olivia",
      scores: {
        english: 82,
        biology: 75,
        geography: 85,
        "social studies": 82,
        french: 85,
        maths: 42,
        chemistry: 80,
        physics: 22,
        history: 70,
        "computer science": 90,
      },
      Average: "",
      Position: "",
    },
    {
      name: "James",
      scores: {
        english: 68,
        biology: 70,
        geography: 80,
        "social studies": 85,
        french: 90,
        maths: 15,
        chemistry: 68,
        physics: 80,
        history: 75,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Emma",
      scores: {
        english: 90,
        biology: 78,
        geography: 70,
        "social studies": 65,
        french: 80,
        maths: 85,
        chemistry: 72,
        physics: 80,
        history: 68,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
  ],
  "primary 2": [
    {
      name: "John",
      scores: {
        english: 40,
        biology: 65,
        geography: 72,
        "social studies": 68,
        french: 30,
        maths: 45,
        chemistry: 70,
        physics: 55,
        history: 60,
        "computer science": 75,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Emily",
      scores: {
        english: 85,
        biology: 35,
        geography: 78,
        "social studies": 80,
        french: 75,
        maths: 30,
        chemistry: 68,
        physics: 82,
        history: 23,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Michael",
      scores: {
        english: 70,
        biology: 65,
        geography: 75,
        "social studies": 72,
        french: 80,
        maths: 92,
        chemistry: 78,
        physics: 88,
        history: 62,
        "computer science": 80,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Sophia",
      scores: {
        english: 88,
        biology: 50,
        geography: 75,
        "social studies": 70,
        french: 85,
        maths: 33,
        chemistry: 82,
        physics: 85,
        history: 68,
        "computer science": 92,
      },
      Average: "",
      Position: "",
    },
    {
      name: "William",
      scores: {
        english: 75,
        biology: 68,
        geography: 80,
        "social studies": 85,
        french: 90,
        maths: 85,
        chemistry: 70,
        physics: 78,
        history: 72,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Olivia",
      scores: {
        english: 82,
        biology: 75,
        geography: 85,
        "social studies": 82,
        french: 85,
        maths: 42,
        chemistry: 80,
        physics: 22,
        history: 70,
        "computer science": 90,
      },
      Average: "",
      Position: "",
    },
    {
      name: "James",
      scores: {
        english: 68,
        biology: 70,
        geography: 80,
        "social studies": 85,
        french: 90,
        maths: 15,
        chemistry: 68,
        physics: 80,
        history: 75,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
    {
      name: "Emma",
      scores: {
        english: 90,
        biology: 78,
        geography: 70,
        "social studies": 65,
        french: 80,
        maths: 85,
        chemistry: 72,
        physics: 80,
        history: 68,
        "computer science": 85,
      },
      Average: "",
      Position: "",
    },
  ],
  "primary 3": [],
};
