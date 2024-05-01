import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetStudentRecords, GetTeacherRecords } from "../services/UserServices";
import { GetResultsByAssessment } from "../services/GradeServices";

export const getStudentDetails = createAsyncThunk(
  "getStudentDetails",
  async () => {
    try {
      const resp = await GetStudentRecords();
      return resp.data;
    } catch (error) {
      return;
    }
  }
);

export const getTeacherDetails = createAsyncThunk(
  "getTeacherDetails",
  async () => {
    try {
      const resp = await GetTeacherRecords();
      return resp.data;
    } catch (error) {
      return;
    }
  }
);

export const getResultsByAssessment = createAsyncThunk(
  "getResultsByAssessment",
  async () => {
    try {
      const resp = await GetResultsByAssessment();
      return resp.data;
    } catch (error) {
      return;
    }
  }
);

const initialState = {
  assessmentTitle: "",
  userInfo: {},
  assessmentInfo: {
    duration: null,
    maximumScore: null,
  },
  questionLength: 0,
};

const assessmentSlice = createSlice({
  name: "assessment",
  initialState,
  reducers: {
    setAssesmentTitle: (state, { payload }) => {
      state.assessmentTitle = payload;
    },
    addUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    setAssessmenntInfo: (state, { payload }) => {
      state.assessmentInfo = payload;
    },
    setQuestionLength: (state, { payload }) => {
      state.questionLength = payload;
    },
  },
  extraReducers: (builder) => {
    //Get Student Details
    builder
      .addCase(getStudentDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentDetails.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getStudentDetails.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get Teacher Details
    builder
      .addCase(getTeacherDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherDetails.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getTeacherDetails.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get Results By Assessment
    builder
      .addCase(getResultsByAssessment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResultsByAssessment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getResultsByAssessment.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { actions, reducer } = assessmentSlice;

export const {
  setAssessmentTitle,
  addUser,
  setAssessmenntInfo,
  setQuestionLength,
} = actions;
export default reducer;
