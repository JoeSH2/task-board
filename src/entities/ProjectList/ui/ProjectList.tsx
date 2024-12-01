import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Project } from '@/entities/Project';
import { ProjectCard } from '@/entities/ProjectCard';
import { getProjectsPage } from '@/shared/config/RoutingPath.ts';

import style from './ProjectList.module.scss';

interface ProjectListProps {
  data: Project[] | undefined;
}

export const ProjectList: FC<ProjectListProps> = memo(({ data }) => {
  return (
    <div className={style.ProjectList}>
      {data?.map((project, i) => (
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
});
