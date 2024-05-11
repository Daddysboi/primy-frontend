import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

import { primaryColors } from "../assets/Colors";

const InputContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  position: relative;
  opacity: 0.8;
  color: ${(props) => props.labelColor || "inherit"};
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "42px"};
  background: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) =>
    props.border || `1px solid ${primaryColors.LightPurple}`};
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.5rem;
  outline: none;
  &::placeholder {
    opacity: 0.3;
    font-size: 0.9rem;
    display: flex;
  }
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const EyeIcon = styled.span`
  cursor: pointer;
  color: gray;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "42px"};
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: ${(props) =>
    props.border || `1px solid ${primaryColors.LightPurple}`};
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  &::placeholder {
    opacity: 0.3;
    font-size: 0.6rem;
    font-style: italic;
  }
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  border: ${(props) =>
    props.border || `1px solid ${primaryColors.LightPurple}`};
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const CheckboxAndRadioContainer = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxAndRadioLabel = styled.span`
  font-weight: 400;
  letter-spacing: -0.01rem;
  position: relative;
  color: ${(props) => props.labelColor || "inherit"};
  margin-left: 0.5rem;
`;

const Checkbox = styled.input`
  width: 100%;
  height: ${(props) => props.height || "42px"};
  background: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || "1px solid #421260"};
  padding: 0.5rem;
  box-sizing: border-box;
  display: inline;
  border-radius: 0.5rem;
  outline: none;
  accent-color: ${primaryColors.LightPurple};

  /* &:checked::after {
    content: "\u2713"; // Unicode character for checkmark
    font-size: 1rem;
    color:  ${primaryColors.LightPurple};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;

const RadioInput = styled.input`
  width: 100%;
  height: ${(props) => props.height || "42px"};
  background: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || "1px solid #421260"};
  padding: 0.5rem;
  box-sizing: border-box;
  display: inline;
  border-radius: 0.5rem;
  outline: none;
  accent-color: #9d2ce4;
`;

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 12rem;
`;

const FileInput = styled.input`
  opacity: 0;
  height: 3rem;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const FileLabel = styled.label`
  color: #666666;
  font-size: 0.6rem;
  position: absolute;
  top: 1.7rem;
`;

const FileIcon = styled.span`
  color: ${primaryColors.Purple};
  font-size: 2rem;
  position: absolute;
`;

const AppInput = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  inputType,
  label,
  accept,
  width,
  height,
  cols = "30",
  rows = "10",
  onBlur,
  labelColor,
  eyeTop,
  background,
  border,
  color,
  showEyeIcon = true,
  display,
  disabled,
  required = false,
  icon,
  ...props
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility);
  };

  if (inputType === "password") {
    return (
      <InputContainer>
        <Label style={{ color: labelColor }} htmlFor="">
          {label}
        </Label>
        <PasswordContainer>
          <PasswordInput
            type={passwordVisibility ? "text" : "password"}
            name={name}
            value={value}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            width={width}
            height={height}
            eyeTop={eyeTop}
            {...props}
          />
          <EyeIcon
            style={{
              position: "absolute",
              right: "12px",
              top: eyeTop || "12px",
            }}
            onClick={togglePasswordVisibility}
          >
            {passwordVisibility ? <FaEye /> : <FaEyeSlash />}
          </EyeIcon>
        </PasswordContainer>
      </InputContainer>
    );
  }

  if (type === "textarea") {
    return (
      <InputContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Label style={{ color: labelColor }} htmlFor="">
            {label}
          </Label>
          <StyledTextarea
            cols={cols}
            rows={rows}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </InputContainer>
    );
  }

  if (type === "checkbox") {
    return (
      <InputContainer>
        <CheckboxAndRadioContainer>
          <Checkbox
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            accept={accept}
            style={{ width, height, color, border, background, display }}
            disabled={disabled}
            id={name}
            {...props}
          />
          <CheckboxAndRadioLabel style={{ color: labelColor }} htmlFor={name}>
            {label}
          </CheckboxAndRadioLabel>
        </CheckboxAndRadioContainer>
        {error && <ErrorContainer>{error}</ErrorContainer>}
      </InputContainer>
    );
  }

  if (type === "radio") {
    return (
      <InputContainer>
        <CheckboxAndRadioContainer>
          <RadioInput
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            accept={accept}
            style={{ width, height, color, border, background, display }}
            disabled={disabled}
            id={name}
            {...props}
          />
          <CheckboxAndRadioLabel style={{ color: labelColor }} htmlFor={name}>
            {label}
          </CheckboxAndRadioLabel>
        </CheckboxAndRadioContainer>
        {error && <ErrorContainer>{error}</ErrorContainer>}
      </InputContainer>
    );
  }

  if (type === "file") {
    return (
      <FileInputContainer>
        <FileIcon>{icon}</FileIcon>
        <FileLabel style={{ color: labelColor }} htmlFor="">
          {label}
        </FileLabel>
        <FileInput
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          accept={accept}
          {...props}
        />

        {error && <ErrorContainer>{error}</ErrorContainer>}
      </FileInputContainer>
    );
  }

  return (
    <InputContainer>
      <Label style={{ color: labelColor }} htmlFor="">
        {label}
      </Label>
      <StyledInput
        type={type}
        accept={accept}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{ width, height, color, border, background, display }}
        disabled={disabled}
        required={required}
        {...props}
      />
    </InputContainer>
  );
};

export default AppInput;
