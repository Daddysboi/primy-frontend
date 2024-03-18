import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { primaryColors } from "../assets/Colors";

const StyledInputContainer = styled.div`
  position: relative;
  /* margin-bottom: 12px; */
`;

const StyledLabel = styled.label`
  font-size: 0.65rem;
  letter-spacing: -0.01rem;
  position: relative;
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
  border-radius: 0.3rem;
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

const EyeIcon = styled.span`
  cursor: pointer;
  color: gray;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const StyledPasswordInput = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "42px"};
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.3rem;
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
  border-radius: 0.3rem;
  border: ${(props) =>
    props.border || `1px solid ${primaryColors.LightPurple}`};
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border: 1px solid rgb(194, 194, 194);
  }
`;

const AppInput = ({
  type,
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
  ...props
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility);
  };

  if (inputType === "password") {
    return (
      <StyledInputContainer>
        <StyledLabel style={{ color: labelColor }} htmlFor="">
          {label}
        </StyledLabel>
        <PasswordContainer>
          <StyledPasswordInput
            type={passwordVisibility ? "text" : "password"}
            name={name}
            value={value}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            width={width}
            height={height}
            eyeTop={eyeTop}
            ref={passwordRef}
            {...props}
          />
          {showEyeIcon ? (
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
          ) : (
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => {
                passwordRef.current.focus();
              }}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "gray",
              }}
            />
          )}
        </PasswordContainer>
      </StyledInputContainer>
    );
  }

  if (type === "textarea") {
    return (
      <StyledInputContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <StyledLabel style={{ color: labelColor }} htmlFor="">
            {label}
          </StyledLabel>
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
      </StyledInputContainer>
    );
  }

  return (
    <StyledInputContainer>
      <StyledLabel style={{ color: labelColor }} htmlFor="">
        {label}
      </StyledLabel>
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
    </StyledInputContainer>
  );
};

export default AppInput;
