import { createSlice } from "@reduxjs/toolkit";
import { project } from "../../constants/dummydata";

const initialState = {
  projectData: project,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projectData = [...state.projectData, action.payload];
    },
    deleteProject: (state, action) => {
      state.projectData = state.projectData.filter(
        (projectitem) => projectitem.id !== action.payload,
      );
    },
  },
});

export const { addProject, deleteProject } = projectSlice.actions;

export default projectSlice.reducer;
