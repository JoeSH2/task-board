import { Avatar } from '@mui/material';
import { FC, memo } from 'react';

import { SaveProject } from '@/features/SaveProject';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from '../ProjectPage.module.scss';

interface ProjectInfoProps {
  img?: string;
  title?: string;
  info?: string;
}

export const ProjectInfo: FC<ProjectInfoProps> = memo((props) => {
  const { img, info, title } = props;
  return (
    <>
      <FlexRow
        className={style.projectInfo}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <FlexRow className={style.title} alignItems={'center'}>
          <Avatar src={img} />
          <p>{title}</p>
        </FlexRow>
        <SaveProject />
      </FlexRow>
      <p className={style.text}>{info}</p>
    </>
  );
});
