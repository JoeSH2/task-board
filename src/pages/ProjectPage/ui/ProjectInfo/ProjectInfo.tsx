import { Edit } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProjectById } from '@/entities/Project';
import { SaveStatus } from '@/features/SaveStatus';
import { getEditProjectPage } from '@/shared/config/RoutingPath.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from '../ProjectPage.module.scss';

interface ProjectInfoProps {
  img?: string;
  title?: string;
  info?: string;
}

export const ProjectInfo: FC<ProjectInfoProps> = memo(
  ({ img, info, title }) => {
    const id = useSelector(getProjectById);

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
            {id && (
              <Link to={getEditProjectPage(id)}>
                <Button className={style.editBtn}>
                  <Edit />
                </Button>
              </Link>
            )}
          </FlexRow>
          <SaveStatus />
        </FlexRow>
        <p className={style.text}>{info}</p>
      </>
    );
  }
);
