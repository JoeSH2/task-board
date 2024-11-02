import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { getProjectStatus, useGetProjectByIdQuery } from '@/entities/Project';
import { AddTask } from '@/features/AddTask';
import { DeleteProject } from '@/features/DeleteProject';
import { StatusProject, StatusProjectType } from '@/features/StatusProject';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { cls, ModeClassName } from '@/shared/lib/cls.ts';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';
import { Tasks } from '@/widgets/Tasks';

import { ProjectInfo } from './ProjectInfo/ProjectInfo.tsx';
import style from './ProjectPage.module.scss';

const ProjectPage: FC = () => {
  const { id } = useParams();
  const statusProject = useAppSelector(getProjectStatus);
  const { data, isLoading } = useGetProjectByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const mode: ModeClassName = useMemo(() => {
    return {
      [style.hold]: statusProject === StatusProjectType.HOLD,
      [style.risk]: statusProject === StatusProjectType.RISK,
      [style.inactive]: statusProject === StatusProjectType.INACTIVE,
    };
  }, [statusProject]);

  if (isLoading) {
    return (
      <FlexColumn
        fullHeight
        fullWight
        justifyContent={'center'}
        alignItems={'center'}
      >
        ...LOADING...
      </FlexColumn>
    );
  }

  if (!data) {
    return <div>DATA ERROR!</div>;
  }

  return (
    <PageWrapper className={cls(style.ProjectPage, mode, [])}>
      <StatusProject />
      <ProjectInfo />
      <AddTask />
      <Tasks />
      <DeleteProject />
    </PageWrapper>
  );
};

export default ProjectPage;
