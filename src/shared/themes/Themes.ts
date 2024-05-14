import type { Theme } from 'types/styled-components';
import { DarkColors, LightColors } from './Colors';
import { FontFamily } from './Typography';

export const LightTheme: Theme = {
  colors: LightColors,
  fonts: FontFamily,
};

export const DarkTheme: Theme = {
  colors: DarkColors,
  fonts: FontFamily,
};
