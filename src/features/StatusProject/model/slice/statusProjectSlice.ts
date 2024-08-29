import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusProjectType } from '../types/StatusProjectType';

interface StatusProjectState {
  status: StatusProjectType;
}

const initialState: StatusProjectState = {
  status: StatusProjectType.INACTIVE,
};

export const statusProjectSlice = createSlice({
  name: 'statusProject',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusProjectType>) => {
      state.status = action.payload;
    },
  },
});

export const { actions: statusProjectAction, reducer: statusProjectReducer } =
  statusProjectSlice;
