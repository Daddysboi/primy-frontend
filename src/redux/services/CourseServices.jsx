import axiosClient from "../../services/api";

import {
  TEACHER_COURSES,
  ASSESSMENTS,
  COURSES,
  QUESTIONS,
  RESULT,
} from "../constants";

export const GetAllCourses = async () => {
  const res = await axiosClient.get(`${COURSES}`);
  return res.data;
};

export const GetTeacherCourses = async (id) => {
  const res = await axiosClient.get(`${TEACHER_COURSES}/${id}`);
  return res.data;
};

export const CreateAssessment = async (data) => {
  const res = await axiosClient.post(`${ASSESSMENTS}`, data);
  return res.data;
};

export const AssignTeacher = async (data) => {
  const res = await axiosClient.post(`${TEACHER_COURSES}`, data);
  return res.data;
};

export const CreateEditCourse = async (data, editing) => {
  if (editing) {
    const res = await axiosClient.put(`${COURSES}`, data);
    return res.data;
  }
  const res = await axiosClient.post(`${COURSES}`, data);
  return res.data;
};

export const CreateQuestion = async (rows) => {
  const res = await axiosClient.post(`${QUESTIONS}`, rows);
  return res.data;
};

export const GetTeacherAssessmentByCourse = async (courseId, role = "user") => {
  const res = await axiosClient.get(`${ASSESSMENTS}/${role}/${courseId}`);
  return res.data;
};

export const GetAssessmentByCourse = async (courseId) => {
  const res = await axiosClient.get(`${ASSESSMENTS}/${COURSES}/${courseId}`);
  return res.data;
};

export const GetQuestionsByAssessment = async (assessmentId) => {
  const res = await axiosClient.get(
    `${QUESTIONS}/${ASSESSMENTS}/${assessmentId}`
  );
  return res.data;
};

export const StartAssessment = async (assessmentId) => {
  const res = await axiosClient.post(`${ASSESSMENTS}/${assessmentId}/start`);
  return res.data;
};

export const NextAssessment = async (assessmentId, data) => {
  const res = await axiosClient.post(
    `${ASSESSMENTS}/${assessmentId}/submit`,
    data
  );
  return res.data;
};

export const UpdateQuestion = async (question) => {
  const res = await axiosClient.put(`${QUESTIONS}`, question);
  return res.data;
};

export const UpdateAssessment = async (assessment) => {
  const res = await axiosClient.put(`${ASSESSMENTS}`, assessment);
  return res.data;
};

export const DeleteAssessment = async (assessmentId) => {
  const res = await axiosClient.delete(`${ASSESSMENTS}/${assessmentId}`);
  return res.data;
};

export const DeleteQuestion = async (questId) => {
  const res = await axiosClient.delete(`${QUESTIONS}/${questId}`);
  return res.data;
};

export const DeleteCourse = async (courseId) => {
  const res = await axiosClient.delete(`${COURSES}/${courseId}`);
  return res.data;
};

export const DeleteAllCourses = async () => {
  const res = await axiosClient.delete(`${COURSES}`);
  return res.data;
};

export const GetStudentResult = async (assId) => {
  const res = await axiosClient.get(`${ASSESSMENTS}/${assId}/${RESULT}`);
  return res.data;
};
