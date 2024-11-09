import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { createIconSetFromIcoMoon, IconName } from 'react-native-vector-icons';
import { Theme } from 'types';

const IcoMoonConfig = require('assets/resources/selection.json');

const IcomoonIcon = createIconSetFromIcoMoon(
  IcoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

interface IconProps {
  size?: number;
  name: IconName;
  color?: keyof Theme['colors'];
}

const DEFAULT_ICON_SIZE = 24;

export const Icon: React.FC<IconProps> = ({
  name,
  size = DEFAULT_ICON_SIZE,
  color = 'bg_primary',
}) => {
  const { theme } = useStyles();

  return <IcomoonIcon name={name} size={size} color={theme.colors[color]} />;
};
