import { TaskType } from '@/entities/Task';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const saveTaskApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    saveTask: build.mutation<TaskType, Partial<TaskType>>({
      query: (args) => {
        const { id, ...body } = args;
        return {
          url: `tasks/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Task', id }],
    }),
  }),
});

export const { useSaveTaskMutation } = saveTaskApi;
