import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  users: null,
  error: null,
};

const BASE_NAME = "users";

export const getUsers = createAsyncThunk(`${BASE_NAME}/getUsers`, async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_DELAY_URL}/${
      import.meta.env.VITE_JSON_BASE_URL
    }/users`
  );
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    });
    builder.addCase(getUsers.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export default usersSlice.reducer;
