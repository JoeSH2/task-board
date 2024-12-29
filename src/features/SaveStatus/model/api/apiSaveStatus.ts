import { Project } from '@/entities/Project';
import { StatusProjectType } from '@/features/StatusProject';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

interface SaveStatusApiProps {
  id: string;
  status: StatusProjectType;
}

const saveStatusApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    saveStatus: build.mutation<Project, SaveStatusApiProps>({
      query: (args) => {
        const { id, ...body } = args;
        return {
          url: `projects/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
});

export const { useSaveStatusMutation } = saveStatusApi;
