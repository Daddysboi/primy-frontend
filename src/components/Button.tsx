'use client';

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: keyof typeof VARIANT;
}

const VARIANT = {
  blue: "flex items-center justify-center text-base gap-1 bg-edu-blue text-white rounded-md text-center py-3 hover:opacity-80 active:bg-blue-900  active:opacity-100 ease-linear duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-500 disabled:bg-gray-500 px-7",
  white:
    " flex items-center justify-center text-base gap-1 bg-white rounded-md text-center py-3 hover:bg-slate-200 ease-linear duration-200 text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black px-7",
};

const Button = ({ className, variant, children, ...props }: ButtonProps) => {
  return (
    <button className={twMerge(VARIANT[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;