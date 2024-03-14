import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { primaryColors } from "../assets/Colors";

const Button = styled.button`
  height: 2.2rem;
  background-color: ${(props) => props.theme.primaryColor}; //for theme testig
  background: ${(props) => props.backgroundColor || primaryColors.Purple};
  border: none;
  padding: ${(props) => (props.small ? "0.5rem 1rem" : "0.5rem 2rem")};
  border-radius: 0.5rem;
  color: ${(props) => props.textColor || "#fff"};
  border: 1px solid ${(props) => props.borderColor || primaryColors.Purple};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${(props) => props.hoverColor || primaryColors.Purple};
    border-color: ${(props) => props.hoverColor || primaryColors.Purple};
  }

  ${(props) =>
    props.outline &&
    css`
      background: transparent;
      color: ${(props) => props.backgroundColor || primaryColors.Purple};
      &:hover {
        background: ${(props) => props.hoverColor || "transparent"};
        color: ${(props) => props.hoverColor || primaryColors.Purple};
      }
    `}

  // Disabled styles
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AppButton = ({
  text,
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
      {text}
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
