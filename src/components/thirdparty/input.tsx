'use client';

import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { cn } from "../../utils/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  value?: string;
  id?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, onChange, value, id, label, ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const radius = 1000;

    const [visible, setVisible] = React.useState(false);
    const [Passwordvisibility, setPasswordVisibility] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    if (type === "password") {
      return (
        <InputContainer className="">
          <Label htmlFor="">{label}</Label>
          <motion.div
            style={{
              background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-300),
          transparent 80%
        )
      `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-lg transition duration-300 group/input"
          >
            <div className="relative">
              <input
                type={Passwordvisibility ? "text" : "password"}
                onChange={onChange}
                value={value}
                id={id}
                className={cn(
                  `flex h-12 w-full border rounded-sm px-3 py-2 text-sm file:border-0 file:bg-transparent  file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
                  className
                )}
                ref={ref}
                {...props}
              />
              <span
                className="absolute right-4 top-4 cursor-pointer text-gray-400"
                onClick={() => setPasswordVisibility((prev) => !prev)}
              >
                {Passwordvisibility ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </motion.div>
        </InputContainer>
      );
    }

    return (
      <InputContainer className="">
        <Label htmlFor="">{label}</Label>
        <motion.div
          style={{
            background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-300),
          transparent 80%
        )
      `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="p-[2px] rounded-lg transition duration-300 group/input"
        >
          <input
            type={type}
            onChange={onChange}
            value={value}
            id={id}
            // style={{
            //   boxShadow: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
            // }}
            className={cn(
              `flex h-12 w-full border rounded-sm px-3 py-2 text-sm file:border-0 file:bg-transparent  file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400
           `,

              className
            )}
            ref={ref}
            {...props}
          />
        </motion.div>
      </InputContainer>
    );
  }
);
Input.displayName = "Input";

export { Input };

interface InputContainerProps {
  children: React.ReactNode;
  className?: string;
}

const InputContainer: React.FC<InputContainerProps> = ({
  children,
  className,
}) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};
