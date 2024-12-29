import { Notifications } from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserUsername, userAction } from '@/entities/User';
import { getUserImage } from '@/entities/User';
import { getProfilePage } from '@/shared/config/RoutingPath.ts';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Popup, PopupMenuItem } from '@/shared/ui/Popup/Popup.tsx';

import style from './ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const userImage = useSelector(getUserImage);
  const username = useSelector(getUserUsername);

  const onLogout = () => {
    dispatch(userAction.logout());
  };

  const menuItems = useMemo((): PopupMenuItem[] => {
    return [
      {
        title: 'Profile',
        onClick: () => navigate(getProfilePage()),
      },
      {
        title: 'Log out',
        onClick: onLogout,
      },
    ];
  }, [onLogout]);

  const card = (
    <FlexRow alignItems={'center'} className={style.userBlock}>
      <Avatar
        sx={{
          height: 48,
          width: 48,
        }}
        className={style.icon}
        src={userImage}
        alt="avatar"
      />
      <h5 className={style.name}>{username}</h5>
    </FlexRow>
  );

  return (
    <FlexRow alignItems={'center'} className={style.ProfileCard}>
      <Badge className={style.notifications} badgeContent={4} color={'default'}>
        <Notifications />
      </Badge>
      <Popup
        name={card}
        menuItems={menuItems}
        open={openMenu}
        setIsOpen={setOpenMenu}
      />
    </FlexRow>
  );
};
