import { Project } from '@/entities/Project/models/types/project.type.ts';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

export const sortingProjectsApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    sortingProjects: build.mutation<Project[], Project[]>({
      query: (data) => ({
        url: '/projects',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useSortingProjectsMutation } = sortingProjectsApi;
