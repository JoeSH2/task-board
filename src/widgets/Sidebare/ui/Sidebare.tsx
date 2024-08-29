import { FC } from 'react';
import { ProjectList } from 'src/entities/ProjectList';
import { CreateProject } from 'src/features/CreateProject';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { cls } from 'src/shared/lib/cls.ts';

import style from './Sidebare.module.scss';

export const Sidebare: FC = () => {
  return (
    <aside className={cls(style.Sidebare, {}, [])}>
      <h3 className={style.title}>My projects</h3>
      <ThemeSwitcher className={style.toggleTheme} />
      <CreateProject />
      <ProjectList />
    </aside>
  );
};
