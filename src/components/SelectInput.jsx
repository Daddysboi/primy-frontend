import React from "react";
import { styled } from "styled-components";

import { primaryColors } from "../assets/Colors";

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  opacity: 0.8;
`;

const Select = styled.select`
  width: ${(props) => props.width || "100%"};
  min-height: 35px;
  min-width: 5rem;
  height: ${(props) => props.height || "35px"};
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.borderColor || primaryColors.LightPurple};
  outline: none;
  background: transparent;
  font-size: 0.8rem;
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const Option = styled.option`
  font-size: 13px;
  opacity: 0.5;
`;

const ErrorContainer = styled.div`
  width: 100%;
  position: absolute;
  color: #ff5959;
  font-size: 10px;
  font-weight: 400;
`;

const AppSelectInput = ({
  label,
  value,
  onChange,
  error,
  options,
  optionList,
  borderColor,
  height,
  name,
  selectType,
  width,
  select = "Select",
  required = false,
}) => {
  if (selectType === "category") {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <Select
          name={name}
          value={value}
          borderColor={borderColor}
          height={height}
          onChange={onChange}
          required={required}
          width={width}
        >
          <Option value="">{select}</Option>
          {Object.entries(optionList).map(([category, options]) => (
            <optgroup key={category} label={category.toUpperCase()}>
              {options.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </optgroup>
          ))}
        </Select>
      </Container>
    );
  }
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        value={value}
        borderColor={borderColor}
        height={height}
        onChange={onChange}
        required={required}
        width={width}
      >
        <Option value="">{select}</Option>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </Container>
  );
};

export default AppSelectInput;
