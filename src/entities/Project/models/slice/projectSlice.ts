import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProject } from '@/entities/Project';
import { StatusProjectType } from '@/features/StatusProject';

interface ProjectState {
  project: IProject;
}

const initialState: ProjectState = {
  project: {
    img: '',
    info: '',
    title: '',
    tasks: NaN,
    status: StatusProjectType.INACTIVE,
    id: '',
  },
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    initialProject: (state, action: PayloadAction<IProject>) => {
      state.project = action.payload;
    },
    setStatus: (state, action: PayloadAction<StatusProjectType>) => {
      state.project.status = action.payload;
    },
    addProjectTasks: (state) => {
      if (state.project.tasks) {
        state.project.tasks = state.project.tasks + 1;
      }
    },
    deleteProjectTasks: (state) => {
      if (state.project.tasks) {
        state.project.tasks = state.project.tasks - 1;
      }
    },
  },
});

export const { actions: projectAction, reducer: projectReducer } = projectSlice;
