import React, { useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";

import Button from "../../../../components/Button";
import AppInput from "../../../../components/Input";

const Header = styled.div`
  height: 60px;
  width: 100%;
  border: 1px solid #dfdfdf;
  margin: 10px;
  &:hover {
    background-color: #bdc6ce;
    color: white;
    cursor: pointer;
  }
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #666666;
`;

const Input = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Td = styled.td`
  cursor: pointer;
`;

const Exams = () => {
  const [results, setResults] = useState([]);
  const [edited, setEdited] = useState([]);

  const acceptableFileTypes =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

  const handleFileUpload = (e) => {
    const csvFile = e.target.files[0];

    if (csvFile) {
      Papa.parse(csvFile, {
        skipEmptyLines: true,
        header: true,
        complete: function (results) {
          setResults(results.data);
          setEditedResults(results.data);
        },
      });
    }
  };

  const handleSubmit = () => {
    console.log("Edited results data:", editedResults);
  };

  return (
    <div>
      <h2>Exam Result Sheet</h2>
      <Header>
        <Label htmlFor="csvFile">choose a file (csv, xls)</Label>
        <Input
          type="file"
          id="csvFile"
          accept={acceptableFileTypes}
          onChange={handleFileUpload}
        />
      </Header>
      {results.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>English</th>
              <th>Biology</th>
              <th>Geography</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <Td>{row.name}</Td>
                <Td onClick={(e) => setEdited(row.english)}>{row.english}</Td>
                <Td onClick={(e) => setEdited(row.biology)}>{row.biology}</Td>
                <Td onClick={(e) => setEdited(row.geography)}>
                  {row.geography}
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <AppInput
        name="edited"
        value={edited}
        placeholder="edit"
        onChange={(e) => setEdited(e.target.value)}
      />
      <Button onClick={handleSubmit} text="Submit" />
    </div>
  );
};

export default Exams;
