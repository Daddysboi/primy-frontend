import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

const { actions, reducer } = querySlice;

export const { setQuery } = actions;
export default reducer;
