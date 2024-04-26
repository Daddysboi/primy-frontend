import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import AppButton from "./Button";
import { primaryColors } from "../assets/Colors";

const Pagination = ({ onNext, onPrevious }) => {
  return (
    <span>
      <AppButton
        icon={<FaArrowCircleRight />}
        onClick={onNext}
        fontSize="1.51rem"
        small
        display="none"
        textColor={primaryColors.Purple}
      />
      <AppButton
        icon={<FaArrowCircleLeft />}
        onClick={onPrevious}
        small
        fontSize="1.5rem"
        display="none"
        textColor={primaryColors.Purple}
      />
    </span>
  );
};

export default Pagination;
