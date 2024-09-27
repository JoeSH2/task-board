import { Avatar } from '@mui/material';
import { FC } from 'react';

import { StatusProjectType } from '@/features/StatusProject';
import { cls } from '@/shared/lib/cls.ts';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './ProjectCard.module.scss';

interface ProjectCardProps {
  projectName: string;
  tasks: number;
  img?: string;
  status: StatusProjectType;
  onClick?: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { projectName, tasks, onClick, status, img } = props;
  return (
    <FlexRow
      alignItems={'center'}
      onClick={onClick}
      className={cls(
        style.ProjectCard,
        {
          [style.hold]: status === StatusProjectType.HOLD,
          [style.risk]: status === StatusProjectType.RISK,
          [style.inactive]: status === StatusProjectType.INACTIVE,
        },
        []
      )}
    >
      <Avatar className={style.img} src={img} />
      <FlexColumn
        fullWight
        className={style.wrapper}
        justifyContent={'space-between'}
      >
        <h5 className={style.title}>{projectName}</h5>
        <span>{tasks} tasks</span>
      </FlexColumn>
    </FlexRow>
  );
};
