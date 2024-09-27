import { IProject } from '@/entities/Project/models/types/project.types.ts';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

export const projectsApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getProjectsList: build.query<IProject[], void>({
      query: () => ({
        url: '/projects',
      }),
    }),
    getProjectById: build.query<IProject, string | undefined>({
      query: (id) => ({ url: `/projects/${id}` }),
    }),
  }),
});

export const { useGetProjectsListQuery, useGetProjectByIdQuery } = projectsApi;
