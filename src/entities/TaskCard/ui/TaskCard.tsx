import { FC } from 'react';
import { taskAction } from 'src/entities/Task';
import { TaskType } from 'src/entities/Task/types/TaskType.ts';
import CrossSvg from 'src/shared/assets/img/cross.svg';
import { useAppDispatch } from 'src/shared/hooks/hookRedux.tsx';
import { Button } from 'src/shared/ui/Button/Button.tsx';
import { FlexColumn } from 'src/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from 'src/shared/ui/Flex/FlexRow.tsx';
import { Svg } from 'src/shared/ui/Svg/Svg.tsx';

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
