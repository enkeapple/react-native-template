import {
  getBuildNumber,
  getBundleId,
  getVersion,
  hasNotch as hasTopOffset,
} from 'react-native-device-info';
import {
  hasNotch,
  bundleId,
  appVersion,
  appBuildNumber,
  touchableConfig,
  setDefaultProps,
} from './Platforms';
import { AnyType } from './Helpers';

jest.mock('react-native', () => ({
  Platform: {
    OS: jest.fn(), // Мокируем платформу как iOS по умолчанию
  },
}));

describe('Platforms', () => {
  it('hasNotch should return false if device has notch', () => {
    expect(hasNotch).toBeTruthy();
    expect(hasTopOffset).toHaveBeenCalled();
  });

  it('bundleId should return correct bundle ID', () => {
    expect(bundleId).toBe('com.crewing');
    expect(getBundleId).toHaveBeenCalled();
  });

  it('appVersion should return correct app version', () => {
    expect(appVersion).toBe('1.0.0');
    expect(getVersion).toHaveBeenCalled();
  });

  it('appBuildNumber should return correct build number', () => {
    expect(appBuildNumber).toBe(1);
    expect(getBuildNumber).toHaveBeenCalled();
  });

  it('touchableConfig should have correct properties', () => {
    const expectedConfig = {
      delayPressIn: 0,
      delayPressOut: 0,
      activeOpacity: 0.8,
    };
    expect(touchableConfig).toEqual(expectedConfig);
  });

  it('should merge additional props with existing defaultProps', () => {
    const Component = {
      defaultProps: {
        prop1: 'value1',
        prop2: 'value2',
      },
    };

    setDefaultProps(Component, { prop2: 'newValue', prop3: 'value3' });

    expect(Component.defaultProps).toEqual({
      prop1: 'value1',
      prop2: 'newValue',
      prop3: 'value3',
    });
  });

  it('should create defaultProps if not exists', () => {
    const Component: AnyType = {};

    setDefaultProps(Component, { prop1: 'value1', prop2: 'value2' });

    expect(Component.defaultProps).toEqual({
      prop1: 'value1',
      prop2: 'value2',
    });
  });

  it('should not modify defaultProps if additionalProps are empty', () => {
    const Component = {
      defaultProps: {
        prop1: 'value1',
        prop2: 'value2',
      },
    };

    setDefaultProps(Component);

    expect(Component.defaultProps).toEqual({
      prop1: 'value1',
      prop2: 'value2',
    });
  });
});
