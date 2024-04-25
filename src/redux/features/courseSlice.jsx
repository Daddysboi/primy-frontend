import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetTeacherCourses,
  CreateAssessment,
  GetTeacherAssessmentByCourse,
  GetAssessmentByCourse,
  CreateQuestion,
  GetQuestionsByAssessment,
  UpdateQuestion,
  UpdateAssessment,
  GetAllCourses,
  CreateEditCourse,
  AssignTeacher,
  StartAssessment,
  NextAssessment,
  DeleteAssessment,
  GetStudentResult,
  DeleteQuestion,
  DeleteAllCourses,
  DeleteCourse,
} from "../services/CourseServices";

//Get Teacher Courses
export const getAllCourses = createAsyncThunk(
  "getAllCourses",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await GetAllCourses();
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Teacher Courses
export const getTeacherCourses = createAsyncThunk(
  "getTeacherCourses",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await GetTeacherCourses(id);
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
export const createEditCourse = createAsyncThunk(
  "createEditCourse",
  async (data, editing, { rejectWithValue }) => {
    try {
      const resp = await CreateEditCourse(data, editing);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Create Question
export const createQuestion = createAsyncThunk(
  "CreateQuestion",
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
export const getTeacherAssessmentByCourse = createAsyncThunk(
  "getTeacherAssessmentByCourse",
  async (courseId, role = "user", { rejectWithValue }) => {
    try {
      const resp = await GetTeacherAssessmentByCourse(
        courseId,
        (role = "user")
      );
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Assessment By Course
export const getAssessmentByCourse = createAsyncThunk(
  "getAssessmentByCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      const resp = await GetAssessmentByCourse(courseId);
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

//Delete Course
export const deleteCourse = createAsyncThunk(
  "deleteCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      const resp = await DeleteCourse(courseId);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete All Courses
export const deletetAllCourses = createAsyncThunk(
  "deletetAllCourses",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await DeleteAllCourses();
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
  course: {},
  courses: [],
};

// Course SLICE
export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get All Courses
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllCourses.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // Get Teacher Courses
    builder
      .addCase(getTeacherCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherCourses.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getTeacherCourses.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // Create Assessment
    builder
      .addCase(createAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // Assign Teacher
    builder
      .addCase(assignTeacher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(assignTeacher.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(assignTeacher.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // Create/Edit Course
    builder
      .addCase(createEditCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEditCourse.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createEditCourse.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // Create Question
    builder
      .addCase(createQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuestion.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createQuestion.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // Get Teacher Assessment By Course
    builder
      .addCase(getTeacherAssessmentByCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherAssessmentByCourse.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getTeacherAssessmentByCourse.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get Assessment By Course
    builder
      .addCase(getAssessmentByCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssessmentByCourse.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getAssessmentByCourse.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get Questions By Assessment
    builder
      .addCase(getQuestionsByAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionsByAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getQuestionsByAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Start Assessment
    builder
      .addCase(startAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(startAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(startAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Next Assessment
    builder
      .addCase(nextAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(nextAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(nextAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Update Question
    builder
      .addCase(updateQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuestion.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateQuestion.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Update Assessment
    builder
      .addCase(updateAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Delete Assessment
    builder
      .addCase(deleteAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Delete Question
    builder
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteQuestion.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // Delete Course
    builder
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCourse.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCourse.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // Delete All Courses
    builder
      .addCase(deletetAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletetAllCourses.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deletetAllCourses.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // Get Student Result
    builder
      .addCase(getStudentResult.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentResult.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getStudentResult.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { reducer } = courseSlice;

export default reducer;
