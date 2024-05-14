import { ProfileState } from './types';

const all = (state: ProfileState) => state.profile;

const firstName = (state: ProfileState) => all(state).firstName;

export const profileSelectors = {
  firstName,
};
