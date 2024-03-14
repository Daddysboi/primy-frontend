import React, { useState } from "react";
import PropTypes from "prop-types";

const ClassSelection = ({ onSelectClass }) => {
  // Predefined list of classes
  const classLists = {
    prenursery: ["Kindergarten", "PreNursery", "Nursery 1", "Nursery 2"],
    primary: [
      "Primary 1",
      "Primary 2",
      "Primary 3",
      "Primary 4",
      "Primary 5",
      "Primary 6",
    ],
    "Junior secondary": ["JSS1", "JSS2", "JSS3"],
    "Senior secondary": ["SS1", "SS2", "SS3"],
  };

  // State to hold the selected class
  const [selectedClass, setSelectedClass] = useState("");

  // Handler function for class selection
  const handleClassSelect = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);
    onSelectClass(selectedClass);
  };

  return (
    <div>
      <h1>Subjects</h1>
      <div value={selectedClass} onChange={handleClassSelect}>
        {Object.entries(classLists).map(([category, classes]) => (
          <optgroup key={category} label={category.toUpperCase()}>
            {classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </optgroup>
        ))}
      </div>
    </div>
  );
};

ClassSelection.propTypes = {
  onSelectClass: PropTypes.func.isRequired,
};

export default ClassSelection;
