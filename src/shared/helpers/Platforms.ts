import { Platform } from 'react-native';
import {
  hasNotch as hasTopOffset,
  getVersion,
  getBundleId,
  getBuildNumber,
  getApplicationName,
} from 'react-native-device-info';
import { AnyType } from './Helpers';

export const hasNotch = hasTopOffset();

export const bundleId = getBundleId();

export const appVersion = getVersion();

export const appBuildNumber = getBuildNumber();

export const appName = getApplicationName();

export const touchableConfig = {
  delayPressIn: 0,
  delayPressOut: 0,
  activeOpacity: 0.8,
};

export const isIOS = Platform.OS === 'ios';

export const setDefaultProps = (
  Component: AnyType,
  additionalProps: AnyType = {},
) => {
  Component.defaultProps = {
    ...(Component.defaultProps || {}),
    ...additionalProps,
  };
};
