import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getTaskById, taskAction, TaskType } from '@/entities/Task';
import { DeleteTask } from '@/features/DeleteTask';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './TaskCard.module.scss';

interface TaskCardProps {
  task: TaskType;
}

export const TaskCard: FC<TaskCardProps> = memo(({ task }) => {
  const dispatch = useAppDispatch();
  const activeTaskId = useSelector(getTaskById);
  const isActiveCard = activeTaskId === task.id;

  const onChangeTask = () => {
    dispatch(taskAction.initialTask(task));
  };

  return (
    <FlexColumn
      fullWight
      onClick={onChangeTask}
      className={cls(style.TaskCard, { [style.active]: isActiveCard }, [])}
    >
      <DeleteTask taskId={task.id} />
      <h5 className={style.title}>{task.title}</h5>
      <FlexRow fullWight alignItems={'center'} justifyContent={'space-between'}>
        <p className={style.status}>{task.status}</p>
        {task.date && <p className={style.date}>{task.date}</p>}
      </FlexRow>
    </FlexColumn>
  );
});
