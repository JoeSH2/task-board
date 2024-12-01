import { Alert, Snackbar } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { useLoginForm } from '@/features/Login/model/hook/useLoginForm.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Link } from '@/shared/ui/Link/Link.tsx';

import style from './Login.module.scss';

export const Login: FC = () => {
  const { handleClose, open, control, onValidatePassword, onSubmit, errors } =
    useLoginForm();

  return (
    <div className={style.Login}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ marginTop: '2rem' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Incorrect login or password, try again!
        </Alert>
      </Snackbar>
      <FlexRow
        className={style.infoTitle}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <h1 className={style.title}>Login</h1>
      </FlexRow>
      <form onSubmit={onSubmit} className={style.loginForm}>
        <FlexColumn className={style.inputWrapper}>
          <label>username</label>
          <Controller
            name={'username'}
            control={control}
            rules={{
              minLength: {
                value: 3,
                message: 'Username cannot be shorter than 2 characters',
              },
            }}
            render={({ field }) => (
              <Input
                hook={field}
                className={style.input}
                placeholder={'username'}
                error={errors.username?.message}
              />
            )}
          />
        </FlexColumn>
        <FlexColumn className={style.inputWrapper}>
          <label>password</label>
          <Controller
            control={control}
            rules={{
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters long',
              },
            }}
            render={({ field }) => (
              <Input
                hook={field}
                className={style.input}
                type={'password'}
                placeholder={'password'}
                error={errors.password?.message}
              />
            )}
            name={'password'}
          />
        </FlexColumn>
        <FlexColumn className={style.inputWrapper}>
          <label>forgot password</label>
          <Controller
            control={control}
            rules={{
              validate: (value) => onValidatePassword(value),
            }}
            render={({ field }) => (
              <Input
                hook={field}
                className={style.input}
                type={'password'}
                placeholder={'forgot password'}
                error={errors.forgotPassword?.message}
              />
            )}
            name={'forgotPassword'}
          />
        </FlexColumn>
        <p className={style.register}>
          If you don't have an account, <Link>sign up!</Link>
        </p>
        <Button type={'submit'} className={style.btnSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
};
