import { createStackNavigator } from '@react-navigation/stack';
import {
  DefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import { Theme } from 'types';
import { RootStackParamList } from '../models';

export const Stack = createStackNavigator<RootStackParamList>();

export const getNavigationTheme = (theme: Theme): NavigationTheme => ({
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.bg_primary,
  },
});
