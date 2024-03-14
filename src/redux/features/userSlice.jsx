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
} from "../services/user.services";

const initialState = {
  user: {},
  users: [],
};

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
  async ({ userId, firstName, lastName, phoneNumber, profilePicture }) => {
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
      throw error; // Throw the error to let Redux Toolkit handle the rejection
    }
  }
);

//UPDATE USER BANK DETAILS
export const updateUserBankDetails = createAsyncThunk(
  "updateUserBankDetails",
  async ({ userId, accountName, bankName, accountNumber, password }) => {
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
      throw error; // Throw the error to let Redux Toolkit handle the rejection
    }
  }
);

//UPDATE USER CONTACT DETAILS
export const updateUserContactDetails = createAsyncThunk(
  "updateUserContactDetails",
  async ({
    userId,
    homeAddress,
    nearestLandmark,
    officeAddress,
    postalCode,
    proofOfAddress,
  }) => {
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
      throw error; // Throw the error to let Redux Toolkit handle the rejection
    }
  }
);

// UPDATE USER KYC DETAILS
export const updateUserKycDetails = createAsyncThunk(
  "updateUserKycDetails",
  async ({
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
      throw error; // Throw the error to let Redux Toolkit handle the rejection
    }
  }
);

// UPDATE PASSWORD
export const updatePassword = createAsyncThunk(
  "updatePassword",
  async ({ userId, oldPassword, newPassword }) => {
    try {
      const resp = await UpdatePassword({ userId, oldPassword, newPassword });
      return resp;
    } catch (error) {
      throw error; // Throw the error to let Redux Toolkit handle the rejection
    }
  }
);

//create user
export const createUser = createAsyncThunk(
  "createUser",
  async (user, editing) => {
    try {
      const resp = await CreateUser(user, editing);
      return resp;
    } catch (error) {
      throw error;
    }
  }
);

//Get Teacher Record by Id
export const getTeacherById = createAsyncThunk("getTeacherById", async (id) => {
  try {
    const resp = await GetTeacherById(id);
    return resp;
  } catch (error) {
    throw error;
  }
});

//Get Student by Id
export const getStudentById = createAsyncThunk("getStudentById", async (id) => {
  try {
    const resp = await GetStudentById(id);
    return resp;
  } catch (error) {
    throw error;
  }
});

//Get All Teachers
export const getAllTeachers = createAsyncThunk("getAllTeachers", async () => {
  try {
    const resp = await GetAllTeachers();
    return resp;
  } catch (error) {
    throw error;
  }
});

//Get All Students
export const getAllStudents = createAsyncThunk("getAllStudents", async () => {
  try {
    const resp = await GetAllStudents();
    return resp;
  } catch (error) {
    throw error;
  }
});

//Delete Teacher
export const deleteTeacher = createAsyncThunk("deleteTeacher", async (id) => {
  try {
    const resp = await DeleteTeacher(id);
    return resp;
  } catch (error) {
    throw error;
  }
});

//Delete Students
export const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {
  try {
    const resp = await DeleteStudent(id);
    return resp;
  } catch (error) {
    throw error;
  }
});

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
    // updateUserProfile actions
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserProfile.rejected, (state) => {
      state.isLoggedIn = false;
      // state.user = null;
      state.isLoading = false;
    });

    // updateUserBankDetails actions
    builder.addCase(updateUserBankDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserBankDetails.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserBankDetails.rejected, (state) => {
      state.isLoggedIn = false;
      // state.user = null;
      state.isLoading = false;
    });

    // updateUserContactDetails actions
    builder.addCase(updateUserContactDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserContactDetails.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserContactDetails.rejected, (state) => {
      state.isLoggedIn = false;
      // state.user = null;
      state.isLoading = false;
    });

    // updateUserKycDetails actions
    builder.addCase(updateUserKycDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserKycDetails.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserKycDetails.rejected, (state) => {
      state.isLoggedIn = false;
      // state.user = null;
      state.isLoading = false;
    });

    // update password
    builder.addCase(updatePassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updatePassword.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    // Create User
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    //Get Teacher Record by Id
    builder.addCase(getTeacherById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeacherById.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getTeacherById.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    //Get Student Record by Id
    builder.addCase(getStudentById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStudentById.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getStudentById.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    //Get All Teachers
    builder.addCase(getAllTeachers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTeachers.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAllTeachers.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    //Get All Students
    builder.addCase(getAllStudents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllStudents.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAllStudents.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    //Delete Teacher
    builder.addCase(deleteTeacher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTeacher.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTeacher.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    //Delete Student
    builder.addCase(deleteStudent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteStudent.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteStudent.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
  },
});

const { actions, reducer } = userSlice;
export const { setUser, setUsers } = actions;

export default reducer;
