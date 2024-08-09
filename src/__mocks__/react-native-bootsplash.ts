jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});
