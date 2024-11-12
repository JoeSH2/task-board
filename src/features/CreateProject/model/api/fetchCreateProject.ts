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
    }),
  }),
});

export const { useCreateProjectMutation } = createProjectApi;
