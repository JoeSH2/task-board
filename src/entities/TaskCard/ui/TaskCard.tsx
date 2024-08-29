import { FC } from 'react';

import { taskAction } from '@/entities/Task';
import { TaskType } from '@/entities/Task/types/TaskType.ts';
import CrossSvg from '@/shared/assets/img/cross.svg';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './TaskCard.module.scss';

interface TaskCardProps {
  task: TaskType;
}

export const TaskCard: FC<TaskCardProps> = (props) => {
  const { task } = props;
  const { date, status, title, description, report } = task;
  const dispath = useAppDispatch();

  const getInitialTask = () => {
    dispath(
      taskAction.initialTask({
        date,
        status,
        title,
        description,
        report,
      })
    );
  };

  return (
    <FlexColumn onClick={getInitialTask} className={style.TaskCard}>
      <Button
        clearStyle
        className={style.removeBtn}
        onClick={() => {
          console.log(1);
        }}
      >
        <Svg className={style.icon} src={CrossSvg} />
      </Button>
      <h5 className={style.title}>{title}</h5>
      <FlexRow full alignItems={'center'} justifyContent={'space-between'}>
        <p className={style.status}>{status}</p>
        {date && <p className={style.date}>{task.date}</p>}
      </FlexRow>
    </FlexColumn>
  );
};
