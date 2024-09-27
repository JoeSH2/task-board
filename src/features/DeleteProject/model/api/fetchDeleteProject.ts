import { IProject } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const projectDeleteApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    deleteProject: build.mutation<IProject, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useDeleteProjectMutation } = projectDeleteApi;
