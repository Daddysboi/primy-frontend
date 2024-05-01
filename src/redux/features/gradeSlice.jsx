import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AssignTeacher,
  CreateAssessment,
  CreateQuestion,
  CreateEditSubject,
  GetTeacherAssessmentByGrade,
  GetTeacherGrades,
  GetAssessmentByGrade,
  GetQuestionsByAssessment,
  GetAllGrades,
  DeleteAllSubjects,
  DeleteAssessment,
  DeleteSubject,
  DeleteQuestion,
  NextAssessment,
  GetStudentResult,
  StartAssessment,
  UpdateAssessment,
  UpdateQuestion,
} from "../services/GradeServices";

//Get All Grades
export const getAllGrades = createAsyncThunk(
  "getAllGrades",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await GetAllGrades();
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Teacher Grades
export const getTeacherGrades = createAsyncThunk(
  "getTeacherGrades",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await GetTeacherGrades(id);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Create Assesment
export const createAssessment = createAsyncThunk(
  "createAssessment",
  async (data, { rejectWithValue }) => {
    try {
      const resp = await CreateAssessment(data);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Assign Teacher
export const assignTeacher = createAsyncThunk(
  "assignTeacher",
  async (data, { rejectWithValue }) => {
    try {
      const resp = await AssignTeacher(data);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Create/Edit Course
export const createEditSubject = createAsyncThunk(
  "createEditSubject",
  async (data, editing, { rejectWithValue }) => {
    try {
      const resp = await CreateEditSubject(data, editing);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Create Question
export const createQuestion = createAsyncThunk(
  "createQuestion",
  async (rows, { rejectWithValue }) => {
    try {
      const resp = await CreateQuestion(rows);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Teacher Assessment By Course
export const getTeacherAssessmentByGrade = createAsyncThunk(
  "getTeacherAssessmentByGrade",
  async (courseId, role = "user", { rejectWithValue }) => {
    try {
      const resp = await GetTeacherAssessmentByGrade(courseId, (role = "user"));
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Assessment By Course
export const getAssessmentByGrade = createAsyncThunk(
  "getAssessmentByGrade",
  async (grade, { rejectWithValue }) => {
    try {
      const resp = await GetAssessmentByGrade(grade);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Questions By Assessment
export const getQuestionsByAssessment = createAsyncThunk(
  "getQuestionsByAssessment",
  async (assessmentId, { rejectWithValue }) => {
    try {
      const resp = await GetQuestionsByAssessment(assessmentId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Start Assessment
export const startAssessment = createAsyncThunk(
  "startAssessment",
  async (assessmentId, { rejectWithValue }) => {
    try {
      const resp = await StartAssessment(assessmentId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Next Assessment
export const nextAssessment = createAsyncThunk(
  "nextAssessment",
  async (assessmentId, data, { rejectWithValue }) => {
    try {
      const resp = await NextAssessment(assessmentId, data);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Update Question
export const updateQuestion = createAsyncThunk(
  "updateQuestion",
  async (question, { rejectWithValue }) => {
    try {
      const resp = await UpdateQuestion(question);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Update Assessment
export const updateAssessment = createAsyncThunk(
  "updateAssessment",
  async (assessment, { rejectWithValue }) => {
    try {
      const resp = await UpdateAssessment(assessment);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete Assessment
export const deleteAssessment = createAsyncThunk(
  "deleteAssessment",
  async (assessmentId, { rejectWithValue }) => {
    try {
      const resp = await DeleteAssessment(assessmentId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete Question
export const deleteQuestion = createAsyncThunk(
  "deleteQuestion",
  async (questId, { rejectWithValue }) => {
    try {
      const resp = await DeleteQuestion(questId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete grade
export const deleteSubject = createAsyncThunk(
  "deleteSubject",
  async (subjectId, { rejectWithValue }) => {
    try {
      const resp = await DeleteSubject(subjectId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete All Courses
export const deleteAllSubjects = createAsyncThunk(
  "deletetAllSubjects",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await DeleteAllSubjects();
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Student Result
export const getStudentResult = createAsyncThunk(
  "getStudentResult",
  async (assId, { rejectWithValue }) => {
    try {
      const resp = await GetStudentResult(assId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  grade: {},
  grades: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// Course SLICE
export const gradeSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get All Courses
    builder
      .addCase(getAllGrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllGrades.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllGrades.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    // Get Teacher Courses
    builder
      .addCase(getTeacherGrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherGrades.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getTeacherGrades.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    // Create Assessment
    builder
      .addCase(createAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAssessment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(createAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
      });

    // Assign Teacher
    builder
      .addCase(assignTeacher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(assignTeacher.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(assignTeacher.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
      });

    // Create/Edit Course
    builder
      .addCase(createEditSubject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEditSubject.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(createEditSubject.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
      });

    // Create Question
    builder
      .addCase(createQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuestion.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(createQuestion.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    // Get Teacher Assessment By Course
    builder
      .addCase(getTeacherAssessmentByGrade.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherAssessmentByGrade.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getTeacherAssessmentByGrade.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Get Assessment By Course
    builder
      .addCase(getAssessmentByGrade.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssessmentByGrade.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getAssessmentByGrade.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Get Questions By Assessment
    builder
      .addCase(getQuestionsByAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionsByAssessment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getQuestionsByAssessment.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Start Assessment
    builder
      .addCase(startAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(startAssessment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(startAssessment.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Next Assessment
    builder
      .addCase(nextAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(nextAssessment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(nextAssessment.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Update Question
    builder
      .addCase(updateQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuestion.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(updateQuestion.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Update Assessment
    builder
      .addCase(updateAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAssessment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(updateAssessment.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Delete Assessment
    builder
      .addCase(deleteAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAssessment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(deleteAssessment.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    //Delete Question
    builder
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(deleteQuestion.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    // Delete Course
    builder
      .addCase(deleteSubject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSubject.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(deleteSubject.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    // Delete All Courses
    builder
      .addCase(deleteAllSubjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAllSubjects.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(deleteAllSubjects.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });

    // Get Student Result
    builder
      .addCase(getStudentResult.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentResult.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getStudentResult.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

const { reducer } = gradeSlice;

export default reducer;
