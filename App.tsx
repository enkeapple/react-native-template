import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'stores';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from 'navigation';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from 'themes';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

export const Application: React.FC = () => (
  <GestureHandlerRootView style={styles.layout}>
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={LightTheme}>
            <RootNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);
