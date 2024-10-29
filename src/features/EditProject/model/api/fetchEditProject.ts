import { IProject } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const editProjectApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    editProject: build.mutation<IProject, IProject>({
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
