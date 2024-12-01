import { FC } from 'react';

import { Login } from '@/features/Login';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './LoginPage.module.scss';

const LoginPage: FC = () => {
  return (
    <FlexRow
      alignItems={'center'}
      justifyContent={'center'}
      className={style.LoginPage}
    >
      <Login />
    </FlexRow>
  );
};

export default LoginPage;
