import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContactOurSupport,
  SaveEmailToMailingList,
  DisputeTransaction,
  UpdateTransactionStatus,
  AddLocation,
} from "../services/UtilityServices";

export const saveEmailToMailingList = createAsyncThunk(
  "saveEmailToMailingList",
  async ({ email }, { rejectWithValue }) => {
    try {
      const resp = await SaveEmailToMailingList({
        email,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const contactOurSupport = createAsyncThunk(
  "contactOurSupport",
  async ({ fullName, email, message }, { rejectWithValue }) => {
    try {
      const resp = await ContactOurSupport({
        fullName,
        email,
        message,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransactionStatus = createAsyncThunk(
  "updateTransactionStatus",
  async ({ transactionId, newStatus }, { rejectWithValue }) => {
    try {
      const resp = await UpdateTransactionStatus({
        transactionId,
        newStatus,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const disputeTransaction = createAsyncThunk(
  "disputeTransaction",
  async (
    { transactionId, reason, description, userId },
    { rejectWithValue }
  ) => {
    try {
      const resp = await DisputeTransaction({
        transactionId,
        reason,
        description,
        userId,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addLocation = createAsyncThunk(
  "addLocation",
  async ({ location }, { rejectWithValue }) => {
    try {
      const resp = await AddLocation({
        location,
      });
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {};

export const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // saveEmailToMailingList actions
    builder
      .addCase(saveEmailToMailingList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveEmailToMailingList.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(saveEmailToMailingList.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // contactOurSupport actions
    builder
      .addCase(contactOurSupport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(contactOurSupport.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(contactOurSupport.rejected, (state) => {
        state.isLoggedIn = false;
        // state.user = null;
        state.isLoading = false;
      });

    // disputeTransaction actions
    builder
      .addCase(disputeTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(disputeTransaction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(disputeTransaction.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    // updateTransactionStatus actions
    builder
      .addCase(updateTransactionStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTransactionStatus.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateTransactionStatus.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      });
  },
});

const { reducer } = utilitySlice;
export default reducer;
