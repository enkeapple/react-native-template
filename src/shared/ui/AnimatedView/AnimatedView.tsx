import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import Animated, {
  AnimatedProps,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';

interface AnimatedViewProps {
  style?: StyleProp<ViewStyle>;
  children: ViewProps['children'];
  entering?: AnimatedProps<ViewProps>['entering'];
  exiting?: AnimatedProps<ViewProps>['exiting'];
  enteringDuration?: number;
  exitingDuration?: number;
}

export const AnimatedView: React.FC<AnimatedViewProps> = ({
  children,
  enteringDuration = 250,
  exitingDuration = 100,
  entering = FadeIn.duration(enteringDuration),
  exiting = FadeOut.duration(exitingDuration),
  style,
}) => (
  <Animated.View
    style={style}
    entering={entering || FadeIn.duration(enteringDuration)}
    exiting={exiting || FadeOut.duration(exitingDuration)}>
    {children}
  </Animated.View>
);
