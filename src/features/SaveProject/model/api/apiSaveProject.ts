import { IProject } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const saveProjectApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    saveProject: build.mutation<IProject, Partial<IProject>>({
      query: (args) => {
        const { id, ...body } = args;
        return {
          url: `projects/${id}`,
          method: 'PATCH',
          body,
        };
      },
    }),
  }),
});

export const { useSaveProjectMutation } = saveProjectApi;
