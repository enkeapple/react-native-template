import React from 'react';
import { ColorValue } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

const IcoMoonConfig = require('assets/resources/selection.json');

const IconSet = createIconSetFromIcoMoon(
  IcoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

interface IconProps {
  size?: number;
  name: string;
  color?: ColorValue | number;
}

export const Icon: React.FC<IconProps> = props => <IconSet {...props} />;
