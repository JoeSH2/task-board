import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { getProjectById } from '@/entities/Project';
import { TaskStatus, TaskType } from '@/entities/Task';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { useAddTaskApiMutation } from '@/features/AddTask';
import { useSaveStatusMutation } from '@/features/SaveStatus';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';

import style from './ModalAddTask.module.scss';

interface ModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface AddTaskForm extends Partial<TaskType> {
  title: string;
  description: string;
}

export const ModalAddTask: FC<ModalAddTaskProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const { control, handleSubmit, reset } = useForm<AddTaskForm>();
  const projectId = useSelector(getProjectById);
  const [addTask] = useAddTaskApiMutation();
  const [saveStatus] = useSaveStatusMutation();
  const { data: tasks, refetch } = useGetTasksListQuery({
    projectId: projectId,
  });

  const onCreateSubmit: SubmitHandler<AddTaskForm> = async ({
    title,
    description,
  }) => {
    try {
      await addTask({
        title,
        description,
        projectId,
        status: TaskStatus.EXECUTED,
        report: '',
      }).unwrap();
      await refetch();
      reset();
      setIsOpen(false);
    } catch (e) {
      console.error('Error occurred:', e);
    }
  };
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  useEffect(() => {
    const updateProjectAndRefetch = async () => {
      if (tasks) {
        try {
          await saveStatus({
            id: projectId,
            tasks: tasks.length,
          }).unwrap();
        } catch (e) {
          console.log(e);
        }
      }
    };
    updateProjectAndRefetch();
  }, [projectId, saveStatus, tasks]);

  return (
    <Modal className={style.ModalAddTask} setIsOpen={setIsOpen} isOpen={isOpen}>
      <h5 className={style.title}>New task</h5>
      <form onSubmit={handleSubmit(onCreateSubmit)} className={style.form}>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>Name the task</label>
          <Controller
            name="title"
            defaultValue={''}
            control={control}
            render={({ field }) => (
              <Input
                clearStyle
                hook={field}
                placeholder="task name..."
                className={style.input}
              />
            )}
          />
        </FlexRow>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>Objective of tasks</label>
          <Controller
            name="description"
            defaultValue={''}
            control={control}
            render={({ field }) => (
              <Textarea
                hook={field}
                placeholder={'task description...'}
                className={style.textarea}
              />
            )}
          />
        </FlexRow>
        <FlexRow justifyContent={'space-evenly'} className={style.btnWrapper}>
          <Button className={style.btnCancel} onClick={onCancel}>
            Cancel
          </Button>
          <Button type={'submit'} className={style.btn}>
            Add task
          </Button>
        </FlexRow>
      </form>
    </Modal>
  );
};
