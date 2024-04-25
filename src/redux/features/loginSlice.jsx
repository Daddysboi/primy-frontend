import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_TOKEN, USER_ID } from "../constants";
import { Signin } from "../services/AuthServices";

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const resp = await Signin({ email, password });
      if (resp?.data) {
        localStorage.setItem(USER_ID, JSON.stringify(resp?.data?.user[0]._id));
        localStorage.setItem(USER_TOKEN, JSON.stringify(resp?.data?.token));
      }
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem(USER_ID);
      localStorage.removeItem(USER_TOKEN);
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoggedIn: false,
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login actions
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });
    // logout actions
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { reducer } = loginSlice;

export default reducer;
