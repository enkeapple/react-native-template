import { Routes, Stack } from 'navigation';
import React from 'react';
import { Dashboard } from 'screens';

export const MainNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.DASHBOARD}
      component={Dashboard}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
