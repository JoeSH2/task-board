import { RootState } from '@/app/store/store.ts';

export const getProjectSelector = (state: RootState) => state.project.project;
export const getProjectTitleSelector = (state: RootState) =>
  state.project.project.title;
export const getProjectById = (state: RootState) => state.project.project.id;
export const getProjectTasksSelector = (state: RootState) =>
  state.project.project.tasks;
export const getProjectStatus = (state: RootState) =>
  state.project.project.status;
