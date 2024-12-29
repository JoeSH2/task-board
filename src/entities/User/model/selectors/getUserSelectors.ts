import { RootState } from '@/app/store/store.ts';

export const getUserIsAuth = (state: RootState) => state.user.isAuth;
export const getUserInitial = (state: RootState) => state.user.initialUser;
export const getUserImage = (state: RootState) => state.user.initialUser?.image;
export const getUserUsername = (state: RootState) =>
  state.user.initialUser?.username;
