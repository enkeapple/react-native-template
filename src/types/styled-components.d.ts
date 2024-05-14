import 'styled-components';
import 'styled-components/native';
import { LightColors, FontFamily } from 'themes';

export interface Theme {
  colors: typeof LightColors;
  fonts: typeof FontFamily;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
