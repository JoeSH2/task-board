import { FC, memo, useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { getProjectById } from '@/entities/Project';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';

import { useSaveTaskMutation } from '../model/api/apiSaveTask';
import { taskAction } from '../model/slice/TaskSlice';
import { TaskStatus, TaskType } from '../model/types/TaskType';
import style from './Task.module.scss';

interface TaskForm {
  report: string;
}

const buttonReportTask: Array<TaskStatus> = [
  TaskStatus.FULFILLED,
  TaskStatus.EXECUTED,
  TaskStatus.UNFULFILLED,
];

interface TaskFormState {
  id?: string;
  status?: TaskStatus;
  report?: string;
}

export const TaskForm: FC<TaskFormState> = memo(({ status, id, report }) => {
  const dispatch = useAppDispatch();
  const projectId = useSelector(getProjectById);
  const { refetch } = useGetTasksListQuery({ projectId });
  const [isDisabled, setIsDisabled] = useState(false);
  const [saveTask] = useSaveTaskMutation();
  const { control, handleSubmit, getValues, setFocus, reset } =
    useForm<TaskForm>();

  const onSubmit: SubmitHandler<TaskForm> = useCallback(
    async ({ report }) => {
      const task: Partial<TaskType> = {
        id: id,
        date:
          status !== TaskStatus.EXECUTED
            ? new Date().toLocaleDateString('ru-RU')
            : '',
        report,
        status: status,
      };
      try {
        await saveTask(task);
        await refetch();
      } catch (e) {
        console.log(e);
      }
    },
    [refetch, saveTask, status]
  );

  const onSelectStatus = (value: TaskStatus) => {
    if (getValues().report) {
      dispatch(taskAction.setStatus(value));
      setIsDisabled(value !== TaskStatus.EXECUTED);
    } else setFocus('report');
  };

  useEffect(() => {
    reset({ report });
    setIsDisabled(status !== TaskStatus.EXECUTED);
  }, [report, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form} action="">
      <div className={style.wrapperInput}>
        <label>Report on the task:</label>
        <Controller
          name="report"
          control={control}
          defaultValue={report}
          render={({ field }) => (
            <Textarea
              hook={field}
              placeholder={'write a task report...'}
              disabled={isDisabled}
              className={style.inputText}
            />
          )}
        />
      </div>
      <FlexRow className={style.wrapperToggle}>
        {buttonReportTask.map((item) => (
          <Button
            key={item}
            className={style.toggle}
            active={status === item}
            onClick={() => onSelectStatus(item)}
          >
            {item}
          </Button>
        ))}
      </FlexRow>
      <FlexRow justifyContent={'flex-end'} className={style.saveBlock}>
        <Button className={style.saveBtn} type={'submit'}>
          Save
        </Button>
      </FlexRow>
    </form>
  );
});
