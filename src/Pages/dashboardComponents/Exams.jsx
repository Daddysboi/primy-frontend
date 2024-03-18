import React, { useState } from "react";

const Exams = () => {
  // Sample student data
  const initialStudents = [
    { id: 1, name: "Student 1", grades: [85, 90, 75], remarks: "", status: "" },
    { id: 2, name: "Student 2", grades: [70, 80, 65], remarks: "", status: "" },
    // Add more students as needed
  ];

  const [students, setStudents] = useState(initialStudents);

  // Function to calculate total grade for a student
  const calculateTotal = (grades) => {
    return grades.reduce((total, grade) => total + grade, 0);
  };

  // Function to update student's remarks
  const updateRemarks = (studentId, remarks) => {
    setStudents(
      students.map((student) => {
        if (student.id === studentId) {
          return { ...student, remarks };
        }
        return student;
      })
    );
  };

  // Function to set student status
  const setStudentStatus = (studentId, status) => {
    setStudents(
      students.map((student) => {
        if (student.id === studentId) {
          return { ...student, status };
        }
        return student;
      })
    );
  };

  return (
    <div>
      <h2>Exam Result Sheet</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grades</th>
            <th>Total</th>
            <th>Remarks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grades.join(", ")}</td>
              <td>{calculateTotal(student.grades)}</td>
              <td>
                <input
                  type="text"
                  value={student.remarks}
                  onChange={(e) => updateRemarks(student.id, e.target.value)}
                />
              </td>
              <td>
                <select
                  value={student.status}
                  onChange={(e) => setStudentStatus(student.id, e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="promoter">Promoter</option>
                  <option value="repeat">Repeat</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exams;
