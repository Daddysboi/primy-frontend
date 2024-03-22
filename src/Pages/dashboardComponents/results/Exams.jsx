import React, { useState } from "react";
import { usePapaParse } from "react-papaparse";

const Exams = () => {
  const [results, setResults] = useState([]);
  const [editedResults, setEditedResults] = useState([]);

  // Using usePapaParse hook to parse the CSV file
  const { data } = usePapaParse();

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);

    // Create a new FileReader to read the file content
    const reader = new FileReader();

    // Set up an onload event handler to execute when the file reading is completed
    reader.onload = (e) => {
      // Get the string data of the file
      const fileContent = e.target.result;
      console.log("String data of the file:", fileContent);

      // Parse the CSV content using PapaParse
      const parsedData = Papa.parse(fileContent, { header: true }).data;
      console.log("Parsed CSV data:", parsedData);

      // Setting the parsed data to results state
      setResults(
        parsedData.map((row, index) => ({
          id: index + 1,
          name: row["Student Name"], // Assuming the header contains "Student Name"
          grades: [
            Number(row["English"]),
            Number(row["Biology"]),
            Number(row["Geography"]),
          ], // Converting grades to numbers
          remarks: "",
          status: "",
        }))
      );
      // Also setting the parsed data to editedResults state
      setEditedResults(
        parsedData.map((row, index) => ({
          id: index + 1,
          name: row["Student Name"],
          grades: [
            Number(row["English"]),
            Number(row["Biology"]),
            Number(row["Geography"]),
          ],
          remarks: "",
          status: "",
        }))
      );
    };

    // Read the content of the uploaded file as text
    reader.readAsText(file);
  };

  const handleChange = (e, studentId, gradeIndex) => {
    const updatedResults = results.map((student) => {
      if (student.id === studentId) {
        const updatedGrades = [...student.grades];
        updatedGrades[gradeIndex] = parseInt(e.target.value);
        return { ...student, grades: updatedGrades };
      }
      return student;
    });
    setResults(updatedResults);
  };

  const handleSubmit = () => {
    console.log("Edited results data:", editedResults);
  };

  return (
    <div>
      <h2>Exam Result Sheet</h2>
      <input
        type="file"
        onChange={(e) => handleFileUpload(e.target.files[0])}
      />

      <table>
        {/* Table header */}
        <thead>
          <tr>
            <th>Student Name</th>
            <th>English</th>
            <th>Biology</th>
            <th>Geography</th>
            <th>Total</th>
            <th>Remarks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Table body */}
          {results.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              {student.grades.map((grade, index) => (
                <td key={index}>
                  <input
                    type="number"
                    value={grade}
                    onChange={(e) => handleChange(e, student.id, index)}
                  />
                </td>
              ))}
              <td>{student.grades.reduce((a, b) => a + b, 0)}</td>
              <td>
                <input
                  type="text"
                  value={student.remarks}
                  onChange={(e) =>
                    setEditedResults((prev) =>
                      prev.map((s) =>
                        s.id === student.id
                          ? { ...s, remarks: e.target.value }
                          : s
                      )
                    )
                  }
                />
              </td>
              <td>
                <select
                  value={student.status}
                  onChange={(e) =>
                    setEditedResults((prev) =>
                      prev.map((s) =>
                        s.id === student.id
                          ? { ...s, status: e.target.value }
                          : s
                      )
                    )
                  }
                >
                  <option value="">Select Status</option>
                  <option value="promoted">Promoted</option>
                  <option value="repeat">Repeat</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Exams;
