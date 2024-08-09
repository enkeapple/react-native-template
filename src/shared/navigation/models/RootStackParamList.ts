import { Routes } from './Routes';

export type RootStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.MAIN_NAVIGATOR]: undefined;
  [Routes.SIGN_IN]: undefined;
  [Routes.DASHBOARD]: {
    [key: string]: string;
  };
};
