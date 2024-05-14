import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { profileApi } from 'api';
import { StorageService } from 'services';
import { profileReducer } from './profile';

const profilePersistConfig = {
  key: 'profile',
  storage: StorageService,
  timeout: 0,
};

export const rootReducer = combineReducers({
  [profileApi.reducerPath]: profileApi.reducer,
  profile: persistReducer(profilePersistConfig, profileReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
