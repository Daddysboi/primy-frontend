import React, { useState } from "react";
import PropTypes from "prop-types";

import courseList from "../data/courseList.json";

const SubjectSelection = ({ classLevel, onSelectSubject }) => {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSubjectSelect = (e) => {
    const selectedSubject = e.target.value;
    setSelectedSubject(selectedSubject);
    onSelectSubject(selectedSubject);
  };

  return (
    <div>
      <label>Select Subject:</label>
      <select value={selectedSubject} onChange={handleSubjectSelect}>
        <option value="">Select Subject</option>
        {Object.entries(classList.categories).map(([category, courses]) => (
          <optgroup key={category} label={category}>
            {Array.isArray(courses) ? (
              courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))
            ) : (
              <>
                {courses.art.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
                {courses.science.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </>
            )}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

SubjectSelection.propTypes = {
  classLevel: PropTypes.oneOf([
    "Pre-Nursery",
    "Nursery 1",
    "Nursery 2",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
    "JSS1",
    "JSS2",
    "JSS3",
    "SS1",
    "SS2",
    "SS3",
  ]).isRequired,
  onSelectSubject: PropTypes.func.isRequired,
};

export default SubjectSelection;
