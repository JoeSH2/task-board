import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useGetProjectsListQuery } from '@/entities/Project';
import { ProjectCard } from '@/entities/ProjectCard';
import { getProjectsPage } from '@/shared/config/RoutingPath.ts';

import style from './ProjectList.module.scss';

export const ProjectList: FC = () => {
  const { data, isSuccess } = useGetProjectsListQuery();

  if (!isSuccess) {
    return <div>...Error data...</div>;
  }

  return (
    <div className={style.ProjectList}>
      {data.map((project, i) => (
        <Link key={`${project.id}_${i}`} to={getProjectsPage(project.id)}>
          <ProjectCard
            img={project.img}
            status={project.status}
            projectName={project.title}
            tasks={project.tasks}
          />
        </Link>
      ))}
    </div>
  );
};
