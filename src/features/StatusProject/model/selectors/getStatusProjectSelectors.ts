import { RootState } from 'src/app/store/store.ts';

export const getStatusProject = (state: RootState) =>
  state.statusProject.status;
