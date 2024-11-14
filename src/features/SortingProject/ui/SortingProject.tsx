import { FC, ReactNode } from 'react';

import { Project } from '@/entities/Project';
import { ProjectCard } from '@/entities/ProjectCard';
import { SortingItem } from '@/shared/ui/SortingMove/ui/SortingItem/SortingItem.tsx';
import { SortingList } from '@/shared/ui/SortingMove/ui/SortingList/SortingList.tsx';

import style from './SortingProject.module.scss';

interface SortingProjectProps {
  onFetch: (projects: Project[]) => void;
  isFetching: boolean;
  data: Project[] | undefined;
}

export const SortingProject: FC<SortingProjectProps> = ({
  onFetch,
  isFetching,
  data,
}) => {
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

  if (!data) {
    return <div>Error data</div>;
  }

  return (
    <div className={style.SortingProject}>
      <SortingList
        isFetching={isFetching}
        values={data}
        renderList={renderProjectList}
        onFetchValues={onFetch}
      />
    </div>
  );
};
