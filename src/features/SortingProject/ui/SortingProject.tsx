import { FC, ReactNode } from 'react';

import { Project, useGetProjectsListQuery } from '@/entities/Project';
import { ProjectCard } from '@/entities/ProjectCard';
import { SortingItem } from '@/shared/ui/SortingMove/ui/SortingItem/SortingItem.tsx';
import { SortingList } from '@/shared/ui/SortingMove/ui/SortingList/SortingList.tsx';

import style from './SortingProject.module.scss';

interface SortingProjectProps {
  onFetch: (projects: Project[]) => void;
}

export const SortingProject: FC<SortingProjectProps> = ({ onFetch }) => {
  const { data, isSuccess } = useGetProjectsListQuery();

  const renderProjectList = (projects: Project[]): ReactNode => {
    return projects.map((project) => (
      <SortingItem id={project.id} key={project.id}>
        <ProjectCard
          img={project.img}
          status={project.status}
          projectName={project.title}
          tasks={project.tasks}
        />
      </SortingItem>
    ));
  };

  if (!isSuccess) {
    return <div>Error data</div>;
  }

  return (
    <div className={style.SortingProject}>
      <SortingList
        values={data}
        renderList={renderProjectList}
        onFetchValues={onFetch}
      />
    </div>
  );
};
