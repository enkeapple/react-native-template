jest.mock('react-native-unistyles', () => {
  const { lightTheme } = require('themes');

  return {
    useStyles: jest.fn().mockReturnValue({
      theme: lightTheme,
      styles: jest.fn,
    }),
    createStyleSheet: jest.fn().mockReturnValue({}),
  };
});
