import { FC, memo } from 'react';

import { getProjectId } from '@/entities/Project';
import { getTaskSelector, TaskStatus } from '@/entities/Task';
import { TaskForm } from '@/entities/Task/ui/TaskForm';
import { useAppSelector } from '@/shared/hooks/hookRedux';
import { cls, ModeClassName } from '@/shared/lib/cls.ts';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

import style from './Task.module.scss';

export const Task: FC = memo(() => {
  const activeProjectId = useAppSelector(getProjectId);
  const { status, report, title, description, id, projectId } =
    useAppSelector(getTaskSelector);

  const mods: ModeClassName = {
    [style.fulfiled]: status === TaskStatus.FULFILLED,
    [style.unfulfiled]: status === TaskStatus.UNFULFILLED,
  };

  if (!id || activeProjectId !== projectId) {
    return (
      <FlexColumn
        alignItems={'center'}
        justifyContent={'center'}
        className={cls(style.Task, {}, [style.noData])}
      >
        <h1>It's empty so far =(</h1>
        <p>Add a task!</p>
      </FlexColumn>
    );
  }

  return (
    <FlexColumn className={cls(style.Task, mods, [])}>
      <h2 className={style.name}>{title}</h2>
      <p className={style.text}>{description}</p>
      <TaskForm id={id} status={status} report={report} />
    </FlexColumn>
  );
});
