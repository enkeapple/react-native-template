import Config from 'react-native-config';
import { parseEnv, envSchema } from './Environments';

jest.mock('react-native-config', () => ({}));

jest.mock('./Helpers', () => ({
  isDev: true,
}));

describe('parseEnv', () => {
  it('should parse the environment variables successfully in development mode', () => {
    const parseSpy = jest.spyOn(envSchema, 'parse');

    parseEnv();

    expect(parseSpy).toHaveBeenCalledWith(Config);
    parseSpy.mockRestore();
  });
});
