import { createSlice } from "@reduxjs/toolkit";
import { singInGoogle, getAvatar } from "./authOperation";

const initialState = {
  auth: null,
  avatar: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(singInGoogle.fulfilled, (state, { payload }) => {
      state.auth = payload;
    });
    builder.addCase(getAvatar.fulfilled, (state, { payload }) => {
      state.avatar = payload;
    });
  },
});

export default authSlice.reducer;
