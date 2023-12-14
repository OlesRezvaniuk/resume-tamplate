import { createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const singInGoogle = createAsyncThunk(
  "auth/singIn",
  async (_, rejectWithValue) => {
    try {
      try {
        const { user } = await signInWithPopup(
          firebase.auth,
          firebase.provider
        );
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      }
    } catch (error) {
      console.log(rejectWithValue);
    }
  }
);

export const logOutGoogle = createAsyncThunk(
  "auth/logout",
  (_, rejectWithValue) => {
    try {
      return null;
    } catch (error) {
      console.log(error, rejectWithValue);
    }
  }
);

export const getAvatar = createAsyncThunk(
  "auth/avatar",
  ({ file }, rejectWithValue) => {
    try {
      return file;
    } catch (error) {
      console.log("catch");
    }
  }
);
