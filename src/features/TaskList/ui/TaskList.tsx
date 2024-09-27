import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getTaskById, taskAction } from '@/entities/Task';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks';
import { TaskCard } from '@/entities/TaskCard';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

import style from './TaskList.module.scss';

export const TaskList: FC = memo(() => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const taskId = useSelector(getTaskById);
  const { data, isSuccess } = useGetTasksListQuery({
    projectId: id,
  });
  useEffect(() => {
    if (data) {
      const mountTask = data.find((task) => task.id === taskId);
      dispatch(taskAction.initialTask(mountTask || data[0]));
    }
  }, [data, dispatch, taskId]);

  if (!isSuccess) {
    return <div>...ERROR DATA...</div>;
  }

  if (!data.length) {
    return (
      <FlexColumn justifyContent={'center'} className={style.noData_wrapper}>
        <h1 className={style.noData_title}>
          You don't have any project tasks yet
        </h1>
        <p className={style.noData_text}>
          Create your first project task and get started on it!
        </p>
      </FlexColumn>
    );
  }

  return (
    <FlexColumn className={style.TaskList}>
      {data.map((task, i) => (
        <TaskCard key={`${task.title}_${i}`} task={task} />
      ))}
    </FlexColumn>
  );
});
