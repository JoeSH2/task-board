import { Project } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const saveStatusApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    saveStatus: build.mutation<Project, Partial<Project>>({
      query: (args) => {
        const { id, ...body } = args;
        return {
          url: `projects/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
});

export const { useSaveStatusMutation } = saveStatusApi;
