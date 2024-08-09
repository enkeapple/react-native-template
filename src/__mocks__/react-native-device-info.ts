jest.mock('react-native-device-info', () => {
  const actualModule = jest.requireActual(
    'react-native-device-info/jest/react-native-device-info-mock',
  );

  return {
    ...actualModule,
    hasNotch: jest.fn().mockReturnValue(true),
    getBundleId: jest.fn().mockReturnValue('com.crewing'),
    getVersion: jest.fn().mockReturnValue('1.0.0'),
    getBuildNumber: jest.fn().mockReturnValue(1),
  };
});
