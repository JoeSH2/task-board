import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskStatus, TaskType } from '../types/TaskType';

const emptyTask: TaskType = {
  id: '',
  title: '',
  projectId: '',
  status: TaskStatus.EXECUTED,
  date: undefined,
  description: '',
  report: '',
};

const initialState: TaskType = emptyTask;

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    initialTask: (_, action: PayloadAction<TaskType>) => {
      return { ...action.payload };
    },
    editTask: (state, action: PayloadAction<TaskType>) => {
      return { ...state, ...action.payload };
    },
    setStatus: (state, action: PayloadAction<TaskStatus>) => {
      state.status = action.payload;
    },
    deleteTask: () => {
      return emptyTask;
    },
  },
});

export const { actions: taskAction, reducer: taskReducer } = taskSlice;
