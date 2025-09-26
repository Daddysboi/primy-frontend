'use client';

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

import { Input } from "../../../components/thirdparty/input";
import Button from "../../../components/Button";
import GoogleButton from "../../../components/GoogleButton";

interface PersonalInformationProps {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  onNext,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-center bg-white gap-4 ">
      <>
        <h3 className="text-sm">
          Already have an account?{" "}
          <Link className="font-semibold" href="/login">
            Log In
          </Link>
        </h3>
      </>
      <GoogleButton onClick={() => {}} />
      <div onSubmit={() => {}} className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <svg
            width="500"
            height="1"
            viewBox="0 0 500 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="100%" y2="0.5" stroke="#7E8B9E" />
          </svg>
          <span className="mx-2 text-gray-400">or</span>
          <svg
            width="500"
            height="1"
            viewBox="0 0 500 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="100%" y2="0.5" stroke="#7E8B9E" />
          </svg>
        </div>

        <>
          <div className="flex gap-6">
            <Input label="First Name" />
            <Input label="Last Name" />
          </div>
          <Input label="Email" />
          <Input label="Password" type="password" />
          <Input label="Confirm Password" type="password" />
        </>

        <Button variant="blue" onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalInformation;
