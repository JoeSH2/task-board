import { FC, MouseEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { User, userAction } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import style from './Login.module.scss';

interface FormLogin {
  login: string;
  password: string;
}

export const Login: FC = () => {
  const dispath = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, getValues } = useForm<FormLogin>();
  const onSubmit: SubmitHandler<FormLogin> = (data) => console.log(data);

  const onOpenModal = (e: MouseEvent) => {
    e.stopPropagation(); // TODO
    setIsOpen(true);
  };

  const setFAKEInitialUser = () => {
    const user: User = {
      id: 1,
      login: getValues().login,
      password: getValues().password,
    };
    dispath(userAction.setInitialUser(user));
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={(e: MouseEvent) => onOpenModal(e)}>Login</Button>
      <Modal className={style.Login} isOpen={isOpen} setIsOpen={setIsOpen}>
        <h5 className={style.title}>Fake Login</h5>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <FlexRow alignItems={'center'} className={style.blockForm}>
            <label className={style.text}>Login</label>
            <Input
              hook={register('login', { required: true })}
              placeholder={'test@gmail.com...'}
              className={style.input}
            />
          </FlexRow>
          <FlexRow alignItems={'center'} className={style.blockForm}>
            <label className={style.text}>Password</label>
            <Input
              hook={register('password', { required: true })}
              type={'password'}
              placeholder={'password...'}
              className={style.input}
            />
          </FlexRow>
          <Button
            type={'submit'}
            className={style.btn}
            onClick={setFAKEInitialUser}
          >
            Sign in
          </Button>
        </form>
      </Modal>
    </>
  );
};
