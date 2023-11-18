import { createSlice } from "@reduxjs/toolkit";
import { singInGoogle } from "./authOperation";

const initialState = {
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(singInGoogle.fulfilled, (state, { payload }) => {
      state.auth = payload;
    });
  },
});

export default authSlice.reducer;
