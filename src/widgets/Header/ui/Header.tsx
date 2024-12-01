import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProfileCard } from '@/entities/ProfileCard';
import { getUserIsAuth } from '@/entities/User';
import { getLoginPage, getMainPage } from '@/shared/config/RoutingPath.ts';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import { Button } from '../../../shared/ui/Button/Button.tsx';
import style from './Header.module.scss';

export const Header: FC = () => {
  const isAuth = useAppSelector(getUserIsAuth);

  return (
    <header className={style.Header}>
      <FlexRow
        alignItems={'center'}
        justifyContent={'space-between'}
        className={style.wrapper}
      >
        <Link to={getMainPage()} className={style.title}>
          TaskBoard
        </Link>
        <nav className={style.nav}>
          {!isAuth ? (
            <Link to={getLoginPage()}>
              <Button>Sign in</Button>
            </Link>
          ) : (
            <ProfileCard />
          )}
        </nav>
      </FlexRow>
    </header>
  );
};
