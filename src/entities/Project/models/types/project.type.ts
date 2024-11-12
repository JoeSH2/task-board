import { StatusProjectType } from '@/features/StatusProject';

export interface Project {
  id: string;
  title: string;
  img?: string;
  info: string;
  status: StatusProjectType;
  tasks: number;
}
