import Config from 'react-native-config';
import { parseEnv, envSchema } from './Environments';

jest.mock('react-native-config', () => ({
  API_URL: 'API_URL',
  TERMS_AND_CONDITIONS_LINK: 'TERMS_AND_CONDITIONS_LINK',
  PRIVACY_POLICY_LINK: 'PRIVACY_POLICY_LINK',
}));

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

  it('should not parse or warn in non-development mode', () => {
    const parseSpy = jest.spyOn(envSchema.constructor.prototype, 'parse');
    jest.mock('./Helpers', () => ({
      isDev: false,
    }));

    parseEnv();

    expect(parseSpy).not.toHaveBeenCalled();
    parseSpy.mockRestore();
  });
});
