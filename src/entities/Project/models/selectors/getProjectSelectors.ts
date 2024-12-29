import { RootState } from '@/app/store/store.ts';

export const getProjectSelector = (state: RootState) => state.project.project;
export const getProjectTitleSelector = (state: RootState) =>
  state.project.project.title;
export const getProjectImageSelector = (state: RootState) =>
  state.project.project.img;
export const getProjectId = (state: RootState) => state.project.project.id;
export const getProjectTasksSelector = (state: RootState) =>
  state.project.project.tasks;
export const getProjectStatus = (state: RootState) =>
  state.project.project.status;
