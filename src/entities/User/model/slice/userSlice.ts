import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/entities/User/model/types/user.ts';
import { StorageKey } from '@/shared/consts/storageKey.ts';
import { localStorageWrapper } from '@/shared/lib/storageWrapper.ts';

interface UserState {
  isAuth?: boolean;
  initialUser?: User;
}

const initialState: UserState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signWith: (state, action: PayloadAction<User>) => {
      state.isAuth = Boolean(action.payload);
      state.initialUser = action.payload;
      localStorageWrapper.set(StorageKey.USER_KEY, action.payload);
    },
    logout: (state) => {
      state.isAuth = false;
      state.initialUser = undefined;
      localStorageWrapper.remove(StorageKey.USER_KEY);
    },
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
