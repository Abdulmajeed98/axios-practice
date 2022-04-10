import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_NAME = "posts";

const initialState = {
  loading: false,
  posts: null,
  error: null,
};

export const getPosts = createAsyncThunk(`${BASE_NAME}/getPosts`, async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_JSON_BASE_URL}/posts`
  );
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getPosts.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

export default postsSlice.reducer;
