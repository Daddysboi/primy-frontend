'use client';

import { twMerge } from "tailwind-merge";

const MaxWidth = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge("max-w-[80rem] mx-auto w-11/12", props.className)}
    />
  );
};

export default MaxWidth;