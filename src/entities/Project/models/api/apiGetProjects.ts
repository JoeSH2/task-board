import { Project } from '@/entities/Project/models/types/project.type.ts';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

export const projectsApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getProjectsList: build.query<Project[], void>({
      query: () => ({
        url: '/projects',
      }),
    }),
    getProjectById: build.query<Project, string | undefined>({
      query: (id) => ({ url: `/projects/${id}` }),
    }),
  }),
});

export const { useGetProjectsListQuery, useGetProjectByIdQuery } = projectsApi;
