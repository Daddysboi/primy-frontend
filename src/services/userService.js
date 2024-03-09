import { toast } from "react-toastify";
import axiosClient from "../utils/axiosClient";

const getTeachersRecord = async () => {
  try {
    const res = await axiosClient.get(`teachers/records`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getStudentRecord = async () => {
  try {
    const res = await axiosClient.get(`students/records`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createUser = async (user, editing) => {
  try {
    if (editing) {
      if (user.role == "student") {
        const res = await axiosClient.put(`students`, user);
        toast("Update Succesful", { type: "success", autoClose: 2000 });
        return res.data;
      } else {
        const res = await axiosClient.put(`teachers`, user);
        toast("Update Successful", { type: "success", autoClose: 2000 });
        return res.data;
      }
    }

    const res = await axiosClient.post(`users`, user);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getAllTeachers = async () => {
  try {
    const res = await axiosClient.get("teachers/");
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getAllStudents = async () => {
  try {
    const res = await axiosClient.get("students/");
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const deleteStudent = async (id) => {
  try {
    const res = await axiosClient.delete(`students/${id}`);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const deleteTeacher = async (id) => {
  try {
    const res = await axiosClient.delete(`teachers/${id}`);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

export {
  getTeachersRecord,
  getStudentRecord,
  createUser,
  getAllTeachers,
  getAllStudents,
  deleteStudent,
  deleteTeacher,
};
