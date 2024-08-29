import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { taskReducer } from 'src/entities/Task';
import { userReducer } from 'src/entities/User';
import { statusProjectReducer } from 'src/features/StatusProject';

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
