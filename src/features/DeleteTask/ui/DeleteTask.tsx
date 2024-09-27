import Close from '@mui/icons-material/Close';
import { FC, MouseEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getProjectById, useGetProjectsListQuery } from '@/entities/Project';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { useDeleteTaskMutation } from '@/features/DeleteTask';
import { useSaveProjectMutation } from '@/features/SaveProject';
import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './DeleteTask.module.scss';

interface DeleteTaskProps {
  taskId: string | undefined;
}

export const DeleteTask: FC<DeleteTaskProps> = (props) => {
  const { taskId } = props;
  const projectId = useSelector(getProjectById);
  const [deleteTask] = useDeleteTaskMutation();
  const [saveProject] = useSaveProjectMutation();
  const { data: tasks, refetch: refetchTasks } = useGetTasksListQuery({
    projectId,
  });
  const { refetch: refetchProjects } = useGetProjectsListQuery();

  const onDeleteTask = async (
    e: MouseEvent<HTMLButtonElement>,
    id?: string
  ) => {
    e.stopPropagation();
    if (id) {
      await deleteTask(id);
      await refetchTasks();
    }
  };

  useEffect(() => {
    if (tasks) {
      saveProject({
        id: projectId,
        tasks: tasks.length,
      }).unwrap();
      refetchProjects();
    }
  }, [tasks]);

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
