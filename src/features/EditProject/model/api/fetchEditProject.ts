import { Project } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const editProjectApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    editProject: build.mutation<Project, Project>({
      query: (args) => {
        const { id, ...body } = args;
        return {
          url: `projects/${id}`,
          method: 'PUT',
          body,
        };
      },
    }),
  }),
});

export const { useEditProjectMutation } = editProjectApi;
