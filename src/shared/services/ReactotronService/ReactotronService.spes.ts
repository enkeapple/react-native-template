import Reactotron from 'reactotron-react-native';
import { ReactotronService } from './ReactotronService';

describe('ReactotronService', () => {
  it('should configure and connect Reactotron correctly', () => {
    ReactotronService.init();

    expect(Reactotron.configure).toHaveBeenCalledWith({ name: 'appName' });
    expect(Reactotron.useReactNative).toHaveBeenCalledWith({
      networking: {
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      },
    });
    expect(Reactotron.use).toHaveBeenCalled();
    expect(Reactotron.connect).toHaveBeenCalled();
  });

  it('should create and return the reactotron enhancer', () => {
    expect(ReactotronService.reactotronEnhancer).toBe('mockEnhancer');
  });
});
