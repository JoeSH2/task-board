import { TaskType } from '@/entities/Task';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

interface GetTasksListArgs {
  projectId?: string;
}

export const tasksApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getTasksList: build.query<TaskType[], GetTasksListArgs>({
      query: ({ projectId }) => {
        return {
          url: `/tasks`,
          params: { projectId },
        };
      },
      transformResponse: (rec: TaskType[]) => {
        return rec;
      },
      transformErrorResponse: (error: never) => {
        // Логика обработки ошибок
        console.error('Ошибка при запросе:', error);
        return error;
      },
    }),
  }),
});

export const { useGetTasksListQuery } = tasksApi;
