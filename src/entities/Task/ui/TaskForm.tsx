import { FC, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { taskAction } from 'src/entities/Task';
import { TaskStatus } from 'src/entities/Task/types/TaskType.ts';
import { useAppDispatch } from 'src/shared/hooks/hookRedux.tsx';
import { Button } from 'src/shared/ui/Button/Button.tsx';
import { FlexRow } from 'src/shared/ui/Flex/FlexRow.tsx';
import { Textarea } from 'src/shared/ui/Textarea/Textarea.tsx';

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
  status?: TaskStatus;
  report?: string;
}

export const TaskForm: FC<TaskFormState> = ({ status, report }) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const { control, handleSubmit, getValues, setFocus } = useForm<TaskForm>();

  const onSubmit: SubmitHandler<TaskForm> = useCallback(
    ({ report }) => {
      dispatch(
        taskAction.editTask({
          date:
            status !== TaskStatus.EXECUTED
              ? new Date().toLocaleDateString('ru-RU')
              : undefined,
          report,
          status: status,
        })
      );
    },
    [dispatch, status]
  );

  const onSelectStatus = (value: TaskStatus) => {
    if (getValues().report) {
      dispatch(taskAction.setStatus(value));
      setIsDisabled(value !== TaskStatus.EXECUTED);
    } else setFocus('report');
  };

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
        <Button className={style.saveBtn} type={'submit'} onClick={() => {}}>
          Save
        </Button>
      </FlexRow>
    </form>
  );
};
