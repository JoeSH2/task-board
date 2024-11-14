import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusProjectType } from '@/features/StatusProject';

import { projectsApi } from '../api/apiGetProjects.ts';
import { Project } from '../types/project.type.ts';

interface ProjectState {
  project: Project;
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
    initialProject: (state, action: PayloadAction<Project>) => {
      state.project = action.payload;
    },
    setStatus: (state, action: PayloadAction<StatusProjectType>) => {
      state.project.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      projectsApi.endpoints.getProjectById.matchFulfilled,
      (state, { payload }) => {
        state.project = payload;
      }
    );
  },
});

export const { actions: projectAction, reducer: projectReducer } = projectSlice;
