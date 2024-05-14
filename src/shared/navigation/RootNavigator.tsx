import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RouteService } from 'services';
import { useTheme } from 'styled-components/native';
import { ToastMessage } from 'ui';
import RNBootSplash from 'react-native-bootsplash';
import { PortalProvider } from '@gorhom/portal';
import { Routes } from './models';
import { Stack, getNavigationTheme } from './helpers';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

export const RootNavigator: React.FC = () => {
  const theme = useTheme();

  const onReady = () => RNBootSplash.hide({ fade: true });

  return (
    <>
      <PortalProvider>
        <NavigationContainer
          theme={getNavigationTheme(theme)}
          onReady={onReady}
          ref={RouteService.navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name={Routes.MAIN_NAVIGATOR}
              component={MainNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name={Routes.AUTH_NAVIGATOR}
              component={AuthNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PortalProvider>

      <ToastMessage />
    </>
  );
};
