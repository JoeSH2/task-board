export {
  useGetProjectByIdQuery,
  useGetProjectsListQuery,
} from './models/api/apiGetProjects';
export {
  getProjectId,
  getProjectImageSelector,
  getProjectSelector,
  getProjectStatus,
  getProjectTasksSelector,
  getProjectTitleSelector,
} from './models/selectors/getProjectSelectors';
export { projectAction, projectReducer } from './models/slice/projectSlice';
export type { Project } from './models/types/project.type.ts';
