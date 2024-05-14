/* eslint-disable no-console */
import Config from 'react-native-config';
import { z } from 'zod';
import { isDev } from './Helpers';

export const envSchema = z.object({
  API_URL: z.string(),
});

export const parseEnv = () => {
  if (!isDev) {
    return;
  }

  try {
    envSchema.parse(Config);
  } catch (e) {
    console.warn(e);
  }
};
