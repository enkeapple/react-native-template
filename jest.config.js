module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'react-dom': 'react-native',
    '\\.svg': '<rootDir>/src/__mocks__/react-native-svg.js',
  },
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).{js,ts,tsx,mjs}',
    '<rootDir>/src/**/__tests__/**/*.{js,ts,tsx,mjs}',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 10,
      lines: 10,
      branches: 10,
      functions: 10,
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: [
    '<rootDir>/src/__mocks__/@react-navigation/elements.ts',
    '<rootDir>/src/__mocks__/@react-navigation/drawer.ts',
    '<rootDir>/src/__mocks__/@react-navigation/native.ts',
    '<rootDir>/src/__mocks__/@react-navigation/stack.ts',
    '<rootDir>/src/__mocks__/react-native-gesture-handler.ts',
    '<rootDir>/src/__mocks__/react-native-device-info.ts',
    '<rootDir>/src/__mocks__/react-native-keyboard-controller.ts',
    '<rootDir>/src/__mocks__/react-native-bootsplash.ts',
    // '<rootDir>/src/__mocks__/react-native-safe-area-context.tsx',
    '<rootDir>/src/__mocks__/react-native-toast-message.ts',
    '<rootDir>/src/__mocks__/react-native-unistyles.ts',
    '<rootDir>/src/__mocks__/reactotron-react-native.ts',
    '<rootDir>/src/__mocks__/reactotron-react-native-mmkv.ts',
    '<rootDir>/src/__mocks__/reactotron-redux.ts',
    '<rootDir>/src/__mocks__/react-native-mmkv.ts',
    '<rootDir>/src/__mocks__/react-native.ts',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native|react-native.*|@react-native.*|@?react-navigation.*)/)',
  ],
};
