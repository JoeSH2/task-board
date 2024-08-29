import { FC } from 'react';

import { ProjectList } from '@/entities/ProjectList';
import { CreateProject } from '@/features/CreateProject';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { cls } from '@/shared/lib/cls.ts';

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
