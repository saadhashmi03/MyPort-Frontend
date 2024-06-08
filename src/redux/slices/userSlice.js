import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { 
    projects: [],
    skills: [],
  },
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter(skill => skill.id !== action.payload); // Assuming each skill has an id
    },
  },
});

export const { setSkills, setProjects, deleteSkill } = userSlice.actions;
export default userSlice.reducer;
