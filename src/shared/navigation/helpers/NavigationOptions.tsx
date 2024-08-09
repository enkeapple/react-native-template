import { createStackNavigator } from '@react-navigation/stack';
import {
  DefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import { RootStackParamList } from '../models';

export const Stack = createStackNavigator<RootStackParamList>();

export const getNavigationTheme = (): NavigationTheme => ({
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
});
