import { RootState } from '@/app/store/store.ts';

export const getStatusProject = (state: RootState) =>
  state.statusProject.status;
