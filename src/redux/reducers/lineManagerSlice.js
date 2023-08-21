import { createSlice } from "@reduxjs/toolkit";
import { lineManagerData } from "../../constants/dummydata";

const initialState = {
  lineManagerData,
};

const lineManagerSlice = createSlice({
  name: "lineManager",
  initialState,
  reducers: {
    setLineManagerData: (state, action) => {
      state.lineManagerData = action.payload;
    },
    addLineManager: (state, action) => {
      state.lineManagerData.push(action.payload);
    },
    setEmployeeToLineManager: (state, action) => {
      const { lineManagerId, employeeId } = action.payload;
      const lineManagerIndex = state.lineManagerData.findIndex(
        (manager) => manager.line_manager_id === lineManagerId,
      );
      if (lineManagerIndex !== -1) {
        state.lineManagerData[lineManagerIndex].employee_ids.push(employeeId);
      }
    },
  },
});

export const { setLineManagerData, addLineManager, setEmployeeToLineManager } =
  lineManagerSlice.actions;
export default lineManagerSlice.reducer;
