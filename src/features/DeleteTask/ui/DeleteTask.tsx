import { X } from 'lucide-react';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getProjectId, getProjectTasksSelector } from '@/entities/Project';
import { taskAction } from '@/entities/Task';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { useDeleteTaskMutation } from '@/features/DeleteTask';
import { useUpdateTaskCountMutation } from '@/features/EditProject';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './DeleteTask.module.scss';

interface DeleteTaskProps {
  taskId: string;
}

export const DeleteTask: FC<DeleteTaskProps> = (props) => {
  const { taskId } = props;
  const dispatch = useAppDispatch();
  const projectId = useSelector(getProjectId);
  const projectTasksCount = useSelector(getProjectTasksSelector);
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTasksCount] = useUpdateTaskCountMutation();
  const { refetch } = useGetTasksListQuery({
    projectId,
  });

  const onDeleteTask = async (id: string) => {
    try {
      await deleteTask(id).unwrap();
      updateTasksCount({
        id: projectId,
        tasks: projectTasksCount - 1,
      }).unwrap();
      dispatch(taskAction.deleteTask());
      refetch().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      clearStyle
      className={style.DeleteTask}
      onClick={() => onDeleteTask(taskId)}
    >
      <X className={style.icon} />
    </Button>
  );
};
