import React, { useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ViewStyleProps } from 'themes';
import { transformViewStyle } from './helpers';

interface PressableProps
  extends ViewStyleProps,
    Pick<
      TouchableOpacityProps,
      'style' | 'children' | 'onPress' | 'activeOpacity' | 'disabled'
    > {}

export const Pressable: React.FC<PressableProps> = ({
  style,
  children,
  onPress,
  activeOpacity,
  disabled,
  ...rest
}) => {
  const { styles } = useStyles(stylesheet);

  const memoizedStyles = useMemo(() => styles.layout(rest), [rest]);

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[memoizedStyles, style]}
      disabled={disabled}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  layout: (props: ViewStyleProps) => transformViewStyle(props, theme),
}));
