import * as ReactNative from 'react-native';

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        ...ReactNative.Platform,
        OS: 'android',
        Version: 123,
      },
      Dimensions: {
        get: jest.fn().mockReturnValue({ width: 750, height: 750 }),
      },
      AppState: {
        ...ReactNative.AppState,
        currentState: 'active',
      },
      NativeModules: {
        ...ReactNative.NativeModules,
        KCKeepAwake: {
          activate: jest.fn(),
          deactivate: jest.fn(),
        },
        RNFBAdMobModule: {},
        RNFBAdMobInterstitialModule: {},
        RNFBAdMobRewardedModule: {},
        RNFBAdsConsentModule: {},
        RNFBAppModule: {
          NATIVE_FIREBASE_APPS: [
            {
              appConfig: {
                name: '[DEFAULT]',
              },
              options: {},
            },

            {
              appConfig: {
                name: 'secondaryFromNative',
              },
              options: {},
            },
          ],
          addListener: jest.fn(),
          eventsAddListener: jest.fn(),
          eventsNotifyReady: jest.fn(),
        },
        NotifeeApiModule: {
          addListener: jest.fn(),
          eventsAddListener: jest.fn(),
          eventsNotifyReady: jest.fn(),
        },
        RNFBAuthModule: {
          APP_LANGUAGE: {
            '[DEFAULT]': 'en-US',
          },
          APP_USER: {
            '[DEFAULT]': 'jestUser',
          },
          addAuthStateListener: jest.fn(),
          addIdTokenListener: jest.fn(),
          useEmulator: jest.fn(),
        },
        RNFBCrashlyticsModule: {},
        RNFBPerfModule: {},
        RNVectorIconsManager: jest.fn(),
      },
      Keyboard: {
        dismiss: jest.fn(),
      },
    },
    ReactNative,
  );
});
