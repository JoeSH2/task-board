import { IProject } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const createProjectApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation<IProject, Omit<IProject, 'id'>>({
      query: (project) => ({
        url: 'projects',
        method: 'POST',
        body: project,
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = createProjectApi;
