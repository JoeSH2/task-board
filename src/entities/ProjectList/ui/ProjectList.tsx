import { FC } from 'react';
import { getUserIsAuth } from 'src/entities/User';
import { useAppSelector } from 'src/shared/hooks/hookRedux.tsx';
import { FlexColumn } from 'src/shared/ui/Flex/FlexColumn.tsx';

import { ProjectCard } from '../../ProjectCard';
import style from './ProjectList.module.scss';

export const ProjectList: FC = () => {
  const isAuth = useAppSelector(getUserIsAuth);

  if (!isAuth) {
    return (
      <FlexColumn justifyContent={'center'} className={style.preLoad}>
        <h2>This is where your projects should be</h2>
        <p>Authorize and create your first project!</p>
      </FlexColumn>
    );
  }

  return (
    <div className={style.ProjectList}>
      <ProjectCard projectName={'Company 1'} tasks={2} />
      <ProjectCard projectName={'Company 2'} tasks={6} />
      <ProjectCard projectName={'Company 3'} tasks={25} />
    </div>
  );
};
