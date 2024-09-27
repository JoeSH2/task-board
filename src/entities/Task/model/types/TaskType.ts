export enum TaskStatus {
  FULFILLED = 'FULFILLED',
  EXECUTED = 'EXECUTED',
  UNFULFILLED = 'UNFULFILLED',
}

export interface TaskType {
  id?: string;
  projectId?: string;
  title: string;
  description: string;
  report: string;
  status: TaskStatus;
  date?: string;
}
