import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/entities/User/model/types/user.ts';

interface UserState {
  isAuth: boolean;
  initialUser: Partial<User>;
}

const initialState: UserState = {
  isAuth: true,
  initialUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInitialUser: (state, action: PayloadAction<User>) => {
      state.isAuth = Boolean(action.payload);
      state.initialUser = action.payload;
    },
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
