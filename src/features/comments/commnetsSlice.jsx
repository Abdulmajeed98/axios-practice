import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_NAME = "comments";
const initialState = {
  loading: false,
  comments: null,
  error: null,
};

export const getAllComments = createAsyncThunk(
  `${BASE_NAME}/getAllComments`,
  async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_JSON_BASE_URL}/comments`
    );
    return data;
  }
);
