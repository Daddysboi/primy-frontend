import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetUserById,
  UpdateUserBankDetails,
  UpdateUserContactDetails,
  UpdateUserProfile,
  UpdateUserKycDetails,
  UpdatePassword,
  GetTeacherById,
  GetStudentById,
  CreateUser,
  GetAllTeachers,
  GetAllStudents,
  DeleteTeacher,
  DeleteStudent,
} from "../services/UserServices";

//Get User BY ID
export const getUserById = createAsyncThunk("getUserById", async (userId) => {
  try {
    const resp = await GetUserById(userId);
    return resp;
  } catch (error) {
    throw error;
  }
});

//UPDATE USER PROFILE
export const updateUserProfile = createAsyncThunk(
  "updateUserProfile",
  async (
    { userId, firstName, lastName, phoneNumber, profilePicture },
    { rejectWithValue }
  ) => {
    try {
      const resp = await UpdateUserProfile({
        userId,
        firstName,
        lastName,
        phoneNumber,
        profilePicture,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//UPDATE USER BANK DETAILS
export const updateUserBankDetails = createAsyncThunk(
  "updateUserBankDetails",
  async (
    { userId, accountName, bankName, accountNumber, password },
    { rejectWithValue }
  ) => {
    try {
      const resp = await UpdateUserBankDetails({
        userId,
        accountName,
        bankName,
        accountNumber,
        password,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//UPDATE USER CONTACT DETAILS
export const updateUserContactDetails = createAsyncThunk(
  "updateUserContactDetails",
  async (
    {
      userId,
      homeAddress,
      nearestLandmark,
      officeAddress,
      postalCode,
      proofOfAddress,
    },
    { rejectWithValue }
  ) => {
    try {
      const resp = await UpdateUserContactDetails({
        userId,
        homeAddress,
        nearestLandmark,
        officeAddress,
        postalCode,
        proofOfAddress,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// UPDATE USER KYC DETAILS
export const updateUserKycDetails = createAsyncThunk(
  "updateUserKycDetails",
  async (
    {
      headShot,
      idType,
      idNumber,
      idCard,
      nextOfKinFullName,
      nextOfKinRelationship,
      nextOfKinContactNumber,
      bvn,
      userId,
    },
    { rejectWithValue }
  ) => {
    try {
      const resp = await UpdateUserKycDetails({
        headShot,
        idType,
        idNumber,
        idCard,
        nextOfKinFullName,
        nextOfKinRelationship,
        nextOfKinContactNumber,
        bvn,
        userId,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// UPDATE PASSWORD
export const updatePassword = createAsyncThunk(
  "updatePassword",
  async ({ userId, oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const resp = await UpdatePassword({ userId, oldPassword, newPassword });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//create user
export const createUser = createAsyncThunk(
  "createUser",
  async ({ data, editing }, { rejectWithValue }) => {
    try {
      const resp = await CreateUser({ data, editing });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Teacher Record by Id
export const getTeacherById = createAsyncThunk(
  "getTeacherById",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await GetTeacherById(id);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get Student by Id
export const getStudentById = createAsyncThunk(
  "getStudentById",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await GetStudentById(id);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get All Teachers
export const getAllTeachers = createAsyncThunk(
  "getAllTeachers",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await GetAllTeachers();
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Get All Students
export const getAllStudents = createAsyncThunk(
  "getAllStudents",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await GetAllStudents();
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete Teacher
export const deleteTeacher = createAsyncThunk(
  "deleteTeacher",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await DeleteTeacher(id);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Delete Students
export const deleteStudent = createAsyncThunk(
  "deleteStudent",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await DeleteStudent(id);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: {},
  users: [],
};

// USER SLICE
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    setUsers: (state, action) => {
      const { payload } = action;
      state.users = payload;
    },
  },
  extraReducers: (builder) => {
    //Get user by Id
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserById.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // updateUserProfile actions
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserProfile.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // updateUserBankDetails actions
    builder
      .addCase(updateUserBankDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserBankDetails.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserBankDetails.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // updateUserContactDetails actions
    builder
      .addCase(updateUserContactDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserContactDetails.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserContactDetails.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // updateUserKycDetails actions
    builder
      .addCase(updateUserKycDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserKycDetails.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserKycDetails.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // update password
    builder
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // Create User
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get Teacher Record by Id
    builder
      .addCase(getTeacherById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacherById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getTeacherById.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get Student Record by Id
    builder
      .addCase(getStudentById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getStudentById.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get All Teachers
    builder
      .addCase(getAllTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeachers.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllTeachers.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Get All Students
    builder
      .addCase(getAllStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllStudents.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllStudents.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Delete Teacher
    builder
      .addCase(deleteTeacher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTeacher.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTeacher.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    //Delete Student
    builder
      .addCase(deleteStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStudent.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteStudent.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { actions, reducer } = userSlice;
export const { setUser, setUsers } = actions;

export default reducer;
