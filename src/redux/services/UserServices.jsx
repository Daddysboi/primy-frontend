import axiosClient from "../../services/api";

import {
  GET_USER_BY_ID,
  UPDATE_USER_PROFILE,
  UPDATE_USER_BANK_DETAILS,
  UPDATE_USER_CONTACT_DETAILS,
  UPDATE_USER_KYC_DETAILS,
  CHANGE_PASSWORD,
  TEACHERS,
  STUDENTS,
  USERS,
} from "../constants";

// NOTE: "Access-Control-Allow-Origin": "*". This header is related to Cross-Origin Resource Sharing (CORS) and specifies that any origin is allowed to access the resource. This header is typically set on the server-side, so including it in the request here might not be necessary unless you're explicitly trying to override CORS restrictions during development/testing.

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

export const UpdateUserProfile = async ({
  userId,
  firstName,
  lastName,
  phoneNumber,
  profilePicture,
}) => {
  const data = { userId, firstName, lastName, phoneNumber, profilePicture };
  const response = await axiosClient.patch(`${UPDATE_USER_PROFILE}`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

export const UpdateUserBankDetails = async ({
  userId,
  accountName,
  bankName,
  accountNumber,
  password,
}) => {
  const data = { userId, accountName, bankName, accountNumber, password };
  const response = await axiosClient.patch(
    `${UPDATE_USER_BANK_DETAILS}`,
    data,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const UpdateUserContactDetails = async ({
  userId,
  homeAddress,
  nearestLandmark,
  officeAddress,
  postalCode,
  proofOfAddress,
}) => {
  const data = {
    userId,
    homeAddress,
    nearestLandmark,
    officeAddress,
    postalCode,
    proofOfAddress,
  };
  const response = await axiosClient.patch(
    `${UPDATE_USER_CONTACT_DETAILS}`,
    data,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const UpdateUserKycDetails = async ({
  headShot,
  idType,
  idNumber,
  idCard,
  nextOfKinFullName,
  nextOfKinRelationship,
  nextOfKinContactNumber,
  bvn,
  userId,
}) => {
  const data = {
    headShot,
    idType,
    idNumber,
    idCard,
    nextOfKinFullName,
    nextOfKinRelationship,
    nextOfKinContactNumber,
    bvn,
    userId,
  };
  const response = await axiosClient.patch(`${UPDATE_USER_KYC_DETAILS}`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

export const UpdatePassword = async ({ userId, oldPassword, newPassword }) => {
  const details = { userId, oldPassword, newPassword };
  const response = await axiosClient.patch(`${CHANGE_PASSWORD}`, details, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

//create user
export const CreateUser = async (user, editing) => {
  if (editing) {
    if (user.role == "student") {
      const res = await axiosClient.put(`${STUDENTS}/${user.studentId}`, user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      return res.data;
    } else {
      const res = await axiosClient.put(`${TEACHERS}/${user.teacherId}`, user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      return res.data;
    }
  }
  console.log(user);

  const res = await axiosClient.post(`${USERS}`, user, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return res.data;
};

export const GetTeacherById = async (id) => {
  const res = await axiosClient.get(`${TEACHERS}/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export const GetStudentById = async (id) => {
  const res = await axiosClient.get(`${STUDENTS}/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export const GetAllTeachers = async () => {
  const res = await axiosClient.get(`${TEACHERS}/`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export const GetAllStudents = async () => {
  const res = await axiosClient.get(`${STUDENTS}/`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export const DeleteStudent = async (id) => {
  const res = await axiosClient.delete(`${STUDENTS}/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export const DeleteTeacher = async (id) => {
  const res = await axiosClient.delete(`${TEACHERS}/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};
