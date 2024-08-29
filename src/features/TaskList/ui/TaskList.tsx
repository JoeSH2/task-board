import { FC } from 'react';

import { TaskType } from '@/entities/Task/types/TaskType.ts';
import { TaskCard } from '@/entities/TaskCard';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

import style from './TaskList.module.scss';

interface TaskListProps {
  tasks: TaskType[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <FlexColumn className={style.TaskList}>
      {tasks.map((task, i) => (
        <TaskCard key={`${task.title}_${i}`} task={task} />
      ))}
    </FlexColumn>
  );
};
