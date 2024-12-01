import Close from '@mui/icons-material/Close';
import { FC, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { getProjectById } from '@/entities/Project';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { useDeleteTaskMutation } from '@/features/DeleteTask';
import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './DeleteTask.module.scss';

interface DeleteTaskProps {
  taskId: string | undefined;
}

export const DeleteTask: FC<DeleteTaskProps> = (props) => {
  const { taskId } = props;
  const projectId = useSelector(getProjectById);
  const [deleteTask] = useDeleteTaskMutation();
  const { refetch } = useGetTasksListQuery({
    projectId,
  });

  const onDeleteTask = async (
    e: MouseEvent<HTMLButtonElement>,
    id?: string
  ) => {
    e.stopPropagation();
    if (id) {
      await deleteTask(id);
      await refetch();
    }
  };

  return (
    <Button
      clearStyle
      className={style.DeleteTask}
      onClick={(event) => onDeleteTask(event, taskId)}
    >
      <Close className={style.icon} />
    </Button>
  );
};
