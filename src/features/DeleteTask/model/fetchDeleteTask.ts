import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';
const deleteTaskApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    deleteTask: build.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteAllTasksProject: build.mutation<void, string>({
      query: (projectId) => ({
        url: `/tasks/${projectId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useDeleteTaskMutation, useDeleteAllTasksProjectMutation } =
  deleteTaskApi;
