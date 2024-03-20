import React, { useState } from "react";
import { usePapaParse } from "react-papaparse";

const Exams = () => {
  const [students, setStudents] = useState([]);
  const [editedStudents, setEditedStudents] = useState([]);

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);

    usePapaParse(file, {
      complete: (parsedData) => {
        // Log the parsed data
        console.log("Parsed CSV data:", parsedData.data);
        // Update the state with the parsed data
        setStudents(
          parsedData.data.map((row, index) => ({
            id: index + 1,
            name: row[0], // Assuming first column contains student names
            grades: row.slice(1).map(Number), // Assuming subsequent columns contain grades
            remarks: "",
            status: "",
          }))
        );
      },
      header: true, // Assuming the CSV file has a header row
    });
  };

  console.log("Students state:", students);

  const handleChange = (e, studentId, gradeIndex) => {
    const updatedStudents = editedStudents.map((student) => {
      if (student.id === studentId) {
        const updatedGrades = [...student.grades];
        updatedGrades[gradeIndex] = parseInt(e.target.value);
        return { ...student, grades: updatedGrades };
      }
      return student;
    });
    setEditedStudents(updatedStudents);
  };

  const handleSubmit = () => {
    // Send editedStudents to backend
    console.log("Edited students data:", editedStudents);
  };

  return (
    <div>
      <h2>Exam Result Sheet</h2>
      <input
        type="file"
        onChange={(e) => handleFileUpload(e.target.files[0])}
      />

      <table>
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
          {editedStudents.map((student) => (
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
                    setEditedStudents((prev) =>
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
                    setEditedStudents((prev) =>
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
      <h2>Uploaded File Data</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>English</th>
            <th>Biology</th>
            <th>Geography</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              {student.grades.map((grade, index) => (
                <td key={index}>{grade}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exams;
