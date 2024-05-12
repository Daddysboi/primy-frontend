import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectInput from "../components/SelectInput";

const Sort = ({ options, onSort }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSort(value);
  };

  return (
    <>
      <SelectInput
        options={options}
        onChange={handleChange}
        value={selectedOption}
        select="Sort by..."
      />
    </>
  );
};

Sort.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Sort;
