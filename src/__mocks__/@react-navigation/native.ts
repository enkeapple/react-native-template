jest.mock('@react-navigation/native', () => {
  const { useEffect } = require('react');

  const actualModule = jest.requireActual('@react-navigation/native');

  return {
    ...actualModule,
    useNavigation: jest.fn().mockReturnValue({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatch: jest.fn(),
      setOptions: jest.fn(),
    }),
    useRoute: jest.fn().mockReturnValue({
      params: {
        subPeriodId: 'subPeriodId',
        tripId: 'tripId',
        type: 'startDepot',
        uuid: 'uuid',
        fromTime: 1652690316,
      },
    }),
    useFocusEffect: useEffect,
    useIsFocused: jest.fn().mockReturnValue(true),
    createNavigationContainerRef: jest.fn(),
    createNavigatorFactory: jest.fn(),
  };
});
