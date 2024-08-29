import { FC } from 'react';

import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './ProjectCard.module.scss';

interface ProjectCardProps {
  projectName: string;
  tasks: number;
  onClick?: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { projectName, tasks, onClick } = props;
  return (
    <FlexRow
      alignItems={'center'}
      onClick={onClick}
      className={style.ProjectCard}
    >
      <img
        className={style.img}
        src={
          'https://media.istockphoto.com/id/911660906/vector/computer-hacker-with-laptop-icon.jpg?s=612x612&w=0&k=20&c=rmx25IUnM2fHP4lXG96PNeZ_YQ1kQUTTWfGU4EE5iqQ='
        }
      />
      <FlexColumn justifyContent={'space-between'}>
        <h5>{projectName}</h5>
        <span>{tasks} tasks</span>
      </FlexColumn>
    </FlexRow>
  );
};
