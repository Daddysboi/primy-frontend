import axiosClient from "../../utils/axiosClient";

import { GET_USER_BY_ID } from "./CONSTANTS";

export const GetUserById = async (userId) => {
  const id = JSON.parse(userId);

  // Created this so that i can later pass roles into the url for processing requests
  var url = "users";
  switch (user.role) {
    case "student":
      url = "students";
      break;
    case "teacher":
      url = "teachers";
      break;
    case "admin":
      url = "users";
      break;
  }

  const response = await axiosClient.get(`${GET_USER_BY_ID}/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

// NOTE: "Access-Control-Allow-Origin": "*". This header is related to Cross-Origin Resource Sharing (CORS) and specifies that any origin is allowed to access the resource. This header is typically set on the server-side, so including it in the request here might not be necessary unless you're explicitly trying to override CORS restrictions during development/testing.
