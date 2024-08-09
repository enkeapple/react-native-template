import { AnyType } from 'helpers';

jest.mock('@react-navigation/stack', () => {
  return {
    useHeaderHeight: jest.fn().mockReturnValue(0),
    createStackNavigator: jest.fn(() => ({
      Navigator: ({ children }: AnyType) => children,
      Screen: ({ children }: AnyType) => children,
    })),
  };
});
