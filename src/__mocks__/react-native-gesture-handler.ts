jest.mock('react-native-gesture-handler', () =>
  jest.requireActual('react-native-gesture-handler/jestSetup'),
);
