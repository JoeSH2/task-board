import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { projectReducer } from '@/entities/Project';
import { taskReducer } from '@/entities/Task';
import { userReducer } from '@/entities/User';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const rootReducer = combineReducers({
  task: taskReducer,
  user: userReducer,
  project: projectReducer,
  [apiRtkQuery.reducerPath]: apiRtkQuery.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRtkQuery.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
