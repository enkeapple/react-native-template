module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src/'],
        alias: [
          { __mocks__: './src/__mocks__' },
          { features: './src/features' },
          { screens: './src/screens' },
          { types: './src/shared/types' },
          { api: './src/shared/api' },
          { constants: './src/shared/constants' },
          { helpers: './src/shared/helpers' },
          { hooks: './src/shared/hooks' },
          { navigation: './src/shared/navigation' },
          { services: './src/shared/services' },
          { stores: './src/shared/stores' },
          { themes: './src/shared/themes' },
          { translations: './src/shared/translations' },
          { ui: './src/shared/ui' },
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
