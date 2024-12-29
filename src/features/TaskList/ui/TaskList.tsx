import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getTaskById, taskAction, TaskType } from '@/entities/Task';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { TaskCard } from '@/entities/TaskCard';
import { TaskListEmpty } from '@/features/TaskList/ui/TaskListEmpty/TaskListEmpty.tsx';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

import style from './TaskList.module.scss';

interface TaskListProps {
  tasks: TaskType[] | undefined;
}

export const TaskList: FC<TaskListProps> = memo(({ tasks }) => {
  const { id: projectId } = useParams();
  const dispatch = useAppDispatch();
  const taskId = useSelector(getTaskById);
  const { isError, isLoading } = useGetTasksListQuery({
    projectId,
  });

  useEffect(() => {
    if (tasks && tasks.length) {
      const mountTask = tasks.find((task) => task.id === taskId);
      dispatch(taskAction.initialTask(mountTask || tasks[0]));
    }
  }, [tasks, dispatch]);

  if (isError) {
    return (
      <FlexColumn
        alignItems={'center'}
        justifyContent={'center'}
        className={cls(style.TaskList, {}, [style.loader])}
      >
        <h3>Data error</h3>
      </FlexColumn>
    );
  }

  if (isLoading) {
    return (
      <FlexColumn
        alignItems={'center'}
        justifyContent={'center'}
        className={cls(style.TaskList, {}, [style.loader])}
      >
        <Loader height={'100%'} />
      </FlexColumn>
    );
  }

  if (!tasks?.length) {
    return <TaskListEmpty />;
  }

  return (
    <FlexColumn className={style.TaskList}>
      {tasks.map((task, i) => (
        <TaskCard key={`${task.id}_${i}`} task={task} />
      ))}
    </FlexColumn>
  );
});
