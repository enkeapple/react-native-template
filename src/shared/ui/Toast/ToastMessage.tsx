import React from 'react';
import Message, { BaseToastProps } from 'react-native-toast-message';
import { ToastBase } from './ToastBase';

export type ToastTypes = 'success' | 'danger' | 'warning' | 'info';

const config = {
  success: ({ text1, text2 }: BaseToastProps) => (
    <ToastBase title={text1} description={text2} type="success" />
  ),
  info: ({ text1, text2 }: BaseToastProps) => (
    <ToastBase title={text1} description={text2} type="info" />
  ),
  danger: ({ text1, text2 }: BaseToastProps) => (
    <ToastBase title={text1} description={text2} type="danger" />
  ),
  warning: ({ text1, text2 }: BaseToastProps) => (
    <ToastBase title={text1} description={text2} type="warning" />
  ),
};

export const ToastMessage: React.FC = () => <Message config={config} />;
