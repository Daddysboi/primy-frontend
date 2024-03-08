import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_TOKEN, USER_ID } from "../services/CONSTANTS";
import { Signin } from "../services/auth.services";

export const login = createAsyncThunk("login", async ({ email, password }) => {
  try {
    const resp = await Signin({ email, password });
    if (resp?.data) {
      localStorage.setItem(USER_ID, JSON.stringify(resp?.data?.user[0]._id));
      localStorage.setItem(USER_TOKEN, JSON.stringify(resp?.data?.token));
    }
    return resp;
  } catch (error) {
    throw error; // Throw the error to let Redux Toolkit handle the rejection
  }
});

const initialState = {
  loginPhone: "",
  isLoggedIn: false,
  isLoading: false,
};

export const logout = createAsyncThunk("logout", async () => {
  try {
    // Perform logout logic here (e.g., clear local storage)
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_TOKEN);
    return;
  } catch (error) {
    throw error; // Throw the error to let Redux Toolkit handle the rejection
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login actions
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      // state.user = null;
      state.isLoading = false;
    });
     // logout actions
     builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
  },
});

const { actions, reducer } = loginSlice;

export const { setLoginPhone } = actions;
export default reducer;
