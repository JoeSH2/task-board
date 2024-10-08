import { Notifications } from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';
import { FC } from 'react';

import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './ProfileCard.module.scss';

interface ProfileCardProps {}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {} = props;
  return (
    <FlexRow alignItems={'center'} className={style.ProfileCard}>
      <Badge className={style.notifications} badgeContent={4} color={'default'}>
        <Notifications />
      </Badge>
      <Avatar
        className={style.icon}
        src="https://pics.craiyon.com/2023-09-27/96e23597234e4e8a80f7d7843d51040a.webp"
        alt="avatar"
      />
      <h5 className={style.name}>Username</h5>
    </FlexRow>
  );
};
