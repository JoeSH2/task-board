import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { getProjectStatus, useGetProjectByIdQuery } from '@/entities/Project';
import { useGetTasksListQuery } from '@/entities/Task/model/api/apiGetTasks.ts';
import { AddTask } from '@/features/AddTask';
import { DeleteProject } from '@/features/DeleteProject';
import { StatusProject, StatusProjectType } from '@/features/StatusProject';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { cls, ModeClassName } from '@/shared/lib/cls.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';
import { Tasks } from '@/widgets/Tasks';

import { ProjectInfo } from './ProjectInfo/ProjectInfo.tsx';
import style from './ProjectPage.module.scss';

const ProjectPage: FC = () => {
  const { id } = useParams();
  const statusProject = useAppSelector(getProjectStatus);
  const { isFetching, isError } = useGetProjectByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const { data } = useGetTasksListQuery({ projectId: id });

  const tasks = useMemo(() => data, [data]);

  const mode: ModeClassName = useMemo(() => {
    return {
      [style.hold]: statusProject === StatusProjectType.HOLD,
      [style.risk]: statusProject === StatusProjectType.RISK,
      [style.inactive]: statusProject === StatusProjectType.INACTIVE,
    };
  }, [statusProject]);

  if (isFetching) {
    return (
      <PageWrapper className={cls(style.ProjectPage, mode, [])}>
        <Loader height={'100%'} message={`Loading project`} />
      </PageWrapper>
    );
  }

  if (isError) {
    return <div>DATA ERROR!</div>;
  }

  return (
    <PageWrapper className={cls(style.ProjectPage, mode, [])}>
      <StatusProject />
      <ProjectInfo />
      <AddTask />
      <Tasks tasks={tasks} />
      <DeleteProject />
    </PageWrapper>
  );
};

export default ProjectPage;
