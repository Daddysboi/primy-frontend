import React from "react";
import { styled } from "styled-components";

import { primaryColors } from "../assets/Colors";

const StyledSelectContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

const StyledLabel = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  opacity: 0.8;
`;

const StyledSelect = styled.select`
  width: ${(props) => props.width || "100%"};
  min-height: 35px;
  height: ${(props) => props.height || "35px"};
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.borderColor || primaryColors.LightPurple};
  outline: none;
  background: transparent;

  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const StyledOption = styled.option`
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
      <StyledSelectContainer>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledSelect
          name={name}
          value={value}
          borderColor={borderColor}
          height={height}
          onChange={onChange}
          required={required}
          width={width}
        >
          <StyledOption value="">{select}</StyledOption>
          {Object.entries(optionList).map(([category, options]) => (
            <optgroup key={category} label={category.toUpperCase()}>
              {options.map((option) => (
                <StyledOption key={option} value={option}>
                  {option}
                </StyledOption>
              ))}
            </optgroup>
          ))}
        </StyledSelect>
      </StyledSelectContainer>
    );
  }
  return (
    <StyledSelectContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect
        name={name}
        value={value}
        borderColor={borderColor}
        height={height}
        onChange={onChange}
        required={required}
        width={width}
      >
        <StyledOption value="">{select}</StyledOption>
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </StyledSelectContainer>
  );
};

export default AppSelectInput;
