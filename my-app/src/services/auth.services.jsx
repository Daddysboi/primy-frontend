import axios from "axios";

import { LOGIN, REGISTER, SEND_OTP } from "../services/CONSTANTS";

export const Signin = async ({ email, password }) => {
  const loginData = { email, password };
  const resp = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${LOGIN}`,
    loginData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = resp.data;
  return data;
};

export const SendOtp = async ({ email }) => {
  const otpData = {
    email,
  };
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${SEND_OTP}`,
    otpData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const Register = async ({ email, password, role, otp }) => {
  const registerData = {
    email,
    password,
    role,
    otp,
  };

  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${REGISTER}`, //example
    registerData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};
