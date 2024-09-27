export {
  useGetProjectByIdQuery,
  useGetProjectsListQuery,
} from './models/api/apiGetProjects';
export {
  getProjectById,
  getProjectSelector,
  getProjectStatus,
  getProjectTasksSelector,
  getProjectTitleSelector,
} from './models/selectors/getProjectSelectors';
export { projectAction, projectReducer } from './models/slice/projectSlice';
export type { IProject } from './models/types/project.types.ts';
