import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: {},
};

const authSlice = createSlice({
  name: "formError",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
  },
});

export const { setErrors, clearErrors } = authSlice.actions;
export default authSlice.reducer;
