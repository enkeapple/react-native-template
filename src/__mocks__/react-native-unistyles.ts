jest.mock('react-native-unistyles', () => ({
  useStyles: jest.fn(() => ({})),
  createStyleSheet: jest.fn(styles => styles),
}));
