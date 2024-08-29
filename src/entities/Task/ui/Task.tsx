import { FC, memo } from 'react';

import { TaskForm } from '@/entities/Task/ui/TaskForm.tsx';
import ClickSvg from '@/shared/assets/img/click.svg';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './Task.module.scss';

export const Task: FC = memo(() => {
  const { status, report, title, description } = useAppSelector(
    (state) => state.task
  );

  if (!title) {
    return (
      <FlexColumn
        className={style.Task}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Svg className={style.icon} src={ClickSvg} />
        <h3 className={style.name}>Select or create a task!</h3>
      </FlexColumn>
    );
  }

  return (
    <div className={style.Task}>
      <h2 className={style.name}>{title}</h2>
      <p className={style.text}>{description}</p>
      <TaskForm status={status} report={report} />
    </div>
  );
});
