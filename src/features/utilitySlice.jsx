import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactOurSupport } from "../services/utility.services";

const initialState = {};

export const contactOurSupport = createAsyncThunk(
  "contactOurSupport",
  async ({ fullName, email, message }) => {
    try {
      const resp = await ContactOurSupport({
        fullName,
        email,
        message,
      });
      return resp;
    } catch (error) {
      throw error; // Throw the error to let Redux Toolkit handle the rejection
    }
  }
);

export const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // contactOurSupport actions
    builder.addCase(contactOurSupport.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(contactOurSupport.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(contactOurSupport.rejected, (state) => {
      state.isLoggedIn = false;
      // state.user = null;
      state.isLoading = false;
    });
  },
});

const { reducer } = utilitySlice;
export default reducer;
