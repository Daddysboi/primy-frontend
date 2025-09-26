'use client';

import Link from "next/link";

interface SuccessMessageProps {
  text: string;
}

const SuccessMessage = ({ text }: SuccessMessageProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm items-center text-center">
      <h3 className="font-bold ">
        {text}
        <br />
        Successful
      </h3>
      <img src="/assets/images/Auth/success.png" alt="success" className="w-[8rem]" />

      <p>
        Proceed to{" "}
        <Link className="font-semibold" href="/login">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SuccessMessage;