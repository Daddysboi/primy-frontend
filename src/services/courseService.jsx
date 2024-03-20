import { toast } from "react-toastify";
import axiosClient from "../utils/axiosClient";

const getTeacherCourses = async () => {
  try {
    const res = await axiosClient.get("teacher-courses/teacher");
    return res.data;
  } catch (error) {
    if (error.response.status) {
      // toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createAssessment = async (data) => {
  try {
    const res = await axiosClient.post("assessments", data);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const assignTeacher = async (data) => {
  try {
    const res = await axiosClient.post("teacher-courses", data);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createEditCourse = async (data, editing) => {
  try {
    if (editing) {
      const res = await axiosClient.put("courses", data);
      toast("Update Successful", { type: "success", autoClose: 2000 });
      return res;
    }
    const res = await axiosClient.post("courses", data);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createQuestion = async (rows) => {
  try {
    // const postRequests = rows.map((data) =>
    //   axiosClient.post("questions", data)
    // );
    // const res = Promise.all(postRequests)
    //   .then((responses) => {
    //     // Handle responses here
    //     responses.forEach((response) => {
    //       console.log(response.data);
    //     });
    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.error(error);
    //   });

    const res = await axiosClient.post("questions", rows);

    return res;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getTeacherAssessmentByCourse = async (courseId, role = "user") => {
  try {
    const res = await axiosClient.get(`assessments/${role}/${courseId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const getAssessmentByCourse = async (courseId) => {
  try {
    const res = await axiosClient.get(`assessments/course/${courseId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getQuestionsByAssessment = async (assessmentId) => {
  try {
    const res = await axiosClient.get(`questions/assessment/${assessmentId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const startAssessment = async (assessmentId) => {
  try {
    const res = await axiosClient.post(`assessments/${assessmentId}/start`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const nextAssessment = async (assessmentId, data) => {
  try {
    const res = await axiosClient.post(
      `assessments/${assessmentId}/submit`,
      data
    );
    return res.data;
  } catch (error) {
    if (error.response.status) {
      // toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const updateQuestion = async (question) => {
  try {
    const res = await axiosClient.put(`questions`, question);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const updateAssessment = async (assessment) => {
  try {
    const res = await axiosClient.put(`assessments`, assessment);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const deleteAssessment = async (assessmentId) => {
  try {
    const res = await axiosClient.delete(`assessments/${assessmentId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const deleteQuestion = async (questId) => {
  try {
    const res = await axiosClient.delete(`questions/${questId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const deleteCourse = async (courseId) => {
  try {
    const res = await axiosClient.delete(`courses/${courseId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getAllCourses = async () => {
  try {
    const res = await axiosClient.get("courses/");
    // toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const getStudentResult = async (assId) => {
  try {
    const res = await axiosClient.get(`assessments/${assId}/result`);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

export {
  getTeacherCourses,
  createAssessment,
  getTeacherAssessmentByCourse,
  getAssessmentByCourse,
  createQuestion,
  getQuestionsByAssessment,
  updateQuestion,
  updateAssessment,
  getAllCourses,
  createEditCourse,
  assignTeacher,
  startAssessment,
  nextAssessment,
  deleteAssessment,
  getStudentResult,
  deleteQuestion,
  deleteCourse,
};
