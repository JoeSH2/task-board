import { TaskType } from '@/entities/Task';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const addTaskApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    addTaskApi: build.mutation<TaskType, Omit<TaskType, 'id'>>({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
      }),
    }),
  }),
});

export const { useAddTaskApiMutation } = addTaskApi;
