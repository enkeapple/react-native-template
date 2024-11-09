import { lightTheme, darkTheme } from 'themes';
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types';

interface Breakpoints {}

export type Theme = UnistylesTheme;

export interface Themes {
  light: typeof lightTheme;
  dark: typeof darkTheme;
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends Breakpoints {}
  export interface UnistylesThemes extends Themes {}
}
