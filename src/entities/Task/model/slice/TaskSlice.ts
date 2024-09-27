import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskStatus, TaskType } from '../types/TaskType';

type TaskStatusState = Partial<TaskType>;

const initialState: TaskStatusState = {};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    initialTask: (_, action: PayloadAction<TaskType>) => {
      return { ...action.payload };
    },
    editTask: (state, action: PayloadAction<TaskStatusState>) => {
      return { ...state, ...action.payload };
    },
    setStatus: (state, action: PayloadAction<TaskStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { actions: taskAction, reducer: taskReducer } = taskSlice;
