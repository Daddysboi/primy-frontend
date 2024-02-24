import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div>
        <label style={{ color: labelColor }} htmlFor="">
          {label}
        </label>
        <div>
          <input
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

          <div
            style={{
              position: "absolute",
              right: "12px",
              top: "12px",
            }}
            onClick={togglePasswordVisibility}
          >
            {passwordVisibility ? <FaEye /> : <FaEyeSlash />}
          </div>

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
        </div>
        {error && <div>{error}</div>}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label style={{ color: labelColor }} htmlFor="">
            {label}
          </label>
          <textarea
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
        {error && <div>{error}</div>}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div>
        <label style={{ color: labelColor }} htmlFor={name}>
          {label}
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={{ width, height, color, border, background, display }}
          {...props}
        >
          {props.children}
        </select>
        {error && <div>{error}</div>}
      </div>
    );
  }
  return (
    <div>
      <label style={{ color: labelColor }} htmlFor="">
        {label}
      </label>
      <input
        type={type}
        accept={accept}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{ width, height, color, border, background, display }}
        disabled={disabled}
        {...props}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default AppInput;
