import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

interface PostsState {
  data: any;
  status: string;
}

const initialState: PostsState = {
  data: null,
  status: "loading",
};

export const fetchAuth = createAsyncThunk<any, any>(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error";
        state.data = null;
      });
  },
});

export const selectIsAuth = (state: { auth: PostsState }) =>
  Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
