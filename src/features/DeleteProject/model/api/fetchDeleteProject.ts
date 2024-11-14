import { Project } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const projectDeleteApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    deleteProject: build.mutation<Project, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
});

export const { useDeleteProjectMutation } = projectDeleteApi;
