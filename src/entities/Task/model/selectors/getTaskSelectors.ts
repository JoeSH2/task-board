import { RootState } from '@/app/store/store.ts';
import { TaskStatus } from '@/entities/Task/types/TaskType.ts';

export const getTaskStatus = (state: RootState) =>
  state.task.status ?? TaskStatus.EXECUTED;
export const getTaskDescription = (state: RootState) =>
  state.task.description ?? '';
export const getTaskTitle = (state: RootState) => state.task.title;
export const getTaskDate = (state: RootState) => state.task.date;
export const getTaskReport = (state: RootState) => state.task.report;
