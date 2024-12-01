import { FC } from 'react';

import { Task, TaskType } from '@/entities/Task';
import { TaskList } from '@/features/TaskList';

import style from './Tasks.module.scss';

interface TasksProps {
  tasks: TaskType[] | undefined;
}

export const Tasks: FC<TasksProps> = ({ tasks }) => {
  return (
    <div className={style.Tasks}>
      <TaskList tasks={tasks} />
      <Task />
    </div>
  );
};
