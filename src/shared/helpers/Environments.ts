/* eslint-disable no-console */
import Config from 'react-native-config';
import { z } from 'zod';
import { isDev } from './Helpers';

export const envSchema = z.object({
  API_URL: z.string(),
  TERMS_AND_CONDITIONS_LINK: z.string(),
  PRIVACY_POLICY_LINK: z.string(),
});

export const parseEnv = () => {
  if (isDev) {
    try {
      envSchema.parse(Config);
    } catch (e) {
      console.log(e);
      console.warn(e);
    }
  }
};
