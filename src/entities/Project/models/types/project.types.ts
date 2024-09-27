import { StatusProjectType } from '@/features/StatusProject';

export interface IProject {
  id: string;
  title: string;
  img?: string;
  info: string;
  status: StatusProjectType;
  tasks: number;
}
