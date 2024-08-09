import { Linking } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { ToastService } from 'services';
import {
  isDev,
  noop,
  withDelay,
  capitalize,
  uuid,
  openLink,
  getInitials,
  truncate,
  isValidJson,
} from './Helpers';

jest.mock('react-native', () => ({
  Linking: {
    openURL: jest.fn(),
  },
}));

jest.mock('react-native-inappbrowser-reborn', () => ({
  InAppBrowser: {
    isAvailable: jest.fn(),
    open: jest.fn(),
  },
}));

jest.mock('services', () => ({
  ToastService: {
    onDanger: jest.fn(),
  },
}));

jest.mock('i18next', () => ({
  t: jest.fn(),
}));

describe('Helpers', () => {
  it('isDev should return a boolean value', () => {
    expect(typeof isDev).toBe('boolean');
  });

  it('noop should be a function', () => {
    expect(typeof noop).toBe('function');
  });

  it('withDelay should return a promise', () => {
    expect(withDelay(100)).toBeInstanceOf(Promise);
  });

  it('capitalize should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('uuid should generate a unique identifier', () => {
    expect(typeof uuid()).toBe('string');
    expect(uuid()).not.toBe(uuid());
  });

  it('openLink should call InAppBrowser.open if available', async () => {
    (InAppBrowser.isAvailable as jest.Mock).mockResolvedValue(true);

    await openLink('https://example.com');

    expect(InAppBrowser.open).toHaveBeenCalledWith('https://example.com');
  });

  it('openLink should call Linking.openURL if InAppBrowser is not available', async () => {
    (InAppBrowser.isAvailable as jest.Mock).mockResolvedValue(false);

    await openLink('https://example.com');

    expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
  });

  it('openLink should call ToastService.onDanger if an error occurs', async () => {
    (InAppBrowser.isAvailable as jest.Mock).mockRejectedValueOnce(new Error());

    await openLink('https://example.com');

    expect(ToastService.onDanger).toHaveBeenCalled();
  });

  it('getInitials should return initials from full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
    expect(getInitials('Alice Smith')).toBe('AS');
  });

  it('getInitials should return one symbol if you add string lower than 1', () => {
    expect(getInitials('J')).toBe('J');
  });

  it('truncate should truncate string if it exceeds specified length', () => {
    expect(truncate('Lorem ipsum dolor sit amet', 10)).toBe('Lorem ipsu...');
    expect(truncate('Short string', 20)).toBe('Short string');
  });

  it("isValidJson should false if we don't put value", async () => {
    expect(await isValidJson()).toBe(false);
  });

  it('isValidJson should return true for valid JSON', async () => {
    expect(await isValidJson('{"key": "value"}')).toBe(true);
  });

  it('isValidJson should return false for invalid JSON', async () => {
    expect(await isValidJson('invalid JSON')).toBe(false);
  });
});
