import { createSlice } from "@reduxjs/toolkit";
import APP_CONSTANTS from "../../constants/app-constants";
import { getItem } from "../../services/storage-service";

// const _ = require("lodash");

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState: {
    loading: false,
    error: false,
    success: false,
    user: !_.isEmpty(getItem(APP_CONSTANTS.ACCESS_TOKEN))
      ? JSON.parse(getItem(APP_CONSTANTS.ACCESS_TOKEN))
      : null,
  },
  reducers: {
    loginSubmit: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.success = action.payload.message;
      state.error = false;
    },
    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.error = false;
      state.success = false;
    },
  },
});

export const { loginSubmit, loginSuccess, loginError, logoutUser } =
  AuthReducer.actions;

export default AuthReducer.reducer;
