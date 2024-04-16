import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { primaryColors } from "../assets/Colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  text-transform: uppercase;
`;

const Table = styled.table`
  width: 60rem;
  height: 30rem;
  text-align: center;
  border-spacing: 1rem 0;
  border-collapse: collapse;
`;

const Th = styled.th`
  margin: 0;
  max-width: 1rem;
  max-height: 6rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  border: 1px solid #c9c7c7;
  padding: 0;
  position: relative;
  font-size: 0.8rem;
  background: linear-gradient(
    to top,
    ${({ color }) => color} ${({ score }) => score}%,
    #ffffff ${({ score }) => score}%
  );
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

const TdSScore = styled.td`
  border: 1px solid #c9c7c7;
  background-color: #ffffff;
`;

const Td = styled.td`
  border: 1px solid #c9c7c7;
  border-bottom: 2px solid #000000;
  background-color: #ffffff;
`;

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
    <Container>
      <Header>
        <Title>
          {classLevel} /{resultTitle}/Mastersheet
        </Title>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrevious}>Previous</button>
      </Header>
      <Table>
        <thead>
          <tr>
            <Th>name</Th>
            {subjects.map((subject, i) => (
              <Th
                key={i}
                score={averageScores[subject]}
                color={primaryColors.Green}
              >
                {subject}
                <Span>{averageScores[subject]}</Span>
              </Th>
            ))}
            <Th>Average</Th>
            <Th>Position</Th>

            <FontAwesome
              onClick={handleDropDown}
              icon={isOpen ? faChevronUp : faChevronDown}
            />
          </tr>
        </thead>
        <tbody>
          {currentClassStudents.map((student, i) => (
            <React.Fragment key={i}>
              <tr>
                <TdSScore>{student.name}</TdSScore>
                {Object.values(student.scores).map((score, j) => (
                  <TdSScore key={j}>{score}</TdSScore>
                ))}
              </tr>
              {isOpen && student.scores && (
                <tr>
                  <Td></Td>
                  {Object.values(student.scores).map((score, k) => {
                    const { value: gradeValue, color } = getGrade(
                      Number(score)
                    );
                    return (
                      <Td key={k} style={{ color: color }}>
                        {gradeValue}
                      </Td>
                    );
                  })}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      <div>
        <button onClick={nextTable}>Next</button>
        <button onClick={prevTable}>Previous</button>
      </div>
    </Container>
  );
};

export default Mastersheet;
