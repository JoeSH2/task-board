import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { taskReducer } from '@/entities/Task';
import { userReducer } from '@/entities/User';
import { statusProjectReducer } from '@/features/StatusProject';

const rootReducer = combineReducers({
  task: taskReducer,
  user: userReducer,
  statusProject: statusProjectReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
