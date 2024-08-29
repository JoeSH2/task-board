import { FC } from 'react';
import { ProfileCard } from 'src/entities/ProfileCard';
import { getUserIsAuth } from 'src/entities/User';
import { Login } from 'src/features/Login';
import { useAppSelector } from 'src/shared/hooks/hookRedux.tsx';
import { FlexRow } from 'src/shared/ui/Flex/FlexRow.tsx';

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
        <h1 className={style.title}>TaskBoard</h1>
        <nav className={style.nav}>
          {!isAuth ? (
            <>
              <Button onClick={() => {}}>Sign Up</Button>
              <Login />
            </>
          ) : (
            <ProfileCard />
          )}
        </nav>
      </FlexRow>
    </header>
  );
};
