import { FC } from 'react';

import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

import style from './TaskListEmpty.module.scss';

export const TaskListEmpty: FC = () => {
  return (
    <FlexColumn justifyContent={'center'} className={style.noData_wrapper}>
      <h1 className={style.noData_title}>
        You don't have any project tasks yet
      </h1>
      <p className={style.noData_text}>
        Create your first project task and get started on it!
      </p>
    </FlexColumn>
  );
};
