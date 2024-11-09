import { envSchema } from 'helpers';
import { z } from 'zod';

declare module 'react-native-config' {
  interface NativeConfig extends z.infer<typeof envSchema> {}
}
