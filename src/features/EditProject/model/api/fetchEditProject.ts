import { Project } from '@/entities/Project';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

interface UpdateTaskCountProps {
  id: string;
  tasks: number;
}

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
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
    updateTaskCount: build.mutation<Project, UpdateTaskCountProps>({
      query: (body) => ({
        url: `projects/${body.id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
});

export const { useEditProjectMutation, useUpdateTaskCountMutation } =
  editProjectApi;
