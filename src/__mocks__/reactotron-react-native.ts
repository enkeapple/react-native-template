const reactotron = {
  configure: () => reactotron,
  useReactNative: () => reactotron,
  use: () => reactotron,
  connect: () => reactotron,
  clear: () => reactotron,
  createEnhancer: () => reactotron,
};

jest.mock('reactotron-react-native', () => reactotron);
