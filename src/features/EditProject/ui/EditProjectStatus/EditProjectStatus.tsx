import { FC } from 'react';

import { StatusProject } from '@/features/StatusProject';

import style from './EditProjectStatus.module.scss';

export const EditProjectStatus: FC = () => {
  return (
    <div className={style.EditProjectStatus}>
      <h3 className={style.title}>Execution status</h3>
      <StatusProject />
    </div>
  );
};
