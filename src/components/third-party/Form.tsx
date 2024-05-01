import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function SignupForm() {
  const [action, setAction] = useState("Sign Up");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div
        id="Sign Up"
        className=" flex space-x-5 font-bold text-xl text-neutral-800 dark:text-neutral-200"
      >
        <button
          className={cn("relative group/btn  text-black ", {
            "text-gray-300": action !== "Sign Up",
          })}
          type="submit"
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
          <BottomGradient />
        </button>

        <button
          className={cn("relative group/btn  text-black ", {
            "text-gray-200": action !== "Login",
          })}
          type="submit"
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
          <BottomGradient />
        </button>
      </div>
      <form className="my-8" onSubmit={handleSubmit}>
        {action === "Sign Up" && (
          <div className="flex flex-row md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
        )}

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        {action === "Sign Up" && (
          <LabelInputContainer className="mb-8">
            <Label htmlFor="password"> Confirm password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>
        )}
        <div>
          <button
            className={cn(
              "relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
              "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600"
            )}
            type="submit"
            onClick={() => {}}
          >
            {action} &rarr;
            <BottomGradient />
          </button>
        </div>

        {action === "Login" && (
          <p className="text-small py-2">
            Forgot Password?{" "}
            <Link to="/" className="px-1 text-blue-500">
              click here!
            </Link>
          </p>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};
