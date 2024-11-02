import { Edit } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProjectSelector } from '@/entities/Project';
import { SaveStatus } from '@/features/SaveStatus';
import { getEditProjectPage } from '@/shared/config/RoutingPath.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from '../ProjectPage.module.scss';

export const ProjectInfo: FC = memo(() => {
  const { id, img, title, info } = useSelector(getProjectSelector);

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
          <Link to={getEditProjectPage(id)}>
            <Button className={style.editBtn}>
              <Edit />
            </Button>
          </Link>
        </FlexRow>
        <SaveStatus />
      </FlexRow>
      <p className={style.text}>{info}</p>
    </>
  );
});
