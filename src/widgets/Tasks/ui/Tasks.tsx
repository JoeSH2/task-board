import { FC } from 'react';

import { Task } from '@/entities/Task';
import { TaskList } from '@/features/TaskList';

import style from './Tasks.module.scss';

export const Tasks: FC = () => {
  return (
    <div className={style.Tasks}>
      <TaskList />
      <Task />
    </div>
  );
};
