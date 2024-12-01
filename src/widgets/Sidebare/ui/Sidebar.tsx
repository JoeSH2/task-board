import { FC } from 'react';

import { CreateProject } from '@/features/CreateProject';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { cls } from '@/shared/lib/cls.ts';
import { ProjectListView } from '@/widgets/ProjectListView';

import style from './Sidebare.module.scss';

export const Sidebar: FC = () => {
  return (
    <aside className={cls(style.Sidebare, {}, [])}>
      <h3 className={style.title}>My projects</h3>
      <ThemeSwitcher className={style.toggleTheme} />
      <CreateProject />
      <ProjectListView />
    </aside>
  );
};
