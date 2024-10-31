import { UnistylesRegistry } from 'react-native-unistyles';
import { darkTheme, lightTheme } from 'themes';

const init = () => {
  UnistylesRegistry.addThemes({ light: lightTheme, dark: darkTheme });
};

export const ThemeService = {
  init,
};
