import { Routes, Stack } from 'navigation';
import React from 'react';
import { SignIn } from 'screens';

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.SIGN_IN}
      component={SignIn}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
