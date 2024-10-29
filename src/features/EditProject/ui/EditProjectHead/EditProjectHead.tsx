import { Avatar } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import {
  getProjectImageSelector,
  getProjectTitleSelector,
} from '@/entities/Project';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './EditProjectHead.module.scss';

export const EditProjectHead: FC = () => {
  const titleProject = useSelector(getProjectTitleSelector);
  const imageProject = useSelector(getProjectImageSelector);

  return (
    <FlexRow alignItems={'center'} className={style.EditProjectHead}>
      <h2 className={style.titleEdit}>Edit the project:</h2>
      <FlexRow className={style.titleWrapper} alignItems={'center'}>
        <Avatar src={imageProject} /> <b>{titleProject}</b>
      </FlexRow>
    </FlexRow>
  );
};
