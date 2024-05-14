import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from 'api';
import { ProfileReducer } from './types';

const initialState: ProfileReducer = {
  firstName: '',
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: () => initialState,
    setProfile: (_, { payload }: PayloadAction<Profile>) => payload,
  },
});

export const {
  reducer: profileReducer,
  actions: { resetProfile, setProfile },
} = profile;
