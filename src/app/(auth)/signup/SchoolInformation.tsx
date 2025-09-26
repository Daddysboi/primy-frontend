'use client';

import React, { useState, ChangeEvent } from "react";

import { Input } from "../../../components/thirdparty/input";
import Button from "../../../components/Button";

interface SchoolInformationProps {
  onNext: () => void;
  onVerified: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const SchoolInformation: React.FC<SchoolInformationProps> = ({
  onNext,
  onChange,
  onVerified,
}) => {
  const [formData, setFormData] = useState({
    organization: "",
    phoneNumber: "",
    message: "",
  });
  const [googleVerified, setGoogleVerified] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
    <div onSubmit={() => {}} className="flex flex-col justify-center gap-2">
      <>
        <Input label="School Name" placeholder=" " />
        <Input label="School Address" placeholder=" " />
        <Input label="Position" placeholder=" " />
      </>

      <Button variant="blue" onClick={googleVerified ? onVerified : onNext}>
        Next
      </Button>
    </div>
  );
};

export default SchoolInformation;
