import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestResetPassword, ResetPassword } from "../services/AuthServices";

export const requestResetPassword = createAsyncThunk(
  "requestResetPassword",
  async ({ email, redirectUrl }, { rejectWithValue }) => {
    try {
      const resp = await RequestResetPassword({ email, redirectUrl });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async ({ userId, resetString, newPassword }, { rejectWithValue }) => {
    try {
      const resp = await ResetPassword({ userId, resetString, newPassword });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoggedIn: false,
  isLoading: false,
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login actions
    builder
      .addCase(requestResetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestResetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(requestResetPassword.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // change password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { reducer } = forgotPasswordSlice;

export default reducer;
