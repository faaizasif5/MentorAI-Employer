import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmailState: (state, action) => {
      state.email = action.payload;
    },
    setPasswordState: (state, action) => {
      state.password = action.payload;
    },
    clearAuthData: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmailState, setPasswordState, clearAuthData } =
  authSlice.actions;
export default authSlice.reducer;
