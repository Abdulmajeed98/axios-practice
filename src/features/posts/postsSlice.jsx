import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_NAME = "posts";

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

export const fetchPosts = createAsyncThunk(
  `${BASE_NAME}/fetchPosts`,
  async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_JSON_BASE_URL}/posts`
    );
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts.push(payload);
    },
    [fetchPosts.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

export default postsSlice.reducer;
