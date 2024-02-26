import React from "react";
import { styled } from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  opacity: 0.5;
`;

const Select = styled.select`
  width: 100%;
  min-height: 42px;
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.3rem;
  border: 1px solid rgba(223, 140, 82, 0.3);
  outline: none;
  background: transparent;

  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;
const Option = styled.option`
  font-size: 10px;
  color: #333;
  opacity: 0.5;
  background-color: #fff;
`;
const ErrorContainer = styled.div`
  width: 100%;
  position: absolute;
  color: #ff5959;
  font-size: 10px;
  font-weight: 400;
`;

const AppSelectInput = ({ label, value, onChange, error, options }) => {
  return (
    <SelectContainer>
      <Label htmlFor="role">{label}</Label>
      <Select name="role" value={value} onChange={onChange}>
        <Option value="">Select...</Option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </SelectContainer>
  );
};

export default AppSelectInput;
