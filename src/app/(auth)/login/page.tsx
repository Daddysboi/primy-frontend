'use client';

import Link from "next/link";

import { Input } from "../../../components/thirdparty/input";
import Button from "../../../components/Button";
import GoogleButton from "../../../components/GoogleButton";

const Login = () => {
  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-10 space-y-3 mt-6 sm:mx-32 md:mx-0 rounded-sm ">
      <>
        <h3 className="text-sm">
          Dont have an account?{" "}
          <Link className="font-semibold" href="/signup">
            Sign Up
          </Link>
        </h3>
      </>

      <GoogleButton onClick={() => {}} />

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

      <form onSubmit={() => {}} className="flex flex-col space-y-3 ">
        <Input label="Email" placeholder="" />

        <div>
          <Input label="Password" placeholder="" type="password" />

          <span className="text-center">
            <p className="text-sm pt-2">
              Forgot Password?{" "}
              <Link className="font-semibold" href="/forgot-password">
                Reset it
              </Link>
            </p>
          </span>
        </div>

        <Button variant="blue">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
