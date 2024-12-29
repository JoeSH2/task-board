import { Avatar } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getUserInitial } from '@/entities/User';
import { EditProfile } from '@/features/EditProfile';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './ProfilePage.module.scss';

const ProfilePage: FC = () => {
  const user = useSelector(getUserInitial);

  if (!user) {
    throw new Error('User is undefined. This should never happen.');
  }

  return (
    <PageWrapper className={style.ProfilePage}>
      <h2>Profile</h2>
      <FlexRow className={style.profile} alignItems={'center'}>
        <Avatar src={user.image} className={style.avatar} />
        <span>{user.username}</span>
      </FlexRow>
      <EditProfile user={user} />
    </PageWrapper>
  );
};

export default ProfilePage;
