import { createSlice } from "@reduxjs/toolkit";

const formErrorsSlice = createSlice({
  name: "formErrors",
  initialState: {
    email: "",
    password: "",
    captcha: "",
  },
  reducers: {
    setFormError: (state, action) => {
      state[action.payload.field] = action.payload.message;
    },
    clearFormErrors: (state) => {
      state.email = "";
      state.password = "";
      state.captcha = "";
    },
  },
});

export const { setFormError, clearFormErrors } = formErrorsSlice.actions;
export default formErrorsSlice.reducer;
