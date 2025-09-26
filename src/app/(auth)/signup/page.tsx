'use client';

import React, { useState } from "react";

import PersonalInformation from "./PersonalInformation";
import SchoolInformation from "./SchoolInformation";
import Otp from "./Otp";
import SuccessMessage from "../../../components/SuccessMessage";
import { cn } from "../../../utils/utils";

const SignUpSteps = [
  "Personal Information",
  "School Information",
  "OTP",
  "Success",
];

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleGoogleVerified = () => {
    setCurrentStep(currentStep + 2);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div className="py-10">
      <div className="flex gap-3 items-center justify-center">
        {SignUpSteps.map((value, i) => (
          <div
            key={i}
            className="font-semibold flex gap-3 items-center justify-center"
          >
            <div
              className={cn(
                `flex items-center justify-center text-white h-5 w-5 rounded-[50%] bg-edu-blue`,
                {
                  "bg-[#00B998]": currentStep > i,
                }
              )}
            >
              {i + 1}
            </div>{" "}
            {currentStep - 1 === i && `${value}`}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-10 space-y-3 mt-6 sm:mx-32 md:mx-0 rounded-sm ">
        <div>
          {currentStep === 1 && (
            <PersonalInformation
              onNext={handleNextStep}
              onChange={handleFormDataChange}
            />
          )}
          {currentStep === 2 && (
            <SchoolInformation
              onNext={handleNextStep}
              onChange={handleFormDataChange}
              onVerified={handleGoogleVerified}
            />
          )}
          {currentStep === 3 && (
            <Otp onNext={handleNextStep} onChange={handleFormDataChange} />
          )}
          {currentStep === 4 && <SuccessMessage text="Sign up" />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
