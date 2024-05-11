import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Table } from "flowbite-react";

import Button from "../../../../components/Button";
import AppInput from "../../../../components/Input";
import { FaCloudUploadAlt } from "react-icons/fa";

const Container = styled.div`
  display: inline-flex;
  gap: 2rem;
  margin: 1rem 0;
`;

const Header = styled.h1`
  text-transform: capitalize;
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
  white-space: nowrap;
  font-weight: 500;
  padding: 0.5rem;
`;

const Text = styled.div`
  margin-top: 1rem;
  font-size: 0.7rem;
  color: red;
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

  const handleSubmit = (values) => {
    console.log("Edited results data:", values.edited);
  };

  return (
    <div>
      <Formik initialValues={{ edited: "" }} onSubmit={handleSubmit}>
        <Form>
          <Header>Please, Upload exams</Header>
          <Container>
            <AppInput
              type="file"
              id="csvFile"
              accept={acceptableFileTypes}
              onChange={handleFileUpload}
              label="Choose a file (CSV or XLS)"
              icon={<FaCloudUploadAlt />}
            />

            <Field
              as={AppInput}
              name="edited"
              value={edited}
              placeholder="edit"
              onChange={(e) => setEdited(e.target.value)}
            />
            <ErrorMessage name="edited" component="div" />
            <div>
              <Button type="submit" text="Submit" />
            </div>
          </Container>
          {results.length ? (
            <>
              <Table>
                <TableHead>
                  <TableHeadCell>Firstname</TableHeadCell>
                  <TableHeadCell>Lastname</TableHeadCell>
                  <TableHeadCell>English</TableHeadCell>
                  <TableHeadCell>Biology</TableHeadCell>
                  <TableHeadCell>Geography</TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableHead>
                <TableBody>
                  {results.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell onClick={() => setEdited(row.firstname)}>
                        {row.firstname}
                      </TableCell>
                      <TableCell onClick={() => setEdited(row.lastname)}>
                        {row.lastname}
                      </TableCell>
                      <TableCell onClick={() => setEdited(row.english)}>
                        {row.english}
                      </TableCell>
                      <TableCell onClick={() => setEdited(row.biology)}>
                        {row.biology}
                      </TableCell>
                      <TableCell onClick={() => setEdited(row.geography)}>
                        {row.geography}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Text>Click any cell to edit </Text>
            </>
          ) : null}
        </Form>
      </Formik>
    </div>
  );
};

export default Exams;
