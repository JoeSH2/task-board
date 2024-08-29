import { FC } from 'react';

import style from './Project.module.scss';

interface ProjectProps {}

export const Project: FC<ProjectProps> = (props) => {
  const {} = props;
  return (
    <div className={style.Project}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{info}</p>
    </div>
  );
};
