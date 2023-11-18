import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedRegistrReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
});
