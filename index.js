import {
  AppRegistry,
  LogBox,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { touchableConfig, setDefaultProps, parseEnv } from 'helpers';
import { LocalizationService } from 'services';
import { Application } from './App';
import { name as appName } from './app.json';

setDefaultProps(Text, { allowFontScaling: false });
setDefaultProps(TextInput, { allowFontScaling: false });
setDefaultProps(TouchableOpacity, touchableConfig);

LogBox.ignoreAllLogs(true);

LogBox.ignoreLogs([
  'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
  'EventEmitter.removeListener',
  'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
  'You seem to update props of the "TRenderEngineProvider" component in short periods of time, causing costly tree rerenders',
  'You should always pass contentWidth prop to properly handle screen rotations and have a seamless support for images scaling.',
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'No info about this app.',
  'Non-serializable values were found in the navigation state.',
  "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`",
]);

parseEnv();

LocalizationService.init();

AppRegistry.registerComponent(appName, () => Application);
