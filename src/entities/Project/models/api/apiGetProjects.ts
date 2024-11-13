import { Project } from '@/entities/Project/models/types/project.type.ts';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

interface ProjectsApiProps {
  sortId?: string[];
}

export const projectsApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getProjectsList: build.query<Project[], ProjectsApiProps | void>({
      query: () => ({
        url: '/projects',
      }),
      transformResponse: (response: Project[], _, args) => {
        const sortId = args?.sortId || [];
        return sortId.length
          ? response.sort((a, b) => sortId.indexOf(a.id) - sortId.indexOf(b.id))
          : response;
      },
      providesTags: (result) => {
        const tags =
          result?.map(({ id }) => ({ type: 'Projects', id }) as const) ?? [];
        return [...tags, { type: 'Projects', id: 'LIST' }];
      },
    }),
    getProjectById: build.query<Project, string | undefined>({
      query: (id) => ({ url: `/projects/${id}` }),
    }),
  }),
});

export const { useGetProjectsListQuery, useGetProjectByIdQuery } = projectsApi;
