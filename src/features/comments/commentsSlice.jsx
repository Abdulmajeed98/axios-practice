import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_NAME = "comments";
const initialState = {
  loading: false,
  comments: null,
  error: null,
};

export const getComments = createAsyncThunk(
  `${BASE_NAME}/getComments`,
  async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_JSON_BASE_URL}/comments`
    );
    return data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: {
    [getComments.pending]: (state) => {
      state.loading = true;
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = payload;
    },
    [getComments.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

export default commentsSlice.reducer;
