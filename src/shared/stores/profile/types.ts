import { Profile } from 'api';

export interface ProfileReducer extends Profile {}

export interface ProfileState {
  profile: ProfileReducer;
}
