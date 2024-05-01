import axiosClient from "../../services/api";

import {
  TEACHER_GRADES,
  ASSESSMENTS,
  COURSES,
  QUESTIONS,
  RESULT,
  GRADES,
} from "../constants";

export const GetAllGrades = async () => {
  const res = await axiosClient.get(`${GRADES}`);
  return res.data;
};

export const GetTeacherGrades = async (id) => {
  const res = await axiosClient.get(`${TEACHER_GRADES}/${id}`);
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

export const CreateEditSubject = async (data, editing) => {
  if (editing) {
    const res = await axiosClient.put(`${GRADES}`, data);
    return res.data;
  }
  const res = await axiosClient.post(`${GRADES}`, data);
  return res.data;
};

export const CreateQuestion = async (rows) => {
  const res = await axiosClient.post(`${QUESTIONS}`, rows);
  return res.data;
};

export const GetTeacherAssessmentByGrade = async (courseId, role = "user") => {
  const res = await axiosClient.get(`${ASSESSMENTS}/${role}/${courseId}`);
  return res.data;
};

export const GetAssessmentByGrade = async (grade) => {
  const res = await axiosClient.get(`${ASSESSMENTS}/${GRADES}/${grade}`);
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

export const DeleteSubject = async (subjectId) => {
  const res = await axiosClient.delete(`${COURSES}/${subjectId}`);
  return res.data;
};

export const DeleteAllSubjects = async () => {
  const res = await axiosClient.delete(`${SUBJECTS}`);
  return res.data;
};

export const GetStudentResult = async (assId) => {
  const res = await axiosClient.get(`${ASSESSMENTS}/${assId}/${RESULT}`);
  return res.data;
};

export const GetResultsByAssessment = async (assId) => {
  const res = await axiosClient.get(
    `${ASSESSMENTS}/${assId}/${RESULT}/getResult`
  );
  return res.data;
};
