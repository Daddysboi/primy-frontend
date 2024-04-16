import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Register, SendOtp } from "../services/AuthServices";

const initialState = {};

export const sendOtp = createAsyncThunk(
  "sendOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const resp = await SendOtp({
        email,
      });
      return resp;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "signup",
  async (
    { firstName, lastName, email, password, role, otp },
    { rejectWithValue }
  ) => {
    try {
      const resp = await Register({
        firstName,
        lastName,
        email,
        password,
        role,
        otp,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register actions
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // send otp
    builder
      .addCase(sendOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendOtp.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { reducer } = registerSlice;

export default reducer;
