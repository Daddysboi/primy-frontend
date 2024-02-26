import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  position: relative;
  color: ${(props) => props.labelColor || "inherit"};
`;

const Input = styled.input`
  width: 100%;
  height: ${(props) => props.height || "42px"};
  background: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || "1px solid purple"};
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.3rem;
  outline: none;
  &::placeholder {
    opacity: 0.3;
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
  border-radius: 0.3rem;
  border: 1px solid purple;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const Select = styled.select`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "42px"};
  background: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || "1px solid purple"};
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  border-radius: 0.3rem;
  outline: none;
  color: ${(props) => props.color || "inherit"};

  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const ErrorContainer = styled.div`
  width: 100%;
  position: absolute;
  color: #ff5959;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  border: 1px solid purple;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const AppInput = ({
  type,
  accept,
  name,
  value,
  placeholder,
  onChange,
  error,
  inputType,
  label,
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
  display,
  disabled,
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
              top: "12px",
            }}
            onClick={togglePasswordVisibility}
          >
            {passwordVisibility ? <FaEye /> : <FaEyeSlash />}
          </EyeIcon>

          <FontAwesomeIcon
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "gray",
            }}
          />
        </PasswordContainer>
        {error && <ErrorContainer>{error}</ErrorContainer>}
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
          <Textarea
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
        {error && <ErrorContainer>{error}</ErrorContainer>}
      </InputContainer>
    );
  }

  if (type === "select") {
    return (
      <InputContainer>
        <Label style={{ color: labelColor }} htmlFor={name}>
          {label}
        </Label>
        <Select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={{ width, height, color, border, background, display }}
          {...props}
        >
          {props.children}
        </Select>
        {error && <ErrorContainer>{error}</ErrorContainer>}
      </InputContainer>
    );
  }
  return (
    <InputContainer>
      <Label style={{ color: labelColor }} htmlFor="">
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        accept={accept}
        style={{ width, height, color, border, background, display }}
        disabled={disabled}
        {...props}
      />
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </InputContainer>
  );
};

export default AppInput;
