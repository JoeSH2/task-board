import Close from '@mui/icons-material/Close';
import { FC, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { getProjectId, getProjectTasksSelector } from '@/entities/Project';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { useDeleteTaskMutation } from '@/features/DeleteTask';
import { useUpdateTaskCountMutation } from '@/features/EditProject';
import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './DeleteTask.module.scss';

interface DeleteTaskProps {
  taskId: string | undefined;
}

export const DeleteTask: FC<DeleteTaskProps> = (props) => {
  const { taskId } = props;
  const projectId = useSelector(getProjectId);
  const projectTasksCount = useSelector(getProjectTasksSelector);
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTasksCount] = useUpdateTaskCountMutation();
  const { refetch } = useGetTasksListQuery({
    projectId,
  });

  const onDeleteTask = async (
    e: MouseEvent<HTMLButtonElement>,
    id?: string
  ) => {
    e.stopPropagation();
    if (id) {
      try {
        await deleteTask(id).unwrap();
        await updateTasksCount({
          id: projectId,
          tasks: projectTasksCount - 1,
        }).unwrap();
        await refetch().unwrap();
      } catch (e) {
        console.error(e);
      }
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
