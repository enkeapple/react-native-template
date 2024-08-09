import { appName } from 'helpers';
import Reactotron from 'reactotron-react-native';
import type { ReactotronReactNative } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import { storage } from 'services';

const init = () =>
  Reactotron.configure({
    name: appName,
  })
    .useReactNative({
      networking: {
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      },
    })
    .use(mmkvPlugin<ReactotronReactNative>({ storage }))
    .use(reactotronRedux())
    .connect();

export const ReactotronService = {
  init,
  reactotronEnhancer: init().createEnhancer!(),
};
