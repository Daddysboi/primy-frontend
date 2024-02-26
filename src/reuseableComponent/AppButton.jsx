import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Button = styled.button`
  // Base styles
  background: ${(props) => props.backgroundColor || "purple"};
  border: none;
  padding: ${(props) => (props.small ? "0.3rem 1rem" : "0.5rem 2rem")};
  border-radius: 0.5rem;
  color: ${(props) => props.textColor || "#fff"};
  margin-top: 0.8rem;
  border: 1px solid ${(props) => props.borderColor || "purple"};
  cursor: pointer;
  transition: all 0.3s ease;

  // Hover styles
  &:hover {
    background: transparent;
    color: ${(props) => props.hoverColor || "purple"};
    border-color: ${(props) => props.hoverColor || "purple"};
  }

  // Additional styles based on props
  ${(props) =>
    props.outline &&
    css`
      background: transparent;
      color: ${(props) => props.backgroundColor || "purple"};
      &:hover {
        background: ${(props) => props.hoverColor || "transparent"};
        color: ${(props) => props.hoverColor || "purple"};
      }
    `}

  // Disabled styles
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AppButton = ({
  children,
  backgroundColor,
  textColor,
  borderColor,
  hoverColor,
  small,
  outline,
  disabled,
  type,
  ...props
}) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      hoverColor={hoverColor}
      small={small}
      outline={outline}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  small: PropTypes.bool,
  outline: PropTypes.bool,
};

export default AppButton;
