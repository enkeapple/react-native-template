/* eslint-disable no-undef */
import { Linking } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { ToastService } from 'services';
import { nanoid } from '@reduxjs/toolkit';
import { t } from 'i18next';

export type AnyType = any;

export const isDev = __DEV__;

export const noop = () => {};

export const withDelay = (ms: number) =>
  new Promise<void>(resolve => {
    setTimeout(resolve, ms);
  });

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const uuid = () => nanoid();

export const openLink = async (link = '') => {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(link);
    } else {
      await Linking.openURL(link);
    }
  } catch {
    ToastService.onDanger({ title: t('errors.server-unable') });
  }
};

export const getInitials = (fullName: string) => {
  const names = fullName.split(' ');

  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
};

export const truncate = (value: string, length: number, end = '...') =>
  value.length < length
    ? value.trim()
    : value.substring(0, length).trim() + end;

export const isValidJson = async (value = '') => {
  try {
    await JSON.parse(value);

    return true;
  } catch (error) {
    return false;
  }
};
