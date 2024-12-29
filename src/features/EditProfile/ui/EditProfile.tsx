import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useEditUserMutation, User, userAction } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';

import style from './EditProfile.module.scss';

interface EditProfileProps {
  user: User;
}

interface ProfileForm {
  id: number;
  username: string;
  image?: string;
}

export const EditProfile: FC<EditProfileProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const [editUser] = useEditUserMutation();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ProfileForm>({
    defaultValues: {
      id: user.id,
      username: user.username,
      image: user.image,
    },
  });

  const onSubmit: SubmitHandler<ProfileForm> = async () => {
    console.log(getValues());
    try {
      const { id, username, image } = getValues();
      await editUser({ id, username, image }).unwrap();
      dispatch(
        userAction.signWith({
          id,
          username,
          image,
          password: user.password,
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.EditProfile}>
      <FlexRow className={style.inputWrapper} alignItems={'flex-end'}>
        <label htmlFor="username">Username</label>
        <Controller
          name="username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters long',
            },
          }}
          render={({ field }) => (
            <Input
              clearStyle
              hook={field}
              placeholder={'username...'}
              error={errors.username?.message}
            />
          )}
        />
      </FlexRow>
      <FlexRow className={style.inputWrapper} alignItems={'flex-end'}>
        <label htmlFor="avatar">Avatar</label>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <Input clearStyle hook={field} placeholder={'image url'} />
          )}
        />
      </FlexRow>
      <FlexRow justifyContent={'flex-end'}>
        <Button type={'submit'}>Save</Button>
      </FlexRow>
    </form>
  );
};
