import { RootState } from 'src/app/store/store.ts';

export const getUserIsAuth = (state: RootState) => state.user.isAuth;
export const getUserInitial = (state: RootState) => state.user.initialUser;
