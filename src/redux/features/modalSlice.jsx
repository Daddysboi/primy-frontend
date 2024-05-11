import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCreateModal: (state, action) => {
      const { payload } = action;
      state.createModal = payload;
    },
  },
});

const { actions, reducer } = modalSlice;

export const { setCreateModal } = actions;
export default reducer;
