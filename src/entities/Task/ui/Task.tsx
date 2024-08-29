import { FC, memo } from 'react';
import { TaskForm } from 'src/entities/Task/ui/TaskForm.tsx';
import ClickSvg from 'src/shared/assets/img/click.svg';
import { useAppSelector } from 'src/shared/hooks/hookRedux.tsx';
import { FlexColumn } from 'src/shared/ui/Flex/FlexColumn.tsx';
import { Svg } from 'src/shared/ui/Svg/Svg.tsx';

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
