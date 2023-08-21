import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./authSlice";
import formErrorReducer from "./formErrorsSlice";

const allReducers = combineReducers({
  loginReducer,
  formErrorReducer,
});

export default allReducers;
