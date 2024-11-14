import { Project } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const createProjectApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation<Project, Omit<Project, 'id'>>({
      query: (project) => ({
        url: 'projects',
        method: 'POST',
        body: project,
      }),
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
});

export const { useCreateProjectMutation } = createProjectApi;
