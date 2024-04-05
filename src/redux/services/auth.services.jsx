import axiosClient from "../../middleware/axiosClient";

import { LOGIN, REGISTER, SEND_OTP, RESET_PASSWORD } from "./CONSTANTS";

export const Signin = async ({ email, password }) => {
  const loginData = { email, password };
  const resp = await axiosClient.post(`${LOGIN}`, loginData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = resp.data;
  return data;
};

export const SendOtp = async ({ email }) => {
  const otpData = {
    email,
  };
  const response = await axiosClient.post(`${SEND_OTP}`, otpData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

export const Register = async ({
  firstName,
  lastName,
  email,
  password,
  role,
  otp,
}) => {
  const registerData = {
    firstName,
    lastName,
    email,
    password,
    role,
    otp,
  };

  const response = await axiosClient.post(
    `${REGISTER}`, //example
    registerData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const RequestResetPassword = async ({ email, redirectUrl }) => {
  const details = { email, redirectUrl };
  const response = await axiosClient.post(
    `${REQUEST_PASSWORD_RESET}`,
    details,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const ResetPassword = async ({ userId, resetString, newPassword }) => {
  const details = { userId, resetString, newPassword };
  const response = await axiosClient.post(`${RESET_PASSWORD}`, details, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};
