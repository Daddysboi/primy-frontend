'use client';

import { Otptimer } from "otp-timer-ts";
import OTPInput from "../../../components/OtpInput";
import Button from "../../../components/Button";

interface Otp {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Otp = ({ onNext, onChange }: Otp) => {
  return <OneTimePassword onNext={onNext} />;
};

export default Otp;

// One Time Reusable Component
interface OneTimePasswordProps {
  onNext: () => void;
}

export const OneTimePassword = ({ onNext }: OneTimePasswordProps) => {
  const handleResend = () => {
    console.log("resending password");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6">
        <p>Inpute code below</p>

        <div className="relative mb-4">
          <OTPInput />
          <div className="">
            <Otptimer
              text=""
              minutes={0}
              seconds={30}
              showSpinner={true}
              onResend={handleResend}
              containerClass="flex items-center justify-end"
              timerClass="text-xs"
              buttonContainerClass="flex items-center justify-end text-xs text-edu-blue font-semibold"
              buttonClass="hover:underline"
            />
          </div>
        </div>

        <Button variant="blue" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
};
