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
  RECORDS,
} from "../constants";

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

  const response = await axiosClient.get(`${GET_USER_BY_ID}/${id}`);
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
  const response = await axiosClient.patch(`${UPDATE_USER_PROFILE}`, data);
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
  const response = await axiosClient.patch(`${UPDATE_USER_BANK_DETAILS}`, data);
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
    data
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
  const response = await axiosClient.patch(`${UPDATE_USER_KYC_DETAILS}`, data);
  return response.data;
};

export const UpdatePassword = async ({ userId, oldPassword, newPassword }) => {
  const details = { userId, oldPassword, newPassword };
  const response = await axiosClient.patch(`${CHANGE_PASSWORD}`, details);
  return response.data;
};

//create user
export const CreateUser = async (user, editing) => {
  if (editing) {
    if (user.role == "student") {
      const res = await axiosClient.put(`${STUDENTS}/${user.studentId}`, user);
      return res.data;
    } else {
      const res = await axiosClient.put(`${TEACHERS}/${user.teacherId}`, user);
      return res.data;
    }
  }
  console.log(user);

  const res = await axiosClient.post(`${USERS}`, user);

  return res.data;
};

export const GetTeacherById = async (id) => {
  const res = await axiosClient.get(`${TEACHERS}/${id}`);
  return res.data;
};

export const GetStudentById = async (id) => {
  const res = await axiosClient.get(`${STUDENTS}/${id}`);
  return res.data;
};

export const GetTeacherRecords = async () => {
  const res = await axiosClient.get(`${TEACHERS}/${RECORDS}`);
  return res.data;
};

export const GetStudentRecords = async () => {
  const res = await axiosClient.get(`${STUDENTS}/${RECORDS}`);
  return res.data;
};

export const GetAllTeachers = async () => {
  const res = await axiosClient.get(`${TEACHERS}/`);
  return res.data;
};

export const GetAllStudents = async () => {
  const res = await axiosClient.get(`${STUDENTS}/`);
  return res.data;
};

export const GetStudentsByGrade = async (subjectId) => {
  const res = await axiosClient.get(`${STUDENTS}/${subjectId}`);
  return res.data;
};

export const DeleteStudent = async (id) => {
  const res = await axiosClient.delete(`${STUDENTS}/${id}`);
  return res.data;
};

export const DeleteTeacher = async (id) => {
  const res = await axiosClient.delete(`${TEACHERS}/${id}`);
  return res.data;
};
