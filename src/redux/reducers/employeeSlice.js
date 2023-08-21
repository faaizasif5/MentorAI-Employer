import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../constants/dummydata";

const initialState = {
  employeeData: dummyData,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setTableReduxData: (state, action) => {
      state.employeeData = action.payload;
    },
    addEmployee: (state, action) => {
      state.employeeData.push(action.payload);
    },
    setLineManagerToEmployee: (state, action) => {
      const { lineManagerId, employeeId } = action.payload;
      const employeeIndex = state.employeeData.findIndex(
        (employee) => employee.employee_id === employeeId,
      );
      if (employeeIndex !== -1) {
        state.employeeData[employeeIndex].line_manager_id = lineManagerId;
      }
    },
  },
});

export const { setTableReduxData, addEmployee, setLineManagerToEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
