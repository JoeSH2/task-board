import { Notifications } from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';
import { FC } from 'react';

import { userAction } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(userAction.logout());
  };

  return (
    <FlexRow alignItems={'center'} className={style.ProfileCard}>
      <Badge className={style.notifications} badgeContent={4} color={'default'}>
        <Notifications />
      </Badge>
      <div onClick={onLogout}>
        <FlexRow alignItems={'center'} className={style.userBlock}>
          <Avatar
            className={style.icon}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45676f99734913.5ef9b3dcdbd7f.jpg"
            alt="avatar"
          />
          <h5 className={style.name}>Username</h5>
        </FlexRow>
      </div>
    </FlexRow>
  );
};
