import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '@/entities/User';
import { getMainPage } from '@/shared/config/RoutingPath.ts';

interface FormLogin {
  username: string;
  password: string;
  forgotPassword: string;
}

export const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      forgotPassword: '',
    },
  });
  const [loginUser, { data, isError }] = useLoginMutation();
  const location = useNavigate();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<FormLogin> = useCallback(
    ({ username, password }) => {
      if (errors) {
        try {
          loginUser({ username, password }).unwrap();
        } catch (e) {
          console.log(e);
        }
      }
    },
    [errors, isError, loginUser]
  );

  const handleClose = () => {
    setOpen(false);
  };

  const onValidatePassword = (value: string) => {
    return (
      !value.length || value === watch('password') || 'The passwords must match'
    );
  };

  useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      location(getMainPage());
    }
  }, [data, location]);

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    onValidatePassword,
    handleClose,
    open,
    errors,
  };
};
