jest.mock('@react-navigation/drawer', () => {
  const actualModule = jest.requireActual('@react-navigation/drawer');

  return {
    ...actualModule,
    createNavigatorFactory: jest.fn(),
    useDrawerStatus: jest.fn().mockReturnValue('open'),
  };
});
